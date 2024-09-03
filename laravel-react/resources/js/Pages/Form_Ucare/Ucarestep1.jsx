import React from "react";

import "../../Components/Font.css";

function Ucarestep1() {
    return (
        // <div className="flex items-center justify-center w-full min-h-screen bungkus bg-[#F0F8FF]">
        <div className="flex flex-col items-center justify-center w-full max-w-3xl p-6 bg-white shadow-lg rounded-xl ">
            <h1
                className="my-3 text-3xl font-bold text-center"
                style={{ fontFamily: "Akbaal, sans-serif" }}
            >
                About U-CARE
            </h1>
            <div className="flex-col w-full p-3 mb-3 rounded-md shadow-md bg-blue-50">
                <p
                    style={{
                        fontFamily: "SanFran-Regular, sans-serif",
                    }}
                >
                    U-CARE merupakan kegiatan yang akan mempersatukan Legions
                    untuk berkolaborasi serta menginspirasi satu sama lain
                    dengan saling melengkapi dan membangun rasa peduli.
                    <br />
                    Dalam kegiatan U-CARE tahun ini, UMN Festival akan
                    mengadakan voluntrip atau volunteer trip. U-CARE akan
                    memberikan kesempatan dan membuka pendaftaran volunteer,
                    bagi para Legions yang ingin berpartisipasi dan berinteraksi
                    langsung bersama para kakek dan nenek yang berada di rumah
                    pemulihan.
                </p>
                <div
                    className="mt-3"
                    style={{
                        fontFamily: "SanFran-Regular, sans-serif",
                    }}
                >
                    <p>
                        <span className="text-lg font-semibold">
                            Tempat Acara:{" "}
                        </span>
                        Panti Jompo Usia Emas Rumah Pemulihan Kasih Anugerah
                    </p>
                    <p>
                        <span className="text-lg font-semibold">
                            Tanggal Acara:{" "}
                        </span>
                        22 September 2024
                    </p>
                    <p>
                        <span className="text-lg font-semibold">
                            Waktu Acara:{" "}
                        </span>
                        08.30 - 13.00 WIB
                    </p>
                    <p>
                        <span className="text-lg font-semibold">
                            Harga Voluntrip UCARE :{" "}
                        </span>
                    </p>
                    <p>&emsp;Internal: Rp 90.000</p>
                    <p>&emsp;Eksternal: Rp 105.000</p>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full gap-3 align-middle sm:flex-row">
                {/* <div className="flex flex-col w-full gap-3 md:flex-row"> */}
                <div className="flex items-center justify-center text-center">
                    <a
                        href="https://linktr.ee/webufest"
                        target="_blank"
                        style={{
                            fontFamily: "SanFran-Regular, sans-serif",
                        }}
                        className="w-[250px] min-[400px]:w-[300px] sm:text-lg p-2 text-white bg-blue-600 rounded-md hover:bg-blue-100 hover:text-black focus:outline-none hover:ring focus:ring-red-500"
                    >
                        Handbook Voluntrip & Donasi
                    </a>
                </div>
                <div className="flex items-center justify-center text-center">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScpHSnYrBJrOH2gHhv-Hjt2i7fqahrHypSyNug0o_GyG7C9xA/viewform"
                        target="_blank"
                        style={{
                            fontFamily: "SanFran-Regular, sans-serif",
                        }}
                        className="w-[250px] min-[400px]:w-[300px] sm:text-lg p-2 text-white bg-blue-600 rounded-md hover:bg-blue-100 hover:text-black focus:outline-none hover:ring focus:ring-red-500"
                    >
                        Social Campaign dan Donasi
                    </a>
                </div>
                {/* </div> */}

                {/* <div className="flex gap-3">
                    <a
                        href="https://drive.google.com/file/d/1lXViu2ei529wSl7LtpgmVIpqwnoSOeK6/view?usp=sharing"
                        target="_blank"
                        style={{
                            fontFamily: "SanFran-Regular, sans-serif",
                        }}
                        className="p-2 w-[120px] lg:w-[300px] sm:text-lg text-center text-white bg-blue-600 rounded-md hover:bg-blue-100 hover:text-black focus:outline-none hover:ring focus:ring-red-500"
                    >
                        Handbook Voluntrip
                    </a>
                    <a
                        href="https://docs.google.com/document/d/184VyVlbpvmRmg1-tceU8XfdCFDU-RR3DNc_QvqMtx0o/edit"
                        target="_blank"
                        style={{
                            fontFamily: "SanFran-Regular, sans-serif",
                        }}
                        className="w-[250px] min-[400px]:w-[300px] sm:text-lg p-2 flex justify-center items-center text-center text-white bg-blue-600 rounded-md hover:bg-blue-100 hover:text-black focus:outline-none hover:ring focus:ring-red-500"
                    >
                        Twibbon Voluntrip
                    </a>
                </div> */}
            </div>
        </div>
        // </div>
    );
}

export default Ucarestep1;
