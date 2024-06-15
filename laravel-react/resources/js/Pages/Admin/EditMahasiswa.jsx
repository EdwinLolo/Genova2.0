import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import { toast } from "react-toastify";

function EditMahasiswa({ mahasiswa }) {
    const { data, setData, post, errors, processing } = useForm({
        namaLengkap: mahasiswa.namaLengkap,
        nim: mahasiswa.nim,
        idLine: mahasiswa.idLine,
        idUser: mahasiswa.idUser ? mahasiswa.idUser : "",
        ktm: "", // Initialize ktm to an empty string
    });

    function handleChange(e) {
        const { name, type, value, files } = e.target;
        setData(name, type === "file" ? files[0] : value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("namaLengkap", data.namaLengkap);
        formData.append("nim", data.nim);
        formData.append("idLine", data.idLine);
        formData.append("idUser", data.idUser);

        // Handle file upload
        if (data.ktm && data.ktm instanceof File) {
            formData.append("ktm", data.ktm);
        } else {
            formData.append("ktm", mahasiswa.ktm); // Use existing value if no new file is uploaded
        }

        post(`/admin/edit/${mahasiswa.nim}`, {
            data: formData,
            // Remove Content-Type header
            onSuccess: () => {
                toast.success("Data updated successfully", {
                    position: "bottom-right",
                });
            },
            onError: (errors) => {
                const errorMessages = Object.values(errors).flat();
                errorMessages.forEach((message) => {
                    toast.error(message, {
                        position: "bottom-right",
                    });
                });
            },
        });
    }

    return (
        <div className="bg-gray-300 min-h-screen">
            <NavbarAdmin />
            <div className="flex flex-row">
                <SidebarAdmin />
                <div className="flex flex-auto justify-center p-5">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg"
                        encType="multipart/form-data"
                    >
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="namaLengkap">
                                            Nama Lengkap:{" "}
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="namaLengkap"
                                            name="namaLengkap"
                                            value={data.namaLengkap}
                                            onChange={handleChange}
                                            className="w-full border rounded py-1 px-2"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="nim">NIM: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="nim"
                                            name="nim"
                                            value={data.nim}
                                            onChange={handleChange}
                                            className="w-full border rounded py-1 px-2"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="idUser">
                                            ID Ingame:{" "}
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="idUser"
                                            name="idUser"
                                            value={data.idUser}
                                            onChange={handleChange}
                                            className="w-full border rounded py-1 px-2"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="idLine">
                                            ID Line:{" "}
                                        </label>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            id="idLine"
                                            name="idLine"
                                            value={data.idLine}
                                            onChange={handleChange}
                                            className="w-full border rounded py-1 px-2"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>KTM: </td>
                                    <td>
                                        <img
                                            src={`/storage/${mahasiswa.ktm}`}
                                            alt="KTM"
                                            className="h-64 w-64 object-cover"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="ktm">New KTM: </label>
                                    </td>
                                    <td>
                                        <input
                                            type="file"
                                            id="ktm"
                                            name="ktm"
                                            onChange={handleChange}
                                            className="w-full border rounded py-1 px-2"
                                            accept=".jpg,.jpeg,.png"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                                            disabled={processing}
                                        >
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditMahasiswa;
