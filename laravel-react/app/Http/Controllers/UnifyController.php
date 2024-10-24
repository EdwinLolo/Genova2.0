<?php

namespace App\Http\Controllers;

use App\Models\Unify;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use GuzzleHttp\Client;

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

        foreach ($data as $d) {
            $totalTiket += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyList', ['title' => 'List Tiket External', 'keterangan' => 'External', 'data' => $data, 'totalTiket' => $totalTiket]);
    }

    public function internal()
    {
        $data = Unify::where('isInternal', 'true')->get();
        $totalTiket = 0;

        foreach ($data as $d) {
            $totalTiket += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyList', ['title' => 'List Tiket Internal', 'keterangan' => 'Internal', 'data' => $data, 'totalTiket' => $totalTiket]);
    }

    public function all()
    {
        $data = Unify::all();
        $totalTiket = 0;

        foreach ($data as $d) {
            $totalTiket += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyList', ['title' => 'List semua tiket', 'keterangan' => 'Semua', 'data' => $data, 'totalTiket' => $totalTiket]);
    }

    public function showUnchecked()
    {
        $data = Unify::where('status', 'unchecked')->get();
        $totalUnchecked = 0;

        foreach ($data as $d) {
            $totalUnchecked += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyList', ['title' => 'List yang belom dicek', 'keterangan' => 'belom dicek', 'data' => $data, 'totalTiket' => $totalUnchecked]);
    }
    public function showChecked()
    {
        $data = Unify::where('status', 'checked')->get();
        $totalUnchecked = 0;

        foreach ($data as $d) {
            $totalUnchecked += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyList', ['title' => 'List yang sudah dicek', 'keterangan' => 'sudah dicek', 'data' => $data, 'totalTiket' => $totalUnchecked]);
    }

    public function showBelomDiambil()
    {
        $data = Unify::where('udahDiambil', 'unchecked')->get();
        $totalUnchecked = 0;

        foreach ($data as $d) {
            $totalUnchecked += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyList', ['title' => 'List yang belom ambil', 'keterangan' => 'belom diambil', 'data' => $data, 'totalTiket' => $totalUnchecked]);
    }

    public function showSudahDiambil()
    {
        $data = Unify::where('udahDiambil', 'checked')->get();
        $totalUnchecked = 0;

        foreach ($data as $d) {
            $totalUnchecked += $d->jumlahTiket;
        }
        return Inertia::render('Admin/UnifyList', ['title' => 'List yang sudah ambil', 'keterangan' => 'sudah diambil', 'data' => $data, 'totalTiket' => $totalUnchecked]);
    }

    public function details($id)
    {
        $data = Unify::where('id', $id)->first();
        if (!$data) {
            abort(404, 'Data not found');
        }

        return Inertia::render('Admin/UnifyDetails', ['data' => $data]);
    }

    // public function register(Request $request)
    // {

    //     $hargaTiket = 1000;
    //     $request->request->add(['total_price' => $request->jumlahTiket * $hargaTiket + (0.02 * $request->jumlahTiket * $hargaTiket), 'status' => 'unpaid', 'isInternal' => 'true']);
    //     // Determine if the form type is "external" or "internal"
    //     $formType = $request->input('formType');
    //     // Set validation rules based on form type
    //     $rules = [
    //         'nama' => 'required|string|max:255',
    //         'noHp' => 'required|string|max:13',
    //         'email' => 'required|email|max:255',
    //         'jumlahTiket' => 'required|integer|min:1',
    //         'status' => 'string',
    //         'total_price' => 'integer',
    //         'isInternal' => 'string',
    //     ];

    //     if ($formType === 'internal') {
    //         $rules['jurusan'] = 'required|string|max:255';
    //         $rules['angkatan'] = 'required|string|max:255';
    //     }

    //     // Validate the request
    //     $validatedData = $request->validate($rules);

    //     // Store data in the appropriate model
    //     $order = null;
    //     if ($formType === 'internal') {
    //         $validatedData['isInternal'] = 'true';
    //     } else if ($formType === 'external') {
    //         $validatedData['isInternal'] = 'false';
    //     } else {
    //         return response()->json(['error' => 'Invalid form type'], 400);
    //     }

    //     $order = Unify::create($validatedData);
    //     \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');

    //     // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
    //     \Midtrans\Config::$isProduction = true;
    //     // Set sanitization on (default)
    //     \Midtrans\Config::$isSanitized = true;
    //     // Set 3DS transaction for credit card to true
    //     \Midtrans\Config::$is3ds = true;
    //     // dd($hargaTiket * $request->jumlahTiket + (0.02 * $request->jumlahTiket * $hargaTiket));
    //     $fee = 0.02 * $request->jumlahTiket * $hargaTiket;
    //     $params = array(
    //         'transaction_details' => array(
    //             'order_id' => $order->id,
    //             'gross_amount' => $request->total_price,
    //         ),
    //         'customer_details' => array(
    //             "first_name" =>  $order->nama,
    //             'email' => $order->email,
    //             'phone' => $order->noHp,
    //         ), 'item_details' => array(
    //             array(
    //                 'name' => 'Tiket Unify',
    //                 'id' => 'TU1',
    //                 'price' => $hargaTiket,
    //                 'quantity' => $request->jumlahTiket,
    //             ),
    //             array(
    //                 'name' => 'Fee',
    //                 'id' => 'F01',
    //                 'price' => $fee,
    //                 'quantity' => 1,
    //             ),

    //         ),
    //     );

    //     try {
    //         // Get Snap token
    //         $snapToken = \Midtrans\Snap::getSnapToken($params);
    //         Session::put('orderId', $order->id);
    //         // Return response with Snap token
    //         return response()->json(['snap_token' => $snapToken], 200);
    //     } catch (\Exception $e) {
    //         // Handle error
    //         return response()->json(['error' => 'Failed to create Snap token'], 500);
    //     }
    // }

    public function register(Request $request)
    {
        // Validate the reCAPTCHA token
        $recaptchaResponse = $request->input('recaptchaValue');

        $client = new Client();
        $response = $client->post('https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret' => env('RECAPTCHA_SECRET_KEY'),
                'response' => $recaptchaResponse,
            ],
        ]);

        $responseBody = json_decode((string)$response->getBody());

        if (!$responseBody->success) {
            return response()->json(['error' => 'reCAPTCHA verification failed'], 422);
        }

        $hargaTiket = 75000;

        $request->request->add([
            'total_price' => $request->jumlahTiket * $hargaTiket,
            'status' => 'unchecked',
            'udahDiambil' => 'unchecked',
            'isInternal' => 'true'
        ]);

        // Determine if the form type is "external" or "internal"
        $formType = $request->input('formType');

        // Set validation rules based on form type
        $rules = [
            'nama' => 'required|string|max:255',
            'noHp' => 'required|string|max:13',
            'email' => 'required|email|max:255',
            'jumlahTiket' => 'required|integer|min:1',
            'status' => 'string',
            'total_price' => 'integer',
            'isInternal' => 'string',
            'kodeRef' => 'string|nullable|in:RMK24,TCK24,TCA24,NPK24,NPA24,PSK24,PSA24,LZK24,LZA24,CTK24,CTA24,LCK24,LCA24,VNK24,VNA24,AEK24,AEA24,GVK24,GVA24,MLK24,MLA24,TRK24,TRA24,VZK24,VZA24,FEK24,FEA24,-,ALB01,ALB02,ALB03,ALB04,ALB05,ALB06,ALB07,ALB08,ALB09,ALB10,ALB11,ALB12,ALB13,ALB14,ALB15,ALB16,ALB17,ALB18,ALB19,ALB24,ALB25',
            'buktiTf' => 'required|file|mimes:png,jpeg,jpg',
        ];

        if ($formType === 'internal') {
            $rules['jurusan'] = 'required|string|max:255';
            $rules['angkatan'] = 'required|string|max:255';
        }


        // Validate the request
        $validatedData = $request->validate($rules);

        // Kode ref is null set to -
        if ($validatedData['kodeRef'] === null) $validatedData['kodeRef'] = '-';

        // Handle file upload
        if ($request->hasFile('buktiTf')) {
            $file = $request->file('buktiTf');
            $path = $file->store('unifyBuktiTf', 'public'); // Store file in 'storage/app/public/unifyBuktiTf'
            $validatedData['buktiTf'] = $path;
        }

        // Set isInternal flag based on form type
        if ($formType === 'internal') {
            $validatedData['isInternal'] = 'true';
        } else if ($formType === 'external') {
            $validatedData['isInternal'] = 'false';
        } else {
            return response()->json(['error' => 'Invalid form type'], 400);
        }

        // Store data in the appropriate model
        $order = Unify::create($validatedData);

        if ($order) {
            Session::put('orderId', $order->id);
            return response()->json(['success' => true, 'order' => $order], 201);
        } else {
            return response()->json(['error' => 'Failed to create order'], 500);
        }
    }

    public function checked($id)
    {
        $order = Unify::find($id);

        if ($order) {
            $order->update(['status' => 'checked']);
            return redirect()->back()->with('success', 'Order status updated to checked.');
        } else {
            return redirect()->back()->with('error', 'Order not found.');
        }
    }

    public function unchecked($id)
    {
        $order = Unify::find($id);

        if ($order) {
            $order->update(['status' => 'unchecked']);
            return redirect()->back()->with('success', 'Order status updated to unchecked.');
        } else {
            return redirect()->back()->with('error', 'Order not found.');
        }
    }

    public function diambil($id)
    {
        $order = Unify::find($id);

        if ($order) {
            $order->update(['udahDiambil' => 'checked']);
            return redirect()->back()->with('success', 'Order status updated to taken.');
        } else {
            return redirect()->back()->with('error', 'Order not found.');
        }
    }

    public function belomDiambil($id)
    {
        $order = Unify::find($id);

        if ($order) {
            $order->update(['udahDiambil' => 'unchecked']);
            return redirect()->back()->with('success', 'Order status updated to not taken.');
        } else {
            return redirect()->back()->with('error', 'Order not found.');
        }
    }



    public function invoice()
    {
        // Retrieve order ID from session
        $orderId = session('orderId');

        // Check if orderId exists in session
        if (!$orderId) {
            return redirect()->back()->with('error', 'Order ID not found in session.');
        }

        // Fetch the order details from the database
        $order = Unify::find($orderId);

        // Check if order exists
        if (!$order) {
            return redirect()->back()->with('error', 'Order not found.');
        }

        // Render the Invoice view with the order data
        return Inertia::render('Invoice', [
            'data' => $order,
        ]);
    }


    // public function callback(Request $request)
    // {
    //     $serverKey = env('MIDTRANS_SERVER_KEY');
    //     $hashed = hash("sha512", $request->order_id . $request->status_code . $request->gross_amount . $serverKey);
    //     if ($hashed == $request->signature_key) {
    //         if ($request->transaction_status == "settlement" || ($request->transaction_status == "capture" && $request->payment_type == 'credit_card' && $request->fraud_status == "accept")) {
    //             $order = Unify::find($request->order_id);
    //             $order->update(['status' => 'paid']);
    //         }
    //     }
    // }

    // public function invoice($id)
    // {
    //     if (!Session::has('orderId')) {
    //         Session::put('orderId', $id);
    //     }

    //     // Redirect to the getInvoice route
    //     return redirect()->route('unify.getInvoice');
    // }

    // public function getInvoice(Request $request)
    // {
    //     // Start session manually
    //     $request->session()->start();

    //     // Retrieve order ID from session
    //     $orderId = $request->session()->get('orderId');
    //     if ($orderId) {
    //         $order = Unify::find($orderId);
    //     }
    //     // Fetch the order details from the database
    //     $order = Unify::find($orderId);

    //     // Render the Invoice view with the order data
    //     return Inertia::render('Invoice', ['data' => $order]);
    // }
}
