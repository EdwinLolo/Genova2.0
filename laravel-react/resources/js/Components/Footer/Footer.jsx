import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Logo/UfestLogo.webp";
import Bem from "../../Assets/Footer/BemLogo.webp";
import Sosmed from "./Sosmed";

function Footer() {
    return (
        <div>
            <div className="gradient py-14 hidden lg:block"></div>
            <footer
                id="footer"
                className="flex footer px-10 text-neutral-content justify-between pt-5"
            >
                <div className="flex w-full flex-col justify-evenly items-center py-10 lg:pt-5 lg:pb-10 lg:mb-10">
                    <div className="flex items-center center mb-5 lg:mb-0 justify-evenly w-full">
                        <div className="w-36 flex justify-center">
                            <img
                                className="h-28 lg:h-32 footer-img "
                                src={Logo}
                                alt="logo"
                            />
                        </div>
                        <div className="hidden lg:flex flex-col justify-center lg:ml-2 items-center">
                            <div className="hidden lg:block">
                                <div className="flex flex-col justify-center items-center my-5 lg:my-8">
                                    <Sosmed />
                                </div>
                            </div>

                            <p
                                style={{ color: "White" }}
                                className="text-center"
                            >
                                Universitas Multimedia Nusantara
                                <br />
                                Jl. Scientia Boulevard, Gading Serpong
                                <br />
                                Tangerang, Banten 15811, Indonesia
                            </p>
                        </div>
                        <div className="w-36 flex justify-center">
                            <img
                                className="h-28 lg:h-32 footer-img "
                                src={Bem}
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col ml-1 items-center justify-center ">
                        <p
                            style={{ color: "White" }}
                            className="text-center text-base lg:hidden"
                        >
                            Universitas Multimedia Nusantara
                            <br />
                            Jl. Scientia Boulevard, Gading Serpong
                            <br />
                            Tangerang, Banten 15811, Indonesia
                        </p>

                        <div className="flex flex-col justify-center items-center my-10 lg:hidden">
                            <Sosmed />
                        </div>
                    </div>
                </div>

                <div className="Footer-Foot flex justify-center self-center">
                    <p className="text-center footer-text tracking-wide mb-4 lg:mb-2">
                        © UMN FESTIVAL 2024 By <strong> Genova </strong>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
