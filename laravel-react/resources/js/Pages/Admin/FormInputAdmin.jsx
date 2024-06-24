import React from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import { toast } from "react-toastify";

function FormInputAdmin() {
    const { data, setData, post, errors, processing } = useForm({
        namaLengkap: "",
        nim: "",
        idLine: "",
        idUser: "",
        ktm: null,
    });

    const { props } = usePage();

    function handleChange(e) {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        post("/admin/input/data", {
            forceFormData: true,
            onSuccess: () => {
                setData({
                    namaLengkap: "",
                    nim: "",
                    idLine: "",
                    idUser: "",
                    ktm: null,
                });
                toast.success("Data registered successfully", {
                    position: "bottom-right",
                });
            },
            onError: (errors) => {
                if (
                    errors.namaLengkap ||
                    errors.nim ||
                    errors.idLine ||
                    errors.idUser ||
                    errors.ktm
                ) {
                    // Validation errors occurred
                    toast.error("Please fix the errors in the form", {
                        position: "bottom-right",
                    });
                } else if (errors.failed) {
                    // Duplicate entry error
                    toast.error(errors.failed, {
                        position: "bottom-right",
                    });
                } else {
                    // Other errors
                    toast.error("An error occurred. Please try again later.", {
                        position: "bottom-right",
                    });
                }
            },
        });
    }

    return (
        <div className="bg-gray-300 min-h-screen">
            <NavbarAdmin />
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4">
                    <SidebarAdmin />
                </div>
                <div className="flex flex-auto flex-col items-center p-5 md:p-10 w-full md:w-3/4">
                    <form
                        method="post"
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
                                required
                            />
                            {errors.nim && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.nim}
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
                                htmlFor="idUser"
                                className="block text-sm font-medium text-gray-700"
                            >
                                ID Ingame
                            </label>
                            <input
                                type="text"
                                name="idUser"
                                value={data.idUser}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.idUser && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.idUser}
                                </div>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="ktm"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Upload KTM
                            </label>
                            <input
                                type="file"
                                name="ktm"
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.ktm && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.ktm}
                                </div>
                            )}
                            <div className="mt-2 text-sm text-gray-500">
                                A KTM picture is useful to confirm you are
                                logged into your account
                            </div>
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
            </div>
        </div>
    );
}

export default FormInputAdmin;
