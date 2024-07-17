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
                        namaLengkap
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
                        tempatTinggal
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
                        idLine
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
                        instagram
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
                        noTelp
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
                        nim
                    </label>
                    <input
                        type="text"
                        name="nim"
                        value={formData.nim}
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
                        jurusan
                    </label>
                    <input
                        type="text"
                        name="jurusan"
                        value={formData.jurusan}
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
                        angkatan
                    </label>
                    <input
                        type="text"
                        name="angkatan"
                        value={formData.angkatan}
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
                        email
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
