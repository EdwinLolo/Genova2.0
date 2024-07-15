<?php

namespace App\Http\Controllers;

use App\Models\Unify;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class UnifyController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/UnifyDashboard');
    }

    public function external()
    {
        $data = Unify::where('isInternal', 'false')->get();
        $totalTiket = 0;
        $paidData = Unify::where('isInternal', 'false')->where('status', 'paid')->get();

        foreach ($paidData as $d) {
            $totalTiket += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyExternal', ['data' => $data, 'totalTiket' => $totalTiket]);
    }

    public function internal()
    {
        $data = Unify::where('isInternal', 'true')->get();
        $totalTiket = 0;
        $paidData = Unify::where('isInternal', 'true')->where('status', 'paid')->get();

        foreach ($paidData as $d) {
            $totalTiket += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyInternal', ['data' => $data, 'totalTiket' => $totalTiket]);
    }

    public function all()
    {
        $data = Unify::all();
        $totalTiket = 0;
        $paidData = Unify::where('status', 'paid')->get();

        foreach ($paidData as $d) {
            $totalTiket += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyAll', ['data' => $data, 'totalTiket' => $totalTiket]);
    }

    public function details($id)
    {
        $data = Unify::where('id', $id)->first();
        if (!$data) {
            abort(404, 'Data not found');
        }

        if ($data->isInternal === 'true') {
            return Inertia::render('Admin/UnifyInternalDetails', ['data' => $data]);
        } else {
            return Inertia::render('Admin/UnifyExternalDetails', ['data' => $data]);
        }
    }

    public function register(Request $request)
    {

        $hargaTiket = 1000;
        $request->request->add(['total_price' => $request->jumlahTiket * $hargaTiket + (0.02 * $request->jumlahTiket * $hargaTiket), 'status' => 'unpaid', 'isInternal' => 'true']);
        // Determine if the form type is "external" or "internal"
        $formType = $request->input('formType');
        // Set validation rules based on form type
        $rules = [
            'nama' => 'required|string|max:255',
            'noHp' => 'required|string|max:12',
            'email' => 'required|email|max:255',
            'jumlahTiket' => 'required|integer|min:1',
            'status' => 'string',
            'total_price' => 'integer',
            'isInternal' => 'string',
        ];

        if ($formType === 'internal') {
            $rules['jurusan'] = 'required|string|max:255';
            $rules['angkatan'] = 'required|string|max:255';
        }

        // Validate the request
        $validatedData = $request->validate($rules);

        // Store data in the appropriate model
        $order = null;
        if ($formType === 'internal') {
            $validatedData['isInternal'] = 'true';
        } else if ($formType === 'external') {
            $validatedData['isInternal'] = 'false';
        } else {
            return response()->json(['error' => 'Invalid form type'], 400);
        }

        $order = Unify::create($validatedData);
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');

        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = true;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;
        // dd($hargaTiket * $request->jumlahTiket + (0.02 * $request->jumlahTiket * $hargaTiket));
        $fee = 0.02 * $request->jumlahTiket * $hargaTiket;
        $params = array(
            'transaction_details' => array(
                'order_id' => $order->id,
                'gross_amount' => $request->total_price,
            ),
            'customer_details' => array(
                "first_name" =>  $order->nama,
                'email' => $order->email,
                'phone' => $order->noHp,
            ), 'item_details' => array(
                array(
                    'name' => 'Tiket Unify',
                    'id' => 'TU1',
                    'price' => $hargaTiket,
                    'quantity' => $request->jumlahTiket,
                ),
                array(
                    'name' => 'Fee',
                    'id' => 'F01',
                    'price' => $fee,
                    'quantity' => 1,
                ),

            ),
        );

        try {
            // Get Snap token
            $snapToken = \Midtrans\Snap::getSnapToken($params);
            Session::put('orderId', $order->id);
            // Return response with Snap token
            return response()->json(['snap_token' => $snapToken], 200);
        } catch (\Exception $e) {
            // Handle error
            return response()->json(['error' => 'Failed to create Snap token'], 500);
        }
    }

    public function callback(Request $request)
    {
        $serverKey = env('MIDTRANS_SERVER_KEY');
        $hashed = hash("sha512", $request->order_id . $request->status_code . $request->gross_amount . $serverKey);
        if ($hashed == $request->signature_key) {
            if ($request->transaction_status == "settlement" || ($request->transaction_status == "capture" && $request->payment_type == 'credit_card' && $request->fraud_status == "accept")) {
                $order = Unify::find($request->order_id);
                $order->update(['status' => 'paid']);
            }
        }
    }

    public function invoice($id)
    {
        if (!Session::has('orderId')) {
            Session::put('orderId', $id);
        }

        // Redirect to the getInvoice route
        return redirect()->route('unify.getInvoice');
    }

    public function getInvoice(Request $request)
    {
        // Start session manually
        $request->session()->start();

        // Retrieve order ID from session
        $orderId = $request->session()->get('orderId');
        if ($orderId) {
            $order = Unify::find($orderId);
        }
        // Fetch the order details from the database
        $order = Unify::find($orderId);

        // Render the Invoice view with the order data
        return Inertia::render('Invoice', ['data' => $order]);
    }
}
