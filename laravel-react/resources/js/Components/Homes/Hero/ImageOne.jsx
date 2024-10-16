import React, { useRef, useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import Trailer from "../../../Assets/HomeAssets/Trailer.mov";
// import Carousel from "./Carousel"; // Import your Carousel component here
// import { Fade } from "react-reveal";
import "./Styletujuan.css";
import "../../Font.css";

function ImageOne() {
    const [paddingTop, setPaddingTop] = useState(0);
    const videoRef = useRef(null);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (videoRef.current) {
    //       const scrolled = window.scrollY;
    //       videoRef.current.style.transform = `translateY(-${scrolled * 0.5}px)`;
    //       setPaddingTop(scrolled * 0.5); // Adjust the padding top based on scroll
    //     }
    //   };

    //   window.addEventListener("scroll", handleScroll);

    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div className="relative h-screen overflow-hidden pt-[300px] bg-black">
            <div className="absolute inset-0 bg-black" style={{ opacity: 0.6 }}>
                <video
                    ref={videoRef}
                    className="absolute inset-0 object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={Trailer} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <Fade clear duration={3500}> */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white pt-[35%] md:pt-[15%] lg:pt-[1%]">
                <h1 className="mb-5 text-4xl font-bold text-center md:text-6xl font-custom">
                    UMN FESTIVAL
                </h1>
                <p className="text-lg text-center md:text-xl font-custom">
                    SHOW YOUR VALOR FIGHT WITH HONOR
                </p>
                <IonIcon
                    name="caret-down-outline"
                    className="mt-10 text-[50px] animate-bounce pt-10"
                ></IonIcon>
            </div>
            {/* </Fade> */}
            <div style={{ paddingTop: `${paddingTop}px` }}></div>{" "}
            {/* Empty div for padding */}
        </div>
    );
}

export default ImageOne;
