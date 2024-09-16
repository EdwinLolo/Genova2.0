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
} from "lucide-react";

import BgVoli from "../../Assets/Ulympic/Voli/bgVoli.png";
import boxPc from "../../Assets/Ulympic/Voli/boxPCVoli.png";
import BgVoliMobile from "../../Assets/Ulympic/Voli/bgVoliMobile.png";
import boxMobile from "../../Assets/Ulympic/Voli/boxMobileVoli.png";

const InfoSection = ({
    title,
    content,
    icon: Icon,
    id,
    isOpen,
    toggleOpen,
}) => (
    <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden mb-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102">
        <button
            className="w-full p-4 md:p-5 text-left font-bold flex justify-between items-center text-base md:text-lg"
            onClick={() => toggleOpen(id)}
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
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
        </button>
        <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-screen" : "max-h-0"
            }`}
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
                            id="info"
                            icon={Info}
                            title="Tentang Lomba Voli UFEST 2024"
                            content={`Tujuan dari pelaksanaan pertandingan voli adalah memacu peserta untuk mengasah kemampuan bermain voli dalam dunia pertandingan. Pertandingan ini sekaligus menjadi kesempatan bagi para pemain voli yang belum memiliki kesempatan untuk mengikuti pertandingan voli secara resmi.`}
                            isOpen={openSection === "info"}
                            toggleOpen={toggleOpen}
                        />
                        <InfoSection
                            id="tujuan"
                            icon={Info}
                            title="Tujuan"
                            content={`Pertandingan voli diselenggarakan secara eksternal sehingga peserta yang dapat berpartisipasi adalah dari dalam maupun luar UMN. Pertandingan voli putra merupakan antar Sekolah Menengah Atas (SMA), sedangkan pertandingan putri merupakan antar Universitas. Pertandingan voli putra menggunakan sistem gugur hingga final. Total tim yang akan bertanding adalah 8 tim. Pertandingan voli putri menggunakan sistem gugur hingga tersisa 3 tim, menggunakan sistem poin pada semifinal, dan menggunakan sistem gugur pada final. Total tim yang akan bertanding adalah 6 tim.

                            Dalam satu tim, maksimal jumlah pemain adalah 10 orang dengan 6 orang yang bermain di lapangan dan 4 orang sebagai pemain cadangan. Untuk pertandingan group stage yang harus dilewati adalah two winning set sedangkan untuk pertandingan final serta perebutan juara 3 diberlangsungkan three winning set. Poin pada pertandingan dijumlahkan dengan sistem rally point yaitu maksimal 25 poin, sedangkan pada babak final maksimal 15 poin. Penambahan 2 poin dilakukan pada pertandingan jika kedua tim memperoleh poin 24 - 24. Tim pemenang merupakan tim yang pertama kali unggul dengan selisih 2 poin.`}
                            isOpen={openSection === "tujuan"}
                            toggleOpen={toggleOpen}
                        />
                        <InfoSection
                            id="rule"
                            icon={Info}
                            title="Sistem & Peraturan"
                            content={`1. Universitas atau sekolah hanya dapat mendaftarkan 1 perwakilan.

2. Jumlah maksimal pemain dalam pertandingan bola voli dalam satu tim adalah 10
orang. Pemain yang boleh bermain di lapangan hanya 6 orang dan 4 orang
sebagai pemain cadangan.
3. Jumlah pemain dalam satu regu adalah 6 orang. Hanya 3 pemain yang bisa
melakukan blocking di dekat net. Sedangkan pemain lainnya bertugas memukul
bola melewati net, dari belakang garis serang atau garis tiga meter (garis yang
memisahkan garis depan dengan belakang lapangan).
4. Adanya peran libero, yang tidak bisa melakukan serve, pergantian posisi, serta
melakukan pukulan bola. Libero menggunakan seragam berwarna beda yang
berdiri di bagian belakang lapangan. Libero bertugas untuk menjaga sistem
pertahanan bagian belakang serta untuk memperpanjang sistem rally point (tidak
wajib).
5. Jika salah seorang atau lebih dari satu anggota tim sedang melakukan
pertandingan untuk cabang olahraga lain, maka pertandingan tidak akan ditunda.
6. Dalam pertandingan bola voli jumlah minimal pemain yang boleh bermain di
lapangan dalam satu tim adalah 4 orang. Kurang dari itu, tim akan dianggap
gugur dalam pertandingan. Jika ada pemain yang telat dan ingin melengkapi
kekurangan pemain, hanya diperbolehkan berpartisipasi di set pertandingan
berikutnya.
7. Tiap tim atau regu memiliki kesempatan tiga kali untuk memukul bola. Pada awal
pertandingan, salah seorang pemain wajib melakukan serve ke area lawan yang
dilakukan oleh seorang server.
8. Tim yang memenangkan rally berhak mendapat satu poin serta memiliki hak
untuk melakukan servis. Saat rally telah selesai, pemainnya harus bertukar
tempat dengan memutar searah jarum jam.
9. Anggota badan yang diperbolehkan untuk digunakan dalam bola voli adalah
seluruh anggota tubuh mulai dari kepala, tangan, badan, dan kaki. Namun, yang
paling dominan adalah tangan.
10.Pergantian pemain diperbolehkan selama pertandingan berlangsung dengan
cara memberitahu kepada wasit utama. Setelah wasit menerima informasi
tersebut, pemain baru dapat melakukan pergantian.

11. Pertandingan group stage harus melewati 3 babak (best of three) atau two
winning set dimana ketika pada babak pertama dan kedua telah dimenangkan
oleh salah satu tim maka pertandingan babak ketiga tidak perlu dilaksanakan.
12.Untuk pertandingan final (single elimination), pertandingan bola voli akan
berlangsung selama 5 babak (best of five) atau three winning set, dimana tim
yang memenangkan 3 babak terlebih dahulu adalah pemenangnya. Perebutan
juara 3 akan menggunakan sistem two winning set.
13.Pada pertandingan bola voli sistem perhitungan angka menggunakan rally point
maksimal pada 25 point dan pada babak penentu kemenangan ( set 3 atau set
5) akan menggunakan rally point dengan maksimal 15 point di mana pemilihan
lapangan atau bola akan diundi kembali dengan koin bersama wasit.
14.Jika saat pertandingan berlangsung kedua tim mendapatkan deuce/poin yang
sama di akhir yaitu (24 – 24), maka pertandingan akan ditambah 2 poin. Tim
yang pertama berhasil unggul dengan selisih 2 poin akan memenangkan
pertandingan bola voli. Maksimal deuce pada setiap pertandingan yang
dipersilahkan adalah (30 - 30) dengan akhir pertandingan yang dinyatakan
DRAW.
15.Tim akan mendapatkan 3 poin jika memenangkan pertandingan group stage, 1
poin jika pertandingan dinyatakan draw, dan 0 poin jika mendapatkan
kekalahan. Jika ada tim dengan poin yang sama, maka akan dilihat dari
perhitungan set kemenangan.
16.Setiap mengakhiri babak pertandingan, tim diwajibkan bertukar sisi lapangan.
Apabila kedua tim telah mencapai babak ketiga, maka tim yang memperoleh nilai
terendah dapat meminta kepada wasit untuk bertukar posisi lapangan. Hal ini
hanya dilakukan jika poin telah mencapai angka 8.
17.Setiap tim akan diwajibkan untuk melakukan timeout jika telah mencapai 16 poin
dalam pertandingan. Di luar itu, setiap tim memiliki jatah timeout sebanyak 1 kali
di setiap babak dengan cara mengajukan kepada wasit utama (maksimal waktu
timeout 1 menit).
18.Pertandingan diperkirakan akan berlangsung kurang lebih selama 45 menit, dan
pertandingan final akan berlangsung kurang lebih selama 1 jam 15 menit.

19.Jika terjadi hujan dengan potensi besar mengganggu jalannya pertandingan,
pertandingan akan di reschedule ke hari lain yang telah disiapkan oleh panitia
atau diundur sementara waktu (jika memungkinkan tetap dilaksanakan pada hari
tersebut).`}
                            isOpen={openSection === "rule"}
                            toggleOpen={toggleOpen}
                        />
                        <InfoSection
                            id="kostum"
                            icon={Info}
                            title="Peraturan Kostum"
                            content={`1. Setiap tim WAJIB membuat jersey tim dengan minimal NOMOR PUNGGUNG
dan akan dipakai untuk dapat mengikuti pertandingan.
2. Pemain diperbolehkan menggunakan aksesoris seperti Arm Sleeve, Leg Sleeve,
Deker Knee, Deker Ankle, Celana Dalaman, Baju Dalaman, Headband, dan
Wristband.
3. Pemain dilarang menggunakan aksesoris seperti anting, kalung, gelang, jam
tangan, dsb selama mengikuti pertandingan.
4. Pemain diwajibkan menggunakan sepatu olahraga saat bermain.`}
                            isOpen={openSection === "kostum"}
                            toggleOpen={toggleOpen}
                        />
                        <InfoSection
                            id="pelanggaran"
                            icon={Info}
                            title="Pelanggaran dan Sanksi"
                            content={`1. Jika pemain dari suatu tim baik sengaja maupun tidak sengaja menyentuh tiang
net dan net, mengulurkan tangan hingga melewati batas net sebelum lawan
menyelesaikan serangan, menginjak garis tengah saat permainan berlangsung,
dan mengganggu lawan dengan menarik baju atau anggota tubuh lainnya akan
dikenakan penalti berupa pemberian poin kepada tim lawan.
2. Jika pemain dari suatu tim mengeluarkan kata-kata tidak sopan, menghina,
memfitnah pemain lain, petugas, atau bahkan penonton, dan melakukan
tindakan menyerang berupa kekerasan secara fisik, maka tim pemain tersebut
akan di DISKUALIFIKASI.
3. Keputusan wasit dalam pertandingan bersifat mutlak dan tidak dapat diganggu
gugat.`}
                            isOpen={openSection === "kostum"}
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
                                                            required
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
                                                        required
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
