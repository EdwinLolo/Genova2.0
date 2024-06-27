import React from "react";
import Divisi from "../Components/Homes/Divisihome/Divisi";
import Navbar from "../Components/Navbar/Navbar";
// import Tujuan from "../Components/Homes/Hero/Tujuan";

function Home() {
    return (
        <div className="overflow-hidden">
            <Navbar />
            {/* <Tujuan /> */}
            <Divisi />
        </div>
    );
}

export default Home;
