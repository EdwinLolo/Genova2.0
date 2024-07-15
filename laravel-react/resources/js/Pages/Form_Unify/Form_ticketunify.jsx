import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
        <div className="bg-gray-300 flex flex-col items-center w-full min-h-screen">
            <div>
                <button
                    className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleButton("external")}
                >
                    Input External
                </button>
                <button
                    className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleButton("internal")}
                >
                    Input Internal
                </button>
            </div>
            {selectedForm && (
                <div className="flex flex-auto flex-col items-center p-5 md:p-10 w-full md:w-3/4">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
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
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.nama && (
                                <div className="text-red-500 text-sm mt-1">
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
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.jurusan && (
                                        <div className="text-red-500 text-sm mt-1">
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
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.angkatan && (
                                        <div className="text-red-500 text-sm mt-1">
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
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.noHp && (
                                <div className="text-red-500 text-sm mt-1">
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
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.email && (
                                <div className="text-red-500 text-sm mt-1">
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
                            <input
                                type="number"
                                name="jumlahTiket"
                                value={data.jumlahTiket}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.jumlahTiket && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.jumlahTiket}
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                disabled={processing}
                            >
                                {processing
                                    ? "Submitting..."
                                    : "Register New Data"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Form_ticketunify;
