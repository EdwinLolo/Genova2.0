import React, { useState } from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";

function TeamDetails({ team, lomba, mahasiswas }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    if (lomba.id_lomba === 3) {
        return (
            <div
                className="text-white font-sans min-h-screen flex flex-col"
                style={{ backgroundColor: "rgb(33, 33, 33)" }}
            >
                <NavbarAdmin />
                <div className="flex flex-col w-full md:w-5/6 self-center">
                    <div className="flex flex-col mt-5 mx-3 ">
                        <h1 className="text-right text-2xl md:text-3xl text-white font-sans font-bold">
                            {team.namaTeam.includes("Team") ||
                            team.namaTeam.includes("Tim") ||
                            team.namaTeam.includes("team") ||
                            team.namaTeam.includes("tim")
                                ? team.namaTeam
                                : `Team ${team.namaTeam}`}
                        </h1>
                        <hr />
                        <h1 className="text-left text-xl md:text-2xl text-white font-sans font-bold">
                            {lomba.namaLomba}
                        </h1>
                        <span className="text-sm md:text-lg font-mono">
                            Registered on: {team.tglDaftar}
                        </span>
                    </div>

                    <div className="flex flex-col m-3">
                        <div className="flex flex-col self-center mx-2 w-fit">
                            <span className="font-bold font-mono text-center border-2 border-white w-full md:w-1/2 self-center">
                                Bukti TF:
                            </span>
                            <img
                                src={`/storage/${team.buktiTF}`}
                                alt="Bukti Transfer"
                                className="self-center w-fit md:w-1/2 border-b-2 border-x-2 border-white"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-3 md:w-5/6 self-center">
                    <h1 className="text-right text-2xl font-bold font-mono">
                        Anggota
                    </h1>
                    <hr />
                    <table className="border-2 w-full text-left">
                        <thead>
                            <tr>
                                <th className="text-center">Nama Anggota</th>
                                <th className="text-center">ID Line</th>
                                <th className="text-center">Asal SMA</th>
                                <th className="text-center">Kartu Pelajara</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mahasiswas.map((member, index) => (
                                <tr
                                    key={index}
                                    className="border-y-2 cursor-pointer hover:bg-gray-700"
                                    onClick={() => openModal(member)}
                                >
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.namaLengkap}</span>
                                    </td>
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.idLine}</span>
                                    </td>
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.asalKampus}</span>
                                    </td>
                                    <td className="text-sm text-center font-sans font-medium">
                                        <img
                                            src={`/storage/${member.ktm}`}
                                            alt="KTM"
                                            className="h-16 w-16 object-cover self-center"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <div
                            className="bg-white text-black p-6 w-11/12 md:w-1/2 max-w-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold mb-4 font-mono text-right border-b-2 border-black">
                                Member Details
                            </h2>

                            {selectedMember && (
                                <div>
                                    <p>
                                        <strong>Nama Lengkap:</strong>{" "}
                                        {selectedMember.namaLengkap}
                                    </p>
                                    <p>
                                        <strong>ID Line:</strong>{" "}
                                        {selectedMember.idLine}
                                    </p>
                                    <p>
                                        <strong>Asal SMA:</strong>{" "}
                                        {selectedMember.asalKampus}
                                    </p>

                                    <div className="mt-4">
                                        <strong>Kartu Pelajar:</strong>
                                        <img
                                            src={`/storage/${selectedMember.ktm}`}
                                            alt="KTM"
                                            className="h-32 w-32 object-cover mt-2"
                                        />
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-black text-white py-2 px-4 font-mono"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } else
        return (
            <div
                className="text-white font-sans min-h-screen flex flex-col"
                style={{ backgroundColor: "rgb(33, 33, 33)" }}
            >
                <NavbarAdmin />
                <div className="flex flex-col w-full md:w-5/6 self-center">
                    <div className="flex flex-col mt-5 mx-3 ">
                        <h1 className="text-right text-2xl md:text-3xl text-white font-sans font-bold">
                            {team.namaTeam.includes("Team") ||
                            team.namaTeam.includes("Tim") ||
                            team.namaTeam.includes("team") ||
                            team.namaTeam.includes("tim")
                                ? team.namaTeam
                                : `Team ${team.namaTeam}`}
                        </h1>
                        <hr />
                        <h1 className="text-left text-xl md:text-2xl text-white font-sans font-bold">
                            {lomba.namaLomba}
                        </h1>
                        <span className="text-sm md:text-lg font-mono">
                            Registered on: {team.tglDaftar}
                        </span>
                    </div>

                    <div className="flex flex-col m-3">
                        <div className="flex flex-col self-center mx-2 w-fit">
                            <span className="font-bold font-mono text-center border-2 border-white w-full md:w-1/2 self-center">
                                Bukti TF:
                            </span>
                            <img
                                src={`/storage/${team.buktiTF}`}
                                alt="Bukti Transfer"
                                className="self-center w-fit md:w-1/2 border-b-2 border-x-2 border-white"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-3 md:w-5/6 self-center">
                    <h1 className="text-right text-2xl font-bold font-mono">
                        Anggota
                    </h1>
                    <hr />
                    <table className="border-2 w-full text-left">
                        <thead>
                            <tr>
                                <th className="text-center">Nama Anggota</th>
                                <th className="text-center">NIM</th>
                                <th className="text-center">ID Line</th>
                                <th className="text-center">KTM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mahasiswas.map((member, index) => (
                                <tr
                                    key={index}
                                    className="border-y-2 cursor-pointer hover:bg-gray-700"
                                    onClick={() => openModal(member)}
                                >
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.namaLengkap}</span>
                                    </td>
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.nim}</span>
                                    </td>
                                    <td className="text-sm text-center font-sans font-medium">
                                        <span>{member.idLine}</span>
                                    </td>
                                    <td>
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

                {/* Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={closeModal}
                    >
                        <div
                            className="bg-white text-black p-6 w-11/12 md:w-1/2 max-w-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold mb-4 font-mono text-right border-b-2 border-black">
                                Member Details
                            </h2>

                            {selectedMember && (
                                <div>
                                    <p>
                                        <strong>Nama Lengkap:</strong>{" "}
                                        {selectedMember.namaLengkap}
                                    </p>
                                    <p>
                                        <strong>NIM:</strong>{" "}
                                        {selectedMember.nim}
                                    </p>
                                    <p>
                                        <strong>ID Line:</strong>{" "}
                                        {selectedMember.idLine}
                                    </p>
                                    <div className="mt-4">
                                        <strong>KTM:</strong>
                                        <img
                                            src={`/storage/${selectedMember.ktm}`}
                                            alt="KTM"
                                            className="h-32 w-32 object-cover mt-2"
                                        />
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-black text-white py-2 px-4 font-mono"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
}

export default TeamDetails;
