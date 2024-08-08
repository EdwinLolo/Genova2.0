import React from "react";

function Ucarestep1() {
    return (
        // <div className="flex items-center justify-center w-full min-h-screen bungkus bg-[#F0F8FF]">
        <div className="flex flex-col items-center justify-center w-full max-w-3xl p-6 bg-white shadow-lg rounded-xl ">
            <h1 className="my-3 text-3xl font-bold">About U-CARE</h1>
            <div className="flex-col w-full p-3 mb-3 rounded-md shadow-md bg-blue-50">
                <p>
                    U-CARE merupakan kegiatan yang akan mempersatukan Legions
                    untuk berkolaborasi serta menginspirasi satu sama lain
                    dengan saling melengkapi dan membangun rasa peduli terhadap
                    sesama atau masyarakat sekitar.
                    <br />
                    Dalam kegiatan U-CARE tahun ini, UMN Festival akan
                    mengadakan voluntrip atau volunteer trip. U-CARE akan
                    memberikan kesempatan dan membuka pendaftaran volunteer,
                    bagi para Legions yang ingin berpartisipasi dan berinteraksi
                    langsung bersama para kakek dan nenek yang berada di rumah
                    pemulihan.
                </p>
                <div className="mt-3">
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
            <div className="flex justify-center gap-8 align-middle">
                <a
                    href="#"
                    className="p-2 text-center text-white bg-blue-600 rounded-md"
                >
                    Handbook Donation
                </a>
                <a
                    href="#"
                    className="p-2 text-center text-white bg-blue-600 rounded-md"
                >
                    Handbook Voluntrip
                </a>
            </div>
        </div>
        // </div>
    );
}

export default Ucarestep1;
