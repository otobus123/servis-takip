'use client';
import React, { useEffect, useState } from 'react';

export default function HaritaSayfasi() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch('/api/vehicles/locations');
        const data = await res.json();
        if (Array.isArray(data)) {
          setVehicles(data);
        }
      } catch (err) {
        console.error("Konum alınamadı:", err);
      }
    };

    fetchLocations();
    const interval = setInterval(fetchLocations, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '20px', background: '#0f172a', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>HIIPOTA Canlı Takip</h2>
        <a href="/servis/dashboard" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>← Panele Dön</a>
      </div>
      
      <div style={{ padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: '#f1f5f9' }}>
              <tr>
                <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Plaka</th>
                <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Sürücü</th>
                <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Konum</th>
                <th style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>Durum</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length > 0 ? vehicles.map((v) => (
                <tr key={v.id}>
                  <td style={{ padding: '15px', borderBottom: '1px solid #f1f5f9', fontWeight: 'bold' }}>{v.plate_number}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #f1f5f9' }}>{v.full_name || 'Atanmamış'}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #f1f5f9', color: '#64748b', fontSize: '14px' }}>{v.current_lat}, {v.current_lng}</td>
                  <td style={{ padding: '15px', borderBottom: '1px solid #f1f5f9' }}>
                    <span style={{ background: v.status === 'active' ? '#dcfce7' : '#fee2e2', color: v.status === 'active' ? '#166534' : '#991b1b', padding: '5px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                      {v.status === 'active' ? 'HAREKETLİ' : 'PARK'}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Araç verisi bekleniyor veya henüz araç eklenmedi...</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
