import React, { useState, useEffect } from "react";
import Step1 from "./Ucarestep1";
import Step2 from "./ucarestep2";
import Step3 from "./ucarestep3";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar/Navbar";

import "./FormucareStyle.css";

function Formucare() {
    const [processing, setProcessing] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        namaLengkap: "",
        umur: "",
        tempatTinggal: "",
        idLine: "",
        instagram: "",
        noTelp: "",
        nim: "",
        jurusan: "",
        angkatan: "",
        email: "",
        isInternal: "false",
        asalKampus: "",

        docs: null,
    });

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;

        if (type === "file") {
            setFormData({
                ...formData,
                [name]: files.length ? files[0] : null,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        for (let key in formData) {
            if (formData[key] === "" || formData[key] === null) {
                toast.error("Please fill all the input fields.");
                return; // Stop the submission
            }
        }

        console.log("Form submitted:", formData);

        // Create a FormData object to handle file upload
        const formDataToSend = new FormData();
        formDataToSend.append("namaLengkap", formData.namaLengkap);
        formDataToSend.append("umur", formData.umur);
        formDataToSend.append("tempatTinggal", formData.tempatTinggal);
        formDataToSend.append("idLine", formData.idLine);
        formDataToSend.append("instagram", formData.instagram);
        formDataToSend.append("noTelp", formData.noTelp);
        formDataToSend.append("nim", formData.nim);
        formDataToSend.append("jurusan", formData.jurusan);
        formDataToSend.append("angkatan", formData.angkatan);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("isInternal", formData.isInternal);
        formDataToSend.append("asalKampus", formData.asalKampus);

        // If a file was selected, append it to the FormData
        if (formData.docs) {
            formDataToSend.append("docs", formData.docs);
        }

        try {
            const response = await axios.post("/ucare", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // Handle success response
            console.log(response.data);
            toast.success("Form submitted successfully!");
            // Reset the form
            setFormData({
                namaLengkap: "",
                umur: "",
                tempatTinggal: "",
                idLine: "",
                instagram: "",
                noTelp: "",
                nim: "",
                jurusan: "",
                angkatan: "",
                email: "",
                isInternal: "false",
                asalKampus: "",
                docs: null,
            });
        } catch (error) {
            // Handle error response
            console.error(error);
            alert("There was an error submitting the form.");
        } finally {
            setProcessing(false);
        }
    };

    // untuk IMG background
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <Navbar />
            <div
                className={`flex items-center justify-center w-full min-h-screen ${
                    isMobile
                        ? "bungkusformucareMobile"
                        : "bungkusformucareDekstop"
                } bg-[#F0F8FF] pt-[150px] pb-9`}
            >
                <form onSubmit={handleSubmit}>
                    {currentStep === 1 && <Step1 />}
                    {currentStep === 2 && (
                        <Step2
                            formData={formData}
                            handleChange={handleChange}
                        />
                    )}
                    {currentStep === 3 && (
                        <Step3
                            formData={formData}
                            handleChange={handleChange}
                        />
                    )}

                    <div
                        className="flex justify-between w-full mt-2"
                        style={{
                            fontFamily: "SanFran-Regular, sans-serif",
                        }}
                    >
                        {currentStep > 1 && (
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-100 hover:text-black focus:outline-none hover:ring focus:ring-red-500"
                            >
                                Previous
                            </button>
                        )}
                        <div className="flex-grow"></div>
                        {currentStep < 3 && (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-100 hover:text-black focus:outline-none hover:ring focus:ring-red-500"
                            >
                                Daftar volunteer
                            </button>
                        )}
                        {currentStep === 3 && (
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-100 hover:text-black focus:outline-none hover:ring focus:ring-red-500"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formucare;
