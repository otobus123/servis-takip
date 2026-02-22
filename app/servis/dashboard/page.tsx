'use client';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 font-sans">
      {/* Üst Bar */}
      <div className="flex justify-between items-center bg-slate-800 p-6 rounded-2xl shadow-2xl mb-8 border border-slate-700">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            HIIPOTA Servis Takip
          </h1>
          <p className="text-slate-400 text-sm">Hoş Geldiniz, Sistem Yöneticisi</p>
        </div>
        <button className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-lg transition-all border border-red-500/20">
          Çıkış Yap
        </button>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer group">
          <p className="text-slate-400 text-sm mb-1">Aktif Servisler</p>
          <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors">12</h3>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors cursor-pointer group">
          <p className="text-slate-400 text-sm mb-1">Toplam Öğrenci</p>
          <h3 className="text-3xl font-bold group-hover:text-emerald-400 transition-colors">450</h3>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500 transition-colors cursor-pointer group">
          <p className="text-slate-400 text-sm mb-1">Geciken Servisler</p>
          <h3 className="text-3xl font-bold group-hover:text-amber-400 transition-colors text-amber-500">2</h3>
        </div>
      </div>

      {/* Hızlı Menü */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a href="/servis/harita" className="bg-blue-600 hover:bg-blue-500 p-4 rounded-xl text-center font-semibold transition-all shadow-lg shadow-blue-900/20">
          Canlı Harita
        </a>
        <button className="bg-slate-700 hover:bg-slate-600 p-4 rounded-xl text-center font-semibold transition-all">
          Araç Yönetimi
        </button>
        <button className="bg-slate-700 hover:bg-slate-600 p-4 rounded-xl text-center font-semibold transition-all">
          Veli Listesi
        </button>
        <button className="bg-slate-700 hover:bg-slate-600 p-4 rounded-xl text-center font-semibold transition-all">
          Raporlar
        </button>
      </div>
    </div>
  );
}
