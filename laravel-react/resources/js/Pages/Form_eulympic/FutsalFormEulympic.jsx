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
    List,
    CheckCircle,
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
        <div className="mb-4 overflow-hidden transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-lg bg-opacity-90 hover:scale-102">
            <button
                className="flex items-center justify-between w-full p-4 text-base font-bold text-left md:p-5 md:text-lg"
                onClick={handleClick}
            >
                <span className="flex items-center text-blue-600">
                    <Icon className="mr-2 md:mr-3" size={24} />
                    {title}
                    {!hasClicked && (
                        <img
                            src={`data:image/svg+xml;charset=UTF-8,${exclamationMarkSvg}`}
                            alt="!"
                            className="w-5 h-5 ml-2"
                        />
                    )}
                </span>
                <span
                    className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    {isOpen ? (
                        <ChevronUp size={20} />
                    ) : (
                        <ChevronDown size={20} />
                    )}
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
                <div
                    className="p-4 text-sm leading-relaxed text-gray-700 md:p-5 bg-gray-50 md:text-base"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};

const Button = ({ children, onClick }) => (
    <button
        className="w-full px-4 py-2 text-sm font-semibold text-black transition-all duration-200 transform bg-white rounded-lg shadow-md md:px-6 md:py-3 md:w-auto hover:bg-gray-200 hover:shadow-lg hover:-translate-y-1 md:text-base"
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

            <div className="mb-4 space-y-2 md:mb-6 md:space-y-3">
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
                    className="fixed inset-0 hidden bg-center bg-no-repeat bg-cover md:block"
                    style={{ backgroundImage: `url(${BgFutsal})` }}
                />
                <div
                    className="fixed inset-0 bg-center bg-no-repeat bg-cover md:hidden"
                    style={{ backgroundImage: `url(${BgFutsalMobile})` }}
                />
                <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4 overflow-y-auto md:p-6">
                    <div className="w-full max-w-5xl mb-6 space-y-4 md:space-y-6 md:mb-10">
                        <InfoSection
                            id="aturan"
                            icon={Info}
                            title="Aturan Pertandingan"
                            content={`<p><strong>Peraturan Wajib:</strong></p>
    <ol>
        <li><strong>Pemain</strong> yang telah terdaftar di 1 tim tidak boleh mendaftarkan diri di tim lain.</li>
        <li><strong>Pemain</strong> yang terdaftar harus berada di <strong>bench</strong>; apabila tidak berada di bench dengan alasan yang tidak jelas maka akan di <strong>diskualifikasi</strong>.</li>
        <li>Bola yang akan digunakan adalah <strong>bola 62 - 64 cm (size 4)</strong>. Berat bola yaitu <strong>400 - 440 gram</strong>.</li>
        <li>1 babak terdapat 1 <strong>time out</strong> boleh siapapun yang call time out diantara 2 tim tersebut.</li>
        <li>Bagi pemain yang berperilaku buruk akan diberikan <strong>sanksi kartu kuning/merah</strong>.</li>
    </ol>
    <p><strong>Durasi Pertandingan:</strong></p>
    <ol>
        <li><strong>35 Menit</strong></li>
        <li>1 x <strong>15 Menit</strong> untuk tiap babak</li>
        <li>Total waktu pertandingan adalah <strong>2x15 menit</strong> untuk 1 pertandingan</li>
        <li><strong>Waktu Tambahan (Overtime)</strong> apabila pada akhir pertandingan skor sama: Langsung adu <strong>Pinalti</strong></li>
    </ol>
    <p><strong>Jumlah Pemain:</strong></p>
    <ol>
        <li><strong>10 pemain</strong></li>
        <li>Minimal mendaftarkan <strong>8 pemain</strong> tiap tim</li>
        <li>Setiap tim boleh memiliki maksimal <strong>1 pelatih dan 1 official</strong></li>
        <li><strong>Official/Pelatih</strong> wajib menggunakan pakaian sesuai dengan peraturan kampus beserta <strong>KTM</strong></li>
        <li><strong>Pemain/Official dan Pelatih</strong> harus memiliki nama yang sama sesuai yang terdaftar dan akan di <strong>check ulang</strong> pada saat pendaftaran ulang</li>
    </ol>`}
                            isOpen={openSection === "aturan"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="kostum"
                            icon={Shirt}
                            title="Pakaian dan Perlengkapan"
                            content={`<p><strong>Terang:</strong></p>
    <ol>
        <li>Wajib memiliki warna yang <strong>terang</strong> (contoh: apabila semua memakai terang, tidak boleh ada yang memakai baju gelap)</li>
    </ol>
    <p><strong>Gelap:</strong></p>
    <ol>
        <li>Wajib memakai warna yang <strong>gelap</strong> (tidak boleh memakai baju berwarna terang)</li>
    </ol>
    <ol>
        <li><strong>Pemain</strong> harus menggunakan <strong>jersey/kostum bernomor (0-99)</strong></li>
        <li><strong>Pemain</strong> dilarang menggunakan <strong>kalung, gelang, jam tangan</strong> maupun aksesoris yang dapat mengganggu berjalannya pertandingan</li>
        <li><strong>Pemain</strong> wajib menggunakan <strong>Sepatu futsal</strong> (bukan sepatu sepakbola)</li>
        <li><strong>Pemain</strong> wajib menggunakan <strong>kaos kaki minimal di atas betis</strong></li>
        <li><strong>Pemain</strong> wajib memiliki <strong>kuku pendek</strong></li>
        <li><strong>Pemain</strong> tidak boleh menggunakan <strong>angka yang sama</strong> dengan rekan setimnya</li>
        <li><strong>Pemain</strong> wajib menggunakan <strong>deker</strong></li>
    </ol>`}
                            isOpen={openSection === "kostum"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="penilaian"
                            icon={CheckCircle}
                            title="Penilaian"
                            content={`<ol>
        <li><strong>Sistem Skor:</strong> Setiap gol dihitung 1 poin</li>
        <li><strong>Foul dan Penalti:</strong> Jika pemain melakukan pelanggaran di kotak penalti, akan diberikan foul dan tim lawan akan mendapatkan penalti.</li>
        <li><strong>Peraturan Timeout:</strong> 60 Detik</li>
        <li><strong>Protes dan Penanganannya:</strong> Protes lebih baik langsung dikomunikasikan kepada panitia terdekat.</li>
    </ol>`}
                            isOpen={openSection === "penilaian"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="jadwal"
                            icon={Shirt}
                            title="Jadwal Pertandingan"
                            content={`<p><strong>Pendaftaran Ulang:</strong></p>
    <ol>
        <li>Pendaftaran Ulang akan dilakukan <strong>20 menit</strong> sebelum match yang dijadwalkan (minimal <strong>5 orang sebelum pertandingan dimulai</strong>)</li>
        <li>Setiap tim wajib melakukan pendaftaran ulang maksimal <strong>10 menit</strong> sebelum jadwal pertandingan</li>
    </ol>
    <p><strong>Detail Semifinal dan Final:</strong></p>
    <ol>
        <li>Waktu semi bersih (timeout waktu berhenti)</li>
    </ol>
    <p><strong>Pelanggaran dan Sanksi:</strong></p>
    <ol>
        <li><strong>Diskualifikasi</strong> apabila tim yang datang kurang dari jumlah minimal yaitu <strong>5 orang</strong>, dan jika telat <strong>10 menit lebih</strong> dari rundown yang sudah diberi maka akan didiskualifikasi juga</li>
        <li><strong>Pemain</strong> yang membuat keributan akan dikenakan <strong>denda Rp.100.000,00</strong> dan wajib membayar; pemain tersebut akan didiskualifikasi dari Ulympic 2024</li>
    </ol>`}
                            isOpen={openSection === "jadwal"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="hadiah"
                            icon={Trophy}
                            title="Hadiah dan Penghargaan"
                            content={`<ol>
        <li><strong>Juara Pertama:</strong> Rp 1.500.000 (Internal)</li>
        <li><strong>Juara Kedua:</strong> Rp 1.200.000 (Internal)</li>
        <li><strong>Juara Ketiga:</strong> Rp 800.000 (Internal)</li>
        <li><strong>Juara Pertama:</strong> Rp 2.500.000 (Eksternal)</li>
        <li><strong>Juara Kedua:</strong> Rp 1.500.000 (Eksternal)</li>
        <li><strong>Juara Ketiga:</strong> Rp 1.000.000 (Eksternal)</li>
        <li><strong>Penghargaan Individu</strong></li>
    </ol>`}
                            isOpen={openSection === "hadiah"}
                            toggleOpen={toggleOpen}
                        />
                    </div>

                    <div
                        className="items-center justify-center hidden w-full max-w-5xl p-6 mb-6 bg-center bg-no-repeat bg-cover md:flex aspect-video md:p-8 md:mb-10"
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
                        <div className="w-full max-w-4xl p-8 mt-6 bg-white rounded-lg shadow-lg">
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
                                                        required={index < 8}
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
                                                        required={index < 8}
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
                                                        required={index < 8}
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
                                                        required={index < 8}
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
                                        Bukti Transfer: <br />
                                        Blu BCA/BCA Digital 005951295203 a.n
                                        Petris Glaudya Liuwanda. <br />
                                        <span className="text-red-500">
                                            Nominal: Rp.
                                            {isInternal === "true"
                                                ? "550.000"
                                                : "700.000"}
                                        </span>
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
