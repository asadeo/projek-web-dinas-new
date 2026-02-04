import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email, password
            });
            localStorage.setItem('ACCESS_TOKEN', response.data.access_token);
            window.location.href = '/dashboard';
        } catch (error) {
            alert('Login Gagal: Cek Email/Password');
        }
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card p-4" style={{ width: '400px' }}>
                <h3>Login Dinas</h3>
                <form onSubmit={handleLogin}>
                    <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="btn btn-primary w-100">Masuk</button>
                </form>
            </div>
        </div>
    );
}