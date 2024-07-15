import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";
import Button from "../../Components/Rangkaian/Ulympic/Button/Button";
import Navbar from "../../Components/Navbar/Navbar";

function FutsalFormEulympic({ lombas }) {
    const { data, setData, post } = useForm({
        lombaId: null,
        namaTeam: "",
        buktiTf: null,
        members: [],
    });

    const [selectedLomba, setSelectedLomba] = useState(null);
    const [isInternal, setIsInternal] = useState(null);

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

        try {
            const response = await post("/team/input/data", {
                data,
                onSuccess: () => {
                    toast.success("Form submitted successfully!");
                    setSelectedLomba(null);
                    setData({
                        lombaId: null,
                        isInternal: "",
                        namaTeam: "",
                        buktiTf: null,
                        members: [],
                    });
                },
                onError: (error) => {
                    console.log(error);
                    const error_message = "Error: " + error.message;
                    toast.error(error_message);
                },
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form. Please try again later.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mt-44">
                    <div className="flex flex-wrap justify-center items-center">
                        {lombas.map((lomba, index) => (
                            <div className="my-2 mx-4">
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
                    {/* {selectedLomba && (
                    <div className="text-center text-2xl font-bold mb-4 text-gray-700">
                        {selectedLomba.namaLomba}
                    </div>
                )} */}
                    {selectedLomba && (
                        <form
                            onSubmit={handleFormSubmit}
                            encType="multipart/form-data"
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="overflow-x-auto">
                                <div className="hidden md:block">
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="bg-gray-200 text-gray-700">
                                                <th className="px-4 py-2">
                                                    Anggota
                                                </th>
                                                <th className="px-4 py-2">
                                                    Nama Lengkap
                                                </th>
                                                <th className="px-4 py-2">
                                                    NIM
                                                </th>
                                                <th className="px-4 py-2">
                                                    ID Line
                                                </th>
                                                <th className="px-4 py-2">
                                                    KTM
                                                </th>
                                                {isInternal === "false" && (
                                                    <th className="px-4 py-2">
                                                        Asal Kampus
                                                    </th>
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-gray-100">
                                            {data.members.map(
                                                (member, index) => (
                                                    <tr
                                                        key={index}
                                                        className="border-b border-gray-200"
                                                    >
                                                        <td className="px-4 py-2">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                name={`namaLengkap[${index}]`}
                                                                value={
                                                                    member.namaLengkap
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        index,
                                                                        "namaLengkap",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                required
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                                                            />
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                name={`nim[${index}]`}
                                                                value={
                                                                    member.nim
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        index,
                                                                        "nim",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                required
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                                                            />
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <input
                                                                type="text"
                                                                name={`idLine[${index}]`}
                                                                value={
                                                                    member.idLine
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        index,
                                                                        "idLine",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                                                            />
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <input
                                                                type="file"
                                                                name={`ktm[${index}]`}
                                                                accept=".jpg,.jpeg,.png"
                                                                onChange={(e) =>
                                                                    handleFileChange(
                                                                        index,
                                                                        e.target
                                                                            .files[0]
                                                                    )
                                                                }
                                                                required
                                                                className="lg:text-lg"
                                                            />
                                                        </td>
                                                        {isInternal ===
                                                            "false" && (
                                                            <td className="px-4 py-2">
                                                                <input
                                                                    type="text"
                                                                    name={`asalKampus[${index}]`}
                                                                    value={
                                                                        member.asalKampus
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleInputChange(
                                                                            index,
                                                                            "asalKampus",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:text-lg"
                                                                />
                                                            </td>
                                                        )}
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="block md:hidden">
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
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 lg:text-lg"
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

export default FutsalFormEulympic;
