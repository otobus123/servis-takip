'use client';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        // Giriş başarılı, Madde 3'e göre yönlendir
        localStorage.setItem('token', data.token);
        window.location.href = '/servis/dashboard';
      } else {
        setError(data.error || 'Giriş başarısız');
      }
    } catch (err) {
      setError('Bağlantı hatası oluştu');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 p-8 text-white text-center">
          <h1 className="text-2xl font-bold uppercase tracking-widest">Servis Sistemi</h1>
          <p className="text-blue-100 text-sm mt-2">Lütfen giriş yapın</p>
        </div>
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {error && <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm text-center font-bold">{error}</div>}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">E-Posta</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="admin@hiipota.com" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Şifre</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••" />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95">
            SİSTEME GİRİŞ YAP
          </button>
        </form>
      </div>
    </div>
  );
}
