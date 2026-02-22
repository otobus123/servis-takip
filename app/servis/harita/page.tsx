'use client';
import React from 'react';

export default function MapPage() {
  return (
    <div className="h-screen w-full bg-slate-900 relative">
      {/* Harita Başlığı */}
      <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-2xl border border-white">
        <h1 className="font-black text-slate-800">CANLI ARAÇ TAKİBİ</h1>
        <p className="text-xs text-green-600 font-bold">● 12 Araç Aktif</p>
      </div>

      {/* Ücretsiz Harita (OpenStreetMap) */}
      <iframe 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=28.8,40.9,29.2,41.2&layer=mapnik"
        className="grayscale contrast-125"
      ></iframe>

      <button 
        onClick={() => window.location.href='/servis/dashboard'}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-2xl border border-slate-700 active:scale-95 transition"
      >
        PANEL'E DÖN
      </button>
    </div>
  );
}
