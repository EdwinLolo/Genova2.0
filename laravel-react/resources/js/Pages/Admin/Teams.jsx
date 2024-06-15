import React, { useState } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "react-toastify";

function Teams({ data }) {
    console.log(data);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = data.filter(
        (item) =>
            item.team.namaTeam
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            item.namaLomba.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.idLine.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleInfo = (id_team) => {
        Inertia.visit(`/admin/team/${id_team}`);
    };

    const handleDelete = (id_team) => {
        if (window.confirm("Are you sure you want to delete this team?")) {
            axios
                .post(`/admin/team/delete/${id_team}`, {
                    headers: {
                        "X-CSRF-TOKEN": document
                            .querySelector('meta[name="csrf-token"]')
                            .getAttribute("content"),
                    },
                })
                .then((response) => {
                    toast.success("Team deleted successfully", {
                        position: "bottom-right",
                    });
                    Inertia.reload(); // Or use another method to update state
                })
                .catch((error) => {
                    console.error(
                        "There was an error deleting the Team!",
                        error
                    );
                    toast.error("Failed to delete team", {
                        position: "bottom-right",
                    });
                });
        }
    };

    const handleEdit = (id_team) => {
        Inertia.visit(`/admin/team/edit/${id_team}`);
    };

    return (
        <div className="bg-gray-300 m-0 w-full">
            <NavbarAdmin />
            <div className="relative overflow-x-auto shadow-md p-0 flex">
                <div className="leftSide">
                    <SidebarAdmin />
                </div>
                <div className="rightSide p-5 flex-auto">
                    <div className="p-4 rounded-t-lg bg-white dark:bg-gray-900">
                        <label htmlFor="table-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="table-search"
                                className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search for a team"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama Team
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mengikuti Lomba
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ID Line Ketua
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Bukti TF
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal Daftar
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                    >
                                        <td
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.team.namaTeam}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.namaLomba
                                                ? item.namaLomba
                                                : "-"}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.idLine ? item.idLine : "-"}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={`/storage/${item.team.buktiTF}`}
                                                alt="Bukti TF"
                                                className="h-16 w-16 object-cover"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.team.tglDaftar}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() =>
                                                    handleInfo(item.id_team)
                                                }
                                                className="text-green-600 font-bold hover:text-green-900"
                                                type="button"
                                            >
                                                More
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleEdit(item.id_team)
                                                }
                                                className="ml-4 text-blue-600 font-bold hover:text-blue-900"
                                                type="button"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id_team)
                                                }
                                                className="ml-4 text-red-600 font-bold hover:text-red-900"
                                                type="button"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-6 py-4 text-center text-black"
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

export default Teams;
