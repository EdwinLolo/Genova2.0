import React, { useState, useEffect } from "react";
import LogoUcare from "../../../Assets/Rangkaian/Ucare/Ucare_Asset_1.webp";
import IsiUcare from "../../../Assets/Rangkaian/Ucare/Ucare_Asset_2.webp";
import MobileUcare from "../../../Assets/Rangkaian/Ucare/Ucare_Asset_Mobile.webp";
import "../../Font.css";
import "./BodyUcareStyle.css";

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
                        <div className="flex justify-center w-full">
                            <a
                                href="/rangkaian/ucare/volunteer"
                                target="_blank"
                                className="z-[99]"
                            >
                                <button type="button" className="btn1 z-[99]">
                                    Buy Ticket
                                </button>
                            </a>
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
                    <div className="flex justify-center w-full">
                        <a
                            href="/rangkaian/ucare/volunteer"
                            target="_blank"
                            className="z-[99]"
                        >
                            <button type="button" className="btn1 z-[99]">
                                Buy Ticket
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyUcare;
