import React, { useState, useEffect } from "react";
import LogoUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Logo.webp";
import LogoCardUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_LogoCard.webp";
import MainUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Main.webp";
import PCLogoUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Logo_PC.webp";
import PCMainUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Main_PC.webp";
import PCCardUlympicPNG from "../../../Assets/Rangkaian/Ulympic/Ulympic_Asset_Card_PC.webp";
import "../../Font.css";
import "./UlympicMain.css";

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

function UlympicMain() {
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
            <div>
                <div className="relative w-full">
                    <img
                        className="w-full"
                        src={LogoUlympicPNG}
                        alt="Logo Ulympic"
                    />
                </div>
                <div className="relative w-full text-center">
                    <img
                        className="w-full MainUnifyPNG"
                        src={MainUlympicPNG}
                        alt="Main Ulympic"
                    />
                    <div className="info">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            Ulympic
                        </h1>
                        <p
                            style={{
                                fontFamily: "SanFran-Regular, sans-serif",
                            }}
                        >
                            𝐔𝐋𝐘𝐌𝐏𝐈𝐂 adalah rangkaian perlombaan kedua sekaligus
                            penutup perlombaan pada rangkaian kegiatan UMN
                            Festival 2024. Akan mempertandingkan turnamen
                            Futsal, Basket, Voli dan Badminton yang
                            diselenggarakan untuk internal maupun eksternal UMN.
                            <br />
                            <br />
                            𝐔𝐋𝐘𝐌𝐏𝐈𝐂 juga akan dilalui bagi #Legions untuk meraih
                            kemenangan, dalam tahap ini akan dipenuhi dengan
                            tantangan yang memerlukan keberanian (Valiant) untuk
                            bertarung serta kegigihan (Persistence) dari para
                            #Legions dalam menghadapi pertarungan yang ajaib dan
                            penuh dengan kegembiraan!
                            <br />
                            <br />
                            "Join us as we forged ahead, conquering with a
                            valiant spirit and embracing the magical revelry!"
                            <br />
                            <br />
                            <div className="sponsorUlympic_Container">
                                <img
                                    src={Evolene}
                                    alt="Evolene"
                                    className="sponsorutama"
                                />
                                <div className="px-4 pb-2 sponsorUlympic">
                                    <img src={CiptaWarna} alt="CiptaWarna" />
                                    <img src={Deorex} alt="Deorex" />
                                    <img
                                        src={Sunpride_LYFE}
                                        alt="Sunpride_LYFE"
                                    />
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
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="bungkus">
                <div className="cont">
                    <div className="PCLogo">
                        <img src={PCLogoUlympicPNG} alt="Logo Ulympic" />
                    </div>
                    <div className="PCMain">
                        <img src={PCMainUlympicPNG} alt="Main Ulympic" />
                        <div className="infoPC">
                            <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                                Ulympic
                            </h1>
                            <p
                                style={{
                                    fontFamily: "SanFran-Regular, sans-serif",
                                }}
                            >
                                𝐔𝐋𝐘𝐌𝐏𝐈𝐂 adalah rangkaian perlombaan kedua
                                sekaligus penutup perlombaan pada rangkaian
                                kegiatan UMN Festival 2024. Akan
                                mempertandingkan turnamen Futsal, Basket, Voli
                                dan Badminton yang diselenggarakan untuk
                                internal maupun eksternal UMN.
                                <br />
                                <br />
                                𝐔𝐋𝐘𝐌𝐏𝐈𝐂 juga akan dilalui bagi #Legions untuk
                                meraih kemenangan, dalam tahap ini akan dipenuhi
                                dengan tantangan yang memerlukan keberanian
                                (Valiant) untuk bertarung serta kegigihan
                                (Persistence) dari para #Legions dalam
                                menghadapi pertarungan yang ajaib dan penuh
                                dengan kegembiraan!
                                <br />
                                <br />
                                "Join us as we forged ahead, conquering with a
                                valiant spirit and embracing the magical
                                revelry!"
                            </p>
                            <div className="sponsorUlympic_Container">
                                <img
                                    src={Evolene}
                                    alt="Evolene"
                                    className="sponsorutama"
                                />
                                <div className="px-4 pb-2 sponsorUlympic">
                                    <img src={CiptaWarna} alt="CiptaWarna" />
                                    <img src={Deorex} alt="Deorex" />
                                    <img
                                        src={Sunpride_LYFE}
                                        alt="Sunpride_LYFE"
                                    />
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
            </div>
        );
    }
}

export default UlympicMain;
