import AcaraFrame from "../../Assets/DivisionAssets/Acara/Acara_Cutted_Frame.webp";
import AcaraBigLogo from "../../Assets/DivisionAssets/Acara/AcaraBigLogo.webp";
import AcaraWebsiteBG from "../../Assets/DivisionAssets/Acara/Acara_Website_BG.webp";

import BPHFrame from "../../Assets/DivisionAssets/BPH/BPH_Cutted_Frame.webp";
import BPHBigLogo from "../../Assets/DivisionAssets/BPH/BPHBigLogo.webp";
import BPHWebsiteBG from "../../Assets/DivisionAssets/BPH/BPH_Website_BG.webp";

import DekorFrame from "../../Assets/DivisionAssets/Dekorasi/Dekor_Cutted_Frame.webp";
import DekorBigLogo from "../../Assets/DivisionAssets/Dekorasi/DekorBigLogo.webp";
import DekorWebsiteBG from "../../Assets/DivisionAssets/Dekorasi/Dekor_Website_BG.webp";

import DokumFrame from "../../Assets/DivisionAssets/Dokumentasi/Dokum_Cutted_Frame.webp";
import DokumBigLogo from "../../Assets/DivisionAssets/Dokumentasi/DokumBigLogo.webp";
import DokumWebsiteBG from "../../Assets/DivisionAssets/Dokumentasi/Dokum_Website_BG.webp";

import FreshMoneyFrame from "../../Assets/DivisionAssets/FreshMoney/FreshMoney_Cutted_Frame.webp";
import FreshMoneyBigLogo from "../../Assets/DivisionAssets/FreshMoney/FreshMoneyBigLogo.webp";
import FreshMoneyWebsiteBG from "../../Assets/DivisionAssets/FreshMoney/FreshMoney_Website_BG.webp";

import VisualFrame from "../../Assets/DivisionAssets/Pisa/Visual_Cutted_Frame.webp";
import VisualBigLogo from "../../Assets/DivisionAssets/Pisa/VisualBigLogo.webp";
import VisualWebsiteBG from "../../Assets/DivisionAssets/Pisa/Visual_Website_BG.webp";

import KeamananFrame from "../../Assets/DivisionAssets/Keamanan/Keamanan_Cutted_Frame.webp";
import KeamananBigLogo from "../../Assets/DivisionAssets/Keamanan/Keamanan_Big_Logo.webp";
import KeamananWebsiteBG from "../../Assets/DivisionAssets/Keamanan/Keamanan_Website_BG.webp";

import KonsumsiFrame from "../../Assets/DivisionAssets/Konsumsi/KonsumCuttedFrame.webp";
import KonsumBigLogo from "../../Assets/DivisionAssets/Konsumsi/KonsumBigLogo.webp";
import KonsumWebsiteBG from "../../Assets/DivisionAssets/Konsumsi/KonsumWebsiteBG.webp";

import LombaFrame from "../../Assets/DivisionAssets/Lomba/LombaCuttedFrame.webp";
import LombaBigLogo from "../../Assets/DivisionAssets/Lomba/LombaBigLogo.webp";
import LombaWebsiteBG from "../../Assets/DivisionAssets/Lomba/LombaWebsiteBG.webp";

import MedparFrame from "../../Assets/DivisionAssets/Medpar/MedparCuttedFrame.webp";
import MedparBigLogo from "../../Assets/DivisionAssets/Medpar/MedparBigLogo.webp";
import MedparWebsiteBG from "../../Assets/DivisionAssets/Medpar/MedparWebsiteBG.webp";

import PerkabFrame from "../../Assets/DivisionAssets/Perkab/PerkapCuttedFrame.webp";
import PerkabigLogo from "../../Assets/DivisionAssets/Perkab/PerkapBigLogo.webp";
import PerkabWebsiteBG from "../../Assets/DivisionAssets/Perkab/PerkapWebsiteBG.webp";

import PubliFrame from "../../Assets/DivisionAssets/Publi/PubliCuttedFrame.webp";
import PubliBigLogo from "../../Assets/DivisionAssets/Publi/PubliBigLogo.webp";
import PubliWebsiteBG from "../../Assets/DivisionAssets/Publi/PubliWebsiteBG.webp";

import SponsorFrame from "../../Assets/DivisionAssets/Sponsor/SponsorCuttedFrame.webp";
import SponsorBigLogo from "../../Assets/DivisionAssets/Sponsor/SponsorBigLogo.webp";
import SponsorWebsiteBG from "../../Assets/DivisionAssets/Sponsor/SponsorWebsiteBG.webp";

import TiketFrame from "../../Assets/DivisionAssets/Ticketing/TicketingCuttedFrame.webp";
import TiketBigLogo from "../../Assets/DivisionAssets/Ticketing/TicketingBigLogo.webp";
import TiketWebsiteBG from "../../Assets/DivisionAssets/Ticketing/TicketingWebsiteBG.webp";

import GenovaFrame from "../../Assets/DivisionAssets/Website/KeamananCuttedFrame.webp";
import GenovaBigLogo from "../../Assets/DivisionAssets/Website/WebsiteBigLogo.webp";
import GenovaWebsiteBG from "../../Assets/DivisionAssets/Website/GenovaWebsiteBG.webp";

const divisions = [
    {
        name: "Tuscany",
        desc: "Kota Tuscany dikenal sebagai kota pusat inovasi di masa Renaissance. Divisi acara menjadi pusat inovasi dalam acara ini.",
        frame: AcaraFrame,
        bigLogo: AcaraBigLogo,
        background: AcaraWebsiteBG,
        color: "#f56565",
    },
    {
        name: "Rome",
        desc: "Pusat ibu kota di Italia. menjadi destinasi utama para turis saat berkunjung. Divisi BPH menjadi pusat utama informasi acara dan divisi lainnya.",
        frame: BPHFrame,
        bigLogo: BPHBigLogo,
        background: BPHWebsiteBG,
        color: "#4299e1",
    },
    {
        name: "Florence",
        desc: "Kota Florence dikenal sebagai kota terindah di Italia karena warisan budaya, arsitektur, dan seni yang sangat menakjubkan. Seperti Florence yang dipenuhi dengan keindahan, divisi Dekorasi akan membantu memperindah venue-venue yang akan digunakan oleh UMN Festival 2024.",
        frame: DekorFrame,
        bigLogo: DekorBigLogo,
        background: DekorWebsiteBG,
        color: "#48bb78",
    },
    {
        name: "Napoli",
        desc: "Kota Napoli dikenal dengan perpaduan nuansa kuno dan modern. Napoli menjadi kota dengan seni, arsitektur, dan peninggalan arkeologi yang menarik banyak turis untuk berfoto. Divisi dokumentasi memiliki tugas dalam mengabdikan banyak momen acara.",
        frame: DokumFrame,
        bigLogo: DokumBigLogo,
        background: DokumWebsiteBG,
        color: "#ecc94b",
    },
    {
        name: "Venezia",
        desc: "Kota Venezia merupakan kota yang terkenal karena aspek perdagangan dan pariwisata. Maka dari itu, Venezia memiliki pemasukan ekonomi yang besar bagi Italia. Seperti Venezia, divisi Fresh Money akan mendukung UMN Festival 2024 dengan berbagai kegiatan wirausaha.",
        frame: FreshMoneyFrame,
        bigLogo: FreshMoneyBigLogo,
        background: FreshMoneyWebsiteBG,
        color: "#9f7aea",
    },
    {
        name: "Pisa",
        desc: "Kota Pisa dikenal sebagai kota yang memiliki banyak destinasi wisata yang berhubungan desain seperti desain arsitektur dan museum lukisan. Seperti kota Pisa yang dipenuhi dengan kreativitas, divisi Visual akan memenuhi kebutuhan kreatif dari acara ini.",
        frame: VisualFrame,
        bigLogo: VisualBigLogo,
        background: VisualWebsiteBG,
        color: "#ed8936",
    },
    { //
        name: "Verona",
        desc: "Kota Verona merupakan salah satu kota yang aman dengan tingkat kejahatan yang rendah. Divisi Keamanan berfungsi untuk menjaga keamanan selama acara berlangsung.",
        frame: KeamananFrame,
        bigLogo: KeamananBigLogo,
        background: KeamananWebsiteBG,
        color: "#ed8936",
    },
    {
        name: "Lazio",
        desc: "Kota Lazio dikenal sebagai kota yang menemukan banyak macam pasta yang kita kenal hingga saat ini. Seperti Lazio yang menyediakan makanan bagi para penduduknya, divisi Konsumsi juga akan menyediakan makanan bagi seluruh panitia.",
        frame: KonsumsiFrame,
        bigLogo: KonsumBigLogo,
        background: KonsumWebsiteBG,
        color: "#ed8936",
    },
    {
        name: "Milan",
        desc: "Kota Milan yang terkenal dengan pusat sepak bola di Italia yaitu AC Milan. Terdapat banyak kompetisi yang berlangsung di kota tersebut khususnya sepak bola.",
        frame: LombaFrame,
        bigLogo: LombaBigLogo,
        background: LombaWebsiteBG,
        color: "#ed8936",
    },
    {  //
        name: "Lecce",
        desc: "Kota ini adalah ibu kota dan pusat budaya terbesar dari semenanjung Salento, adalah rumah dari Keuskupan Agung dan Universitas Salento. kota yang terkenal dengan banyak universitas dan rumah dari Keuskupan Agung sehingga banyak potensi kemitraan yang dapat terjalin. ",
        frame: MedparFrame,
        bigLogo: MedparBigLogo,
        background: MedparWebsiteBG,
        color: "#ed8936",
    },
    {
        name: "Ardea",
        desc: "Kota Ardea terkenal dengan tempat wisata yang beragam seperti pantai, hotel, destinasi, dan makanannya. Divisi perlengkapan siap menyediakan kebutuhan yang diperlukan, sama halnya dengan kota Ardea yang lengkap akan destinasi wisata.",
        frame: PerkabFrame,
        bigLogo: PerkabigLogo,
        background: PerkabWebsiteBG,
        color: "#ed8936",
    },
    {
        name: "Catania",
        desc: "Catania merupakan kota terbesar kedua di Sisilia, Italia. menjadikannya sebagai kota terpadat kedua di pulau tersebut. Divisi publikasi yang menarik banyak partisipan.",
        frame: PubliFrame,
        bigLogo: PubliBigLogo,
        background: PubliWebsiteBG,
        color: "#ed8936",
    },
    {
        name: "Turin",
        desc: "Kota Turin dikenal sebagai salah satu kota dengan pemasukan ekonomi terbesar di Italia karena merupakan pusat dari industri otomotif. Seperti Turin, divisi Sponsorship juga merupakan divisi yang bertugas untuk mencari pemasukan dana.",
        frame: SponsorFrame,
        bigLogo: SponsorBigLogo,
        background: SponsorWebsiteBG,
        color: "#ed8936",
    },
    {
        name: "Alba",
        desc: "Kota Alba dikenal sebagai kota administrasi di Italia. Divisi ticketing yang bertanggung jawab atas administrasi tiket ufest.",
        frame: TiketFrame,
        bigLogo: TiketBigLogo,
        background: TiketWebsiteBG,
        color: "#ed8936",
    },
    {
        name: "Genova",
        desc: "Kota Genova dikenal sebagai pusat ekonomi industri, contohnya seperti baja. Genova, Italia menjadi kota perkembangan yang lebih berteknologi maju dan ramah lingkungan.",
        frame: GenovaFrame,
        bigLogo: GenovaBigLogo,
        background: GenovaWebsiteBG,
        color: "#ed8936",
    },

]

export default divisions;
