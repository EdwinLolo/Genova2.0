import React from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";

function UcareDetails({ data }) {
    return (
        <div className="bg-gray-300 min-h-screen">
            <NavbarAdmin />
            <div className="flex flex-col md:flex-row">
                <div className="p-10 w-1/2 md:w-full">
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
                            <tr>
                                <td className="font-bold">Perkenalan Diri:</td>
                                <td className="pl-4">{data.perkenalandiri}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Alasan ikut</td>
                                <td className="pl-4">{data.alasanikut}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">
                                    Kelebihan kekurangan diri
                                </td>
                                <td className="pl-4">
                                    {data.kelebihankekurangan}
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">Pandangan Lansia</td>
                                <td className="pl-4">{data.pandanganlansia}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">
                                    Yang diketahui mengenai kebutuhan lansia
                                </td>
                                <td className="pl-4">{data.kebutuhanlansia}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">
                                    Kesempatan yang dilakukan
                                </td>
                                <td className="pl-4">{data.kesempatan}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Asal Kampus</td>
                                <td className="pl-4">{data.asalKampus}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UcareDetails;
