import React from "react";
import "./Styleinvoice.css";

function Invoice({ data }) {
    const hargatiket = data.jumlahTiket * 60000;

    if (!data) {
        return <div>Loading...</div>;
    }

    const statusClass =
        data.status === ("unchecked" || "checked")
            ? "status-paid"
            : "status-unpaid";

    return (
        <div class="invoice">
            <h1>Invoice Tiket Unify</h1>

            <div class="invoice-details">
                <div>Nama: {data.nama}</div>
                <div>No HP: {data.noHp}</div>
                <div>Email: {data.email}</div>
                <div className={statusClass} style={{ fontWeight: 600 }}>
                    Status: Confirmed
                </div>
            </div>

            <table class="invoice-table">
                <tr>
                    <td>
                        <span>{data.jumlahTiket}x </span>Tiket Unify
                    </td>
                    <td>Rp. {hargatiket}</td>
                </tr>

                <tr class="total-row">
                    <td>Total</td>
                    <td>Rp. {data.total_price}</td>
                </tr>
            </table>

            <div class="footer">
                <a href="/">UMN Festival</a>
                <div>&copy; Genova UMN Festival 2024</div>
            </div>
        </div>
    );
}

export default Invoice;
