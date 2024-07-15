import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";

function Form_ticketunify() {
    const [selectedForm, setSelectedForm] = useState(null);
    const [data, setData] = useState({
        nama: "",
        jurusan: "",
        angkatan: "",
        noHp: "",
        email: "",
        jumlahTiket: 0,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [snapToken, setSnapToken] = useState(null);

    // + - tiket
    const handleDecrement = (field) => {
        setData((prevData) => ({
            ...prevData,
            [field]: Math.max(prevData[field] - 1, 0), // Prevent negative values
        }));
    };

    const handleIncrement = (field) => {
        setData((prevData) => ({
            ...prevData,
            [field]: prevData[field] + 1,
        }));
    };

    const handleButton = (x) => {
        setSelectedForm(x);
        if (x === "internal") {
            setData({
                nama: "",
                jurusan: "",
                angkatan: "",
                noHp: "",
                email: "",
                jumlahTiket: 0,
            });
        } else if (x === "external") {
            setData({
                nama: "",
                noHp: "",
                email: "",
                jumlahTiket: 0,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        try {
            const formData = new FormData();
            formData.append("formType", selectedForm);
            for (const key in data) {
                formData.append(key, data[key]);
            }

            const response = await axios.post("/unify", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            const { snap_token: snapToken, order_id: orderId } = response.data; // Assuming response includes order_id
            setSnapToken(snapToken);

            // Clear form data and selection after successful submission
            toast.success("Form submitted successfully!");
            setSelectedForm(null);
            setData({
                nama: "",

                jurusan: "",
                angkatan: "",
                noHp: "",
                email: "",
                jumlahTiket: 0,
            });

            // Redirect to Snap Checkout page with success callback
            window.snap.pay(snapToken, {
                onSuccess: function (result) {
                    window.location.href = `/unify/${orderId}`;
                },
                onPending: function (result) {
                    console.log("Transaction is pending: ", result);
                },
                onError: function (result) {
                    console.error("Transaction failed: ", result);
                    toast.error("Transaction failed. Please try again later.");
                },
                onClose: function () {
                    console.log(
                        "Payment popup closed without finishing the payment"
                    );
                },
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form. Please try again later.");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center w-full min-h-screen bungkus bg-[#F0F8FF]">
                <div className="flex flex-col items-center justify-center w-full max-w-3xl p-3 bg-white shadow-lg rounded-xl mt-[100px] md:mt-[150px]">
                    <h1 className="text-4xl font-bold text-center text-indigo-600">
                        Unify Ticket Purchase
                    </h1>
                    <div className="flex items-center justify-between mt-3">
                        <button
                            className={`px-6 py-3 mr-2 font-semibold text-white rounded-lg ${
                                selectedForm === "external"
                                    ? "bg-blue-600"
                                    : "bg-blue-400"
                            }`}
                            onClick={() => handleButton("external")}
                        >
                            External
                        </button>
                        <button
                            className={`px-6 py-3 font-semibold text-white rounded-lg ${
                                selectedForm === "internal"
                                    ? "bg-blue-600"
                                    : "bg-blue-400"
                            }`}
                            onClick={() => handleButton("internal")}
                        >
                            Internal
                        </button>
                    </div>
                    {selectedForm && (
                        <div className="flex-col w-full mt-2 md:flex-row sm:flex">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full p-6 m-2 mx-auto bg-white border-2 rounded-lg shadow-md md:mx-0 sm:w-3/5 border-blue-50"
                            >
                                <div className="mb-5">
                                    <label
                                        htmlFor="nama"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={data.nama}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.nama && (
                                        <div className="mt-1 text-sm text-red-500">
                                            {errors.nama}
                                        </div>
                                    )}
                                </div>
                                {selectedForm === "internal" && (
                                    <>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="jurusan"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Jurusan
                                            </label>
                                            <input
                                                type="text"
                                                name="jurusan"
                                                value={data.jurusan}
                                                onChange={handleChange}
                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                required
                                            />
                                            {errors.jurusan && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.jurusan}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="angkatan"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Angkatan
                                            </label>
                                            <input
                                                type="text"
                                                name="angkatan"
                                                value={data.angkatan}
                                                onChange={handleChange}
                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                required
                                            />
                                            {errors.angkatan && (
                                                <div className="mt-1 text-sm text-red-500">
                                                    {errors.angkatan}
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                                <div className="mb-5">
                                    <label
                                        htmlFor="noHp"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        No HP
                                    </label>
                                    <input
                                        type="text"
                                        name="noHp"
                                        value={data.noHp}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.noHp && (
                                        <div className="mt-1 text-sm text-red-500">
                                            {errors.noHp}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.email && (
                                        <div className="mt-1 text-sm text-red-500">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="jumlahTiket"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Jumlah Tiket
                                    </label>
                                    <div className="flex items-center mt-1">
                                        <button
                                            type="button"
                                            className="px-3 py-1 text-white bg-red-600 rounded-l hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            onClick={() =>
                                                handleDecrement("jumlahTiket")
                                            }
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            name="jumlahTiket"
                                            value={data.jumlahTiket}
                                            onChange={handleChange}
                                            className="block w-full px-2 py-2 text-center border-t border-b border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="px-3 py-1 text-white bg-green-600 rounded-r hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            onClick={() =>
                                                handleIncrement("jumlahTiket")
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    {errors.jumlahTiket && (
                                        <div className="mt-1 text-sm text-red-500">
                                            {errors.jumlahTiket}
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="w-full mx-auto text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Submitting..."
                                            : "Buy Ticket"}
                                    </button>
                                </div>
                            </form>
                            <div className="w-full px-0 pt-2 md:px-4 md:w-2/5 info">
                                <div className="w-full p-4 bg-white border-2 rounded-lg shadow-md border-blue-50">
                                    <h1 className="font-bold">
                                        UNIFY UMN FESTIVAL 2024
                                    </h1>
                                    <p>
                                        30 November 2024 14.00-22.00 Universitas
                                        Multimedia Nusantara Jalan Scientia
                                        Boulevard Gading, Curug Sangereng,
                                        Serpong, Kabupaten
                                        Tangerang, Banten 15810
                                    </p>
                                </div>
                                <div className="w-full p-4 mt-5 bg-white border-2 rounded-lg shadow-md border-blue-50">
                                    <h1 className="font-bold">
                                        Ringkasan Pesanan
                                    </h1>
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            enable-background="new 0 0 512 512"
                                            viewBox="0 0 512 512"
                                            id="ticket"
                                            className="max-w-[30px] max-h-[30px] mr-3 flex align-middle"
                                        >
                                            <path
                                                d="M505.081,196.611c3.82,0,6.919-3.097,6.919-6.919V123.56c0-18.536-15.081-33.615-33.617-33.615H33.613
	C15.077,89.945,0,105.024,0,123.56v66.133c0,3.822,3.099,6.919,6.919,6.919c32.748,0,59.387,26.642,59.387,59.387
	s-26.64,59.387-59.387,59.387c-3.82,0-6.919,3.097-6.919,6.919v66.135c0,18.536,15.077,33.615,33.613,33.615h444.77
	c18.536,0,33.617-15.079,33.617-33.615v-66.135c0-3.822-3.099-6.919-6.919-6.919c-32.748,0-59.387-26.642-59.387-59.387
	S472.333,196.611,505.081,196.611z M431.856,255.999c0,38.043,29.162,69.403,66.306,72.901v59.541
	c0,10.905-8.874,19.777-19.779,19.777H174.297V375.94c0-3.822-3.099-6.919-6.919-6.919s-6.919,3.097-6.919,6.919v32.277H33.613
	c-10.905,0-19.775-8.872-19.775-19.777V328.9c37.144-3.498,66.306-34.858,66.306-72.901s-29.162-69.403-66.306-72.901V123.56
	c0-10.905,8.869-19.777,19.775-19.777H160.46v32.275c0,3.822,3.099,6.919,6.919,6.919s6.919-3.097,6.919-6.919v-32.275h304.086
	c10.905,0,19.779,8.872,19.779,19.777v59.538C461.018,186.596,431.856,217.956,431.856,255.999z M174.297,234.92v42.158
	c0,3.822-3.099,6.919-6.919,6.919s-6.919-3.097-6.919-6.919V234.92c0-3.822,3.099-6.919,6.919-6.919
	C171.198,228.001,174.297,231.098,174.297,234.92z M174.297,305.429v42.162c0,3.822-3.099,6.919-6.919,6.919
	s-6.919-3.097-6.919-6.919v-42.162c0-3.822,3.099-6.919,6.919-6.919C171.198,298.51,174.297,301.607,174.297,305.429z
	 M174.297,164.409v42.16c0,3.822-3.099,6.919-6.919,6.919s-6.919-3.097-6.919-6.919v-42.16c0-3.822,3.099-6.919,6.919-6.919
	C171.198,157.49,174.297,160.587,174.297,164.409z M378.973,170.377c0,3.822-3.099,6.919-6.919,6.919H249.82
	c-3.82,0-6.919-3.097-6.919-6.919s3.099-6.919,6.919-6.919h122.234C375.874,163.458,378.973,166.555,378.973,170.377z
	 M378.973,227.458c0,3.822-3.099,6.919-6.919,6.919H249.82c-3.82,0-6.919-3.097-6.919-6.919s3.099-6.919,6.919-6.919h122.234
	C375.874,220.539,378.973,223.636,378.973,227.458z M378.973,284.539c0,3.822-3.099,6.919-6.919,6.919H249.82
	c-3.82,0-6.919-3.097-6.919-6.919c0-3.822,3.099-6.919,6.919-6.919h122.234C375.874,277.62,378.973,280.717,378.973,284.539z
	 M378.973,341.62c0,3.822-3.099,6.919-6.919,6.919H249.82c-3.82,0-6.919-3.097-6.919-6.919c0-3.822,3.099-6.919,6.919-6.919h122.234
	C375.874,334.702,378.973,337.798,378.973,341.62z"
                                            ></path>
                                        </svg>
                                        <div>
                                            <h2 className="font-semibold">
                                                Tiket Unify
                                            </h2>
                                            <p className="text-gray-500">
                                                {data.jumlahTiket} tiket x
                                                Rp.60.000
                                            </p>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="flex justify-between">
                                        <h2>Total</h2>
                                        <p>
                                            Rp.
                                            {data.jumlahTiket * 60000}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Form_ticketunify;
