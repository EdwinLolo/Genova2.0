import React, { useState, useEffect } from "react";
import UnifyPNG from "../../../Assets/Rangkaian/Unify/Unify_Asset.png";
import LogoUnifyPNG from "../../../Assets/Rangkaian/Unify/Unify_Asset_Logo.png";
import MainUnifyPNG from "../../../Assets/Rangkaian/Unify/Unify_Asset_Main.png";
import PCLogoUnifyPNG from "../../../Assets/Rangkaian/Unify/Unify_Asset_Logo_PC.png";
import PCMainUnifyPNG from "../../../Assets/Rangkaian/Unify/Unify_Asset_Main_PC.png";
import "../../Font.css";
import "./UnifyMain.css";

function UnifyMain() {
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
                <img src={LogoUnifyPNG} alt="Logo Unify" />
                <div className="relative w-full text-center">
                    <img
                        className="w-full MainUnifyPNG"
                        src={MainUnifyPNG}
                        alt="Main Unify"
                    />
                    <div className="info">
                        <h1>𝐔𝐍𝐈𝐅𝐘</h1>
                        <p>
                            𝐔𝐍𝐈𝐅𝐘 merupakan kegiatan yang akan mempersatukan #Legions untuk berkolaborasi serta menginspirasi satu sama lain.
                            <br />
                            <br />
                            Dalam tahap ini, 𝐔𝐍𝐈𝐅𝐘 mengajak #Legions untuk mau berkorban dan memberikan bantuan kepada orang lain serta dengan niat baik dalam mencapai kebahagiaan bersama, dengan cara aktif terlibat dalam kegiatan sosial.
                            <br />
                            <br />
                            "Embark with us on this extraordinary journey, where we join forces to make a positive impact and spread goodwill!"
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="cont">
                <div className="PCLogo"><img src={PCLogoUnifyPNG} alt="Logo Unify" /></div>
                <div className="PCMain">
                    <img src={PCMainUnifyPNG} alt="Main Unify" />
                    <div className="infoPC">
                        <h1>𝐔𝐍𝐈𝐅𝐘</h1>
                        <p>
                            𝐔𝐍𝐈𝐅𝐘 merupakan kegiatan yang akan mempersatukan #Legions untuk berkolaborasi serta menginspirasi satu sama lain.
                            <br />
                            <br />
                            Dalam tahap ini, 𝐔𝐍𝐈𝐅𝐘 mengajak #Legions untuk mau berkorban dan memberikan bantuan kepada orang lain serta dengan niat baik dalam mencapai kebahagiaan bersama, dengan cara aktif terlibat dalam kegiatan sosial.
                            <br />
                            <br />
                            "Embark with us on this extraordinary journey, where we join forces to make a positive impact and spread goodwill!"
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnifyMain;