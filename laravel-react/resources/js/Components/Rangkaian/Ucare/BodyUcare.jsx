import React, { useState, useEffect } from "react";
import LogoUcare from "../../../Assets/Rangkaian/Ucare/Ucare_Asset_1.webp";
import IsiUcare from "../../../Assets/Rangkaian/Ucare/Ucare_Asset_2.webp";
import MobileUcare from "../../../Assets/Rangkaian/Ucare/Ucare_Asset_Mobile.webp";
import "../../Font.css";
import "./BodyUcareStyle.css";

// import logo sponsor
import CiptaWarna from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/CiptaWarna.png";
import Deorex from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/deorex.png";
import Evolene from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/Evolene_Black.png";
import Asus from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/asus.jpg";
import Fifgroup from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/fifgroup.png";
import ITO_EN from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/ITO_EN.png";

import Leminerale from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/le_minerale.webp";
import OCBC from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/ocbc.webp";
import Pocari from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/pocari.webp";
import ROG from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/rog.png";
import Roppang from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/roppang.png";
import Sunpride_LYFE from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/sunpride_LYFE.png";
import Sunpride from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/Sunpride.webp";
import Teh_pucuk from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/teh_pucuk.webp";
import Tenjin from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/Tenjin.png";
import SariRoti from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/LOGO-SARI.png";
import Vicmic from "../../../Assets/Rangkaian/Ucare/Sponsor_Ucare/Vicmic.webp";

function BodyUcare() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isWideScreen = windowWidth <= 1024;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isWideScreen) {
        return (
            <div className="relative">
                <img
                    className="UcareMobile"
                    src={MobileUcare}
                    alt="Mobile Eulympic"
                />
                <div className="info">
                    <div className="Judul">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            U-Care
                        </h1>
                    </div>
                    <div className="Text">
                        <p
                            style={{
                                fontFamily: "SanFran-Regular, sans-serif",
                            }}
                        >
                            𝐔-𝐂𝐀𝐑𝐄 merupakan kegiatan yang akan mempersatukan
                            #Legions untuk berkolaborasi serta menginspirasi
                            satu sama lain.
                            <br />
                            <br />
                            Dalam tahap ini, 𝐔-𝐂𝐀𝐑𝐄 mengajak #Legions untuk mau
                            berkorban dan memberikan bantuan kepada orang lain
                            (Altruistic) serta dengan niat baik (Good-Willed)
                            dalam mencapai kebahagiaan bersama, dengan cara
                            aktif terlibat dalam kegiatan sosial.
                            <br />
                            <br />
                            "Embark with us on this extraordinary journey, where
                            we join forces to make a positive impact and spread
                            goodwill!"
                        </p>
                        {/* <div className="flex justify-center w-full">
                            <a
                                href="/rangkaian/ucare/volunteer"
                                target="_blank"
                                className="z-[99]"
                            >
                                <button
                                    type="button"
                                    className="btn1 z-[99]"
                                    disabled
                                >
                                    Closed
                                </button>
                            </a>
                        </div> */}
                        <div className="sponsorUcare_Container">
                            <img
                                src={Sunpride_LYFE}
                                alt="Sunpride_LYFE"
                                className="sponsorutama"
                            />
                            <div className="px-4 pb-2 sponsorUcare">
                                <img src={CiptaWarna} alt="CiptaWarna" />
                                <img src={Deorex} alt="Deorex" />
                                <img src={Evolene} alt="Evolene" />
                                <img src={Asus} alt="Asus" />
                                <img src={Fifgroup} alt="Fifgroup" />
                                <img src={ITO_EN} alt="ITO_EN" />
                                <img src={Leminerale} alt="Leminerale" />
                                <img src={OCBC} alt="OCBC" />
                                <img src={Pocari} alt="Pocari" />
                                <img src={ROG} alt="ROG" />
                                <img src={Roppang} alt="Roppang" />

                                <img src={Sunpride} alt="Sunpride" />
                                <img src={Teh_pucuk} alt="Teh_pucuk" />
                                <img src={SariRoti} alt="SariRoti" />
                                <img src={Tenjin} alt="Tenjin" />
                                <img src={Vicmic} alt="Vicmic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="relative flex UcarePC">
                <img className="LogoPC" src={LogoUcare} alt="Logo Ucare" />
                <img className="IsiPC" src={IsiUcare} alt="Isi Ucare" />
                <div className="infoPC">
                    <div className="JudulPC">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            U-Care
                        </h1>
                    </div>
                    <p style={{ fontFamily: "SanFran-Regular, sans-serif" }}>
                        𝐔-𝐂𝐀𝐑𝐄 merupakan kegiatan yang akan mempersatukan
                        #Legions untuk berkolaborasi serta menginspirasi satu
                        sama lain.
                        <br />
                        <br />
                        Dalam tahap ini, 𝐔-𝐂𝐀𝐑𝐄 mengajak #Legions untuk mau
                        berkorban dan memberikan bantuan kepada orang lain
                        (Altruistic) serta dengan niat baik (Good-Willed) dalam
                        mencapai kebahagiaan bersama, dengan cara aktif terlibat
                        dalam kegiatan sosial.
                        <br />
                        <br />
                        "Embark with us on this extraordinary journey, where we
                        join forces to make a positive impact and spread
                        goodwill!"
                    </p>
                    {/* <div className="flex justify-center w-full">
                        <a
                            href="/rangkaian/ucare/volunteer"
                            target="_blank"
                            className="z-[99]"
                        >
                            <button
                                type="button"
                                className="btn1 z-[99]"
                                disabled
                            >
                                Closed
                            </button>
                        </a>
                    </div> */}

                    <div className="sponsorUcare_Container">
                        <img
                            src={Sunpride_LYFE}
                            alt="Sunpride_LYFE"
                            className="sponsorutama"
                        />
                        <div className="px-4 pb-2 sponsorUcare">
                            <img src={CiptaWarna} alt="CiptaWarna" />
                            <img src={Deorex} alt="Deorex" />
                            <img src={Evolene} alt="Evolene" />
                            <img src={Asus} alt="Asus" />
                            <img src={Fifgroup} alt="Fifgroup" />
                            <img src={ITO_EN} alt="ITO_EN" />
                            <img src={Leminerale} alt="Leminerale" />
                            <img src={OCBC} alt="OCBC" />
                            <img src={Pocari} alt="Pocari" />
                            <img src={ROG} alt="ROG" />
                            <img src={Roppang} alt="Roppang" />

                            <img src={Sunpride} alt="Sunpride" />
                            <img src={Teh_pucuk} alt="Teh_pucuk" />
                            <img src={SariRoti} alt="SariRoti" />
                            <img src={Tenjin} alt="Tenjin" />
                            <img src={Vicmic} alt="Vicmic" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyUcare;
