import React, { useState, useEffect } from "react";
import LogoUnveiling from "../../../Assets/Rangkaian/Unveiling/Unveiling_Asset_1.png";
import IsiUnveiling from "../../../Assets/Rangkaian/Unveiling/Unveiling_Asset_2.png";
import MobileUnveiling from "../../../Assets/Rangkaian/Unveiling/Unveiling_Asset_Mobile.png"
import "../../Font.css";
import "./BodyUnveilingStyle.css";

function BodyUnveiling() {
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
                <img className="UnveilingMobile" src={MobileUnveiling} alt="Mobile Unveiling" />
                <div className="infoUnveiling">
                    <div className="JudulUnveiling">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>Unveiling</h1>
                    </div>
                    <div className="TextUnveiling">
                        <p style={{ fontFamily: "SanFran-Regular, sans-serif" }}> 
                            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 merupakan rangkaian awal yang membuka UMN Festival 2024!
                            Didesain untuk memperkenalkan seluruh agenda festival kepada
                            masyarakat Universitas Multimedia Nusantara!
                        <br />
                        <br />
                            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 menciptakan keinginan para #Legions untuk mengenal lebih
                            dalam tentang UMN Festival 2024 (Curiosity) dan juga meningkatkan
                            semangat para #Legions untuk menyambut UMN Festival 2024
                            (Enthusiastic)!
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="UnveilingPC flex relative">
                <img className="LogoPCUnveiling" src={LogoUnveiling} alt="Logo Unveiling" />
                <img className="IsiPCUnveiling" src={IsiUnveiling} alt="Isi Unveiling" />
                <div className="infoPCUnveiling">
                    <div className="JudulPCUnveiling">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>Unveiling</h1>
                    </div>
                    <p style={{ fontFamily: "SanFran-Regular, sans-serif" }}>
                        𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 merupakan rangkaian awal yang membuka UMN Festival 2024!
                        Didesain untuk memperkenalkan seluruh agenda festival kepada
                        masyarakat Universitas Multimedia Nusantara!
                    <br />
                    <br />
                        𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 menciptakan keinginan para #Legions untuk mengenal lebih
                        dalam tentang UMN Festival 2024 (Curiosity) dan juga meningkatkan
                        semangat para #Legions untuk menyambut UMN Festival 2024
                        (Enthusiastic)!
                    </p>
                </div>
            </div>
        );
    }
}

export default BodyUnveiling;