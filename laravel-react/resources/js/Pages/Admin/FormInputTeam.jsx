import React, { useState } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

function FormInputTeam({ lombas }) {
    const { data, setData, post } = useForm({
        lombaId: null,
        namaTeam: "",
        buktiTf: null,
        members: [],
    });

    const [selectedLomba, setSelectedLomba] = useState(null);

    const handleButton = (lomba) => {
        setSelectedLomba(lomba);
        setData({
            lombaId: lomba.id_lomba,
            namaTeam: "",
            buktiTf: null,
            members: Array.from({ length: lomba.besarTeam }, () => ({
                namaLengkap: "",
                nim: "",
                idLine: "",
                ktm: null,
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
            <NavbarAdmin />
            <div className="flex bg-gray-300 min-h-screen flex-col md:flex-row">
                <div className="flex flex-col md:flex-row ">
                    <SidebarAdmin />
                </div>
                <div className="flex flex-col md:flex-row flex-1">
                    <div className="m-4">
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
                                className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md"
                            >
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
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
                                                                required
                                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                                                            />
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="namaTeam"
                                        className="block font-medium text-sm text-gray-700"
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
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label
                                        htmlFor="buktiTf"
                                        className="block font-medium text-sm text-gray-700"
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
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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

export default FormInputTeam;
