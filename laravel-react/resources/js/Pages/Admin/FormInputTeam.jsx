import React, { useState } from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

function FormInputTeam({ lombas }) {
    console.log(lombas);
    const { data, setData, post } = useForm({
        lombaId: lombas[0].id_lomba,
        isInternal: lombas[0].isInternal,
        namaTeam: "",
        buktiTf: null,
        members: Array.from({ length: lombas[0].besarTeam }, () => ({
            namaLengkap: "",
            nim: "",
            idLine: "",
            ktm: null,
            asalKampus: "",
        })),
    });

    const selectedLomba = lombas[0];
    const isInternal = lombas[0].isInternal;

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
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="flex bg-inherit flex-col md:flex-row">
                <div className="flex flex-col md:flex-row flex-1 justify-center">
                    <div className="flex flex-col m-4 md:w-5/6">
                        <span className="my-2 font-mono text-lg font-bold text-right">
                            {selectedLomba.namaLomba}
                        </span>
                        <hr />
                        <form
                            onSubmit={handleFormSubmit}
                            encType="multipart/form-data"
                            className="flex flex-col gap-2 my-2"
                        >
                            {data.members.map((member, index) => (
                                <div key={index} className="flex flex-col mb-5">
                                    <label className="font-mono font-bold text-right">
                                        Anggota {index + 1}
                                    </label>
                                    <label className="font-mono text-left">
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
                                        className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                    <label className="font-mono text-left">
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
                                        className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                    <label className="font-mono text-left">
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
                                        className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    />
                                    <label className="font-mono text-left">
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
                                        className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm"
                                    />
                                    {!isInternal && (
                                        <input
                                            type="text"
                                            name={`asalKampus[${index}]`}
                                            value={member.asalKampus}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    index,
                                                    "asalKampus",
                                                    e.target.value
                                                )
                                            }
                                            className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="mt-4">
                                <label
                                    htmlFor="namaTeam"
                                    className="block text-white font-mono"
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
                                    className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="buktiTf"
                                    className="block text-white font-mono"
                                >
                                    Bukti Transfer:
                                </label>
                                <input
                                    className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm"
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

                            <button
                                type="submit"
                                className="flex font-mono text-center text-black bg-white p-2 mx-auto"
                            >
                                Submit
                            </button>
                        </form>

                        {/* <form
                            onSubmit={handleFormSubmit}
                            encType="multipart/form-data"
                            className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md text-black"
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
                                            <th className="px-4 py-2">NIM</th>
                                            <th className="px-4 py-2">
                                                ID Line
                                            </th>
                                            <th className="px-4 py-2">KTM</th>
                                            {isInternal === "false" && (
                                                <th className="px-4 py-2">
                                                    Asal Kampus
                                                </th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.members.map((member, index) => (
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
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
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
                                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                                    />
                                                </td>
                                                <td className="px-4 py-2">
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
                                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                                                {isInternal === "false" && (
                                                    <td className="px-4 py-2">
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
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                                        />
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
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
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormInputTeam;
