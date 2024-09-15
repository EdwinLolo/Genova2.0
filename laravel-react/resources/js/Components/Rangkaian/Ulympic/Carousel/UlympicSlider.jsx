import React, { useState, useEffect } from "react";
import "./UlympicSlider.css";

const UlympicSlider = ({ images = [], interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const placeholderImage = "../../../Assets/Ulympic/Badminton/Badminton1.png";
    const displayedImages = images.length > 0 ? images : [placeholderImage];

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === displayedImages.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(autoSlide);
    }, [displayedImages, interval]);

    return (
        <div className="carousel-container">
            {displayedImages.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                >
                    <img
                        src={image}
                        className="carousel-image"
                        alt={`Slide ${index + 1}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default UlympicSlider;
