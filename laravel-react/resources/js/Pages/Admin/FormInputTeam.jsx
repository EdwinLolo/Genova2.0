import React, { useState } from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
import { useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";

function FormInputTeam({ lombas }) {
    // console.log(lombas);
    const { data, setData, post } = useForm({
        lombaId: lombas[0].id_lomba,
        isInternal: lombas[0].isInternal,
        namaTeam: "",
        buktiTf: null,
        members: Array.from({ length: lombas[0].besarTeam }, (_, index) => ({
            namaLengkap: "",
            nim: index + 800,
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
        console.log(data);
        try {
            const response = await post("/team/input/data", {
                data,
                onSuccess: () => {
                    toast.success("Form submitted successfully!");
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

    // If Voli Putra
    if (selectedLomba.id_lomba === 3) {
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
                                    <div
                                        key={index}
                                        className="flex flex-col mb-5"
                                    >
                                        <input
                                            type="text"
                                            name={`nim[${index}]`}
                                            value={index}
                                            className="hidden mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                        />
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
                                            required={index < 5}
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
                                            Asal SMA
                                        </label>
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
                                        <label className="font-mono text-left">
                                            Kartu Pelajar
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
                                            required={index < 5}
                                            className="mb-1 block w-full py-1 font-mono px-2 bg-inherit border-[1px] border-white text-white shadow-sm"
                                        />
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
                        </div>
                    </div>
                </div>
            </div>
        );
    } else
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
                                    <div
                                        key={index}
                                        className="flex flex-col mb-5"
                                    >
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
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default FormInputTeam;
