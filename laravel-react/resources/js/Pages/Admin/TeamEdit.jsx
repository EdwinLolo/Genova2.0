import React from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";
import axios from "axios";

function TeamEdit({ team, lomba, lombas, mahasiswas }) {
    const { data, setData, post, errors, processing } = useForm({
        id_team: team.id_team,
        namaTeam: team.namaTeam,
        id_lomba: team.id_lomba,
        buktiTF: "",
    });

    const handleInfo = (nim) => {
        Inertia.visit(`/admin/${nim}`);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            axios
                .delete(`/admin/delete/${id}`)
                .then((response) => {
                    console.log(response.data);
                    toast.success("Item deleted successfully", {
                        position: "bottom-right",
                    });
                    Inertia.reload();
                })
                .catch((error) => {
                    console.error(
                        "There was an error deleting the item!",
                        error
                    );
                    toast.error("Failed to delete item", {
                        position: "bottom-right",
                    });
                });
        }
    };

    const handleEdit = (nim) => {
        Inertia.visit(`/admin/edit/${nim}`);
    };

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;
        setData(name, type === "file" ? files[0] : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id_team", data.id_team);
        formData.append("namaTeam", data.namaTeam);
        formData.append("id_lomba", data.id_lomba);

        if (data.buktiTF instanceof File) {
            formData.append("buktiTF", data.buktiTF);
        } else {
            formData.append("buktiTF", team.buktiTF);
        }

        post(`/admin/team/edit/${team.id_team}`, {
            data: formData,
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
    };

    return (
        <div className="bg-gray-300 m-0 w-full">
            <NavbarAdmin />
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <div className="p-10">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="font-bold">Nama Team:</td>
                                    <td className="pl-4">
                                        <input
                                            type="text"
                                            name="namaTeam"
                                            value={data.namaTeam}
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        Tanggal Daftar:
                                    </td>
                                    <td className="pl-4">{team.tglDaftar}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        Mengikuti Lomba:
                                    </td>
                                    <td className="pl-4">
                                        <select
                                            name="id_lomba"
                                            value={data.id_lomba}
                                            onChange={handleChange}
                                        >
                                            <option value={lomba.id_lomba}>
                                                {lomba.namaLomba}
                                            </option>
                                            {lombas.map((data, index) => (
                                                <option
                                                    key={index}
                                                    value={data.id_lomba}
                                                >
                                                    {data.namaLomba}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-auto justify-center m-10">
                        <div className="flex flex-col">
                            <table className="table-auto">
                                <tbody>
                                    <tr>
                                        <td className="font-bold">
                                            Bukti Transfer:
                                        </td>
                                        <td className="pl-4">
                                            <img
                                                src={`/storage/${team.buktiTF}`}
                                                alt="Bukti Transfer"
                                                className="h-64 w-64 object-cover"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold">
                                            New Bukti Transfer:
                                        </td>
                                        <td className="pl-4">
                                            <input
                                                type="file"
                                                name="buktiTF"
                                                onChange={handleChange}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        disabled={processing}
                    >
                        Update Team
                    </button>
                </div>
            </form>
            <h1 className="m-5 w-1/3 text-center font-bold">Anggota</h1>
            <div className="flex">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="pl-4">Nama</th>
                            <th className="pl-4">NIM</th>
                            <th className="pl-4">ID Line</th>
                            <th className="pl-4">KTM</th>
                            <th className="pl-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswas.map((member, index) => (
                            <tr key={index}>
                                <td className="pl-4">{member.namaLengkap}</td>
                                <td className="pl-4">{member.nim}</td>
                                <td className="pl-4">{member.idLine}</td>
                                <td className="pl-4">
                                    <img
                                        src={`/storage/${member.ktm}`}
                                        alt="KTM"
                                        className="h-64 w-64 object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleInfo(member.nim)}
                                        className="text-green-600 font-bold hover:text-green-900"
                                        type="button"
                                    >
                                        More
                                    </button>
                                    <button
                                        onClick={() => handleEdit(member.nim)}
                                        className="ml-4 text-blue-600 font-bold hover:text-blue-900"
                                        type="button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(member.nim)}
                                        className="ml-4 text-red-600 font-bold hover:text-red-900"
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TeamEdit;
