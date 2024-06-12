import React, { useState, useEffect } from "react";
import EulympicPhotoBody from "../../../Assets/Rangkaian/Eulympic/E_ulimpic_Asset2_body.png";
import IU from "../../../Assets/Rangkaian/Eulympic/iu.webp";

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
                            "--quantity": 10,
                        }}
                    >
                        <div className="list">
                            <div className="item" style={{ "--position": 1 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 2 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 3 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 4 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 5 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 6 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 7 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 8 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 9 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 10 }}>
                                <img src={IU} alt="IU" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="slider"
                        style={{
                            // "--width": "300px",
                            // "--height": "500px",
                            "--quantity": 9,
                        }}
                    >
                        <div className="list">
                            <div className="item" style={{ "--position": 1 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 2 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 3 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 4 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 5 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 6 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 7 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 8 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            <div className="item" style={{ "--position": 9 }}>
                                <img src={IU} alt="IU" />
                            </div>
                            {/* <div className="item" style={{ "--position": 10 }}>
                                <img src={IU} alt="IU" />
                            </div> */}
                        </div>
                    </div>
                    <a
                        href="https://drive.google.com/drive/u/4/folders/1YPxjL2-g2hWcnWfGeBHxLPYoJJl6NQjx"
                        target="_blank"
                    >
                        <button type="button" className="btn1">
                            See More
                        </button>
                    </a>
                </div>
            </div>
        );
    } else {
        return <h1>pc</h1>;
    }
}

export default EulympicPhoto;
