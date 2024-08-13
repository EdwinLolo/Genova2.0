import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";
import "./FormUnifyStyle.css";
import "../../Components/Font.css";
import LogoUnify from "../../Assets/Rangkaian/LogoMap/Unify_2.png";
import PosterUnify from "../../Assets/Rangkaian/Unify/Poster.jpg";
import Footers from "../../Components/Footer/Footer";

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

            setTimeout(() => {
                window.location.href = "/thankyou";
            }, 1000);
        } catch (error) {
            console.error("Error submitting form:", error.response.data.errors);

            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                Object.values(error.response.data.errors).forEach((err) => {
                    err.forEach((e) => {
                        toast.error(e);
                    });
                });
            } else {
                toast.error("Error submitting form. Please try again later.");
            }
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
                        src={PosterUnify}
                        alt="Poster unify"
                        className="w-full"
                    />
                </div>
                <div
                    className={`flex-col lg:flex-row w-[300px] min-[375px]:w-[350px] min-[420px]:w-[400px] min-[600px]:w-[595px] ${
                        selectedForm
                            ? `lg:w-4/6 ${
                                  selectedForm === "external"
                                      ? "lg:h-[2350px] xl:h-[1800px]"
                                      : "lg:h-[2500px] xl:h-[2000px]"
                              }`
                            : "lg:h-[1400px] xl:h-[930px] lg:w-9/12"
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
                                {/* <span className="font-bold">UNIFY</span>{" "}
                                merupakan kegiatan yang akan mempersatukan{" "}
                                <span className="font-bold">Legions</span> untuk
                                berkolaborasi serta menginspirasi satu sama
                                lain.
                                <br /> <br />
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
                                <br /> <br /> */}
                                Konser Unify akan diadakan pada:
                                <br />
                                📅: Sabtu, 30 November 2024 <br />
                                📍: Lapangan parkir Universitas Multimedia
                                Nusantara
                                <br /> <br />
                                Ticket Price💰 Rp. 75,000 / Ticket
                                <br />
                                Format Berita : RG1 - Jumlah tiket &rarr; Contoh
                                : RG1 - 10 tiket
                                <br />
                                <br />
                                Terms and Conditions
                                <br />
                                1. Dilarang melakukan manipulasi pembelian tiket
                                UNIFY!
                                <br />
                                2. Apabila membeli lebih dari 1 tiket, cukup
                                mencantumkan 1 SS bukti transfer saja!
                                <br />
                                3. Tiket yang sudah dibeli tidak dapat di
                                refund. <br />
                                4. Tiket yang sudah ditukarkan menjadi tanggung
                                jawab pembeli dan bukan tanggung jawab panitia
                                UMN Festival 2024! <br />
                                5. Penonton/peserta WAJIB berusia diatas 12
                                tahun. <br />
                                6. Penonton/peserta yang berusia dibawah 17
                                tahun SANGAT DISARANKAN untuk didampingi oleh
                                orang DEWASA. <br />
                                7. Jika membeli lebih dari 1 tiket dalam form
                                yang sama, WAJIB mengambil tiket bersamaan pada
                                waktu pengambilan tiket berlangsung.
                                <br />
                                <br />
                                Contact Person:
                                <br />
                                👸🏻 Line: Grace - gracearetha_17 <br />
                                🤴🏻 WhatsApp: Howard - 081802360509
                                <br /> <br />
                                For more info, follow us on instagram
                                @umnfestival Thankyou.
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
                                    <div className="w-full">
                                        <div className="flex-col w-full mt-2 ">
                                            {/* <div className="w-full px-0 pt-2 info">
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
                                            </div> */}
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
                                                        placeholder="'-' jika tidak ada"
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
                                                        placeholder="Isi dengan nomor HP yang bisa dihubungi"
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
                                                <div className="w-full p-4 mt-5 mb-5 bg-white border-2 rounded-lg shadow-md border-blue-50">
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
                        src={PosterUnify}
                        alt="Poster unify"
                        className="w-full"
                    />
                </div>
            </div>
            <Footers />
        </div>
    );
}

export default Form_ticketunify;
