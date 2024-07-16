import React, { useState } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import { Inertia } from "@inertiajs/inertia";

function UnifyInternal({ data, totalTiket }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const filteredData = data.filter(
        (item) =>
            item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleInfo = (id) => {
        Inertia.visit(`/admin/unify/detail/${id}`);
    };
    const handleChecked = (id) => {
        Inertia.visit(`/admin/unify/check/${id}`);
    };
    const handleUnchecked = (id) => {
        Inertia.visit(`/admin/unify/uncheck/${id}`);
    };
    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage("");
    };
    return (
        <div className="bg-gray-300 m-0 w-full">
            <NavbarAdmin />
            <div className="relative overflow-x-auto shadow-md p-0 flex flex-col md:flex-row">
                <div className="leftSide">
                    <SidebarAdmin />
                </div>
                <div className="rightSide p-5 flex-auto">
                    Unify Internal & External
                    <br />
                    Total Tiket Checked: {totalTiket}
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
                                placeholder="Search"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jumlah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Bukti Transfer
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
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
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.nama}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.jumlahTiket}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={`/storage/${item.buktiTf}`}
                                                alt="Bukti Tf"
                                                className="w-24 h-24 object-cover cursor-pointer"
                                                onClick={() =>
                                                    handleImageClick(
                                                        `/storage/${item.buktiTf}`
                                                    )
                                                }
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() =>
                                                    handleInfo(item.id)
                                                }
                                                className="text-green-600 font-bold hover:text-green-900"
                                                type="button"
                                            >
                                                More
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleChecked(item.id)
                                                }
                                                className="text-green-600 font-bold hover:text-green-900 ml-5"
                                                type="button"
                                            >
                                                Check
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleUnchecked(item.id)
                                                }
                                                className="text-red-600 font-bold hover:text-green-900 ml-5"
                                                type="button"
                                            >
                                                Uncheck
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-4 text-center text-black"
                                    >
                                        No matching data found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>{" "}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-4 rounded-lg max-w-3xl mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={currentImage}
                            alt="Bukti Tf"
                            className="w-full h-auto object-contain"
                        />
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UnifyInternal;
