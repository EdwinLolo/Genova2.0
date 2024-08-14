import React from "react";

function NavbarAdmin() {
    return (
        <>
            <nav className="flex flex-row justify-evenly py-3 bg-inherit font-bold text-white font-mono">
                <a href="/admin">Home</a>
                <a href="/admin/ulympic">Ulympic</a>
                <a href="/admin/ucare">U-care</a>
                <a href="/admin/unify">Unify</a>
            </nav>
            <hr />
        </>
    );
}

export default NavbarAdmin;
