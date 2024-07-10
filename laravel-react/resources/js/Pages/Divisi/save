import React, { useState } from "react";
import Carousel from "../../Components/Divisi/Carousel";
import divisions from "../Divisi/division";

function Divisi() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div
            className="relative min-h-screen flex items-center justify-center mx-auto bg-cover bg-no-repeat bg-fixed"
            style={{
                backgroundImage: `url(${divisions[currentIndex].background})`,
                backgroundPosition: "10% 50%",
            }}
        >
            <section className="flex items-center justify-center ml-56 relative z-10">
                <div className="relative">
                    <div className="inline-block">
                        <div className="relative">
                            <img
                                src={divisions[currentIndex].frame}
                                alt="Frame"
                                className="max-w-[1100px] right-0"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-[57%] -translate-y-1/2 z-20 ml-2">
                                <img
                                    src={divisions[currentIndex].bigLogo}
                                    alt="Big Logo"
                                    className="max-w-[1100px] translate-x-28"
                                />
                            </div>
                            <div className="absolute max-w-xs text-center text-lg top-[55%] left-[40%] transform -translate-x-[20%] -translate-y-1/2 w-1/2">
                                <h1 className="text-xl">
                                    {divisions[currentIndex].name}
                                </h1>
                                <p>{divisions[currentIndex].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
                <Carousel onChangeIndex={setCurrentIndex} />
            </div>
        </div>
    );
}

export default Divisi;
