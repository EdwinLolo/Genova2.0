import React from "react";
import BgBadmin from "../../Assets/Ulympic/Badminton/bgBadminton.jpg";
import boxPc from "../../Assets/Ulympic/Badminton/boxPCBadminton.png";
import BgBadminMobile from "../../Assets/Ulympic/Badminton/bgBadmintonMobile.jpg";
import boxMobile from "../../Assets/Ulympic/Badminton/boxMobileBadminton.png";
import UlympicSlider from "../../Components/Rangkaian/Ulympic/Carousel/UlympicSlider";

import Badminton1 from "../../Assets/Ulympic/Badminton/Badminton1.jpg";
import Badminton2 from "../../Assets/Ulympic/Badminton/Badminton2.jpg";

const imagesUlympicSlider = [Badminton1, Badminton2];

function Badminton() {
    return (
        <div className="relative min-h-screen">
            <div
                className="hidden md:block absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${BgBadmin})` }}
            />
            <div
                className="md:hidden absolute inset-0 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${BgBadminMobile})` }}
            />

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div
                    className="hidden md:flex bg-no-repeat bg-cover bg-center w-full max-w-5xl aspect-video items-center justify-center p-8"
                    style={{ backgroundImage: `url(${boxPc})` }}
                >
                    <div className="text-center w-3/4">
                        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            BADMINTON
                        </h1>

                        <div className=" w-96 h-32 md:h-64 bg-white rounded-lg mx-auto mb-4 badminton-slider">
                            <UlympicSlider images={imagesUlympicSlider} interval={3000} />
                        </div>

                        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-white text-black px-4 py-2 rounded-lg w-1/2">
                                Badminton Ganda Putra
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-lg w-1/2">
                                Badminton Ganda Putri
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="md:hidden bg-no-repeat bg-cover bg-center w-full max-w-sm aspect-[9/16] flex items-center justify-center p-4"
                    style={{ backgroundImage: `url(${boxMobile})` }}
                >
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            BADMINTON
                        </h1>

                        <div className="w-full h-32 md:h-64 bg-white rounded-lg mx-auto mb-4">
                            <UlympicSlider images={imagesUlympicSlider} interval={3000} />
                        </div>

                        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-white text-black px-4 py-2 rounded-lg">
                                Badminton Ganda Putra
                            </button>
                            <button className="bg-white text-black px-4 py-2 rounded-lg">
                                Badminton Ganda Putri
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Badminton;
