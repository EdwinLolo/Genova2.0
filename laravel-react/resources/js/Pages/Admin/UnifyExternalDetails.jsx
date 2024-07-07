import React, { useState } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";

function UnifyExternalDetails({ data }) {
    return (
        <div className="bg-gray-300 min-h-screen">
            <NavbarAdmin />
            <div className="flex flex-col md:flex-row">
                <div className="p-10 w-full md:w-1/2">
                    <table className="table-auto w-full">
                        <h1 className="font-bold text-center">External</h1>
                        <tbody>
                            <tr>
                                <td className="font-bold">Nama:</td>
                                <td className="pl-4">{data.nama}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">No HP:</td>
                                <td className="pl-4">{data.noHp}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Email:</td>
                                <td className="pl-4">{data.email}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Jumlah Tiket:</td>
                                <td className="pl-4">{data.jumlahTiket}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Bukti TF:</td>
                                <td className="pl-4">
                                    <img
                                        src={`/storage/${data.buktiTf}`}
                                        alt="buktiTf"
                                        className="h-64 w-64 object-cover"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UnifyExternalDetails;
