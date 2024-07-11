import React, { useState } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";

function UnifyInternalDetails({ data }) {
    return (
        <div className="bg-gray-300 min-h-screen">
            <NavbarAdmin />
            <div className="flex flex-col md:flex-row">
                <div className="p-10 w-full md:w-1/2">
                    <h1 className="font-bold text-center">Internal</h1>
                    <table className="table-auto w-full">
                        <tbody>
                            <tr>
                                <td className="font-bold">Nama:</td>
                                <td className="pl-4">{data.nama}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Jurusan:</td>
                                <td className="pl-4">{data.jurusan}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Angkatan:</td>
                                <td className="pl-4">{data.angkatan}</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UnifyInternalDetails;
