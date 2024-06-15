import React from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";

function AdminDetails({ data, team, lomba }) {
    return (
        <div className="bg-gray-300 m-0 w-full">
            <NavbarAdmin />
            <div className="flex flex-row">
                <div className="p-10">
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="font-bold">Nama:</td>
                                <td className="pl-4">{data.namaLengkap}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">NIM:</td>
                                <td className="pl-4">{data.nim}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">ID Line:</td>
                                <td className="pl-4">{data.idLine}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">ID Ingame:</td>
                                <td className="pl-4">
                                    {data.idUser ? data.idUser : "~"}
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">KTM:</td>
                                <td className="pl-4">
                                    <img
                                        src={`/storage/${data.ktm}`}
                                        alt="KTM"
                                        className="h-64 w-64 object-cover"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-auto justify-center">
                    <div className="flex flex-col justify-center">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="font-bold">
                                        Mengikuti Team:
                                    </td>
                                    <td className="pl-4">{team.namaTeam}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold">
                                        Mengikuti Lomba:
                                    </td>
                                    <td className="pl-4">{lomba.namaLomba}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDetails;