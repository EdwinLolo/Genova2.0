import React, { useState, useEffect } from "react";
import LogoEulympicPNG from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset1.webp";
import LogoEulympicPNG2 from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset1_head.webp";
import LogoEulympicPNG3 from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset1_body.webp";
import LogoEulympicPC from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset_1_PC.webp";
import IsiEulympicPC from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset_2_PC.webp";
import "../../Font.css";
import "./LogoEulympicStyle.css";

function LogoEulympic() {
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
                <img src={LogoEulympicPNG2} alt="Logo Eulympic" />
                <div className="relative w-full text-center">
                    <img
                        className="w-full LogoEulympicPNG"
                        src={LogoEulympicPNG3}
                        alt="Logo Eulympic"
                    />
                    <div className="info">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            E-Ulympic
                        </h1>
                        <p
                            className="textEulympic"
                            style={{
                                fontFamily: "SanFran-Regular, sans-serif",
                            }}
                        >
                            𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 merupakan rangkaian perlombaan pertama
                            dari UMN Festival 2024. E-Ulympic akan
                            mempertandikan dua permainan E-sports yang banyak di
                            gemari yaitu Valorant dan Mobile Legends.
                            <br />
                            <br />
                            𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 juga memiliki tujuan yaitu menanamkan dan
                            meningkatkan jiwa kompetitif para #Legions melalui
                            turnamen E-Sports! Diharapkan E-Ulympic dapat
                            menjadi wadah bagi seluruh mahasiswa/i untuk
                            menunjukan bakat dan talenta mereka dalam dunia
                            E-Sports!
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="relative flex EulympicPC">
                <img
                    className="LogoPCEulympic"
                    src={LogoEulympicPC}
                    alt="Logo Eulympic"
                />
                <img
                    className="IsiPCEulympic"
                    src={IsiEulympicPC}
                    alt="Isi Eulympic"
                />
                <div className="infoPCEulympic">
                    <div className="JudulPCEulympic">
                        <h1 style={{ fontFamily: "Akbaal, sans-serif" }}>
                            E-Ulympic
                        </h1>
                    </div>
                    <p style={{ fontFamily: "SanFran-Regular, sans-serif" }}>
                        𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 merupakan rangkaian perlombaan pertama dari
                        UMN Festival 2024. E-Ulympic akan mempertandikan dua
                        permainan E-sports yang banyak di gemari yaitu Valorant
                        dan Mobile Legends.
                        <br />
                        <br />
                        𝐄-𝐔𝐋𝐘𝐌𝐏𝐈𝐂 juga memiliki tujuan yaitu menanamkan dan
                        meningkatkan jiwa kompetitif para #Legions melalui
                        turnamen E-Sports! Diharapkan E-Ulympic dapat menjadi
                        wadah bagi seluruh mahasiswa/i untuk menunjukan bakat
                        dan talenta mereka dalam dunia E-Sports!
                    </p>
                </div>
            </div>
        );
    }
}

export default LogoEulympic;
