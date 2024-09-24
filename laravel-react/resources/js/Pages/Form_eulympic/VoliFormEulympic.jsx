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
    ChevronDown,
    ChevronUp,
    BookUser,
    Notebook,
    NotebookTabs,
    Shirt,
    ShieldAlert,
} from "lucide-react";

import BgVoli from "../../Assets/Ulympic/Voli/bgVoli.png";
import boxPc from "../../Assets/Ulympic/Voli/boxPCVoli.png";
import BgVoliMobile from "../../Assets/Ulympic/Voli/bgVoliMobile.png";
import boxMobile from "../../Assets/Ulympic/Voli/boxMobileVoli.png";

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
                            alt="! "
                            className="ml-2 w-5 h-5"
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
                    isOpen ? "max-h-[6000px]" : "max-h-0"
                } `}
            >
                <div
                    className="p-4 md:p-5 bg-gray-50 text-gray-700 leading-relaxed text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
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

function VoliFormEulympic({ lombas, captcha }) {
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
        location: "Lapangan Voli UMN",
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
                VOLLEYBALL
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
                    style={{ backgroundImage: `url(${BgVoli})` }}
                />
                <div
                    className="fixed inset-0 bg-no-repeat bg-cover bg-center md:hidden"
                    style={{ backgroundImage: `url(${BgVoliMobile})` }}
                />
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-start p-4 md:p-6 overflow-y-auto">
                    <div className="w-full max-w-5xl space-y-4 md:space-y-6 mb-6 md:mb-10">
                        <InfoSection
                            id="tujuan"
                            icon={Info}
                            title="Informasi Pertandingan"
                            content={`<p>1. Pertandingan voli diselenggarakan secara eksternal sehingga peserta yang dapat berpartisipasi adalah dari <strong>dalam maupun luar UMN</strong>.</p>
              <p>2. Pertandingan voli putra merupakan antar <strong>Sekolah Menengah Atas (SMA)</strong>, sedangkan pertandingan putri merupakan antar <strong>Universitas</strong>.</p>
              <p>3. Pertandingan voli putra menggunakan <strong>sistem gugur</strong> hingga final. Total tim yang akan bertanding adalah <strong>8 tim</strong>.</p>
              <p>4. Pertandingan voli putri menggunakan <strong>sistem gugur</strong> hingga tersisa <strong>3 tim</strong>, menggunakan <strong>sistem poin</strong> pada semifinal, dan menggunakan <strong>sistem gugur</strong> pada final. Total tim yang akan bertanding adalah <strong>6 tim</strong>.</p>
              <p>5. Dalam satu tim, maksimal jumlah pemain adalah <strong>10 orang</strong> dengan <strong>6 orang yang bermain di lapangan</strong> dan <strong>4 orang sebagai pemain cadangan</strong>.</p>
              <p>6. Untuk pertandingan <strong>group stage</strong> yang harus dilewati adalah <strong>two winning set</strong> sedangkan untuk pertandingan final serta perebutan juara 3 diberlangsungkan <strong>three winning set</strong>.</p>
              <p>7. Poin pada pertandingan dijumlahkan dengan sistem <strong>rally point</strong> yaitu maksimal <strong>25 poin</strong>, sedangkan pada babak final maksimal <strong>15 poin</strong>.</p>
              <p>8. Penambahan <strong>2 poin</strong> dilakukan pada pertandingan jika kedua tim memperoleh poin <strong>24 - 24</strong>.</p>
              <p>9. Tim pemenang merupakan tim yang pertama kali unggul dengan selisih <strong>2 poin</strong>.</p>`}
                            isOpen={openSection === "tujuan"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="rule"
                            icon={NotebookTabs}
                            title="Sistem & Peraturan"
                            content={`<p>1. Universitas atau sekolah hanya dapat mendaftarkan <strong>1 perwakilan</strong>.</p>
              <p>2. Jumlah maksimal pemain dalam pertandingan bola voli dalam satu tim adalah <strong>10 orang</strong>. Pemain yang boleh bermain di lapangan hanya <strong>6 orang</strong> dan <strong>4 orang</strong> sebagai pemain cadangan.</p>
              <p>3. Jumlah pemain dalam satu regu adalah <strong>6 orang</strong>. Hanya <strong>3 pemain</strong> yang bisa melakukan <strong>blocking</strong> di dekat net. Sedangkan pemain lainnya bertugas memukul bola melewati net, dari belakang garis serang atau garis tiga meter (garis yang memisahkan garis depan dengan belakang lapangan).</p>
              <p>4. Adanya peran <strong>libero</strong>, yang tidak bisa melakukan serve, pergantian posisi, serta melakukan pukulan bola. Libero menggunakan seragam berwarna beda yang berdiri di bagian belakang lapangan. Libero bertugas untuk menjaga sistem pertahanan bagian belakang serta untuk memperpanjang sistem rally point (tidak wajib).</p>
              <p>5. Jika salah seorang atau lebih dari satu anggota tim sedang melakukan pertandingan untuk cabang olahraga lain, maka pertandingan tidak akan ditunda.</p>
              <p>6. Dalam pertandingan bola voli jumlah minimal pemain yang boleh bermain di lapangan dalam satu tim adalah <strong>4 orang</strong>. Kurang dari itu, tim akan dianggap <strong>gugur</strong> dalam pertandingan. Jika ada pemain yang telat dan ingin melengkapi kekurangan pemain, hanya diperbolehkan berpartisipasi di <strong>set pertandingan berikutnya</strong>.</p>
              <p>7. Tiap tim atau regu memiliki kesempatan <strong>tiga kali</strong> untuk memukul bola. Pada awal pertandingan, salah seorang pemain wajib melakukan <strong>serve</strong> ke area lawan yang dilakukan oleh seorang server.</p>
              <p>8. Tim yang memenangkan <strong>rally</strong> berhak mendapat <strong>satu poin</strong> serta memiliki hak untuk melakukan servis. Saat rally telah selesai, pemainnya harus bertukar tempat dengan memutar <strong>searah jarum jam</strong>.</p>
              <p>9. Anggota badan yang diperbolehkan untuk digunakan dalam bola voli adalah seluruh anggota tubuh mulai dari kepala, tangan, badan, dan kaki. Namun, yang paling dominan adalah <strong>tangan</strong>.</p>
              <p>10. <strong>Pergantian pemain</strong> diperbolehkan selama pertandingan berlangsung dengan cara memberitahu kepada wasit utama. Setelah wasit menerima informasi tersebut, pemain baru dapat melakukan pergantian.</p>
              <p>11. Pertandingan <strong>group stage</strong> harus melewati <strong>3 babak (best of three)</strong> atau <strong>two winning set</strong> dimana ketika pada babak pertama dan kedua telah dimenangkan oleh salah satu tim maka pertandingan babak ketiga tidak perlu dilaksanakan.</p>
              <p>12. Untuk pertandingan <strong>final (single elimination)</strong>, pertandingan bola voli akan berlangsung selama <strong>5 babak (best of five)</strong> atau <strong>three winning set</strong>, dimana tim yang memenangkan <strong>3 babak</strong> terlebih dahulu adalah pemenangnya. Perebutan juara 3 akan menggunakan sistem <strong>two winning set</strong>.</p>
              <p>13. Pada pertandingan bola voli sistem perhitungan angka menggunakan <strong>rally point</strong> maksimal pada <strong>25 point</strong> dan pada babak penentu kemenangan (set 3 atau set 5) akan menggunakan <strong>rally point</strong> dengan maksimal <strong>15 point</strong> di mana pemilihan lapangan atau bola akan diundi kembali dengan koin bersama wasit.</p>
              <p>14. Jika saat pertandingan berlangsung kedua tim mendapatkan deuce/poin yang sama di akhir yaitu (24 – 24), maka pertandingan akan ditambah <strong>2 poin</strong>. Tim yang pertama berhasil unggul dengan selisih <strong>2 poin</strong> akan memenangkan pertandingan bola voli. Maksimal deuce pada setiap pertandingan yang dipersilahkan adalah (30 - 30) dengan akhir pertandingan yang dinyatakan <strong>DRAW</strong>.</p>
              <p>15. Tim akan mendapatkan <strong>3 poin</strong> jika memenangkan pertandingan group stage, <strong>1 poin</strong> jika pertandingan dinyatakan <strong>draw</strong>, dan <strong>0 poin</strong> jika mendapatkan kekalahan. Jika ada tim dengan poin yang sama, maka akan dilihat dari perhitungan <strong>set kemenangan</strong>.</p>
              <p>16. Setiap mengakhiri babak pertandingan, tim diwajibkan bertukar sisi lapangan. Apabila kedua tim telah mencapai babak ketiga, maka tim yang memperoleh nilai terendah dapat meminta kepada wasit untuk bertukar posisi lapangan. Hal ini hanya dilakukan jika poin telah mencapai angka <strong>8</strong>.</p>
              <p>17. Setiap tim akan diwajibkan untuk melakukan <strong>timeout</strong> jika telah mencapai <strong>16 poin</strong> dalam pertandingan. Di luar itu, setiap tim memiliki jatah timeout sebanyak <strong>1 kali</strong> di setiap babak dengan cara mengajukan kepada wasit utama (maksimal waktu timeout <strong>1 menit</strong>).</p>
              <p>18. Pertandingan diperkirakan akan berlangsung kurang lebih selama <strong>45 menit</strong>, dan pertandingan final akan berlangsung kurang lebih selama <strong>1 jam 15 menit</strong>.</p>
              <p>19. Jika terjadi <strong>hujan</strong> dengan potensi besar mengganggu jalannya pertandingan, pertandingan akan di reschedule ke hari lain yang telah disiapkan oleh panitia atau diundur sementara waktu (jika memungkinkan tetap dilaksanakan pada hari tersebut).</p>`}
                            isOpen={openSection === "rule"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="kostum"
                            icon={Shirt}
                            title="Peraturan Kostum"
                            content={`<p>1. Setiap tim <strong>WAJIB</strong> membuat jersey tim dengan minimal <strong>NOMOR PUNGGUNG</strong> dan akan dipakai untuk dapat mengikuti pertandingan.</p>
              <p>2. Pemain diperbolehkan menggunakan aksesoris seperti <strong>Arm Sleeve</strong>, <strong>Leg Sleeve</strong>, <strong>Deker Knee</strong>, <strong>Deker Ankle</strong>, <strong>Celana Dalaman</strong>, <strong>Baju Dalaman</strong>, <strong>Headband</strong>, dan <strong>Wristband</strong>.</p>
              <p>3. Pemain dilarang menggunakan aksesoris seperti <strong>anting</strong>, <strong>kalung</strong>, <strong>gelang</strong>, <strong>jam tangan</strong>, dsb selama mengikuti pertandingan.</p>
              <p>4. Pemain diwajibkan menggunakan <strong>sepatu olahraga</strong> saat bermain.</p>`}
                            isOpen={openSection === "kostum"}
                            toggleOpen={toggleOpen}
                        />

                        <InfoSection
                            id="pelanggaran"
                            icon={ShieldAlert}
                            title="Pelanggaran dan Sanksi"
                            content={`<p>1. Jika pemain dari suatu tim baik sengaja maupun tidak sengaja menyentuh <strong>tiang net</strong> dan <strong>net</strong>, mengulurkan tangan hingga melewati batas net sebelum lawan menyelesaikan serangan, menginjak <strong>garis tengah</strong> saat permainan berlangsung, dan mengganggu lawan dengan menarik baju atau anggota tubuh lainnya akan dikenakan penalti berupa pemberian <strong>poin</strong> kepada tim lawan.</p>
              <p>2. Jika pemain dari suatu tim mengeluarkan <strong>kata-kata tidak sopan</strong>, menghina, memfitnah pemain lain, petugas, atau bahkan penonton, dan melakukan tindakan menyerang berupa <strong>kekerasan secara fisik</strong>, maka tim pemain tersebut akan di <strong>DISKUALIFIKASI</strong>.</p>
              <p>3. <strong>Keputusan wasit</strong> dalam pertandingan bersifat mutlak dan tidak dapat diganggu gugat.</p>`}
                            isOpen={openSection === "pelanggaran"}
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
                                                        required={index < 7}
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                </div>
                                                {isInternal === "true" ? (
                                                    <>
                                                        <div className="px-4 py-2">
                                                            <label className="block text-sm font-medium text-gray-700">
                                                                NIM
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name={`nim[${index}]`}
                                                                value={
                                                                    member.nim
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        index,
                                                                        "nim",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                required={
                                                                    index < 7
                                                                }
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
                                                                required={
                                                                    index < 7
                                                                }
                                                                className="sm:text-sm"
                                                            />
                                                        </div>
                                                    </>
                                                ) : (
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
                                                            required={index < 7}
                                                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        />
                                                    </div>
                                                )}
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
                                                        required={index < 7}
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                </div>
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

export default VoliFormEulympic;
