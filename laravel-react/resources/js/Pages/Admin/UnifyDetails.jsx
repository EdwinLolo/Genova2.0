import React from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";
import { Inertia } from "@inertiajs/inertia";

function UnifyDetails({ data }) {
    console.log(data);

    const handleInfo = (id) => {
        window.open(`/admin/unify/detail/${id}`, "_blank");
    };

    const handleChecked = async (id) => {
        try {
            await Inertia.visit(`/admin/unify/check/${id}`, {
                method: "post",
                preserveState: true,
                preserveScroll: true,
            });
            setOrderStatus((prevStatus) => ({
                ...prevStatus,
                [id]: { ...prevStatus[id], checked: true },
            }));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleUnchecked = async (id) => {
        try {
            await Inertia.visit(`/admin/unify/uncheck/${id}`, {
                method: "post",
                preserveState: true,
                preserveScroll: true,
            });
            setOrderStatus((prevStatus) => ({
                ...prevStatus,
                [id]: { ...prevStatus[id], checked: false },
            }));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleSudahDiambil = async (id) => {
        try {
            await Inertia.visit(`/admin/unify/diambil/${id}`, {
                method: "post",
                preserveState: true,
                preserveScroll: true,
            });
            setOrderStatus((prevStatus) => ({
                ...prevStatus,
                [id]: { ...prevStatus[id], taken: true },
            }));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleBelomDiambil = async (id) => {
        try {
            await Inertia.visit(`/admin/unify/belomdiambil/${id}`, {
                method: "post",
                preserveState: true,
                preserveScroll: true,
            });
            setOrderStatus((prevStatus) => ({
                ...prevStatus,
                [id]: { ...prevStatus[id], taken: false },
            }));
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    return (
        <div
            className="text-white font-sans min-h-screen flex flex-col"
            style={{ backgroundColor: "rgb(33, 33, 33)" }}
        >
            <NavbarAdmin />
            <div className="flex flex-col mt-5 mx-3 self-center w-5/6 gap-1">
                {data.status === "checked" ? (
                    <button
                        onClick={() => handleUnchecked(data.id)}
                        className="w-full font-bold text-white bg-blue-600 font-mono py-2"
                        type="button"
                    >
                        Uncheck
                    </button>
                ) : (
                    <button
                        onClick={() => handleChecked(data.id)}
                        className="w-full font-bold text-white bg-green-600 font-mono py-2"
                        type="button"
                    >
                        Check
                    </button>
                )}
                {data.udahDiambil === "checked" ? (
                    <button
                        onClick={() => handleBelomDiambil(data.id)}
                        className="w-full font-bold text-white bg-blue-600 font-mono py-2"
                        type="button"
                    >
                        Uncheck Ticket Taken
                    </button>
                ) : (
                    <button
                        onClick={() => handleSudahDiambil(data.id)}
                        className={`w-full font-bold text-white font-mono py-2 ${
                            data.status !== "checked"
                                ? "bg-green-900"
                                : "bg-green-600"
                        }`}
                        type="button"
                        disabled={data.status !== "checked"} // Disable the button if status is not "checked"
                    >
                        Check Ticket Taken
                    </button>
                )}

                <div className="flex flex-col mt-3 font-bold text-md font-sans">
                    <h1 className="flex justify-between text-left text-xl">
                        Status
                        {data.status === "unchecked" &&
                        data.udahDiambil === "unchecked" ? (
                            <span className="text-red-600">Unverified</span>
                        ) : data.status === "checked" &&
                          data.udahDiambil === "checked" ? (
                            <span className="text-green-400">Complete</span>
                        ) : (
                            <span className="text-yellow-400">Verified</span>
                        )}
                    </h1>
                    <hr />
                    <div className="flex flex-col">
                        {data.status === "unchecked" ? (
                            <div className="text-right">
                                Unverified by Admin
                            </div>
                        ) : (
                            <div className="text-right">Verified</div>
                        )}
                        {data.udahDiambil === "unchecked" ? (
                            <div className="text-right">Ticket Not Taken</div>
                        ) : (
                            <div className="text-right">Ticket Taken</div>
                        )}
                    </div>
                </div>

                <div className="flex flex-row justify-between text-white font-black text-3xl text-right mb-1 mt-5">
                    <div className="flex flex-col justify-between gap-[1px]">
                        <span className="text-left text-sm align-middle">
                            {data.jumlahTiket} Tiket
                        </span>
                        <span className="text-center font-sans text-sm font-bold">
                            {data.kodeRef}
                        </span>
                    </div>
                    {data.nama}
                </div>
                <hr />

                {data.isInternal === "true" && (
                    <div className="flex flex-row text-lg font-mono font-bold justify-between">
                        <span>{data.jurusan}</span>
                        <span>Angkatan {data.angkatan}</span>
                    </div>
                )}

                <div className="flex flex-col mt-3 font-bold text-md font-sans">
                    <h1 className="text-right text-xl">Kontak</h1>
                    <hr />
                    <div className="flex flex-row font-medium justify-between">
                        <span>HP: </span>
                        <span className="text-right">{data.noHp}</span>
                    </div>
                    <div className="flex flex-row font-medium justify-between">
                        <span>Email:</span>
                        <span>{data.email}</span>
                    </div>
                </div>

                <div className="flex flex-col my-3 font-bold text-md font-sans">
                    <h1 className="text-left text-xl">Bukti Transfer</h1>
                    <hr />
                    <div className="flex self-center justify-center">
                        <img
                            src={`/storage/${data.buktiTf}`}
                            alt="Bukti Tf"
                            className="md:w-1/2 mt-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnifyDetails;
