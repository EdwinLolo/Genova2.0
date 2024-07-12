import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Logo/UfestLogo.webp";
import Bem from "../../Assets/Footer/BemLogo.webp";
import Sosmed from "./Sosmed";

function Footer() {
    return (
        <div>
            <div className="pembatas"></div>
            <footer
                id="footer"
                className="flex justify-between px-10 pt-5 footer text-neutral-content"
            >
                <div className="flex flex-col items-center w-full py-10 justify-evenly lg:pt-5 lg:pb-10 lg:mb-10">
                    <div className="flex items-center w-full mb-5 center lg:mb-0 justify-evenly">
                        <div className="flex justify-center w-36">
                            <img
                                className="h-28 lg:h-32 footer-img "
                                src={Logo}
                                alt="logo"
                            />
                        </div>
                        <div className="flex-col items-center justify-center hidden lg:flex lg:ml-2">
                            <div className="hidden lg:block">
                                <div className="flex flex-col items-center justify-center my-5 lg:my-8">
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
                        <div className="flex justify-center w-36">
                            <img
                                className="h-28 lg:h-32 footer-img "
                                src={Bem}
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center ml-1 ">
                        <p
                            style={{ color: "White" }}
                            className="text-base text-center lg:hidden"
                        >
                            Universitas Multimedia Nusantara
                            <br />
                            Jl. Scientia Boulevard, Gading Serpong
                            <br />
                            Tangerang, Banten 15811, Indonesia
                        </p>

                        <div className="flex flex-col items-center justify-center my-10 lg:hidden">
                            <Sosmed />
                        </div>
                    </div>
                </div>

                <div className="flex self-center justify-center Footer-Foot">
                    <p className="mb-4 tracking-wide text-center footer-text lg:mb-2">
                        © UMN FESTIVAL 2024 By <strong> Genova </strong>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
