import React from "react";

function UnifyForm({
    selectedForm,
    data,
    errors,
    processing,
    handleChange,
    handleSubmit,
}) {
    return (
        <div className="flex justify-center w-full">
            {selectedForm && (
                <div className="flex flex-col items-center p-5 md:p-10 w-full md:w-3/4 text-white font-sans ">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-lg bg-inherit text-white p-6"
                    >
                        <div className="mb-5">
                            <label
                                htmlFor="kodeRef"
                                className="block text-sm font-medium text-white"
                            >
                                Kode Referral
                            </label>
                            <input
                                type="text"
                                name="kodeRef"
                                value={data.kodeRef}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.kodeRef && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.kodeRef}
                                </div>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="nama"
                                className="block text-sm font-medium text-white"
                            >
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                name="nama"
                                value={data.nama}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.nama && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.nama}
                                </div>
                            )}
                        </div>
                        {selectedForm === "internal" && (
                            <>
                                <div className="mb-5">
                                    <label
                                        htmlFor="jurusan"
                                        className="block text-sm font-medium text-white"
                                    >
                                        Jurusan
                                    </label>
                                    <input
                                        type="text"
                                        name="jurusan"
                                        value={data.jurusan}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.jurusan && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.jurusan}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="angkatan"
                                        className="block text-sm font-medium text-white"
                                    >
                                        Angkatan
                                    </label>
                                    <input
                                        type="text"
                                        name="angkatan"
                                        value={data.angkatan}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                    {errors.angkatan && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.angkatan}
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                        <div className="mb-5">
                            <label
                                htmlFor="noHp"
                                className="block text-sm font-medium text-white"
                            >
                                No HP
                            </label>
                            <input
                                type="text"
                                name="noHp"
                                value={data.noHp}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.noHp && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.noHp}
                                </div>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.email && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="jumlahTiket"
                                className="block text-sm font-medium text-white"
                            >
                                Jumlah Tiket
                            </label>
                            <input
                                type="number"
                                name="jumlahTiket"
                                value={data.jumlahTiket}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.jumlahTiket && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.jumlahTiket}
                                </div>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="buktiTf"
                                className="block text-sm font-medium text-white"
                            >
                                Bukti Transfer
                            </label>
                            <input
                                type="file"
                                name="buktiTf"
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 bg-inherit py-2 border-2 text-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required
                            />
                            {errors.buktiTf && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.buktiTf}
                                </div>
                            )}
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center"
                                disabled={processing}
                            >
                                {processing
                                    ? "Submitting..."
                                    : "Register New Data"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default UnifyForm;
