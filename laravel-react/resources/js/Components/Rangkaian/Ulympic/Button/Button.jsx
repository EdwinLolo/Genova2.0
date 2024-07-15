import React from "react";
import "./Button.css";

const Button = ({ text, onClick, selectedLomba, lomba }) => {
    const isSelected =
        selectedLomba && selectedLomba.id_lomba === lomba.id_lomba;

    return (
        <div
            className={`svg-wrapper ${isSelected ? "selected" : ""}`}
            onClick={onClick}
        >
            <svg height="40" width="200" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="200" />
                <text
                    x="100"
                    y="25"
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
