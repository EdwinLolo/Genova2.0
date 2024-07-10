import React, { useState, useEffect } from "react";
import "./Carousel.css";
import AcaraLogoWithBg from "../../Assets/DivisionAssets/Acara/2.png";
import BPHLogoWithBg from "../../Assets/DivisionAssets/BPH/1.png";
import DekorLogoWithBg from "../../Assets/DivisionAssets/Dekorasi/3.png";
import DokumLogoWithBg from "../../Assets/DivisionAssets/Dokumentasi/4.png";
import FreshMoneyLogoWithBg from "../../Assets/DivisionAssets/FreshMoney/5.png";
import VisualLogoWithBg from "../../Assets/DivisionAssets/Pisa/6.png";

const logos = [
    AcaraLogoWithBg,
    BPHLogoWithBg,
    DekorLogoWithBg,
    DokumLogoWithBg,
    FreshMoneyLogoWithBg,
    VisualLogoWithBg,
];

const Carousel = ({ onChangeIndex, isWideScreen }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleItemClick = (index) => {
        setCurrentIndex(index);
        onChangeIndex(index);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            setCurrentIndex((prevIndex) => {
                const newIndex =
                    prevIndex === logos.length - 1 ? 0 : prevIndex + 1;
                onChangeIndex(newIndex);
                return newIndex;
            });
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
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
        <div className={`wrapper ${isWideScreen ? "" : "mobile-wrapper"}`}>
            <div
                className={`carousel ${isWideScreen ? "" : "mobile-carousel"}`}
            >
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
