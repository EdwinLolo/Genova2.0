import React, { useRef, useState, useEffect } from "react";
import MapsVid from "../Assets/Map/Bg_Maps_Ufest.mov";
import UfestLogo from "../Assets/Logo/UfestLogo.webp";
import MapsUfestTXT from "../Assets/Map/MapsUfestNoTXT.webp";
import img1 from "../Assets/Rangkaian/LogoMap/Unify.webp";
import img2 from "../Assets/Rangkaian/LogoMap/Ucare.webp";
import img3 from "../Assets/Rangkaian/LogoMap/Unveiling.webp";
import img4 from "../Assets/Rangkaian/LogoMap/Ulympic.webp";
import img5 from "../Assets/Rangkaian/LogoMap/E-Ulympic.webp";
import MapsUfestMobile from "../Assets/Map/bgMapmobile.webp";
import "../Components/Maps/Maps.css";

import Navbar from "../Components/Navbar/Navbar";

function Map({ onVideoEnd }) {
    const videoRef = useRef(null);
    const [videoOpacity, setVideoOpacity] = useState(1);
    const [showLogos, setShowLogos] = useState(false);

    const handleVideoEnd = () => {
        setShowLogos(true);
        const intervalId = setInterval(() => {
            setVideoOpacity((prevOpacity) => {
                const newOpacity = prevOpacity - 0.1;
                if (newOpacity <= 0) {
                    clearInterval(intervalId);
                    if (onVideoEnd) {
                        onVideoEnd();
                    }
                }
                return newOpacity;
            });
        }, 100);
    };

    useEffect(() => {
        const hasSeenVideo = sessionStorage.getItem("hasSeenVideo");
        if (hasSeenVideo) {
            setShowLogos(true);
            setVideoOpacity(0);
        }
    }, []);

    useEffect(() => {
        if (videoOpacity === 0) {
            sessionStorage.setItem("hasSeenVideo", true);
        }
    }, [videoOpacity]);

    return (
        <>
            <Navbar />
            <div className="h-[100vh] w-full relative flex justify-center items-center">
                {!showLogos && (
                    <>
                        <video
                            className="z-10 object-cover w-full h-full"
                            autoPlay
                            muted
                            onEnded={handleVideoEnd}
                            ref={videoRef}
                            playsInline
                            style={{ opacity: videoOpacity }}
                        >
                            <source src={MapsVid} alt="Video" />
                        </video>
                        <div
                            className="absolute z-20 text-4xl font-extrabold text-black transform -translate-x-1/2 -translate-y-1/2 font-custom top-1/2 left-1/2"
                            style={{ opacity: videoOpacity }}
                        >
                            <img
                                src={UfestLogo}
                                className="w-60"
                                alt="Ufest Logo"
                            />
                        </div>
                    </>
                )}

                {showLogos && (
                    <div className="map-containerMap">
                        <picture>
                            <source
                                srcSet={MapsUfestTXT}
                                media="(min-width: 768px)"
                            />
                            <img
                                src={MapsUfestMobile}
                                alt="Maps Ufest Mobile"
                                className="map-imageMap"
                            />
                        </picture>
                        <a href="/rangkaian/unify" className="logoMap unifyMap">
                            <img src={img1} alt="Unify" />
                        </a>
                        <a href="/rangkaian/ucare" className="logoMap ucareMap">
                            <img src={img2} alt="Ucare" />
                        </a>
                        <a
                            href="/rangkaian/unveiling"
                            className="logoMap unveilingMap"
                        >
                            <img src={img3} alt="Unveiling" />
                        </a>
                        <a
                            href="/rangkaian/ulympic"
                            className="logoMap ulympicMap"
                        >
                            <img src={img4} alt="Ulympic" />
                        </a>
                        <a
                            href="/rangkaian/eulympic"
                            className="logoMap eulympicMap"
                        >
                            <img src={img5} alt="E-Ulympic" />
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}

export default Map;
