import React, { useState } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import axios from "axios";
import { toast } from "react-toastify";

function UnifyDashboard() {
    const [selectedForm, setSelectedForm] = useState(null);
    const [data, setData] = useState({
        nama: "",
        jurusan: "",
        angkatan: "",
        noHp: "",
        email: "",
        jumlahTiket: 0,
        buktiTf: null,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

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
                buktiTf: null,
            });
        } else if (x === "external") {
            setData({
                nama: "",
                noHp: "",
                email: "",
                jumlahTiket: 0,
                buktiTf: null,
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

        try {
            const formData = new FormData();
            formData.append("formType", selectedForm);
            for (const key in data) {
                formData.append(key, data[key]);
            }

            await axios.post("/admin/unify", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Form submitted successfully!");
            setSelectedForm(null);
            setData({
                nama: "",
                jurusan: "",
                angkatan: "",
                noHp: "",
                email: "",
                jumlahTiket: 0,
                buktiTf: null,
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form. Please try again later.");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="bg-gray-300 m-0 w-full min-h-screen md:min-h-full">
            <NavbarAdmin />
            <div className="relative overflow-x-auto shadow-md p-0 flex flex-col md:flex-row min-h-screen md:min-h-full">
                <div className="leftSide">
                    <SidebarAdmin />
                </div>
                <div className="rightSide p-5 flex-auto">
                    <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="unify/external">External</a>
                    </button>
                    <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href="unify/internal">Internal</a>
                    </button>
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
                    {selectedForm && (
                        <div className="flex flex-auto flex-col items-center p-5 md:p-10 w-full md:w-3/4">
                            <form
                                method="post"
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
                                <div className="mb-5">
                                    <label
                                        htmlFor="buktiTf"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Bukti Transfer
                                    </label>
                                    <input
                                        type="file"
                                        name="buktiTf"
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.buktiTf && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.buktiTf}
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        disabled={processing}
                                    >
                                        Register New Data
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UnifyDashboard;