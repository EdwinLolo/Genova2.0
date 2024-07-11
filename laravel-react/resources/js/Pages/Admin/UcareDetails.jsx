import React from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";

function UcareDetails({ data }) {
    return (
        <div className="bg-gray-300 min-h-screen">
            <NavbarAdmin />
            <div className="flex flex-col md:flex-row">
                <div className="p-10 w-full md:w-1/2">
                    <table className="table-auto w-full">
                        <h1 className="font-bold text-center">
                            Ucare Participant Detail
                        </h1>
                        <tbody>
                            <tr>
                                <td className="font-bold">Nama:</td>
                                <td className="pl-4">{data.namaLengkap}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Umur:</td>
                                <td className="pl-4">{data.umur}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Tempat Tinggal:</td>
                                <td className="pl-4">{data.tempatTinggal}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">ID Line:</td>
                                <td className="pl-4">{data.idLine}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">ID Instagram:</td>
                                <td className="pl-4">{data.instagram}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">No Telp:</td>
                                <td className="pl-4">{data.noTelp}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Nim:</td>
                                <td className="pl-4">{data.nim}</td>
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
                                <td className="font-bold">Email:</td>
                                <td className="pl-4">{data.email}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Internal:</td>
                                <td className="pl-4">{data.isInternal}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UcareDetails;
