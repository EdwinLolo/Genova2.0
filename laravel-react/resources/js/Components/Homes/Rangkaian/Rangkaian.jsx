import React, { useEffect, useState } from "react";

// css
import "./Stylerangkaian.css";

//foto
import image1 from "../../../Assets/HomeAssets/Rangkaian/UNVEILING.webp";
import image2 from "../../../Assets/HomeAssets/Rangkaian/E-ULYMPIC.webp";
import image3 from "../../../Assets/HomeAssets/Rangkaian/UCARE.webp";
import image4 from "../../../Assets/HomeAssets/Rangkaian/ULYMPIC.webp";
import image5 from "../../../Assets/HomeAssets/Rangkaian/UNIFY.webp";

import logo1 from "../../../Assets/HomeAssets/Rangkaian/Unveilingcopy.webp";
import logo2 from "../../../Assets/HomeAssets/Rangkaian/E-Ulympiccopy.webp";
import logo3 from "../../../Assets/HomeAssets/Rangkaian/Ucarecopy.webp";
import logo4 from "../../../Assets/HomeAssets/Rangkaian/Ulympiccopy.webp";
import logo5 from "../../../Assets/HomeAssets/Rangkaian/Unifycopy.webp";

import bg1 from "../../../Assets/HomeAssets/Rangkaian/UNVEILING_1.webp";
import bg2 from "../../../Assets/HomeAssets/Rangkaian/E-ULYMPIC_1copy.webp";
import bg3 from "../../../Assets/HomeAssets/Rangkaian/UCARE_1.webp";
import bg4 from "../../../Assets/HomeAssets/Rangkaian/ULYMPIC_1.webp";
import bg5 from "../../../Assets/HomeAssets/Rangkaian/UNIFY_1.webp";

import gambar1 from "../../../Assets/HomeAssets/Rangkaian/Unveiling_1copy.webp";
import gambar2 from "../../../Assets/HomeAssets/Rangkaian/E-Ulympic_1.webp";
import gambar3 from "../../../Assets/HomeAssets/Rangkaian/Ucare_1copy.webp";
import gambar4 from "../../../Assets/HomeAssets/Rangkaian/Ulympic_1copy.webp";
import gambar5 from "../../../Assets/HomeAssets/Rangkaian/Unify_1copy.webp";

import judul1 from "../../../Assets/HomeAssets/Rangkaian/Judul_Unveiling.webp";
import judul2 from "../../../Assets/HomeAssets/Rangkaian/Judul_E-Ulympic.webp";
import judul3 from "../../../Assets/HomeAssets/Rangkaian/Judul_Ucare.webp";
import judul4 from "../../../Assets/HomeAssets/Rangkaian/Judul_Ulympic.webp";
import judul5 from "../../../Assets/HomeAssets/Rangkaian/Judul_Unify.webp";

// logo sponsor
import vicmic from "../../../Assets/HomeAssets/Sponsor/Vicmic.webp";
import lenovo from "../../../Assets/HomeAssets/Sponsor/lenovo.webp";

function Rangkaian() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isWideScreen = windowWidth <= 1024;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // home hp
    const logos = [logo1, logo2, logo3, logo4, logo5];
    const images = [image1, image2, image3, image4, image5];
    const Titles = ["Unveiling", "E-Ulympic", "Ucare", "Ulympic", "Unify"];
    const Tujuan = ["unveiling", "eulympic", "ucare", "ulympic", "unify"];
    const [isHovered, setIsHovered] = useState(false);

    // Inside your component
    // const navigate = useNavigate();

    if (isWideScreen) {
        return (
            <div className="w-full h-full bg-gray-700">
                {images.map((image, index) => (
                    <a key={index} href={`/rangkaian/${Tujuan[index]}`}>
                        <div
                            key={index}
                            className="relative w-full h-[200px]"
                            // onClick={() => navigate(`/rangkaian/${Tujuan[index]}`)}
                        >
                            <div className="flex items-center justify-center h-full hover:scale-110">
                                <img
                                    src={image}
                                    className="object-cover  h-[200px] w-full block duration-300 transition-transform hover:scale-110"
                                    alt="BACKGROUND"
                                />
                            </div>
                            <div
                                className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-100 hover:opacity-0"
                                onMouseEnter={() => setIsHovered(false)}
                                onMouseLeave={() => setIsHovered(true)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h1 className="px-10 text-4xl font-custom sm:text-5xl">
                                    {Titles[index]}
                                </h1>
                                {isHovered && (
                                    <div className="flex items-center justify-end w-full pr-10 mt-2 top-full">
                                        <img
                                            src={logos[index]}
                                            className="w-20"
                                            alt="LOGO"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        );
    } else {
        return (
            <div className="rangkaianwrapper">
                <div className="overlaycolor"></div>

                <div className="content">
                    <a className="card" href="/rangkaian/unveiling">
                        <div className="wrapper">
                            <img
                                src={bg1}
                                className="cover-image"
                                alt="coverimage"
                            />
                        </div>
                        <img src={judul1} className="title" alt="title" />
                        <img
                            src={gambar1}
                            className="character"
                            alt="character"
                        />
                    </a>

                    <a className="card" href="/rangkaian/eulympic">
                        <div className="wrapper">
                            <img
                                src={bg2}
                                className="cover-image"
                                alt="coverimage"
                            />
                        </div>
                        <img src={judul2} className="title" alt="title" />
                        <img
                            src={gambar2}
                            className="character"
                            alt="charcter"
                        />
                    </a>
                    <a className="card" href="/rangkaian/ucare">
                        <div className="wrapper">
                            <img
                                src={bg3}
                                className="cover-image"
                                alt="coverimage"
                            />
                        </div>
                        <img src={judul3} className="title" alt="title" />
                        <img
                            src={gambar3}
                            className="character"
                            alt="character"
                        />
                    </a>

                    <a className="card" href="/rangkaian/ulympic">
                        <div className="wrapper">
                            <img
                                src={bg4}
                                className="cover-image"
                                alt="coverimage"
                            />
                        </div>
                        <img src={judul4} className="title" alt="title" />
                        <img
                            src={gambar4}
                            className="character4"
                            alt="character"
                        />
                    </a>

                    <a className="card" href="/rangkaian/unify">
                        <div className="wrapper">
                            <img
                                src={bg5}
                                className="cover-image"
                                alt="coverimage"
                            />
                        </div>
                        <img src={judul5} className="title" alt="title" />
                        <img
                            src={gambar5}
                            className="character5"
                            alt="character"
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export default Rangkaian;
