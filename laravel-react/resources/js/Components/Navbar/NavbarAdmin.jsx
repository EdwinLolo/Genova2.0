import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Admin UMN Festival
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
