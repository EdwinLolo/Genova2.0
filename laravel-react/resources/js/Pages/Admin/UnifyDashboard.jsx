import React, { useState } from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
import axios from "axios";
import { toast } from "react-toastify";
import UnifyForm from "./UnifyForm";

function UnifyDashboard() {
    const [expandedSection, setExpandedSection] = useState("showData");
    const [selectedForm, setSelectedForm] = useState(null);
    const [data, setData] = useState({
        nama: "",
        jurusan: "",
        angkatan: "",
        noHp: "",
        email: "",
        kodeRef: "",
        jumlahTiket: 0,
        buktiTf: null,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const toggleSection = (section) => {
        if (expandedSection === section) {
            setExpandedSection(null);
            setSelectedForm(null); // Hide form when collapsing the section
        } else {
            setExpandedSection(section);
            setSelectedForm(null); // Hide form when collapsing the section
        }
    };

    const handleButton = (x) => {
        setSelectedForm(x);
        if (x === "internal") {
            setData({
                nama: "",
                jurusan: "",
                angkatan: "",
                noHp: "",
                email: "",
                kodeRef: "",
                jumlahTiket: 0,
                buktiTf: null,
            });
        } else if (x === "external") {
            setData({
                nama: "",
                noHp: "",
                email: "",
                kodeRef: "",
                jumlahTiket: 0,
                buktiTf: null,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            const formData = new FormData();
            formData.append("formType", selectedForm);
            for (const key in data) {
                formData.append(key, data[key]);
            }

            const response = await axios.post("/unify", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            // Clear form data and selection after successful submission
            toast.success("Form submitted successfully!");
            setSelectedForm(null);
            setData({
                nama: "",
                jurusan: "",
                angkatan: "",
                noHp: "",
                email: "",
                jumlahTiket: 0,
                buktiTf: null,
            });
        } catch (error) {
            console.error("Error submitting form:", error.response.data.errors);

            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                Object.values(error.response.data.errors).forEach((err) => {
                    err.forEach((e) => {
                        toast.error(e);
                    });
                });
            } else {
                toast.error("Error submitting form. Please try again later.");
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="flex flex-col p-10">
                <span
                    className="text-2xl mb-1 md:text-3xl text-right font-extrabold cursor-pointer"
                    onClick={() => toggleSection("showData")}
                >
                    Show Unifies
                </span>
                <hr />
                {expandedSection === "showData" && (
                    <div>
                        <div className="flex flex-col gap-2">
                            <a href="unify/external">
                                <button className="mt-2 bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2">
                                    External
                                </button>
                            </a>
                            <a href="unify/internal">
                                <button className="bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2">
                                    Internal
                                </button>
                            </a>
                            <a href="unify/all">
                                <button className="bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2">
                                    ALL
                                </button>
                            </a>
                            <div className="flex flex-row justify-between gap-2">
                                <a href="unify/unchecked" className="w-2/3">
                                    <button className="bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2">
                                        Show Unchecked
                                    </button>
                                </a>
                                <a href="unify/checked" className="w-2/3">
                                    <button className="bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2">
                                        Show Checked
                                    </button>
                                </a>
                            </div>
                            <div className="flex gap-2 justify-between">
                                <a href="unify/belomdiambil" className="w-2/3">
                                    <button className="bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2">
                                        Show belom diambil
                                    </button>
                                </a>
                                <a href="unify/sudahdiambil" className="w-2/3">
                                    <button className="bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2">
                                        Show sudah diambil
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                <span
                    className="text-2xl my-1 mt-3 md:text-3xl text-right font-extrabold cursor-pointer"
                    onClick={() => toggleSection("inputData")}
                >
                    Input Data
                </span>
                <hr />
                {expandedSection === "inputData" && (
                    <div className="flex flex-col gap-2">
                        <button
                            className="mt-2 bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2"
                            onClick={() => handleButton("external")}
                        >
                            Input External
                        </button>
                        <button
                            className="bg-inherit text-white font-bold font-mono text-md w-full hover:bg-gray-400 border-2 p-2"
                            onClick={() => handleButton("internal")}
                        >
                            Input Internal
                        </button>
                    </div>
                )}

                <div className="flex justify-center w-full">
                    {/* Integrate UnifyForm Component */}
                    {selectedForm && (
                        <UnifyForm
                            selectedForm={selectedForm}
                            data={data}
                            errors={errors}
                            processing={processing}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default UnifyDashboard;
