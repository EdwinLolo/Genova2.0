import React, { useState, useEffect } from "react";
import NavbarAdmin from "../../Components/Navbar/NavbarAdmin";
import SidebarAdmin from "../../Components/Admin/SidebarAdmin";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

function FormInputTeam({ lombas }) {
    const { data, setData, post, errors, processing } = useForm({
        lombaId: null,
        namaTeam: "",
        buktiTf: null, // Corrected field name to buktiTf
        members: [],
    });

    const [selectedLomba, setSelectedLomba] = useState(null);

    const handleButton = (lomba) => {
        setSelectedLomba(lomba);
        setData({
            ...data,
            lombaId: lomba.id_lomba,
            namaTeam: "",
            buktiTf: null, // Corrected field name to buktiTf
            members: Array.from({ length: lomba.besarTeam }, () => ({
                namaLengkap: "",
                nim: "",
                idLine: "",
                ktm: null, // Initialize ktm as null for each member
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
            ktm: file, // Update ktm field with the selected file
        };
        setData({
            ...data,
            members: updatedMembers,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await post("/admin/team/input/data", {
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
                    // Handle general errors
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
            <div className="flex bg-gray-300">
                <div className="flex flex-col">
                    <SidebarAdmin />
                </div>
                <div className="flex flex-row flex-auto justify-center">
                    <div className="flex flex-col items-center">
                        <div>
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
                        <div className="mt-4">
                            {selectedLomba && (
                                <div className="flex justify-center mb-4">
                                    Lomba: {selectedLomba.namaLomba}
                                </div>
                            )}
                            {selectedLomba && (
                                <form
                                    onSubmit={handleFormSubmit}
                                    encType="multipart/form-data"
                                >
                                    <table className="table-auto">
                                        <thead>
                                            <tr>
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
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>
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
                                                            />
                                                        </td>
                                                        <td>
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
                                                            />
                                                        </td>
                                                        <td>
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
                                                            />
                                                        </td>
                                                        <td>
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
                                    <div className="mt-4">
                                        <label htmlFor="namaTeam">
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
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="buktiTf">
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
        </div>
    );
}

export default FormInputTeam;
