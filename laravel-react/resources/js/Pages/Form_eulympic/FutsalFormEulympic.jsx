import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

import {
    CalendarDays,
    MapPin,
    Info,
    Book,
    Trophy,
    Clock,
    Shirt,
    UsersRound,
    ShieldAlert,
    ChevronDown,
    ChevronUp,
    BookUser,
    NotebookTabs,
} from "lucide-react";

import BgFutsal from "../../Assets/Ulympic/Futsal/bgFutsal.jpg";
import boxPc from "../../Assets/Ulympic/Futsal/boxPCFutsal.png";
import BgFutsalMobile from "../../Assets/Ulympic/Futsal/bgFutsalMobile.jpg";
import boxMobile from "../../Assets/Ulympic/Futsal/boxMobileFutsal.png";

const exclamationMarkSvg = encodeURIComponent(`
    <svg fill="#ff0a0a" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-4.53 -4.53 54.37 54.37" xml:space="preserve" stroke="#ff0a0a" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.09062200000000001"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <path d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656 c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635 C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001 c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0 c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578 c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0 c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29 c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z"></path>
            </g>
        </g>
    </svg>
    `);
    
    const InfoSection = ({
        title,
        content,
        icon: Icon,
        id,
        isOpen,
        toggleOpen,
    }) => {
        const [hasClicked, setHasClicked] = useState(false);
    
        const handleClick = () => {
            setHasClicked(true);
            toggleOpen(id);
        };
    
        return (
            <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden mb-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102">
                <button
                    className="w-full p-4 md:p-5 text-left font-bold flex justify-between items-center text-base md:text-lg"
                    onClick={handleClick}
                >
                    <span className="flex items-center text-blue-600">
                        <Icon className="mr-2 md:mr-3" size={24} />
                        {title}
                        {!hasClicked && (
                            <img
                                src={`data:image/svg+xml;charset=UTF-8,${exclamationMarkSvg}`}
                                alt="!"
                                className="ml-2 w-5 h-5"
                            />
                        )}
                    </span>
                    <span
                        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                </button>
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}
                >
                    <div className="p-4 md:p-5 bg-gray-50">
                        {content.split("\n").map((line, index) => (
                            <p
                                key={index}
                                className="text-gray-700 leading-relaxed text-sm md:text-base mb-2"
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

const Button = ({ children, onClick }) => (
    <button
        className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg w-full md:w-auto hover:bg-gray-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-sm md:text-base"
        onClick={onClick}
    >
        {children}
    </button>
);

function FutsalFormEulympic({ lombas, captcha }) {
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const { data, setData } = useForm({
        lombaId: null,
        namaTeam: "",
        buktiTf: null,
        members: [],
    });

    const [selectedLomba, setSelectedLomba] = useState(null);
    const [isInternal, setIsInternal] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [openSection, setOpenSection] = useState(null);

    const toggleOpen = (id) => {
        setOpenSection(openSection === id ? null : id);
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleButton = (lomba) => {
        setSelectedLomba(lomba);
        setIsInternal(lomba.isInternal);
        setData({
            lombaId: lomba.id_lomba,
            isInternal: lomba.isInternal,
            namaTeam: "",
            buktiTf: null,
            members: Array.from({ length: lomba.besarTeam }, () => ({
                namaLengkap: "",
                nim: "",
                idLine: "",
                ktm: null,
                asalKampus: "",
            })),
        });
    };

    const handleInputChange = (index, field, value) => {
        const updatedMembers = [...data.members];
        updatedMembers[index] = {
            ...updatedMembers[index],
            [field]: value,
        };
        setData({
            ...data,
            members: updatedMembers,
        });
    };

    const handleFileChange = (index, file) => {
        const updatedMembers = [...data.members];
        updatedMembers[index] = {
            ...updatedMembers[index],
            ktm: file,
        };
        setData({
            ...data,
            members: updatedMembers,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        // Check reCAPTCHA
        if (!recaptchaValue) {
            alert("Please complete the CAPTCHA");
            setProcessing(false);
            return;
        }

        const formData = new FormData();
        formData.append("lombaId", data.lombaId);
        formData.append("namaTeam", data.namaTeam);
        formData.append("buktiTf", data.buktiTf);
        formData.append("recaptchaValue", recaptchaValue);

        // Append members to formData
        data.members.forEach((member, index) => {
            formData.append(
                `members[${index}][namaLengkap]`,
                member.namaLengkap
            );
            formData.append(`members[${index}][nim]`, member.nim);
            formData.append(`members[${index}][idLine]`, member.idLine);
            formData.append(`members[${index}][asalKampus]`, member.asalKampus);
            if (member.ktm) {
                formData.append(`members[${index}][ktm]`, member.ktm);
            }
        });

        try {
            const response = await axios.post("/team/input/data", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Team input data processed successfully");
        } catch (error) {
            console.error("Error submitting form:", error);

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
                toast.error(
                    "Error submitting form. Please refresh the page and try again later."
                );
            }
        } finally {
            setProcessing(false);
        }
    };

    const eventInfo = {
        internal: "30 September - 11 Oktober 2024",
        external: "30 Oktober - 8 November 2024",
        location: "Lapangan D23 UMN",
    };

    const EventInfoBox = ({ icon: Icon, text }) => (
        <div className="flex items-center justify-center space-x-2 text-slate-800">
            <Icon size={20} />
            <span className="text-sm md:text-base">{text}</span>
        </div>
    );

    const MainContent = ({ isMobile }) => (
        <div className={`text-center ${isMobile ? "p-4" : "w-3/4 p-6"}`}>
            <h1
                className={`font-bold text-slate-800 mb-4 ${
                    isMobile ? "text-2xl" : "text-4xl md:text-5xl"
                }`}
            >
                FUTSAL
            </h1>

            <div className="mb-4 md:mb-6 space-y-2 md:space-y-3">
                <EventInfoBox
                    icon={CalendarDays}
                    text={`Internal: ${eventInfo.internal}`}
                />
                <EventInfoBox
                    icon={CalendarDays}
                    text={`External: ${eventInfo.external}`}
                />
                <EventInfoBox icon={MapPin} text={eventInfo.location} />
            </div>

            <div
                className={`${
                    isMobile ? "space-y-3" : "flex justify-center space-x-4"
                }`}
            >
                {lombas.map((lomba, index) => (
                    <Button key={index} onClick={() => handleButton(lomba)}>
                        {lomba.namaLomba}
                    </Button>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="relative min-h-screen pt-40">
                <div
                    className="fixed inset-0 bg-no-repeat bg-cover bg-center hidden md:block"
                    style={{ backgroundImage: `url(${BgFutsal})` }}
                />
                <div
                    className="fixed inset-0 bg-no-repeat bg-cover bg-center md:hidden"
                    style={{ backgroundImage: `url(${BgFutsalMobile})` }}
                />
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-start p-4 md:p-6 overflow-y-auto">
                    <div className="w-full max-w-5xl space-y-4 md:space-y-6 mb-6 md:mb-10">
                        <InfoSection
                            id="aturan"
                            icon={Info}
                            title="Aturan Pertandingan"
                            content={`• Peraturan Wajib
- Pemain yang telah terdaftar di 1 tim tidak boleh mendaftarkan diri di tim lain
- Pemain yang terdaftar harus berada di bench,apabila tidak berada di bench dengan alas an
yang tidak jelas maka akan di diskualifikasi.
- Bola yang akan digunakan adalah bola 62 - 64 cm (size 4). - Berat bola yaitu 400 - 440 gram.
- 1 babak terdapat 1 time out boleh siapapun yang call time out diantara 2 tim tersebut.
- Bagi pemain yang berperilaku buruk akan diberikan sanski kartu kuning/merah.

• Durasi Pertandingan :
- 35 Menit
-1 x 15 Menit untuk tiap babak
-Total waktu pertandingan adalah 2x15 menit untuk 1 pertandingan
-Waktu Tambahan (Overtime apabila pada akhir pertandingan skor nya sama) : Langsung adu
Pinalti
• Jumlah Pemain :
- 10 pemain
- Minimal mendaftarkan 8 pemain tiap tim
- Setiap tim boleh memiliki maksimal 1 pelatih dan 1 official

-Official/Pelatih wajib menggunakna pakaian sesuai dengan peraturan kampus beserta KTM
-Pemain/Official dan Pelatih harus memiliki nama yang sama sesuai yang terdaftar dan akan di
check ulang pada saat pendaftaran ulang`}
                            isOpen={openSection === "aturan"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="kostum"
                            icon={Shirt}
                            title="Pakaian dan Perlengkapan"
                            content={`• Terang
Wajib memiliki warna yang terang(contoh apabila semua memakai terang,tidak boleh ada
yang memakai baju gelap )
• Gelap
Wajib memakai warna yang gelap(tidak boleh memakai baju berwarna terang)
-Pemain harus menggunakan jersey/kostum bernomor (0-99)
-Pemain dilarang menggunakan kalung,gelang,jam tangan maupun aksesoris yang dapat
mengganggu berjalannya pertandingan
-Pemain wajib menggunakan Sepatu futsal (bukan sepatu sepakbola)
-Pemain wajib menggunakan kaos kaki minimal diatas betis
-Pemain wajib memiliki kuku pendek
-Pemain tidak boleh menggunakan angka yang sama dengan rekan setim nya
- Pemain wajib menggunakan deker`}
                            isOpen={openSection === "kostum"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="penilaian"
                            icon={Shirt}
                            title="Penilaian"
                            content={`• Sistem Skor:
-Setiap gol diitung 1 poin

• Foul dan Penalti :
-Jika pemain melakukan pelanggaran di kotak penalti, akan diberikan foul dan tim lawan akan
mendapat pinalti.
• Peraturan Timeout: 60 Detik

• Protes dan Penanganannya:
Protes lebih baik langsung dikomunikasikan kepada panitia terdekat`}
                            isOpen={openSection === "penilaian"}
                            toggleOpen={toggleOpen}
                        />
                        <InfoSection
                            id="jadwal"
                            icon={Shirt}
                            title="Jadwal Pertandingan"
                            content={`• Pendaftaran Ulang:
- Pendaftaran Ulang akan dilakukan 20 menitsebelum match yang dijadwalkan (minimal 5
orang sebelum pertandingan dimulai)
-Setiap tim wajib melakukan pendaftaran ulang maksimal 10 menitsebelum jadwal
pertandingan
• Detail Semifinal dan Final:
Waktu semi bersih (timeout waktu
berhenti)
• Pelanggaran dan Sanksi:
-Diskualifikasi apabila tim yang datang kurang dari jumlah minimal yaitu 5 orang,,dan jika
telat 10 menit lebih dari rundown yang sudah diberi maka akan didiskualifikasi juga
-Pemain yang membuat keributan akan dikenakan denda Rp.100.000,00 dan wajib
membayar,pemain tersebut aka didiskualifikasi dari Ulympic 2024`}
                            isOpen={openSection === "jadwal"}
                            toggleOpen={toggleOpen}
                        />
                        <InfoSection
                            id="hadiah"
                            icon={Trophy}
                            title="Hadiah dan Penghargaan"
                            content={`• Juara Pertama: Rp 1.500.000 (Internal)
• Juara Kedua: Rp 1.200.000 (Internal)
• Juara Ketiga: Rp 800.000 (Internal)
• Juara Pertama: Rp 2.500.000 (Eksternal)
• Juara Kedua: Rp 1.500.000 (Eksternal)
• Juara Ketiga: Rp 1.000.000 (Eksternal)
• Penghargaan Individu`}
                            isOpen={openSection === "hadiah"}
                            toggleOpen={toggleOpen}
                        />
                    </div>

                    <div
                        className="hidden md:flex bg-no-repeat bg-cover bg-center w-full max-w-5xl aspect-video items-center justify-center p-6 md:p-8 mb-6 md:mb-10"
                        style={{ backgroundImage: `url(${boxPc})` }}
                    >
                        <MainContent isMobile={false} />
                    </div>
                    <div
                        className="md:hidden bg-no-repeat bg-cover bg-center w-full max-w-sm aspect-[9/16] flex items-center justify-center p-4 mb-6"
                        style={{ backgroundImage: `url(${boxMobile})` }}
                    >
                        <MainContent isMobile={true} />
                    </div>

                    {selectedLomba && (
                        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg mt-6">
                            <div className="mb-4 text-2xl font-bold text-center text-gray-700">
                                {selectedLomba.namaLomba}
                            </div>
                            <form
                                onSubmit={handleFormSubmit}
                                encType="multipart/form-data"
                                className="p-6 bg-white rounded-lg shadow-md"
                            >
                                <div className="overflow-x-auto">
                                    <div className="block">
                                        {data.members.map((member, index) => (
                                            <div
                                                key={index}
                                                className="mb-4 bg-white rounded-lg shadow-md"
                                            >
                                                <div className="px-4 py-2 font-semibold bg-gray-200">
                                                    Anggota {index + 1}
                                                </div>
                                                <div className="px-4 py-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Nama Lengkap
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`namaLengkap[${index}]`}
                                                        value={
                                                            member.namaLengkap
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "namaLengkap",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="px-4 py-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        NIM
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`nim[${index}]`}
                                                        value={member.nim}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "nim",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="px-4 py-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        ID Line
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`idLine[${index}]`}
                                                        value={member.idLine}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "idLine",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div className="px-4 py-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        KTM
                                                    </label>
                                                    <input
                                                        type="file"
                                                        name={`ktm[${index}]`}
                                                        accept=".jpg,.jpeg,.png"
                                                        onChange={(e) =>
                                                            handleFileChange(
                                                                index,
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                        required
                                                        className="sm:text-sm"
                                                    />
                                                </div>
                                                {isInternal === "false" && (
                                                    <div className="px-4 py-2">
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Asal Kampus
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name={`asalKampus[${index}]`}
                                                            value={
                                                                member.asalKampus
                                                            }
                                                            onChange={(e) =>
                                                                handleInputChange(
                                                                    index,
                                                                    "asalKampus",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="namaTeam"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nama Team:
                                    </label>
                                    <input
                                        type="text"
                                        id="namaTeam"
                                        name="namaTeam"
                                        value={data.namaTeam}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                namaTeam: e.target.value,
                                            })
                                        }
                                        required
                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="buktiTf"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Bukti Transfer:
                                    </label>
                                    <input
                                        type="file"
                                        id="buktiTf"
                                        name="buktiTf"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                buktiTf: e.target.files[0],
                                            })
                                        }
                                        required
                                        className="lg:text-lg"
                                    />
                                </div>
                                <div className="mb-5 captcha_unify">
                                    <ReCAPTCHA
                                        sitekey={captcha}
                                        onChange={handleRecaptchaChange}
                                    />
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 lg:text-lg"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Submitting..."
                                            : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default FutsalFormEulympic;
