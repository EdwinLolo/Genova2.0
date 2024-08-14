import React, { useState } from "react";
import NavbarAdmin from "../../Components/Admin/NavbarAdmin";

function UlympicDashboard({ lombas }) {
    console.log(lombas);
    const [expandedSection, setExpandedSection] = useState("showData");

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
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
                    onClick={() => toggleSection("inputData")}
                >
                    Input Data
                </span>
                <hr />
                {expandedSection === "inputData" && (
                    <div>
                        {lombas.map((lomba) => {
                            return (
                                <a
                                    key={lomba.id_lomba} // Make sure each item has a unique key
                                    href={`/admin/ulympic/input/${lomba.id_lomba}`}
                                    className="flex mt-2 py-2 text-sm hover:bg-gray-600 border-[1px] border-white font-mono"
                                >
                                    <button className="ml-3">
                                        Input Team {lomba.namaLomba}
                                    </button>
                                </a>
                            );
                        })}
                    </div>
                )}
                <span
                    className="text-2xl mb-1 md:text-3xl text-right font-extrabold cursor-pointer mt-5"
                    onClick={() => toggleSection("showData")}
                >
                    Show Data
                </span>
                <hr />
                {expandedSection === "showData" && (
                    <div>
                        {lombas.map((lomba) => {
                            return (
                                <a
                                    key={lomba.id_lomba} // Make sure each item has a unique key
                                    href={`/admin/ulympic/show/${lomba.id_lomba}`}
                                    className="flex mt-2 py-2 text-sm hover:bg-gray-600 border-[1px] border-white font-mono "
                                >
                                    <button className="ml-3">
                                        Show Team {lomba.namaLomba}
                                    </button>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default UlympicDashboard;
