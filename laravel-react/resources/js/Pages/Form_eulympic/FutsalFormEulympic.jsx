import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

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
        <div>
            <div className="flex flex-col min-h-screen bg-gray-300 md:flex-row ">
                <div className="flex flex-col justify-center flex-1 md:flex-row">
                    <div className="justify-center m-4">
                        <div className="flex flex-wrap justify-center">
                            {lombas.map((lomba, index) => (
                                <button
                                    key={index}
                                    className={`m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                                        selectedLomba &&
                                        selectedLomba.id === lomba.id_lomba
                                            ? "bg-blue-700"
                                            : ""
                                    }`}
                                    onClick={() => handleButton(lomba)}
                                >
                                    {lomba.namaLomba}
                                </button>
                            ))}
                        </div>
                        {selectedLomba && (
                            <div className="flex justify-center my-4">
                                Lomba: {selectedLomba.namaLomba}
                            </div>
                        )}
                        {selectedLomba && (
                            <form
                                onSubmit={handleFormSubmit}
                                encType="multipart/form-data"
                                className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md"
                            >
                                <div className="overflow-x-auto">
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="bg-gray-200">
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
                                        <tbody>
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
                                                                required={
                                                                    index < 5
                                                                }
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                                                                required={
                                                                    index < 5
                                                                }
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                                                                required={
                                                                    index < 5
                                                                }
                                                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                                                                required={
                                                                    index < 5
                                                                }
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
                                                                    className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                                />
                                                            </td>
                                                        )}
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
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
                                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                                    />
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FutsalFormEulympic;
