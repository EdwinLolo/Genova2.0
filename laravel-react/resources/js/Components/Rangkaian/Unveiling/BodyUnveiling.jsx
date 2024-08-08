import React, { useState, useEffect } from "react";
import LogoUnveiling from "../../../Assets/Rangkaian/Unveiling/Unveiling_Asset_1.webp";
import IsiUnveiling from "../../../Assets/Rangkaian/Unveiling/Unveiling_Asset_2.webp";
import MobileUnveiling from "../../../Assets/Rangkaian/Unveiling/Unveiling_Asset_Mobile.webp";
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
                <img
                    className="UnveilingMobile"
                    src={MobileUnveiling}
                    alt="Mobile Unveiling"
                />
                <div className="infoUnveiling">
                    <div className="JudulUnveiling">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            Unveiling
                        </h1>
                    </div>
                    <div className="TextUnveiling">
                        <p
                            style={{
                                fontFamily: "SanFran-Regular, sans-serif",
                            }}
                        >
                            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 merupakan rangkaian awal yang membuka UMN
                            Festival 2024! Didesain untuk memperkenalkan seluruh
                            agenda festival kepada masyarakat Universitas
                            Multimedia Nusantara!
                            <br />
                            <br />
                            𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 menciptakan keinginan para #Legions untuk
                            mengenal lebih dalam tentang UMN Festival 2024
                            (Curiosity) dan juga meningkatkan semangat para
                            #Legions untuk menyambut UMN Festival 2024
                            (Enthusiastic)!
                        </p>
                    </div>
                    <div className="flex justify-center w-full align-middle">
                        <a
                            href="https://drive.google.com/drive/folders/1YPxjL2-g2hWcnWfGeBHxLPYoJJl6NQjx"
                            target="_blank"
                        >
                            <button type="button" className="btn1 z-[99]">
                                Get your Photo here!
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="relative flex UnveilingPC">
                <img
                    className="LogoPCUnveiling"
                    src={LogoUnveiling}
                    alt="Logo Unveiling"
                />
                <img
                    className="IsiPCUnveiling"
                    src={IsiUnveiling}
                    alt="Isi Unveiling"
                />
                <div className="infoPCUnveiling">
                    <div className="JudulPCUnveiling">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            Unveiling
                        </h1>
                    </div>
                    <p style={{ fontFamily: "SanFran-Regular, sans-serif" }}>
                        𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 merupakan rangkaian awal yang membuka UMN
                        Festival 2024! Didesain untuk memperkenalkan seluruh
                        agenda festival kepada masyarakat Universitas Multimedia
                        Nusantara!
                        <br />
                        <br />
                        𝐔𝐍𝐕𝐄𝐈𝐋𝐈𝐍𝐆 menciptakan keinginan para #Legions untuk
                        mengenal lebih dalam tentang UMN Festival 2024
                        (Curiosity) dan juga meningkatkan semangat para #Legions
                        untuk menyambut UMN Festival 2024 (Enthusiastic)!
                    </p>
                    <div className="flex justify-center w-full align-middle">
                        <a
                            href="https://drive.google.com/drive/folders/1YPxjL2-g2hWcnWfGeBHxLPYoJJl6NQjx"
                            target="_blank"
                        >
                            <button type="button" className="btn1 z-[99]">
                                Get your Photo here!
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyUnveiling;
