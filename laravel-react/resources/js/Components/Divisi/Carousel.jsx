import React, { useState, useEffect } from "react";
import "./Carousel.css";
import AcaraLogoWithBg from "../../Assets/DivisionAssets/Acara/AcaraLogo.png";
import BPHLogoWithBg from "../../Assets/DivisionAssets/BPH/BPHLogo.png";
import DekorLogoWithBg from "../../Assets/DivisionAssets/Dekorasi/DekorLogo.png";
import DokumLogoWithBg from "../../Assets/DivisionAssets/Dokumentasi/DokumLogo.png";
import FreshMoneyLogoWithBg from "../../Assets/DivisionAssets/FreshMoney/FreshMoneyLogo.png";
import VisualLogoWithBg from "../../Assets/DivisionAssets/Pisa/VisualLogo.png";
import KeamananLogoWithBg from "../../Assets/DivisionAssets/Keamanan/KeamananLogo.png";
import KonsumLogoWithBg from "../../Assets/DivisionAssets/Konsumsi/KonsumLogo.png";
import LombaLogoWithBg from "../../Assets/DivisionAssets/Lomba/LombaLogo.png";
import MedparLogoWithBg from "../../Assets/DivisionAssets/Medpar/MedparLogo.png";
import PerkapLogoWithBg from "../../Assets/DivisionAssets/Perkab/PerkapLogo.png";
import PubliLogoWithBg from "../../Assets/DivisionAssets/Publi/PubliLogo.png";
import SponsorLogoWithBg from "../../Assets/DivisionAssets/Sponsor/SponsorLogo.png";
import TicketLogoWithBg from "../../Assets/DivisionAssets/Ticketing/TicketingLogo.png";
import WebsiteLogoWithBg from "../../Assets/DivisionAssets/Website/WebsiteLogo.png";

const logos = [
    AcaraLogoWithBg,
    BPHLogoWithBg,
    DekorLogoWithBg,
    DokumLogoWithBg,
    FreshMoneyLogoWithBg,
    VisualLogoWithBg,
    KeamananLogoWithBg,
    KonsumLogoWithBg,
    LombaLogoWithBg,
    MedparLogoWithBg,
    PerkapLogoWithBg,
    PubliLogoWithBg,
    SponsorLogoWithBg,
    TicketLogoWithBg,
    WebsiteLogoWithBg,
    

];


const Carousel = ({ onChangeIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleItemClick = (index) => {
        setCurrentIndex(index);
        onChangeIndex(index);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowDown") {
            setCurrentIndex((prevIndex) => {
                const newIndex =
                    prevIndex === logos.length - 1 ? 0 : prevIndex + 1;
                onChangeIndex(newIndex);
                return newIndex;
            });
        } else if (event.key === "ArrowUp") {
            setCurrentIndex((prevIndex) => {
                const newIndex =
                    prevIndex === 0 ? logos.length - 1 : prevIndex - 1;
                onChangeIndex(newIndex);
                return newIndex;
            });
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="wrapper">
            <div className="carousel">
                {logos.map((logo, index) => {
                    let className = "carousel__item";
                    if (index === currentIndex) {
                        className += " active";
                    } else if (
                        index === currentIndex - 1 ||
                        (currentIndex === 0 && index === logos.length - 1)
                    ) {
                        className += " above";
                    } else if (
                        index === currentIndex + 1 ||
                        (currentIndex === logos.length - 1 && index === 0)
                    ) {
                        className += " below";
                    } else {
                        className += " hidden";
                    }

                    return (
                        <div
                            key={index}
                            className={className}
                            onClick={() => handleItemClick(index)}
                        >
                            <img src={logo} alt="logo" className="images" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
