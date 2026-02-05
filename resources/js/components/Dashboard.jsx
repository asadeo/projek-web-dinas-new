import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('ACCESS_TOKEN');
                const response = await axios.get('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                localStorage.removeItem('ACCESS_TOKEN');
                navigate('/login');
            }
        };
        fetchUser();
    }, []);

    const logoutHandler = async () => {
        try {
            const token = localStorage.getItem('ACCESS_TOKEN');
            await axios.post('/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            localStorage.removeItem('ACCESS_TOKEN');
            navigate('/login');
        } catch (error) {
            console.error("Gagal logout", error);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SIDEBAR KIRI */}
            <aside className="w-64 bg-gradient-to-b from-[#20639B] from-50% to-[#0B2235] to-100% text-white flex flex-col">
                <div className="p-6 text-center border-b border-slate-700">
                    <h1 className="text-2xl font-bold">DINAS PATI</h1>
                    <p className="text-xs text-slate-400 mt-1">Sistem Informasi Manajemen</p>
                </div>

                {/* Menu Navigasi */}
                <nav className="flex-1 p-4 space-y-2">
                    <p className="text-xs text-slate-400 uppercase mb-2">Menu</p>

                    <a href="#" className="block py-2.5 px-4 rounded bg-[#FFC107]/10 text-[#FFC107] font-semibold hover:bg-[#FFC107]/20 transition">
                        Dashboard
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-[#FFC107]/10 text-white hover:text-[#FFC107] transition">
                        Konten Website
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-[#FFC107]/10 text-white hover:text-[#FFC107] transition">    
                        Layanan Publik
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-[#FFC107]/10 text-white hover:text-[#FFC107] transition">
                        Data
                    </a>
                    <a href="#" className="block py-2.5 px-4 rounded hover:bg-[#FFC107]/10 text-white hover:text-[#FFC107] transition">
                        Pengaturan
                    </a>
                </nav>

                {/* Tombol Logout */}
                <div className="p-4 border-t border-slate-700">
                    <button 
                        onClick={logoutHandler} 
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded font-bold transition"
                    >
                        Logout
                    </button>
                </div>
            </aside>

            {/* --- KONTEN UTAMA (KANAN) --- */}
            <main className="flex-1 p-8 overflow-y-auto">
                {/* Header Konten */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
                        <p className="text-gray-500">Selamat datang kembali, <span className="font-semibold text-blue-600">{user.name}</span>!</p>
                    </div>
                    <div className="bg-white p-2 rounded-full shadow">
                        <img src="https://ui-avatars.com/api/?name=Admin+Dinas&background=0D8ABC&color=fff" alt="Profile" className="w-10 h-10 rounded-full" />
                    </div>
                </div>

                {/* Kartu Statistik */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
                                
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Total Berita</p>
                                <p className="text-2xl font-bold text-gray-800">12</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
                                
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Data Sekolah</p>
                                <p className="text-2xl font-bold text-gray-800">45</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                        <div className="flex items-center">
                            <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
                                👥
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Pengunjung Hari Ini</p>
                                <p className="text-2xl font-bold text-gray-800">1,204</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Area Kosong untuk Konten Selanjutnya */}
                <div className="bg-white rounded-lg shadow p-6 h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200">
                    <p>Area Grafik Statistik</p>
                </div>
            </main>
        </div>
    );
}