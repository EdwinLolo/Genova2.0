import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";

function UnifyList({ title, keterangan, data, totalTiket, totalUnchecked }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const filteredData = data.filter((item) => {
        return (
            item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.kodeRef.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const handleInfo = (id) => {
        Inertia.visit(`/admin/unify/detail/${id}`);
    };

    const handleChecked = (id) => {
        Inertia.visit(`/admin/unify/check/${id}`);
    };

    const handleUnchecked = (id) => {
        Inertia.visit(`/admin/unify/uncheck/${id}`);
    };

    const handleSudahDiambil = (id) => {
        Inertia.visit(`/admin/unify/diambil/${id}`);
    };

    const handleBelomDiambil = (id) => {
        Inertia.visit(`/admin/unify/belomdiambil/${id}`);
    };

    return (
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="flex flex-col mx-3 mt-5 md:w-5/6 self-center">
                <div className="flex flex-row justify-between text-white font-black text-3xl text-right mb-2">
                    <span className="text-left text-sm align-middle">
                        Total Tiket {keterangan} : {totalTiket}
                    </span>
                    {title}
                </div>
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="flex w-full mt-1 mb-2">
                    <input
                        type="text"
                        id="table-search"
                        className="block py-2 text-sm text-white font-mono border-2 border-white bg-inherit px-4 w-full"
                        placeholder="Search by name, email and referral code"
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
                                    Nama
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border-2 text-center hidden md:table-cell"
                                >
                                    Email
                                </th>

                                <th
                                    scope="col"
                                    className="p-3 border-2 text-center hidden md:table-cell"
                                >
                                    Bukti Transfer
                                </th>
                                <th
                                    scope="col"
                                    className="p-3 border-2 text-center"
                                >
                                    Jumlah & Status
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
                                        key={item.id}
                                        className="border-2 bg-inherit"
                                    >
                                        <td
                                            scope="row"
                                            className="p-3 font-mono font-medium text-center whitespace-wrap text-white border-2"
                                        >
                                            {item.nama}
                                        </td>
                                        <td className="p-3 font-mono font-medium text-center border-2 hidden md:table-cell">
                                            {item.email}
                                        </td>

                                        <td className="p-3 border-2 hidden md:table-cell">
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src={`/storage/${item.buktiTf}`}
                                                    alt="Bukti Transfer"
                                                    className="h-32 w-32 object-cover"
                                                />
                                            </div>
                                        </td>
                                        <td className="p-3 font-mono font-medium text-left border-2">
                                            {item.jumlahTiket} Tiket
                                            {item.kodeRef != null &&
                                            item.kodeRef != "-" ? (
                                                <div className="text-white">
                                                    {item.kodeRef}
                                                </div>
                                            ) : (
                                                <div className="text-white">
                                                    -
                                                </div>
                                            )}
                                            {item.status === "unchecked" ? (
                                                <div>belom check</div>
                                            ) : (
                                                <div>sudah check</div>
                                            )}
                                            {item.udahDiambil ===
                                            "unchecked" ? (
                                                <div>belom ambil</div>
                                            ) : (
                                                <div>sudah ambil</div>
                                            )}
                                            <br />
                                        </td>
                                        <td>
                                            <div className="flex flex-col gap-1 flex-wrap py-2 md:p-0 font-mono font-medium text-center items-center justify-center">
                                                <button
                                                    onClick={() =>
                                                        handleInfo(item.id)
                                                    }
                                                    className="w-full text-white font-bold bg-blue-600 font-mono py-2"
                                                    type="button"
                                                >
                                                    More
                                                </button>

                                                {item.status === "checked" ? (
                                                    <button
                                                        onClick={() =>
                                                            handleUnchecked(
                                                                item.id
                                                            )
                                                        }
                                                        className="w-full font-bold text-white bg-yellow-600 font-mono py-2"
                                                        type="button"
                                                    >
                                                        Uncheck
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            handleChecked(
                                                                item.id
                                                            )
                                                        }
                                                        className="w-full font-bold text-white bg-green-600 font-mono py-2"
                                                        type="button"
                                                    >
                                                        Check
                                                    </button>
                                                )}

                                                {item.udahDiambil ===
                                                "checked" ? (
                                                    <button
                                                        onClick={() =>
                                                            handleBelomDiambil(
                                                                item.id
                                                            )
                                                        }
                                                        className="w-full font-bold text-white bg-yellow-600 font-mono py-2"
                                                        type="button"
                                                    >
                                                        Uncheck Ticket Taken
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            handleSudahDiambil(
                                                                item.id
                                                            )
                                                        }
                                                        className={`w-full font-bold text-white font-mono py-2 ${
                                                            item.status !==
                                                            "checked"
                                                                ? "bg-green-900"
                                                                : "bg-green-600"
                                                        }`}
                                                        type="button"
                                                        disabled={
                                                            item.status !==
                                                            "checked"
                                                        }
                                                    >
                                                        Check Ticket Taken
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
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

export default UnifyList;
