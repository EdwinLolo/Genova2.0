import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";
import Button from "../../Components/Rangkaian/Ulympic/Button/Button";
import Navbar from "../../Components/Navbar/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function BadmintonFormEulympic({ lombas, captcha }) {
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const { data, setData } = useForm({
        lombaId: null,
        namaTeam: "",
        buktiTf: null,
        members: [],
    });

    const [selectedLomba, setSelectedLomba] = useState(null);
    const [isInternal, setIsInternal] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleButton = (lomba) => {
        setSelectedLomba(lomba);
        setIsInternal(lomba.isInternal);
        setData({
            lombaId: lomba.id_lomba,
            isInternal: lomba.isInternal,
            namaTeam: "",
            buktiTf: null,
            members: Array.from({ length: lomba.besarTeam }, () => ({
                namaLengkap: "",
                nim: "",
                idLine: "",
                ktm: null,
                asalKampus: "",
            })),
        });
    };

    const handleInputChange = (index, field, value) => {
        const updatedMembers = [...data.members];
        updatedMembers[index] = {
            ...updatedMembers[index],
            [field]: value,
        };
        setData({
            ...data,
            members: updatedMembers,
        });
    };

    const handleFileChange = (index, file) => {
        const updatedMembers = [...data.members];
        updatedMembers[index] = {
            ...updatedMembers[index],
            ktm: file,
        };
        setData({
            ...data,
            members: updatedMembers,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        // Check reCAPTCHA
        if (!recaptchaValue) {
            alert("Please complete the CAPTCHA");
            setProcessing(false);
            return;
        }

        const formData = new FormData();
        formData.append("lombaId", data.lombaId);
        formData.append("namaTeam", data.namaTeam);
        formData.append("buktiTf", data.buktiTf);
        formData.append("recaptchaValue", recaptchaValue);

        // Append members to formData
        data.members.forEach((member, index) => {
            formData.append(
                `members[${index}][namaLengkap]`,
                member.namaLengkap
            );
            formData.append(`members[${index}][nim]`, member.nim);
            formData.append(`members[${index}][idLine]`, member.idLine);
            formData.append(`members[${index}][asalKampus]`, member.asalKampus);
            if (member.ktm) {
                formData.append(`members[${index}][ktm]`, member.ktm);
            }
        });

        try {
            const response = await axios.post("/team/input/data", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Team input data processed successfully");
        } catch (error) {
            console.error("Error submitting form:", error);

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
                toast.error(
                    "Error submitting form. Please refresh the page and try again later."
                );
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
                <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg mt-44">
                    <div className="flex flex-wrap items-center justify-center">
                        {lombas.map((lomba, index) => (
                            <div className="mx-4 my-2">
                                <Button
                                    key={index}
                                    text={lomba.namaLomba}
                                    onClick={() => handleButton(lomba)}
                                    selectedLomba={selectedLomba}
                                    lomba={lomba}
                                />
                            </div>
                        ))}
                    </div>
                    {selectedLomba && (
                        <div className="mb-4 text-2xl font-bold text-center text-gray-700">
                            {selectedLomba.namaLomba}
                        </div>
                    )}
                    {selectedLomba && (
                        <form
                            onSubmit={handleFormSubmit}
                            encType="multipart/form-data"
                            className="p-6 bg-white rounded-lg shadow-md"
                        >
                            <div className="overflow-x-auto">
                                <div className="block">
                                    {data.members.map((member, index) => (
                                        <div
                                            key={index}
                                            className="mb-4 bg-white rounded-lg shadow-md"
                                        >
                                            <div className="px-4 py-2 font-semibold bg-gray-200">
                                                Anggota {index + 1}
                                            </div>
                                            <div className="px-4 py-2">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Nama Lengkap
                                                </label>
                                                <input
                                                    type="text"
                                                    name={`namaLengkap[${index}]`}
                                                    value={member.namaLengkap}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            index,
                                                            "namaLengkap",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="px-4 py-2">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    NIM
                                                </label>
                                                <input
                                                    type="text"
                                                    name={`nim[${index}]`}
                                                    value={member.nim}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            index,
                                                            "nim",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="px-4 py-2">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    ID Line
                                                </label>
                                                <input
                                                    type="text"
                                                    name={`idLine[${index}]`}
                                                    value={member.idLine}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            index,
                                                            "idLine",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="px-4 py-2">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    KTM
                                                </label>
                                                <input
                                                    type="file"
                                                    name={`ktm[${index}]`}
                                                    accept=".jpg,.jpeg,.png"
                                                    onChange={(e) =>
                                                        handleFileChange(
                                                            index,
                                                            e.target.files[0]
                                                        )
                                                    }
                                                    required
                                                    className="sm:text-sm"
                                                />
                                            </div>
                                            {isInternal === "false" && (
                                                <div className="px-4 py-2">
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Asal Kampus
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name={`asalKampus[${index}]`}
                                                        value={
                                                            member.asalKampus
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                index,
                                                                "asalKampus",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="namaTeam"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nama Team:
                                </label>
                                <input
                                    type="text"
                                    id="namaTeam"
                                    name="namaTeam"
                                    value={data.namaTeam}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            namaTeam: e.target.value,
                                        })
                                    }
                                    required
                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="buktiTf"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Bukti Transfer:
                                </label>
                                <input
                                    type="file"
                                    id="buktiTf"
                                    name="buktiTf"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            buktiTf: e.target.files[0],
                                        })
                                    }
                                    required
                                    className="lg:text-lg"
                                />
                            </div>
                            <div className="mb-5 captcha_unify">
                                <ReCAPTCHA
                                    sitekey={captcha}
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            <div className="mb-5 captcha_unify">
                                <ReCAPTCHA
                                    sitekey={captcha}
                                    onChange={handleRecaptchaChange}
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 lg:text-lg"
                                    disabled={processing}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}

export default BadmintonFormEulympic;
