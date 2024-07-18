import React from "react";

function ucarestep2({ formData, handleChange }) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg w-[310px] sm:w-[600px] rounded-xl">
            <div className="flex-col w-full p-3 mb-3 rounded-md shadow-md bg-blue-50">
                <div className="mb-5">
                    <label
                        htmlFor="namaLengkap"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        name="namaLengkap"
                        value={formData.namaLengkap}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="umur"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Umur
                    </label>
                    <input
                        type="text"
                        name="umur"
                        value={formData.umur}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="tempatTinggal"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Tempat Tinggal
                    </label>
                    <input
                        type="text"
                        name="tempatTinggal"
                        value={formData.tempatTinggal}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        ID Line
                    </label>
                    <input
                        type="text"
                        name="idLine"
                        value={formData.idLine}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Instagram
                    </label>
                    <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nomor Telepon
                    </label>
                    <input
                        type="text"
                        name="noTelp"
                        value={formData.noTelp}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Asal Kampus
                    </label>
                    <input
                        type="text"
                        name="asalKampus"
                        value={formData.asalKampus}
                        placeholder="isi ‘-‘ jika berasal dari luar kampus"
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        NIM
                    </label>
                    <input
                        type="text"
                        name="nim"
                        value={formData.nim}
                        placeholder="isi ‘-‘ jika bukan mahasiswa"
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Jurusan
                    </label>
                    <input
                        type="text"
                        name="jurusan"
                        value={formData.jurusan}
                        onChange={handleChange}
                        placeholder="isi ‘-‘ jika bukan mahasiswa"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Angkatan
                    </label>
                    <input
                        type="text"
                        name="angkatan"
                        value={formData.angkatan}
                        onChange={handleChange}
                        placeholder="isi ‘-‘ jika bukan mahasiswa"
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="idLine"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
            </div>
        </div>
    );
}

export default ucarestep2;
