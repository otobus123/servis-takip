import { NextResponse } from 'next/server';
const db = require('../../../../lib/db');
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const res = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = res.rows[0];

    if (!user || password !== '123456') {
      return NextResponse.json({ error: 'Hatalı giriş' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'gizli',
      { expiresIn: '24h' }
    );

    return NextResponse.json({ success: true, token });
  } catch (error) {
    return NextResponse.json({ error: 'Hata' }, { status: 500 });
  }
}
