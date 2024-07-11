import React from "react";

function Invoice({ data }) {
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Invoice</h1>
            <table border="1">
                <tr>
                    <th>Nama</th>
                    <th>Jurusan</th>
                    <th>Angkatan</th>
                    <th>No Hp</th>
                    <th>Jumlah Tiket</th>
                    <th>Email</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Internal?</th>
                </tr>
                <tr>
                    <td>{data.nama}</td>
                    <td>{data.jurusan}</td>
                    <td>{data.angkatan}</td>
                    <td>{data.noHp}</td>
                    <td>{data.jumlahTiket}</td>
                    <td>{data.email}</td>
                    <td>{data.total_price}</td>
                    <td>{data.status}</td>
                    <td>{data.isInternal}</td>
                </tr>
            </table>
        </div>
    );
}

export default Invoice;
