'use client';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 p-8 text-white text-center">
          <h1 className="text-2xl font-bold uppercase tracking-widest">Servis Sistemi</h1>
          <p className="text-blue-100 text-sm mt-2 tracking-tight">Lütfen giriş yapın</p>
        </div>
        <form className="p-8 space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">E-Posta Adresi</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="admin@hiipota.com" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Şifre</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="••••••" />
          </div>
          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95">
            SİSTEME GİRİŞ YAP
          </button>
          <p className="text-center text-gray-400 text-xs uppercase tracking-tighter">
            48 Saat Veri Saklama Politikası Aktif
          </p>
        </form>
      </div>
    </div>
  );
}
