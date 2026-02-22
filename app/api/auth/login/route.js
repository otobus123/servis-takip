import { NextResponse } from 'next/server';
const db = require('../../../../lib/db');

export async function GET() {
  try {
    // Madde 5.1: Araçları ve sürücülerini getir
    const res = await db.query(`
      SELECT v.id, v.plate_number, v.current_lat, v.current_lng, v.status, u.full_name 
      FROM vehicles v
      LEFT JOIN users u ON v.driver_id = u.id
    `);
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Veri alınamadı' }, { status: 500 });
  }
}
