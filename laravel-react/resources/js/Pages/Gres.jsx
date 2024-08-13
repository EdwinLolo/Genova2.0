import React from "react";
import Gress from "../Assets/Rangkaian/LogoMap/gres.webp";

function Gres() {
    return (
        <div className="w-screen h-screen bg-pink-300">
            <div className="flex justify-center w-full h-full align-middle">
                <img src={Gress} alt="gres" className="w-fit" />
            </div>
        </div>
    );
}

export default Gres;
