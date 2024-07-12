import IonIcon from "@reacticons/ionicons";
import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Logo/UfestLogo.webp";
import BG from "../../Assets/Navbar/bg_1.png";
import "./Navbar.css";

function Navbar() {
    let [open, setOpen] = useState(false);
    let [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 550) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed z-10 w-[100vw] top-0 py-5 transition-all duration-300 flex items-center justify-center ${
                scrolled ? "bg-opacity-100" : "bg-opacity-0"
            }`}
        >
            <div
                className={`lg:flex md:flex items-center justify-between lg:bg-opacity-0 md:bg-opacity-0 pt-5 md:pt-0 sm:rounded-t-[20px] md:rounded-b-[100px] px-5 pb-14 md:px-6 lg:px-16 w-[90%] sm:w-[90%]  bodynavbar ${
                    scrolled ? "navbar-visible" : "navbar-hidden"
                }`}
                // style={{
                //     backgroundImage: scrolled ? `url(${BG})` : "none",
                //     backgroundSize: "auto",
                //     backgroundRepeat: "no-repeat",
                //     backgroundPosition: "center",
                // }}
            >
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-600 lg:font-[Poppins text-gray-800] md:font-[Poppins text-gray-800]">
                    <a
                        href="/"
                        className="w-[40px] lg:mb-2 mr-5 pt-auto visible"
                    >
                        <img src={Logo} alt="ufest logo" />
                    </a>
                    {scrolled && (
                        <span className="font-umn xl:text-[20px] lg:text-[18px] lg:mb-2 sm:text-[20px] mb-0 pt-1 hidden md:block">
                            UMN FESTIVAL
                        </span>
                    )}
                </div>
                {scrolled && (
                    <>
                        <button
                            role="button"
                            onClick={() => setOpen(!open)}
                            className="text-4xl absolute right-8 top-[38px] cursor-pointer lg:hidden md:hidden p-2"
                        >
                            <IonIcon name={open ? "close" : "menu"}></IonIcon>
                        </button>
                        <ul
                            className={`rounded-3xl lg:flex md:flex lg:items-center lg:mb-2 md:items-center lg:pb-0 md:pb-0 pb-5 absolute lg:static md:static bg-slate-100 lg:bg-opacity-0 md:bg-opacity-0 left-0 w-full z-10 lg:w-auto md:w-auto lg:px-0 md:px-0 px-[50px] transition-all duration-500 ease-in ${
                                open
                                    ? "top-[110px] opacity-100"
                                    : "top-[-400px]"
                            }`}
                        >
                            <li className="text-xl text-center md:ml-3 lg:ml-5 xl:ml-8 lg:my-0 md:my-0 my-7">
                                <a
                                    href="/"
                                    className="font-nav tracking-wider cursor-pointer  text-gray-600 hover:text-gray-800 lg:hover:text-gray-400 md:hover:text-gray-400 duration-500 font-extrabold  lg:text-[15px] xl:text-[20px]"
                                >
                                    HOME
                                </a>
                            </li>
                            <li className="text-xl text-center md:ml-3 lg:ml-5 xl:ml-8 lg:my-0 md:my-0 my-7">
                                <a
                                    href="/division"
                                    className="font-nav tracking-wider cursor-pointer  text-gray-600 hover:text-gray-800 lg:hover:text-gray-400 md:hover:text-gray-400 duration-500 font-extrabold  lg:text-[15px] xl:text-[20px]"
                                >
                                    DIVISION
                                </a>
                            </li>
                            {/* <li className="text-xl text-center md:ml-3 lg:ml-5 xl:ml-8 lg:my-0 md:my-0 my-7">
                                <a
                                    href="/map"
                                    className="font-nav tracking-wider cursor-pointer text-gray-600 hover:text-gray-800 lg:hover:text-gray-400 md:hover:text-gray-400 duration-500 font-extrabold  lg:text-[15px] xl:text-[20px]"
                                >
                                    MAP
                                </a>
                            </li> */}
                            <li className="text-xl text-center md:ml-3 lg:my-0 md:my-0 my-7">
                                <a
                                    href="/rangkaian/ucare"
                                    className="px-5 py-3 text-center text-white duration-500 bg-gray-600 rounded cursor-pointer md:py-2 sm:px-6 lg:px-5 md:px-6 xl:ml-8 hover:bg-indigo-400 font-custom"
                                >
                                    <span className="xl:text-xl lg:text-lg text-[20px] tracking-wider font-nav">
                                        Register
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
