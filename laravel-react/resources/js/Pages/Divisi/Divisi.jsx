import React, { useState, useEffect } from "react";
import Carousel from "../../Components/Divisi/Carousel";
import divisions from "../Divisi/division";
import mobiledivisions from "../Divisi/mobiledivision";
import "./Divisi.css";

function Divisi() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isWideScreen = windowWidth <= 1040;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    if (isWideScreen) {
        return (
            <>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative flex flex-col justify-center items-center">
                        <img
                            src={mobiledivisions[currentIndex].frame}
                            alt=""
                            className="w-full"
                        />
                        <div className="info">
                            <h1>{mobiledivisions[currentIndex].name}</h1>
                            <p>{mobiledivisions[currentIndex].desc}</p>
                        </div>
                        <div className="logo">
                            <img
                                src={mobiledivisions[currentIndex].logo}
                                alt="Logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
                    <Carousel onChangeIndex={setCurrentIndex} />
                </div>
            </>
        );
    } else {
        return (
            <>
                <div
                    className="bg-cover bg-no-repeat h-screen flex justify-center items-center"
                    style={{
                        backgroundImage: `url(${divisions[currentIndex].background})`,
                    }}
                >
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="flex justify-center items-center relative ml-[20vw] mt-[6vw] max-w-[60vw]">
                            <img
                                src={divisions[currentIndex].frame}
                                alt=""
                                className="w-full h-auto"
                            />
                            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%] w-1/2 p-[1vw] box-border text-center text-[1.3vw]">
                                <h1>{divisions[currentIndex].name}</h1>
                                <p>{divisions[currentIndex].desc}</p>
                            </div>
                            <div className="logo absolute w-[80vw]">
                                <img
                                    src={divisions[currentIndex].bigLogo}
                                    alt=""
                                    className="left-1/3 transform -translate-x-[7%] -translate-y-[8%]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
                    <Carousel onChangeIndex={setCurrentIndex} />
                </div>
            </>
        );
    }
}

export default Divisi;
