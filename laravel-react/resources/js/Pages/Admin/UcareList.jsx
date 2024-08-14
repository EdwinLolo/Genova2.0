import React, { useState } from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
import { Inertia } from "@inertiajs/inertia";

function UcareList({ data }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = data.filter(
        (item) =>
            item.namaLengkap
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            item.isInternal.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleInfo = (id) => {
        Inertia.visit(`/admin/ucare/detail/${id}`);
    };

    return (
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="relative overflow-x-auto shadow-md p-0 flex flex-col md:flex-row">
                <div className="rightSide p-5 flex-auto">
                    <h1 className="text-white font-black text-3xl text-right mb-2">
                        Ucare Particapants
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
                                        className="p-3 border-2 text-center"
                                    >
                                        is Internal
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
                                    filteredData.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-2 bg-inherit"
                                        >
                                            <td
                                                scope="row"
                                                className="p-3 font-mono font-medium text-center whitespace-wrap text-white border-2"
                                            >
                                                {item.namaLengkap}
                                            </td>
                                            <td className="p-3 font-mono font-medium text-center border-2 hidden md:table-cell">
                                                {item.email}
                                            </td>
                                            <td className="p-3 font-mono font-medium text-center border-2">
                                                {item.isInternal}
                                            </td>
                                            <td>
                                                <div className="flex flex-col gap-1 flex-wrap py-2 md:p-0 font-mono font-medium text-center items-center justify-center">
                                                    <button
                                                        onClick={() =>
                                                            handleInfo(item.id)
                                                        }
                                                        className="text-green-600 font-bold hover:text-green-900"
                                                        type="button"
                                                    >
                                                        More
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
        </div>
    );
}

export default UcareList;
