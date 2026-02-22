'use client';
import React, { useEffect, useState } from 'react';


export default function HaritaSayfasi() {
  const [vehicles, setVehicles] = useState([]);

  // Madde 6.1: Araç konumlarını her 10 saniyede bir güncelle
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch('/api/vehicles/locations');
        const data = await res.json();
        setVehicles(data);
      } catch (err) {
        console.error("Konum alınamadı:", err);
      }
    };

    fetchLocations();
    const interval = setInterval(fetchLocations, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '15px', background: '#1e293b', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>Canlı Servis Takibi (Madde 6.1)</h2>
        <a href="/servis/dashboard" style={{ color: '#60a5fa', textDecoration: 'none' }}>Geri Dön</a>
      </div>
      
      <div style={{ flex: 1, background: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Harita buraya gelecek - Şimdilik liste olarak gösteriyoruz */}
        <div style={{ width: '80%', background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3>Aktif Araç Listesi</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ textAlign: 'left', padding: '10px' }}>Plaka</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Sürücü</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Son Konum (Lat/Lng)</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Durum</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length > 0 ? vehicles.map(v => (
                <tr key={v.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '10px' }}>{v.plate_number}</td>
                  <td style={{ padding: '10px' }}>{v.full_name}</td>
                  <td style={{ padding: '10px' }}>{v.current_lat}, {v.current_lng}</td>
                  <td style={{ padding: '10px' }}>
                    <span style={{ background: v.status === 'active' ? '#dcfce7' : '#fee2e2', color: v.status === 'active' ? '#166534' : '#991b1b', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                      {v.status === 'active' ? 'Hareket Halinde' : 'Park Halinde'}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan="4" style={{ textAlign: 'center', padding: '20px', color: '#64748b' }}>Henüz kayıtlı araç veya aktif veri yok.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
