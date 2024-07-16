import React from "react";
import LogoEulympic from "../Components/Rangkaian/Eulympic/LogoEulympic";
import EulympicPhoto from "../Components/Rangkaian/Eulympic/EulympicPhoto";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function PageEulympic() {
    return (
        <>
            <Navbar />
            <LogoEulympic />
            <EulympicPhoto />
            <Footer />
        </>
    );
}

export default PageEulympic;
