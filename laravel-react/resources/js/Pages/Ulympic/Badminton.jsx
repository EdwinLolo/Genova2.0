import React, { useState } from "react";
import {
    CalendarDays,
    MapPin,
    Info,
    Book,
    Trophy,
    ChevronDown,
    ChevronUp,
    BookUser,
    NotebookTabs,
} from "lucide-react";
import BgBadmin from "../../Assets/Ulympic/Badminton/bgBadminton.jpg";
import BgBadminMobile from "../../Assets/Ulympic/Badminton/bgBadmintonMobile.jpg";
import boxPc from "../../Assets/Ulympic/Badminton/boxPCBadminton.png";
import boxMobile from "../../Assets/Ulympic/Badminton/boxMobileBadminton.png";
import UlympicSlider from "../../Components/Rangkaian/Ulympic/Carousel/UlympicSlider";

import Badminton1 from "../../Assets/Ulympic/Badminton/Badminton1.jpg";
import Badminton2 from "../../Assets/Ulympic/Badminton/Badminton2.jpg";

const imagesUlympicSlider = [Badminton1, Badminton2];

function Badminton() {
    const [openSection, setOpenSection] = useState(null);

    const eventInfo = {
        internal: "30 September - 11 Oktober 2024",
        external: "30 Oktober - 8 November 2024",
        location: "Lapangan Basket UMN",
    };

    const EventInfoBox = ({ icon: Icon, text }) => (
        <div className="flex items-center justify-center space-x-2 text-white">
            <Icon size={20} />
            <span className="text-sm md:text-base">{text}</span>
        </div>
    );

    const Button = ({ children, onClick }) => (
        <button
            className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg w-full md:w-auto hover:bg-gray-200  font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-sm md:text-base"
            onClick={onClick}
        >
            {children}
        </button>
    );

    const InfoSection = ({ title, content, icon: Icon, id }) => {
        const isOpen = openSection === id;

        return (
            <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden mb-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102">
                <button
                    className="w-full p-4 md:p-5 text-left font-bold flex justify-between items-center text-base md:text-lg"
                    onClick={() => setOpenSection(isOpen ? null : id)}
                >
                    <span className="flex items-center text-blue-600">
                        <Icon className="mr-2 md:mr-3" size={24} />
                        {title}
                    </span>
                    <span
                        className={`transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        <ChevronDown size={20} />
                    </span>
                </button>
                <div
                    className={`transition-all duration-500 ease-in-out ${
                        isOpen
                            ? "max-h-[300px] opacity-100"
                            : "max-h-0 opacity-0"
                    } overflow-y-auto`} // Batasi ketinggian dan tambahkan overflow scroll
                >
                    <div className="p-4 md:p-5 bg-gray-50">
                        {content.split("\n").map((line, index) => (
                            <p
                                key={index}
                                className="text-gray-700 leading-relaxed text-sm md:text-base mb-2" // Menambah jarak antar paragraf
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const MainContent = ({ isMobile }) => (
        <div className={`text-center ${isMobile ? "p-4" : "w-3/4 p-6"}`}>
            <h1
                className={`font-bold text-white mb-4 ${
                    isMobile ? "text-2xl" : "text-4xl md:text-5xl"
                }`}
            >
                BADMINTON
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
                <Button>Badminton Ganda Putra</Button>
                <Button>Badminton Ganda Putri</Button>
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen">
            <div
                className="fixed inset-0 bg-no-repeat bg-cover bg-center hidden md:block"
                style={{ backgroundImage: `url(${BgBadmin})` }}
            />
            <div
                className="fixed inset-0 bg-no-repeat bg-cover bg-center md:hidden"
                style={{ backgroundImage: `url(${BgBadminMobile})` }}
            />
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-start p-4 md:p-6 overflow-y-auto">
                <div className="w-full max-w-5xl space-y-4 md:space-y-6 mb-6 md:mb-10">
                    <InfoSection
                        id="about"
                        icon={Info}
                        title="Sistem Pertandingan"
                        content={`1. Sistem Pertandingan yang digunakan dalam ULYMPIC adalah sistem grup/pool.
                            2. Pertandingan dibagi menjadi 2 babak: Group Stage & Knock Out Stage.
                            3. Sektor yang dipertandingkan: XD (Mixed Doubles), WD (Women's Doubles), MD (Men's Doubles).
                            4. Setiap Prodi dapat mengirimkan maksimal 3 tim, dengan 1 tim minimal terdiri dari 3 perempuan dan 3 laki-laki.
                            5. Peserta harus membawa perlengkapan sendiri, seperti raket, sepatu, dan baju.
                            6. Semua pertandingan akan mengikuti peraturan resmi PBSI.
                            7. Keputusan umpire & official bersifat mutlak dan tidak dapat diganggu gugat.
                            8. Urutan pertandingan adalah: XD - WD - MD.
                            9. Jika ada peserta putri bermain di dua sektor, urutan pertandingan menjadi: XD - MD - WD.
                            10. Seluruh peserta harus hadir 20 menit sebelum pertandingan dimulai.
                            11. 10 menit sebelum pertandingan, pemain sudah harus berada di lapangan.
                            12. Setiap tim wajib menyerahkan daftar pemain sebelum memasuki lapangan.
                            13. Daftar pemain akan diberikan oleh panitia saat daftar ulang.
                            14. Setiap grup akan terdiri dari 3 tim, dengan total ada 4 grup (12 tim).
                            15. Tim dari fakultas yang sama tidak diperbolehkan berada di grup yang sama.
                            16. Pertandingan akan berlangsung hingga poin 21 x 2 (Interval di poin 11, maksimal di poin 30), dengan sistem rubber jika masing-masing tim memenangkan 1 set.
                            17. Jika dalam satu grup semua tim menang 1 kali, selisih poin akan digunakan untuk menentukan juara grup.
                            18. Setiap tim akan bertanding sebanyak 2 kali.
                            19. Hanya juara grup yang akan melanjutkan ke knock-out stage.
                            20. Batas maksimal penggantian shuttlecock per sektor pertandingan adalah 4 kali. Jika lebih dari itu, akan dikenakan biaya tambahan sebesar Rp 5.000 per orang.`}
                    />

                    <InfoSection
                        id="viewerRules"
                        icon={BookUser}
                        title="Aturan Penonton/Supporter"
                        content="1. Penonton dilarang memprovokasi peserta dan penonton lain.
                                2. Dilarang membawa alat - alat yang membuat ribut atau mengganggu peserta.
                                3. Tidak boleh membawa Rokok dan Vape ke tempat pertandingan.
                                4. Tidak boleh membawa makanan dan minuman yang memakai bahan plastik sekali
                                pakai.
                                5. Penonton wajib mengikuti protokol kesehatan.
                                6. Penonton yang melanggar aturan yang sudah ditetapkan akan diberi sanksi.
                                7. Tidak boleh menyalakan flashlight saat pertandingan."
                    />

                    <InfoSection
                        id="costume"
                        icon={BookUser}
                        title="Kostum"
                        content="1. Peserta wajib menggunakan pakaian dan sepatu olahraga ketika sedang bertanding.
                        2. Setiap fakultas memiliki minimal 1 kostum yang model atau memiliki warna yang
                        sama.
                        3. Setiap fakultas wajib menyablon nama dan fakultas di baju/kostum masing masing."
                    />

                    <InfoSection
                        id="rulesBadminton"
                        icon={NotebookTabs}
                        title="Peraturan Badminton"
                        content="1. Jika pemain melakukan pukulan sebanyak 2 kali di waktu yang sama maka akan dianggap pelanggaran dan poin untuk tim lawan.
                        2. Jika pemain memukul shuttlecock ketika masih di dalam area lawan, maka akan
                        dianggap pelanggaran dan poin untuk tim lawan.
                        3. Jika shuttlecock menyentuh atribut pemain (celana, sepatu dan baju) dan anggota
                        badan, maka akan dianggap pelanggaran dan poin diberikan ke tim lawan.
                        4. Jika salah satu pemain melewati garis saat melakukan servis maka akan dianggap
                        pelanggaran dan kesempatan servis akan diberikan kepada tim lawan.
                        5. Jika salah satu pemain melakukan servis rendah (tidak mengenai garis maupun
                        kotak receiver/penerima servis), maka poin diberikan ke tim lawan.
                        6. Jika pemain memukul shuttlecock pada saat shuttlecock masih berada di area
                        bermain lawan, maka hal ini akan dianggap pelanggaran dan poin diberikan untuk
                        tim lawan.
                        7. Pemain akan mendapatkan kartu kuning yang berfungsi sebagai peringatan, ketika
                        melakukan kesalahan kecil seperti mengulur waktu permainan.
                        8. Pemain akan mendapatkan kartu merah, ketika pemain melakukan pelanggaran
                        yang lebih berat atau mengulang kesalahan yang sama, setelah dikeluarkannya
                        kartu kuning. Ketika pemain mendapatkan kartu merah, kesempatan servis akan
                        diberikan kepada tim lawan dan tim lawan juga mendapatkan poin."
                    />

                    <InfoSection
                        id="pelanggaran"
                        icon={Trophy}
                        title="Pelanggaran dan Sanksi"
                        content="1. Jika supporter melakukan provokasi yang menimbulkan keributan akan diberikan
                        teguran, dan jika sudah mendapat 2 teguran tim dari suporter tersebut akan di
                        diskualifikasi.
                        2. Jika peserta tidak bermain secara sportif wasit akan memberikan kartu sesuai
                        peraturan."
                    />
                </div>

                <div
                    className="hidden md:flex bg-no-repeat bg-cover bg-center w-full max-w-5xl aspect-video items-center justify-center p-6 md:p-8 mb-6 md:mb-10 "
                    style={{ backgroundImage: `url(${boxPc})` }}
                >
                    <MainContent isMobile={false} />
                </div>
                <div
                    className="md:hidden bg-no-repeat bg-cover bg-center w-full max-w-sm aspect-[9/16] flex items-center justify-center p-4 mb-6 "
                    style={{ backgroundImage: `url(${boxMobile})` }}
                >
                    <MainContent isMobile={true} />
                </div>
            </div>
            {/*
            <div className="relative z-10 mt-6 md:mt-10">
                <UlympicSlider images={imagesUlympicSlider} />
            </div> */}
        </div>
    );
}

export default Badminton;
