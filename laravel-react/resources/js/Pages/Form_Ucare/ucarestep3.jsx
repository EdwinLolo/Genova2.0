import React from "react";

function ucarestep3({ formData, handleChange }) {
    return (
        <div className="flex flex-col items-center justify-center w-full p-6 bg-white shadow-lg w-3xl rounded-xl">
            <h1 className="my-3 text-3xl font-bold">Syarat & Ketentuan</h1>
            <div className="flex-col w-full p-3 mb-3 rounded-md shadow-md bg-blue-50">
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
            <div className="flex-col w-full p-3 mb-3 rounded-md shadow-md bg-blue-50">
                <h2>Ketentuan Isi Essay</h2>
                <h5>Essay yang dibuat wajib meliputi beberapa hal berikut:</h5>

                <p>
                    <span className="text-lg font-semibold">1. </span>
                    Perkenalan diri
                </p>

                <textarea
                    type="text"
                    name="perkenalandiri"
                    value={formData.perkenalandiri}
                    onChange={handleChange}
                    required
                />

                <p>
                    <span className="text-lg font-semibold">2. </span>
                    Alasan ikut volunteer UCARE yang datang ke tempat lansia
                </p>
                <textarea
                    type="text"
                    name="alasanikut"
                    value={formData.alasanikut}
                    onChange={handleChange}
                    required
                />

                <p>
                    <span className="text-lg font-semibold">3. </span>
                    Kelebihan kekurangan diri
                </p>
                <textarea
                    type="text"
                    name="kelebihankekurangan"
                    value={formData.kelebihankekurangan}
                    onChange={handleChange}
                    required
                />

                <p>
                    <span className="text-lg font-semibold">4. </span>
                    Pandangan kamu terhadap kehidupan lansia
                </p>
                <textarea
                    type="text"
                    name="pandanganlansia"
                    value={formData.pandanganlansia}
                    onChange={handleChange}
                    required
                />

                <p>
                    <span className="text-lg font-semibold">5. </span>
                    Apa yang kamu ketahui mengenai kebutuhan lansia
                </p>
                <textarea
                    type="text"
                    name="kebutuhanlansia"
                    value={formData.kebutuhanlansia}
                    onChange={handleChange}
                    required
                />

                <p>
                    <span className="text-lg font-semibold">6. </span>
                    Apa yang akan kamu berikan dan lakukan jika kamu
                    berkesempatan untuk bertemu langsung dengan para lansia?
                </p>
                <textarea
                    type="text"
                    name="kesempatan"
                    value={formData.kesempatan}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
}

export default ucarestep3;
