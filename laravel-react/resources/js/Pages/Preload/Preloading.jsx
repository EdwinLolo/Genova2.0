import React from "react";
import "./PreloadStyle.scss";
import LogoUpes from "../../Assets/Logo/UfestLogo.webp";

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={LogoUpes} alt="Logo" className="preloader-logo" />
            <div className="loading-bar-container">
                <div className="loading-bar"></div>
            </div>
        </div>
    );
};

export default Preloader;
