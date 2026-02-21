import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const res = await query('SELECT * FROM users WHERE email = $1', [email]);
    const user = res.rows[0];

    if (!user) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 401 });
    }

    // Şimdilik basit şifre kontrolü (Madde 2.2 hashleme sonra eklenecek)
    if (password !== '123456') {
      return NextResponse.json({ error: 'Hatalı şifre' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, company_id: user.company_id },
      process.env.JWT_SECRET || 'gizli-anahtar',
      { expiresIn: '24h' }
    );

    return NextResponse.json({ success: true, token, role: user.role });
  } catch (error) {
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
