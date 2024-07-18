import React, { useState } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import axios from "axios";

function UcareDashboard() {
    const [data, setData] = useState({
        namaLengkap: "",
        umur: "",
        tempatTinggal: "",
        idLine: "",
        instagram: "",
        noTelp: "",
        nim: "",
        jurusan: "",
        angkatan: "",
        email: "",
        isInternal: "false",
    });
    const [selectedForm, setSelectedForm] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handleButton = (x) => {
        setSelectedForm(x);
        if (x === "internal") {
            setData({
                namaLengkap: "",
                umur: "",
                tempatTinggal: "",
                idLine: "",
                instagram: "",
                noTelp: "",
                nim: "",
                jurusan: "",
                angkatan: "",
                email: "",
                isInternal: "true",
                asalKampus: "",

                perkenalandiri: "",
                alasanikut: "",
                kelebihankekurangan: "",
                pandanganlansia: "",
                kebutuhanlansia: "",
                kesempatan: "",
            });
        } else if (x === "external") {
            setData({
                namaLengkap: "",
                umur: "",
                tempatTinggal: "",
                idLine: "",
                instagram: "",
                noTelp: "",
                nim: "",
                jurusan: "",
                angkatan: "",
                email: "",
                isInternal: "false",
                asalKampus: "",

                perkenalandiri: "",
                alasanikut: "",
                kelebihankekurangan: "",
                pandanganlansia: "",
                kebutuhanlansia: "",
                kesempatan: "",
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            const response = await axios.post("/ucare", data);
            // Handle success response
            console.log(response.data);
            alert("Form submitted successfully!");
            // Reset the form
            setData({
                namaLengkap: "",
                umur: "",
                tempatTinggal: "",
                idLine: "",
                instagram: "",
                noTelp: "",
                nim: "",
                jurusan: "",
                angkatan: "",
                email: "",
                isInternal: data.isInternal,
                asalKampus: "",

                perkenalandiri: "",
                alasanikut: "",
                kelebihankekurangan: "",
                pandanganlansia: "",
                kebutuhanlansia: "",
                kesempatan: "",
            });
        } catch (error) {
            // Handle error response
            console.error(error);
            alert("There was an error submitting the form.");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="bg-gray-300 m-0 w-full">
            <NavbarAdmin />
            <div className="relative overflow-x-auto shadow-md p-0 flex flex-col md:flex-row">
                <div className="leftSide">
                    <SidebarAdmin />
                </div>
                <div>
                    <a href="ucare/list">
                        <button className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Ucare Participants
                        </button>
                    </a>
                    {/* <button
                        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleButton("internal")}
                    >
                        Form Input Internal
                    </button>
                    <button
                        className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleButton("external")}
                    >
                        Form Input External
                    </button> */}
                </div>
                <div className="flex flex-auto">
                    {selectedForm && (
                        <div className="flex flex-auto flex-col items-center p-5 md:p-10 w-full md:w-3/4">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
                            >
                                <div className="mb-5">
                                    <label
                                        htmlFor="namaLengkap"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="namaLengkap"
                                        value={data.namaLengkap}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.namaLengkap && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.namaLengkap}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="umur"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Umur
                                    </label>
                                    <input
                                        type="text"
                                        name="umur"
                                        value={data.umur}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.umur && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.umur}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="tempatTinggal"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Tempat Tinggal
                                    </label>
                                    <input
                                        type="text"
                                        name="tempatTinggal"
                                        value={data.tempatTinggal}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.tempatTinggal && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.tempatTinggal}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="idLine"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        ID Line
                                    </label>
                                    <input
                                        type="text"
                                        name="idLine"
                                        value={data.idLine}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.idLine && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.idLine}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="instagram"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Instagram
                                    </label>
                                    <input
                                        type="text"
                                        name="instagram"
                                        value={data.instagram}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.instagram && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.instagram}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="noTelp"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        No Telp
                                    </label>
                                    <input
                                        type="text"
                                        name="noTelp"
                                        value={data.noTelp}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.noTelp && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.noTelp}
                                        </div>
                                    )}
                                </div>
                                {selectedForm === "internal" && (
                                    <>
                                        <div className="mb-5">
                                            <label
                                                htmlFor="nim"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                NIM
                                            </label>
                                            <input
                                                type="text"
                                                name="nim"
                                                value={data.nim}
                                                onChange={handleChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                            {errors.nim && (
                                                <div className="text-red-500 text-sm mt-1">
                                                    {errors.nim}
                                                </div>
                                            )}
                                        </div>
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
                                            />
                                            {errors.angkatan && (
                                                <div className="text-red-500 text-sm mt-1">
                                                    {errors.angkatan}
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}

                                <>
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
                                        />
                                        {errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </>

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
            </div>
        </div>
    );
}

export default UcareDashboard;
