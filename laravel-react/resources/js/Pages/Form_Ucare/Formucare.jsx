import React, { useState } from "react";
import Step1 from "./Ucarestep1";
import Step2 from "./ucarestep2";
import Step3 from "./ucarestep3";

function Formucare() {
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

        perkenalandiri: "",
        alasanikut: "",
        kelebihankekurangan: "",
        pandanganlansia: "",
        kebutuhanlansia: "",
        kesempatan: "",
    });

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bungkus bg-[#F0F8FF]">
            <form onSubmit={handleSubmit}>
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && (
                    <Step2 formData={formData} handleChange={handleChange} />
                )}
                {currentStep === 3 && (
                    <Step3 formData={formData} handleChange={handleChange} />
                )}

                <div className="flex justify-between w-full mt-2">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={handlePrevious}
                            className="px-4 py-2 text-white bg-blue-500 rounded-md"
                        >
                            Previous
                        </button>
                    )}
                    <div className="flex-grow"></div>
                    {currentStep < 3 && (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="px-4 py-2 text-white bg-blue-500 rounded-md"
                        >
                            Next
                        </button>
                    )}
                    {currentStep === 3 && (
                        <button
                            type="submit"
                            className="px-4 py-2 text-white bg-blue-500 rounded-md"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Formucare;
