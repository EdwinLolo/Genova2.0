import React from "react";

function ucarestep3({ formData, handleChange }) {
    return (
        <div className="flex flex-col items-center justify-center w-[310px] min-[330px]:w-full p-6 bg-white shadow-lg w-2xl rounded-xl">
            <h1
                className="my-3 text-3xl font-bold text-center"
                style={{ fontFamily: "Akbaal, sans-serif" }}
            >
                Syarat & Ketentuan
            </h1>
            <div
                className="flex-col w-full p-3 mb-3 rounded-md shadow-md bg-blue-50"
                style={{
                    fontFamily: "SanFran-Regular, sans-serif",
                }}
            >
                <h3>Syarat dan Ketentuan Volunteer UCARE:</h3>

                <p>
                    <span className="text-lg font-semibold">1. </span>Memiliki
                    jiwa sosial yang tinggi
                </p>
                <p>
                    <span className="text-lg font-semibold">2. </span>Bersedia
                    meluangkan waktu
                </p>
                <p>
                    <span className="text-lg font-semibold">3. </span>
                    Berkomitmen tinggi Bertanggung jawab Sopan, santun, dan
                    ramah
                </p>
            </div>
            <div
                className="flex-col w-full p-3 mb-3 rounded-md shadow-md bg-blue-50"
                style={{
                    fontFamily: "SanFran-Regular, sans-serif",
                }}
            >
                <h2>Kerjakan Essay Dibawah</h2>
                <div className="flex justify-center my-3">
                    <strong>
                        <a
                            href="https://docs.google.com/document/d/1BjVRKywIYchnzO5TE6xnCd1H83hgxdeJ-AHX15ShfSk/edit?usp=sharing"
                            className="p-2 text-center text-white bg-red-400 rounded-md hover:bg-blue-200"
                            target="_blank"
                        >
                            Soal Essay
                        </a>
                    </strong>
                </div>

                <h2>
                    <strong>Keterangan Pengumpulan Essay</strong>
                    <ol>
                        <li>1. Kerjakan essay dengan sesuai</li>
                        <li>2. Kumpulkan dalam bentuk PDF</li>
                        <li>
                            3. Kumpulkan dengan format nama file
                            "EssayVoluntrip_Nama Lengkap.pdf"
                        </li>
                    </ol>
                </h2>
                <h2>Kumpul:</h2>
                <input
                    type="file"
                    name="docs"
                    accept=".pdf,.docx,.doc"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default ucarestep3;
