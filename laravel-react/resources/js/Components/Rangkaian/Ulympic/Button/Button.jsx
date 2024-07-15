import React, { useRef, useEffect, useState } from "react";
import "./Button.css";

const Button = ({ text, onClick, selectedLomba, lomba }) => {
    const [textWidth, setTextWidth] = useState(0);
    const textRef = useRef(null);
    const isSelected =
        selectedLomba && selectedLomba.id_lomba === lomba.id_lomba;

    useEffect(() => {
        if (textRef.current) {
            setTextWidth(textRef.current.getBBox().width);
        }
    }, [text]);

    const svgWidth = Math.max(200, textWidth + 20);

    return (
        <div
            className={`svg-wrapper ${isSelected ? "selected" : ""}`}
            onClick={onClick}
        >
            <svg
                width={svgWidth}
                height="40"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect id="shape" height="40" width={svgWidth} />
                <text
                    ref={textRef}
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="button-text"
                >
                    {text}
                </text>
            </svg>
        </div>
    );
};

export default Button;
