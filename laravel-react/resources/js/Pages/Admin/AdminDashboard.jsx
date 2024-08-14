import React from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
import Logo from "../../Assets/Logo/UfestLogo.webp";

function AdminDashboard() {
    return (
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="flex-grow flex flex-col justify-center items-center p-3">
                <span className="text-xl md:text-3xl font-mono text-center">
                    Ini adalah Dashboard Admin <br />
                    UMN Festival 2024
                </span>
                <img
                    className="w-28 lg:w-48"
                    style={{ filter: "brightness(0) invert(1)" }}
                    src={Logo}
                    alt="logo"
                />
            </div>
        </div>
    );
}

export default AdminDashboard;
