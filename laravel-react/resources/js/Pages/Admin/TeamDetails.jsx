import React from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";

function TeamDetails({ team, lomba, mahasiswas }) {
    return (
        <div className="bg-gray-300 m-0 w-full">
            <NavbarAdmin />
            <div className="flex flex-row">
                <div className="p-10">
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="font-bold">Nama Team:</td>
                                <td className="pl-4">{team.namaTeam}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Tanggal Daftar:</td>
                                <td className="pl-4">{team.tglDaftar}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Mengikuti Lomba:</td>
                                <td className="pl-4">{lomba.namaLomba}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-auto justify-center m-10">
                    <div className="flex flex-col">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="font-bold">
                                        Bukti Transfer:
                                    </td>
                                    <td className="pl-4">
                                        <img
                                            src={`/storage/${team.buktiTF}`}
                                            alt="KTM"
                                            className="h-64 w-64 object-cover"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h1 className="m-5 w-1/3 text-center font-bold">Anggota</h1>
            <div className="flex">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="pl-4">Nama</th>
                            <th className="pl-4">NIM</th>
                            <th className="pl-4">ID Line</th>
                            <th className="pl-4">KTM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswas.map((member, index) => (
                            <tr>
                                <td className="pl-4">{member.namaLengkap}</td>
                                <td className="pl-4">{member.nim}</td>
                                <td className="pl-4">{member.idLine}</td>
                                <td className="pl-4">
                                    <img
                                        src={`/storage/${member.ktm}`}
                                        alt="KTM"
                                        className="h-64 w-64 object-cover"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TeamDetails;
