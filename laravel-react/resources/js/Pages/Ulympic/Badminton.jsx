import React, { useState } from "react";
import {
    CalendarDays,
    MapPin,
    Info,
    Book,
    Trophy,
    ChevronDown,
    ChevronUp,
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
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="p-4 md:p-5 bg-gray-50">
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            {content}
                        </p>
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
                        title="Tentang Pertandingan"
                        content="Turnamen badminton Ulympic menyajikan pertandingan ganda putra dan ganda putri yang seru. Para peserta akan bersaing dalam sistem gugur untuk memperebutkan gelar juara Ulympic 2024."
                    />

                    <InfoSection
                        id="rules"
                        icon={Book}
                        title="Aturan"
                        content="1. Pertandingan menggunakan sistem 3 game dengan skor 21. 2. Peserta wajib hadir 30 menit sebelum jadwal pertandingan. 3. Setiap tim terdiri dari 2 pemain utama dan 1 pemain cadangan. 4. Peraturan lengkap akan diberikan saat technical meeting."
                    />

                    <InfoSection
                        id="prizes"
                        icon={Trophy}
                        title="Hadiah"
                        content="Juara 1: Rp 3.000.000 + Medali Emas, Juara 2: Rp 2.000.000 + Medali Perak, Juara 3: Rp 1.000.000 + Medali Perunggu"
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
