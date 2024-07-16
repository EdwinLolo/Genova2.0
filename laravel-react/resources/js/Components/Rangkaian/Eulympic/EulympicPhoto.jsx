import React, { useState, useEffect } from "react";
import EulympicPhotoBody from "../../../Assets/Rangkaian/Eulympic/E_ulimpic_Asset2_body.webp";
import LombaEulympic from "../../../Assets/Rangkaian/Eulympic/Eulimpic_Asset_3_PC.webp";
import Lomba1 from "../../../Assets/Rangkaian/Eulympic/Lomba1.webp";
import Lomba2 from "../../../Assets/Rangkaian/Eulympic/Lomba2.webp";
import Lomba3 from "../../../Assets/Rangkaian/Eulympic/Lomba3.webp";
import Lomba4 from "../../../Assets/Rangkaian/Eulympic/Lomba4.webp";
import Lomba5 from "../../../Assets/Rangkaian/Eulympic/Lomba5.webp";
import Lomba6 from "../../../Assets/Rangkaian/Eulympic/Lomba6.webp";
import Lomba7 from "../../../Assets/Rangkaian/Eulympic/Lomba7.webp";
import Lomba8 from "../../../Assets/Rangkaian/Eulympic/Lomba8.webp";
import vicmic from "../../../Assets/HomeAssets/Sponsor/Vicmic.webp";
import lenovo from "../../../Assets/HomeAssets/Sponsor/lenovo.webp";

// css
import "../../Font.css";
import "./EulympicPhotoStyle.css";

function EulympicPhoto() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isWideScreen = windowWidth <= 1024;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // const [countdownML, setCountdownML] = useState({
    //     days: "00",
    //     hours: "00",
    //     minutes: "00",
    //     seconds: "00",
    // });

    // const [countdownValorant, setCountdownValorant] = useState({
    //     days: "00",
    //     hours: "00",
    //     minutes: "00",
    //     seconds: "00",
    // });

    // const [isFormMLAvailable, setIsFormMLAvailable] = useState(false);
    // const [isFormValAvailable, setIsFormValAvailable] = useState(false);

    // useEffect(() => {
    //     const targetDateML = new Date(2024, 4, 3); // Emel sbatesnya sampe 1 mei 2024
    //     const targetDateValorant = new Date(2024, 3, 24); // Valorant sampe 24 April 2024

    //     // ML Countdown
    //     const timerML = setInterval(() => {
    //         const currentTime = new Date();
    //         const diffML = targetDateML - currentTime;

    //         if (diffML <= 0) {
    //             clearInterval(timerML);
    //             setCountdownML({
    //                 days: "00",
    //                 hours: "00",
    //                 minutes: "00",
    //                 seconds: "00",
    //             });
    //             setIsFormMLAvailable(true);
    //             return;
    //         }

    //             updateCountdownML(diffML);
    //     }, 1000);

    //     // Valorant Countdown
    //     const timerValorant = setInterval(() => {
    //         const currentTime = new Date();
    //         const diffValorant = targetDateValorant - currentTime;

    //         if (diffValorant <= 0) {
    //             clearInterval(timerValorant);
    //             setCountdownValorant({
    //                 days: "00",
    //                 hours: "00",
    //                 minutes: "00",
    //                 seconds: "00",
    //             });
    //         setIsFormValAvailable(true);
    //         return;
    //         }

    //         updateCountdownValorant(diffValorant);
    //     }, 1000);
    //     return () => {
    //         clearInterval(timerML);
    //         clearInterval(timerValorant);
    //     };
    // }, []);
    // function updateCountdownML(diffML) {
    //     const days = Math.floor(diffML / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((diffML / (1000 * 60 * 60)) % 24);
    //     const minutes = Math.floor((diffML / 1000 / 60) % 60);
    //     const seconds = Math.floor((diffML / 1000) % 60);

    //     setCountdownML({
    //         days: days < 10 ? "0" + days : days.toString(),
    //         hours: hours < 10 ? "0" + hours : hours.toString(),
    //         minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
    //         seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
    //     });
    // }

    // function updateCountdownValorant(diffValorant) {
    //     const days = Math.floor(diffValorant / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((diffValorant / (1000 * 60 * 60)) % 24);
    //     const minutes = Math.floor((diffValorant / 1000 / 60) % 60);
    //     const seconds = Math.floor((diffValorant / 1000) % 60);

    //     setCountdownValorant({
    //         days: days < 10 ? "0" + days : days.toString(),
    //         hours: hours < 10 ? "0" + hours : hours.toString(),
    //         minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
    //         seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
    //     });
    // }

    if (isWideScreen) {
        return (
            <div className="relative w-full text-center ">
                <img
                    className="w-full bgphoto"
                    src={EulympicPhotoBody}
                    alt="Logo Eulympic"
                />
                <div className="w-full CarouselPhoto">
                    <div
                        className="slider"
                        reverse="true"
                        style={{
                            // "--width": "300px",
                            // "--height": "500px",
                            "--quantity": 4,
                        }}
                    >
                        <div className="list">
                            <div className="item" style={{ "--position": 1 }}>
                                <img src={Lomba1} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 2 }}>
                                <img src={Lomba2} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 3 }}>
                                <img src={Lomba3} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 4 }}>
                                <img src={Lomba4} alt="IU" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="slider"
                        style={{
                            // "--width": "300px",
                            // "--height": "500px",
                            "--quantity": 4,
                        }}
                    >
                        <div className="list">
                            <div className="item" style={{ "--position": 1 }}>
                                <img src={Lomba5} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 2 }}>
                                <img src={Lomba6} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 3 }}>
                                <img src={Lomba7} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 4 }}>
                                <img src={Lomba8} alt="IU" />
                            </div>
                            {/* <div className="item" style={{ "--position": 10 }}>
                                <img src={IU} alt="IU" />
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="sponsorHP">
                    <h1>Sponsored by:</h1>
                    <div className="logosponsor">
                        <img src={vicmic} alt="vicmic" />
                        <img src={lenovo} alt="lenovo" />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <img
                    className="LombaPCEulympic"
                    src={LombaEulympic}
                    alt="Lomba Eulympic"
                />
                <div className="relative flex container-esport">
                    {/* <div className="mobilelegend">
                        <div className="esport-img-wrapper-mole">
                            <img className="mole-image" src={MoleBaru} alt="Mole Logo" />
                            <span>Register Here!</span>
                        </div>

                        <div className="container-time">
                            <div className="time">
                                <h2>{countdownML.days}</h2>
                                <small>Days</small>
                            </div>

                            <div className="time">
                                <h2>{countdownML.hours}</h2>
                                <small>Hours</small>
                            </div>

                            <div className="time">
                                <h2>{countdownML.minutes}</h2>
                                <small>Minutes</small>
                            </div>

                            <div className="time">
                                <h2>{countdownML.seconds}</h2>
                                <small>Seconds</small>
                            </div>
                        </div>

                        <button
                        className="btn1"
                        disabled
                        >
                        <span className="btn-txt1">FULL</span>
                        </button>
                    </div>

                    <div className="valorant">
                        <div className="esport-img-wrapper-valorant">
                            <img src={Valorant} alt="Valorant Logo" />
                            <span>Register Here!</span>
                        </div>

                        <div className="container-time">
                            <div className="time">
                                <h2>{countdownValorant.days}</h2>
                                <small>Days</small>
                            </div>

                            <div className="time">
                                <h2>{countdownValorant.hours}</h2>
                                <small>Hours</small>
                            </div>

                            <div className="time">
                                <h2>{countdownValorant.minutes}</h2>
                                <small>Minutes</small>
                            </div>

                            <div className="time">
                                <h2>{countdownValorant.seconds}</h2>
                                <small>Seconds</small>
                            </div>
                        </div>

                        <button
                        className="btn1"
                        disabled
                        >
                        <span className="btn-txt1">FULL</span>
                        </button>
                    </div> */}

                    <div className="w-full CarouselPhotoPC">
                        <div
                            className="sliderPC"
                            reverse="true"
                            style={{
                                // "--width": "300px",
                                // "--height": "500px",
                                "--quantity": 8,
                            }}
                        >
                            <div className="listPC">
                                <div
                                    className="itemPC"
                                    style={{ "--position": 1 }}
                                >
                                    <img src={Lomba1} alt="IU" />
                                </div>
                                <div
                                    className="itemPC"
                                    style={{ "--position": 2 }}
                                >
                                    <img src={Lomba2} alt="IU" />
                                </div>
                                <div
                                    className="itemPC"
                                    style={{ "--position": 3 }}
                                >
                                    <img src={Lomba3} alt="IU" />
                                </div>
                                <div
                                    className="itemPC"
                                    style={{ "--position": 4 }}
                                >
                                    <img src={Lomba4} alt="IU" />
                                </div>
                                <div
                                    className="itemPC"
                                    style={{ "--position": 5 }}
                                >
                                    <img src={Lomba5} alt="IU" />
                                </div>
                                <div
                                    className="itemPC"
                                    style={{ "--position": 6 }}
                                >
                                    <img src={Lomba6} alt="IU" />
                                </div>
                                <div
                                    className="itemPC"
                                    style={{ "--position": 7 }}
                                >
                                    <img src={Lomba7} alt="IU" />
                                </div>
                                <div
                                    className="itemPC"
                                    style={{ "--position": 8 }}
                                >
                                    <img src={Lomba8} alt="IU" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sponsor">
                    <h1>Sponsored by:</h1>
                    <div className="logosponsor">
                        <img src={vicmic} alt="vicmic" />
                        <img src={lenovo} alt="lenovo" />
                    </div>
                </div>
            </div>
        );
    }
}

export default EulympicPhoto;
