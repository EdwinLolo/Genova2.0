import React, { useState, useEffect } from "react";
import Bracket from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset_4_PC.png";
import "../../Font.css";
import "./EulympicBracketStyle.css";
import vicmic from "../../../Assets/HomeAssets/Sponsor/Vicmic.webp";
import lenovo from "../../../Assets/HomeAssets/Sponsor/lenovo.webp";


function BracketEulympic() {
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
                <p>BracketHP</p>
            </div>
        );
    } else {
        return (
            <div className="container-bracket relative">
                <img className="BracketPCEulympic" src={Bracket} alt="Bracket Eulympic" />
                <div className="IsiBracketPC">
                    <h1 className="JudulBracketPC" style={{ fontFamily: "Akbaal, sans-serif" }}>Mobile Legends</h1>
                    <iframe
                        iframe
                        src="https://challonge.com/3bmxkf6c/module"
                        frameborder="0"
                        allowtransparency="true"         
                        className="bracket"
                    ></iframe>
                </div>
                <div className="sponsor">
                    <h1>Sponsored by:</h1>
                    <div className="logosponsor">
                        <img src={vicmic} alt="vicmic" />
                        <img src={lenovo} alt="lenovo" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BracketEulympic;