import React from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
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

        post(`/admin/ulympic/edit/${team.id_team}`, {
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
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="flex flex-col m-3 mx-5 self-center md:w-5/6">
                <span className="text-right font-mono text-3xl font-bold">
                    Edit Form
                </span>
                <hr />
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 my-2"
                >
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <span className="font-bold text-left">
                                Nama Team:
                            </span>
                            <input
                                className="bg-inherit border-2"
                                type="text"
                                name="namaTeam"
                                value={data.namaTeam}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col mt-1">
                            <span className="font-mono text-sm ">
                                Registered on: {team.tglDaftar}
                            </span>
                        </div>
                        <div className="flex flex-col my-1">
                            <span className="font-bold">Mengikuti Lomba:</span>
                            <select
                                className="bg-white text-black font-bold p-1"
                                name="id_lomba"
                                value={data.id_lomba}
                                onChange={handleChange}
                            >
                                <option value={lomba.id_lomba}>
                                    {lomba.namaLomba}
                                </option>
                                {lombas.map((data, index) => (
                                    <option key={index} value={data.id_lomba}>
                                        {data.namaLomba}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-left mt-3">
                                Bukti TF:{" "}
                            </span>
                            <img
                                src={`/storage/${team.buktiTF}`}
                                alt="Bukti Transfer"
                                className="w-64"
                            />

                            <span className="text-sm mt-3 font-bold font-sans">
                                New Bukti TF:{" "}
                            </span>
                            <input
                                type="file"
                                name="buktiTF"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-white hover:bg-green-700 hover:text-white text-black font-bold py-2 px-4 font-mono"
                            type="submit"
                            disabled={processing}
                        >
                            Update Team
                        </button>
                    </div>
                </form>
                <div className="flex flex-col mx-3 ">
                    <h1 className="text-right text-2xl font-bold font-mono">
                        Anggota
                    </h1>
                    <hr />
                    <table className="border-2 w-full text-left mt-3">
                        <thead>
                            <tr>
                                <th className="text-center">Nama Anggota</th>
                                <th className="text-center">NIM</th>
                                <th className="text-center">ID Line</th>
                                <th className="text-center">KTM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mahasiswas.map((member, index) => (
                                <tr
                                    key={index}
                                    className="border-y-2 cursor-pointer hover:bg-gray-700"
                                    onClick={() => openModal(member)}
                                >
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.namaLengkap}</span>
                                    </td>
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.nim}</span>
                                    </td>
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.idLine}</span>
                                    </td>
                                    <td>
                                        <img
                                            src={`/storage/${member.ktm}`}
                                            alt="KTM"
                                            className="h-16 w-16 object-cover"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TeamEdit;
