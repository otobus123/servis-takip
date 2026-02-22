import { NextResponse } from 'next/server';
const db = require('../../../../lib/db');

export const dynamic = 'force-dynamic'; // Verinin her zaman taze gelmesi için

export async function GET() {
  try {
    const res = await db.query(`
      SELECT v.id, v.plate_number, v.current_lat, v.current_lng, v.status, u.full_name 
      FROM vehicles v
      LEFT JOIN users u ON v.driver_id = u.id
    `);
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error('Araç API Hatası:', error);
    return NextResponse.json({ error: 'Veri çekilemedi' }, { status: 500 });
  }
}
