import React, { useState, useEffect } from "react";
import Divisi from "../Components/Homes/Divisihome/Divisi";
import Navbar from "../Components/Navbar/Navbar";
import Tujuan from "../Components/Homes/Hero/Tujuan";
import Rangkaian from "../Components/Homes/Rangkaian/Rangkaian";
import Preloader from "./Preload/Preloading";
import Footer from "../Components/Footer/Footer";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData1 = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Data1 loaded");
                }, 2000); // Simulasi waktu pemuatan
            });
        };

        const fetchData2 = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Data2 loaded");
                }, 2500); // Simulasi waktu pemuatan
            });
        };

        const loadAllData = async () => {
            await Promise.all([fetchData1(), fetchData2()]);
            setLoading(false);
        };

        loadAllData();
    }, []);

    return (
        <div className="overflow-hidden">
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <Navbar />
                    <Tujuan />
                    <Divisi />
                    <Rangkaian />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default Home;
