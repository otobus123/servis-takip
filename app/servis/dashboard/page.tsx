'use client';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Giriş kontrolü (Madde 2.4)
    const token = localStorage.getItem('token');
    if (!token) window.location.href = '/servis';
    // Şimdilik basit bir kullanıcı simülasyonu
    setUser({ name: 'Sistem Yöneticisi', role: 'Süper Admin' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sol Menü (Madde 3.1) */}
      <div className="w-64 bg-slate-900 text-white p-6 space-y-8 hidden md:block">
        <h2 className="text-xl font-bold text-blue-400 tracking-tighter">HIIPOTA SERVIS</h2>
        <nav className="space-y-4">
          <div className="text-blue-400 font-bold text-xs uppercase">Yönetim</div>
          <a href="#" className="block p-3 bg-blue-600 rounded-xl font-medium">Ana Panel</a>
          <a href="#" className="block p-3 hover:bg-slate-800 rounded-xl transition">Şirketler</a>
          <a href="#" className="block p-3 hover:bg-slate-800 rounded-xl transition">Araçlar</a>
          <div className="text-blue-400 font-bold text-xs uppercase mt-8">Canlı Takip</div>
          <a href="/servis/harita" className="block p-3 hover:bg-slate-800 rounded-xl transition text-yellow-400 font-bold">Canlı Harita</a>
        </nav>
      </div>

      {/* Sağ İçerik */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-slate-800">Hoş Geldiniz, {user?.name}</h1>
          <button onClick={() => { localStorage.clear(); window.location.href='/servis'; }} className="text-sm font-bold text-red-500">Çıkış Yap</button>
        </header>

        {/* İstatistik Kartları (Madde 3.2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Aktif Servisler</div>
            <div className="text-3xl font-black text-blue-600">12</div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Toplam Araç</div>
            <div className="text-3xl font-black text-slate-800">45</div>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Geciken Servis</div>
            <div className="text-3xl font-black text-red-500">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
