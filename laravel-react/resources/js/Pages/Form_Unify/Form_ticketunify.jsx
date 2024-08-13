import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";
import "./FormUnifyStyle.css";
import "../../Components/Font.css";
import LogoUnify from "../../Assets/Rangkaian/LogoMap/Unify_2.png";

function Form_ticketunify() {
    const [selectedForm, setSelectedForm] = useState(null);
    const [data, setData] = useState({
        nama: "",
        jurusan: "",
        angkatan: "",
        noHp: "",
        email: "",
        kodeRef: "",
        jumlahTiket: 0,
        buktiTf: null,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    // + - tiket
    const handleDecrement = (field) => {
        setData((prevData) => ({
            ...prevData,
            [field]: Math.max(prevData[field] - 1, 0), // Prevent negative values
        }));
    };

    const handleIncrement = (field) => {
        setData((prevData) => ({
            ...prevData,
            [field]: prevData[field] + 1,
        }));
    };

    const handleButton = (x) => {
        setSelectedForm(x);
        if (x === "internal") {
            setData({
                nama: "",
                jurusan: "",
                angkatan: "",
                noHp: "",
                email: "",
                kodeRef: "",
                jumlahTiket: 0,
                buktiTf: null,
            });
        } else if (x === "external") {
            setData({
                nama: "",
                noHp: "",
                email: "",
                kodeRef: "",
                jumlahTiket: 0,
                buktiTf: null,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        try {
            const formData = new FormData();
            formData.append("formType", selectedForm);
            for (const key in data) {
                formData.append(key, data[key]);
            }

            const response = await axios.post("/unify", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Clear form data and selection after successful submission
            toast.success("Thankyou for purchasing!");
            setSelectedForm(null);
            setData({
                nama: "",
                jurusan: "",
                angkatan: "",
                noHp: "",
                email: "",
                kodeRef: "",
                jumlahTiket: 0,
                buktiTf: null,
            });
            window.location.href = "/thankyou";
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form. Please try again later.");
        } finally {
            setProcessing(false);
        }
    };

    // buat bg form
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div
                className={`flex-col lg:flex-row flex items-center justify-center w-screen min-h-screen md:px-9 pt-[150px] ${
                    isMobile
                        ? "bungkusformunifyMobile"
                        : "bungkusformunifyDekstop"
                } bg-[#F0F8FF] gap-14 lg:gap-9`}
            >
                <div className="visible w-11/12 lg:w-0 lg:invisible Poster">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Poster unify"
                        className="w-full"
                    />
                </div>
                <div
                    className={`flex-col lg:flex-row w-[300px] min-[375px]:w-[350px] min-[420px]:w-[400px] min-[600px]:w-[595px] ${
                        selectedForm
                            ? `lg:w-4/6 ${
                                  selectedForm === "external"
                                      ? "lg:h-[1850px] xl:h-[1500px]"
                                      : "lg:h-[2050px] xl:h-[1650px]"
                              }`
                            : "lg:h-[800px] xl:h-[530px] lg:w-9/12"
                    } rounded-xl  sm:flex kiri bgkiri1 bgkiri2 p-7 lg:mb-4`}
                >
                    <div className="flex flex-col justify-center w-full h-full align-middle lg:w-1/2 kiri1">
                        <div className="flex justify-center w-full align-middle">
                            <img
                                src={LogoUnify}
                                alt="logounify"
                                className="max-h-72"
                            />
                        </div>
                        <div className="flex-col w-full text-center">
                            <h1
                                style={{ fontFamily: "Akbaal, sans-serif" }}
                                className="text-lg font-bold tracking-wide sm:tracking-widest sm:text-xl lg:text-[1rem] xl:text-xl "
                            >
                                UMN FESTIVAL 2024:
                            </h1>
                            <h1
                                style={{ fontFamily: "Akbaal, sans-serif" }}
                                className="text-[3rem] sm:text-[4rem] lg:text-[3rem] xl:text-[4rem] font-bold tracking-wide text-[#0E4675]"
                            >
                                UNIFY
                            </h1>
                        </div>
                    </div>
                    <div
                        className={`w-full lg:w-1/2 kiri2 flex justify-center flex-col`}
                    >
                        <div className="px-5 py-3 mb-4 rounded-md bg-slate-50">
                            <h1 className="font-bold">EVENT INFORMATION</h1>
                            <p>
                                <span className="font-bold">UNIFY</span>{" "}
                                merupakan kegiatan yang akan mempersatukan{" "}
                                <span className="font-bold">Legions</span> untuk
                                berkolaborasi serta menginspirasi satu sama
                                lain.
                                <br />
                                <span className="font-bold">UNIFY</span> adalah
                                sebuah kegiatan Malam Puncak yang akan
                                dilaksanakan dalam bentuk Konser sebagai bentuk
                                perayaan dari Legions yang telah berhasil
                                melewati 4 Rangkaian UMN Festival lainnya, yaitu{" "}
                                <span className="font-bold">
                                    Unveiling. E-Ulympic, U-Care,
                                </span>{" "}
                                dan juga
                                <span className="font-bold"> Ulympic</span>.
                                <br /> <br />
                                Konser Unify akan diadakan pada:
                                <br />
                                📅: Sabtu, 30 November 2024 <br />
                                📍: Lapangan parkir Universitas Multimedia
                                Nusantara
                            </p>
                        </div>

                        <div className="flex justify-center w-full">
                            <div
                                className={`flex flex-col items-center justify-center ${
                                    selectedForm
                                        ? "w-full"
                                        : "w-2/3 border-cyan-500"
                                } max-w-3xl p-3 bg-slate-100 shadow-lg rounded-xl border-2 `}
                            >
                                <h1
                                    className="text-2xl font-bold text-center text-[#0E4675]"
                                    style={{ fontFamily: "Akbaal, sans-serif" }}
                                >
                                    Ticket Purchase
                                </h1>
                                <div className="flex flex-col gap-2 sm:gap-0 lg:gap-2 xl:gap-0 sm:flex-row lg:flex-col xl:flex-row items-center justify-between mt-3 text-[#0E4675]">
                                    <button
                                        className={`px-6 py-3 sm:mr-2 lg:mr-0 xl:mr-2 font-semibold rounded-lg border-2 ${
                                            selectedForm === "external"
                                                ? "bg-orange-100 border-red-500 text-black border-4"
                                                : "bg-blue-100 border-cyan-500 text-[#0E4675]"
                                        }`}
                                        onClick={() => handleButton("external")}
                                        style={{
                                            fontFamily: "Akbaal, sans-serif",
                                        }}
                                    >
                                        External
                                    </button>
                                    <button
                                        className={`px-6 py-3 font-semibold border-2 rounded-lg ${
                                            selectedForm === "internal"
                                                ? "bg-orange-100 border-red-500 text-black border-4"
                                                : "bg-blue-100 border-cyan-500 text-[#0E4675]"
                                        } `}
                                        onClick={() => handleButton("internal")}
                                        style={{
                                            fontFamily: "Akbaal, sans-serif",
                                        }}
                                    >
                                        Internal
                                    </button>
                                </div>
                                {selectedForm && (
                                    <div>
                                        <div className="flex-col w-full mt-2 ">
                                            <form
                                                onSubmit={handleSubmit}
                                                className="w-full p-6 m-2 mx-auto bg-white border-2 rounded-lg shadow-md md:mx-0 border-blue-50"
                                            >
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="kodeRef"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Kode Referral
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="kodeRef"
                                                        value={data.kodeRef}
                                                        onChange={handleChange}
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                    {errors.kodeRef && (
                                                        <div className="mt-1 text-sm text-red-500">
                                                            {errors.kodeRef}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="nama"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Nama Lengkap
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="nama"
                                                        value={data.nama}
                                                        onChange={handleChange}
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        required
                                                    />
                                                    {errors.nama && (
                                                        <div className="mt-1 text-sm text-red-500">
                                                            {errors.nama}
                                                        </div>
                                                    )}
                                                </div>
                                                {selectedForm ===
                                                    "internal" && (
                                                    <>
                                                        <div className="mb-5">
                                                            <label
                                                                htmlFor="jurusan"
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                Jurusan
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="jurusan"
                                                                value={
                                                                    data.jurusan
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                required
                                                            />
                                                            {errors.jurusan && (
                                                                <div className="mt-1 text-sm text-red-500">
                                                                    {
                                                                        errors.jurusan
                                                                    }
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="mb-5">
                                                            <label
                                                                htmlFor="angkatan"
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                Angkatan
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="angkatan"
                                                                value={
                                                                    data.angkatan
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                required
                                                            />
                                                            {errors.angkatan && (
                                                                <div className="mt-1 text-sm text-red-500">
                                                                    {
                                                                        errors.angkatan
                                                                    }
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="noHp"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        No HP
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="noHp"
                                                        value={data.noHp}
                                                        onChange={handleChange}
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        required
                                                    />
                                                    {errors.noHp && (
                                                        <div className="mt-1 text-sm text-red-500">
                                                            {errors.noHp}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={data.email}
                                                        onChange={handleChange}
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        required
                                                    />
                                                    {errors.email && (
                                                        <div className="mt-1 text-sm text-red-500">
                                                            {errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="jumlahTiket"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Jumlah Tiket
                                                    </label>
                                                    <div className="flex items-center mt-1">
                                                        <button
                                                            type="button"
                                                            className="px-3 py-1 text-white bg-red-600 rounded-l hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                            onClick={() =>
                                                                handleDecrement(
                                                                    "jumlahTiket"
                                                                )
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="number"
                                                            name="jumlahTiket"
                                                            value={
                                                                data.jumlahTiket
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="block w-full px-2 py-2 text-center border-t border-b border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                            required
                                                        />
                                                        <button
                                                            type="button"
                                                            className="px-3 py-1 text-white bg-green-600 rounded-r hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                                                            onClick={() =>
                                                                handleIncrement(
                                                                    "jumlahTiket"
                                                                )
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    {errors.jumlahTiket && (
                                                        <div className="mt-1 text-sm text-red-500">
                                                            {errors.jumlahTiket}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-5">
                                                    <label
                                                        htmlFor="buktiTf"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Bukti Transfer <br />
                                                        <span>
                                                            Blu/BCA Digital -
                                                            007523060589 / Grace
                                                            Aretha
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        name="buktiTf"
                                                        onChange={handleChange}
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        required
                                                    />
                                                    {errors.buktiTf && (
                                                        <div className="mt-1 text-sm text-red-500">
                                                            {errors.buktiTf}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className="w-full mx-auto text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                        disabled={processing}
                                                    >
                                                        {processing
                                                            ? "Submitting..."
                                                            : "Buy Ticket"}
                                                    </button>
                                                </div>
                                            </form>
                                            <div className="w-full px-0 pt-2 info">
                                                <div className="w-full p-4 bg-white border-2 rounded-lg shadow-md border-blue-50">
                                                    <h1 className="font-bold">
                                                        UNIFY UMN FESTIVAL 2024
                                                    </h1>
                                                    <p>
                                                        30 November 2024
                                                        14.00-22.00 Universitas
                                                        Multimedia Nusantara
                                                        Jalan Scientia Boulevard
                                                        Gading, Curug Sangereng,
                                                        Serpong, Kabupaten
                                                        Tangerang, Banten 15810
                                                    </p>
                                                </div>
                                                <div className="w-full p-4 mt-5 bg-white border-2 rounded-lg shadow-md border-blue-50">
                                                    <h1 className="font-bold">
                                                        Ringkasan Pesanan
                                                    </h1>
                                                    <div className="flex items-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            enable-background="new 0 0 512 512"
                                                            viewBox="0 0 512 512"
                                                            id="ticket"
                                                            className="max-w-[30px] max-h-[30px] mr-3 flex align-middle"
                                                        >
                                                            <path
                                                                d="M505.081,196.611c3.82,0,6.919-3.097,6.919-6.919V123.56c0-18.536-15.081-33.615-33.617-33.615H33.613
        C15.077,89.945,0,105.024,0,123.56v66.133c0,3.822,3.099,6.919,6.919,6.919c32.748,0,59.387,26.642,59.387,59.387
        s-26.64,59.387-59.387,59.387c-3.82,0-6.919,3.097-6.919,6.919v66.135c0,18.536,15.077,33.615,33.613,33.615h444.77
        c18.536,0,33.617-15.079,33.617-33.615v-66.135c0-3.822-3.099-6.919-6.919-6.919c-32.748,0-59.387-26.642-59.387-59.387
        S472.333,196.611,505.081,196.611z M431.856,255.999c0,38.043,29.162,69.403,66.306,72.901v59.541
        c0,10.905-8.874,19.777-19.779,19.777H174.297V375.94c0-3.822-3.099-6.919-6.919-6.919s-6.919,3.097-6.919,6.919v32.277H33.613
        c-10.905,0-19.775-8.872-19.775-19.777V328.9c37.144-3.498,66.306-34.858,66.306-72.901s-29.162-69.403-66.306-72.901V123.56
        c0-10.905,8.869-19.777,19.775-19.777H160.46v32.275c0,3.822,3.099,6.919,6.919,6.919s6.919-3.097,6.919-6.919v-32.275h304.086
        c10.905,0,19.779,8.872,19.779,19.777v59.538C461.018,186.596,431.856,217.956,431.856,255.999z M174.297,234.92v42.158
        c0,3.822-3.099,6.919-6.919,6.919s-6.919-3.097-6.919-6.919V234.92c0-3.822,3.099-6.919,6.919-6.919
        C171.198,228.001,174.297,231.098,174.297,234.92z M174.297,305.429v42.162c0,3.822-3.099,6.919-6.919,6.919
        s-6.919-3.097-6.919-6.919v-42.162c0-3.822,3.099-6.919,6.919-6.919C171.198,298.51,174.297,301.607,174.297,305.429z
        M174.297,164.409v42.16c0,3.822-3.099,6.919-6.919,6.919s-6.919-3.097-6.919-6.919v-42.16c0-3.822,3.099-6.919,6.919-6.919
        C171.198,157.49,174.297,160.587,174.297,164.409z M378.973,170.377c0,3.822-3.099,6.919-6.919,6.919H249.82
        c-3.82,0-6.919-3.097-6.919-6.919s3.099-6.919,6.919-6.919h122.234C375.874,163.458,378.973,166.555,378.973,170.377z
        M378.973,227.458c0,3.822-3.099,6.919-6.919,6.919H249.82c-3.82,0-6.919-3.097-6.919-6.919s3.099-6.919,6.919-6.919h122.234
        C375.874,220.539,378.973,223.636,378.973,227.458z M378.973,284.539c0,3.822-3.099,6.919-6.919,6.919H249.82
        c-3.82,0-6.919-3.097-6.919-6.919c0-3.822,3.099-6.919,6.919-6.919h122.234C375.874,277.62,378.973,280.717,378.973,284.539z
        M378.973,341.62c0,3.822-3.099,6.919-6.919,6.919H249.82c-3.82,0-6.919-3.097-6.919-6.919c0-3.822,3.099-6.919,6.919-6.919h122.234
        C375.874,334.702,378.973,337.798,378.973,341.62z"
                                                            ></path>
                                                        </svg>
                                                        <div>
                                                            <h2 className="font-semibold">
                                                                Tiket Unify
                                                            </h2>
                                                            <p className="text-gray-500">
                                                                {
                                                                    data.jumlahTiket
                                                                }{" "}
                                                                tiket x
                                                                Rp.75.000
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <hr />
                                                    <div className="flex justify-between">
                                                        <h2>Total</h2>
                                                        <p>
                                                            Rp.
                                                            {data.jumlahTiket *
                                                                75000}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`invisible w-0 ${
                        selectedForm ? "lg:w-2/6" : "lg:w-3/12"
                    } sm:visible Poster`}
                >
                    <img
                        src="data:image/jpeg;base64,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"
                        alt="Poster unify"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Form_ticketunify;
