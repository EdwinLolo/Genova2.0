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
        <div className="bg-gray-300">
            <NavbarAdmin />
            <div className="flex">
                <div className="leftSide">
                    <SidebarAdmin />
                </div>
                <div className="flex flex-auto flex-col items-center">
                    <div className="p-10 flex align-center">
                        <form
                            method="post"
                            onSubmit={handleSubmit}
                            className="max-w-lg mx-auto"
                        >
                            <div className="mb-5">
                                <label htmlFor="namaLengkap">
                                    Nama Lengkap
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="namaLengkap"
                                    value={data.namaLengkap}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.namaLengkap && (
                                    <div>{errors.namaLengkap}</div>
                                )}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="nim">NIM</label>
                                <br />
                                <input
                                    type="text"
                                    name="nim"
                                    value={data.nim}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.nim && <div>{errors.nim}</div>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="idLine">ID Line</label>
                                <br />
                                <input
                                    type="text"
                                    name="idLine"
                                    value={data.idLine}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.idLine && <div>{errors.idLine}</div>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="idUser">ID ingame</label>
                                <br />
                                <input
                                    type="text"
                                    name="idUser"
                                    value={data.idUser}
                                    onChange={handleChange}
                                />
                                {errors.idUser && <div>{errors.idUser}</div>}
                            </div>
                            <div>
                                <label htmlFor="ktm">Upload KTM</label>
                                <br />
                                <input
                                    type="file"
                                    name="ktm"
                                    onChange={handleChange}
                                />
                                {errors.ktm && <div>{errors.ktm}</div>}
                                <div
                                    className="mb-2 text-sm text-black-500"
                                    id="user_avatar_help"
                                >
                                    A KTM picture is useful to confirm you are
                                    logged into your account
                                </div>
                            </div>
                            <div className="flex flex-auto">
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
        </div>
    );
}

export default FormInputAdmin;
