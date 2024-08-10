import React, { useState, useEffect } from "react";
import EulympicPhotoBody from "../../../Assets/Rangkaian/Eulympic/E_ulimpic_Asset2_body.webp";
import LombaEulympic from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset_3_PC.webp";
import Lomba1 from "../../../Assets/Rangkaian/Eulympic/Lomba1.webp";
import Lomba2 from "../../../Assets/Rangkaian/Eulympic/Lomba2.webp";
import Lomba3 from "../../../Assets/Rangkaian/Eulympic/Lomba3.webp";
import Lomba4 from "../../../Assets/Rangkaian/Eulympic/Lomba4.webp";
import Lomba5 from "../../../Assets/Rangkaian/Eulympic/Lomba5.webp";
import Lomba6 from "../../../Assets/Rangkaian/Eulympic/Lomba6.webp";
import Lomba7 from "../../../Assets/Rangkaian/Eulympic/Lomba7.webp";
import Lomba8 from "../../../Assets/Rangkaian/Eulympic/Lomba8.webp";
import vicmic from "../../../Assets/HomeAssets/Sponsor/Vicmic.webp";
import lenovo from "../../../Assets/HomeAssets/Sponsor/lenovo.webp";
import CiptaWarna from "../../../Assets/HomeAssets/Sponsor/CiptaWarna.webp";
import TenjinLogo from "../../../Assets/HomeAssets/Sponsor/TenjinLogoPack.webp";

// css
import "../../Font.css";
import "./EulympicPhotoStyle.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function EulympicPhoto() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isWideScreen = windowWidth <= 1024;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slides = [
        { url: Lomba1 },
        { url: Lomba2 },
        { url: Lomba3 },
        { url: Lomba4 },
        { url: Lomba5 },
        { url: Lomba6 },
        { url: Lomba7 },
        { url: Lomba8 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    if (isWideScreen) {
        return (
            <div className="relative w-full text-center ">
                <img
                    className="absolute inset-0 object-cover w-full h-full bgphoto"
                    src={EulympicPhotoBody}
                    alt="Logo Eulympic"
                />
                <div className="kotakHP max-w-[1000px] h-[500px] w-full m-auto py-16 px-4 relative group z-30">
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                        }}
                        className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
                    ></div>
                    {/* Left Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className="flex justify-center py-2 top-4">
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className="text-2xl cursor-pointer"
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://drive.google.com/drive/folders/1p6a3pTHq7I-HEGE5_--lEK8pJnGbzPAC"
                        target="_blank"
                        className="flex justify-center py-4"
                    >
                        <button className="btn1">
                            <span className="btn-txt1">See More</span>
                        </button>
                    </a>

                    <div className="mt-5 sponsorHP">
                        <h1>Sponsored by:</h1>
                        <div className="logosponsorHP">
                            <img src={vicmic} alt="vicmic" />
                            <img src={lenovo} alt="lenovo" />
                            <img src={CiptaWarna} alt="CiptaWarna" />
                            <img src={TenjinLogo} alt="Tenjin" />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="relative">
                <img
                    className="absolute inset-0 object-cover LombaPCEulympic"
                    src={LombaEulympic}
                    alt="Lomba Eulympic"
                    style={{ zIndex: 0 }}
                />
                <div className="kotak max-w-[1100px] h-[650px] w-full m-auto py-16 px-4 relative group z-10">
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                        }}
                        className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
                    ></div>
                    {/* Left Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className="flex justify-center py-2 top-4">
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className="text-2xl cursor-pointer"
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://drive.google.com/drive/folders/1p6a3pTHq7I-HEGE5_--lEK8pJnGbzPAC"
                        target="_blank"
                        className="flex justify-center py-4"
                    >
                        <button className="btn1">
                            <span className="btn-txt1">See More</span>
                        </button>
                    </a>

                    <div className="mt-5 sponsor">
                        <h1>Sponsored by:</h1>
                        <div className="logosponsor">
                            <img src={vicmic} alt="vicmic" />
                            <img src={lenovo} alt="lenovo" />
                            <img src={CiptaWarna} alt="CiptaWarna" />
                            <img src={TenjinLogo} alt="Tenjin" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EulympicPhoto;
