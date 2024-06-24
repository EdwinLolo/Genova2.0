import React from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";

function TeamDetails({ team, lomba, mahasiswas }) {
    return (
        <div className="bg-gray-300 min-h-screen">
            <NavbarAdmin />
            <div className="flex flex-col md:flex-row ">
                <div className="p-10 w-full md:w-1/2">
                    <table className="table-auto w-full">
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
                <div className="flex flex-auto justify-center items-center w-full md:w-1/2 m-10">
                    <div>
                        <table className="table-auto w-full">
                            <tbody>
                                <tr>
                                    <td className="font-bold">
                                        Bukti Transfer:
                                    </td>
                                    <td className="pl-4">
                                        <img
                                            src={`/storage/${team.buktiTF}`}
                                            alt="Bukti Transfer"
                                            className="h-32 w-32 md:h-64 md:w-64 object-cover"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h1 className="m-5 text-center font-bold">Anggota</h1>
            <div className="flex justify-center">
                <table className="table-auto w-full md:w-2/3">
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
                            <tr key={index}>
                                <td className="pl-4">{member.namaLengkap}</td>
                                <td className="pl-4">{member.nim}</td>
                                <td className="pl-4">{member.idLine}</td>
                                <td className="pl-4">
                                    <img
                                        src={`/storage/${member.ktm}`}
                                        alt="KTM"
                                        className="h-16 w-16 object-cover"
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
