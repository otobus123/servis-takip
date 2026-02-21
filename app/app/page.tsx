import React from 'react';
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-black mb-12 text-blue-900">HIIPOTA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 opacity-40">
          <h2 className="text-xl font-bold text-gray-400">Mevcut Sistem</h2>
        </div>
        <a href="/servis" className="bg-blue-600 hover:bg-blue-700 text-white p-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-black uppercase">Servis Sistemi</h2>
          <span className="mt-6 bg-white text-blue-600 px-8 py-2 rounded-full text-sm font-bold">GİRİŞ YAP</span>
        </a>
      </div>
    </main>
  );
}
