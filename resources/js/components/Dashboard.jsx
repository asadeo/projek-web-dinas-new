import React from 'react';
export default function Dashboard() {
    return (
        <div className="container mt-5">
            <h1>Dashboard Admin</h1>
            <p>Selamat datang! Anda berhasil login.</p>
            <button className="btn btn-danger" onClick={() => {
                localStorage.removeItem('ACCESS_TOKEN');
                window.location.href = '/login';
            }}>Logout</button>
        </div>
    );
}