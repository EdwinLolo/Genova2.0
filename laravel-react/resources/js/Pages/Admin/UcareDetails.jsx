import React from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";

function UcareDetails({ data }) {
    return (
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="flex flex-col w-5/6 self-center  mt-5 mx-3 ">
                <div className="flex flex-col self-center w-full md:w-5/6">
                    <h1 className="font-bold text-right text-2xl">
                        {data.namaLengkap}
                    </h1>
                    <hr />
                    <span className="text-md font-bold">
                        Ucare Participant Detail
                    </span>

                    <table className="mt-2">
                        <tbody className="mt-2">
                            <tr className="border-2">
                                <td className="font-bold">Umur</td>
                                <td>{data.umur}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Tempat Tinggal:</td>
                                <td>{data.tempatTinggal}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">ID Line:</td>
                                <td>{data.idLine}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">ID Instagram:</td>
                                <td>{data.instagram}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">No Telp:</td>
                                <td>{data.noTelp}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Nim:</td>
                                <td>{data.nim}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Jurusan:</td>
                                <td>{data.jurusan}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Angkatan:</td>
                                <td>{data.angkatan}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Email:</td>
                                <td>{data.email}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Internal:</td>
                                <td>{data.isInternal}</td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Document Essay</td>
                                <td>
                                    <a
                                        className="text-sky-300 font-bold"
                                        href={`/storage/${data.docs}`}
                                    >
                                        Download Essay
                                    </a>
                                </td>
                            </tr>
                            <tr className="border-2">
                                <td className="font-bold">Asal Kampus</td>
                                <td>{data.asalKampus}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UcareDetails;
