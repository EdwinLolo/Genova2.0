import React, { useState } from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";

function UlympicTeams({ data, lomba }) {
    console.log(data, lomba);
    const [searchQuery, setSearchQuery] = useState("");
    const selectedLomba = lomba;

    // Filter data based on search query
    const filteredData = data.filter(
        (item) =>
            item.team.namaTeam
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            item.idLine.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle navigation to team info page
    const handleInfo = (id_team) => {
        Inertia.visit(`/admin/ulympic/${id_team}`);
    };

    // Handle team deletion
    const handleDelete = (id_team) => {
        if (window.confirm("Are you sure you want to delete this team?")) {
            axios
                .post(
                    `/admin/ulympic/delete/${id_team}`,
                    {},
                    {
                        headers: {
                            "X-CSRF-TOKEN": document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute("content"),
                        },
                    }
                )
                .then(() => {
                    toast.success("Team deleted successfully", {
                        position: "bottom-right",
                    });
                    Inertia.reload(); // Reloads the page or use another method to update the state
                })
                .catch(() => {
                    toast.error("Failed to delete team", {
                        position: "bottom-right",
                    });
                });
        }
    };

    // Handle navigation to team edit page
    const handleEdit = (id_team) => {
        Inertia.visit(`/admin/ulympic/edit/${id_team}`);
    };

    return (
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="relative overflow-x-auto shadow-md p-0 flex flex-col w-5/6 self-center mt-5">
                <h1 className="text-white font-black text-3xl text-right mb-2">
                    {selectedLomba.namaLomba}
                </h1>
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="flex w-full mt-1 mb-2">
                    <input
                        type="text"
                        id="table-search"
                        className="block py-2 text-sm text-white font-mono border-2 border-white bg-inherit px-4 w-full"
                        placeholder="Search for a team"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex w-full">
                    <table className="w-full text-sm text-left text-white rtl:text-right bg-inherit">
                        <thead className="text-xs text-white uppercase bg-inherit">
                            <tr>
                                <th
                                    scope="col"
                                    className="p-3 border-2 text-center"
                                >
                                    Nama Team
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border-2 text-center"
                                >
                                    ID Line Ketua
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border-2 text-center hidden md:table-cell"
                                >
                                    Bukti TF
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border-2 text-center"
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr
                                        key={item.team.id_team}
                                        className="border-2 bg-inherit"
                                    >
                                        <td
                                            scope="row"
                                            className="p-3 font-mono font-medium text-center whitespace-wrap text-white border-2"
                                        >
                                            {item.team.namaTeam}
                                        </td>
                                        <td className="p-3 font-mono font-medium text-center border-2">
                                            {item.idLine || "-"}
                                        </td>
                                        <td className="p-3 border-2 hidden md:table-cell">
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src={`/storage/${item.team.buktiTF}`}
                                                    alt="Bukti Transfer"
                                                    className="h-32 w-32 object-cover"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex flex-col gap-1 flex-wrap py-2 md:p-0 font-mono font-medium text-center items-center justify-center">
                                                <button
                                                    onClick={() =>
                                                        handleInfo(
                                                            item.team.id_team
                                                        )
                                                    }
                                                    className="w-full text-white font-bold bg-green-600 font-mono py-2"
                                                    type="button"
                                                >
                                                    More
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        handleEdit(
                                                            item.team.id_team
                                                        )
                                                    }
                                                    className="w-full font-bold text-white bg-blue-600 font-mono py-2 "
                                                    type="button"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            item.team.id_team
                                                        )
                                                    }
                                                    className="w-full font-bold bg-red-600 text-white font-mono py-2"
                                                    type="button"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-4 text-center text-white font-mono text-3xl"
                                    >
                                        No matching data found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UlympicTeams;
