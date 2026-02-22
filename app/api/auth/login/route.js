import { NextResponse } from 'next/server';
const db = require('../../../../lib/db');
import jwt from 'jsonwebtoken';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    // Madde 2.1: Email ile kullanıcıyı bul
    const res = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = res.rows[0];

    if (!user) {
      return NextResponse.json({ error: 'Kullanıcı bulunamadı' }, { status: 401 });
    }

    // Madde 2.2: Şifre kontrolü (Şimdilik basit, sonra hashlenecek)
    if (password !== '123456') {
      return NextResponse.json({ error: 'Hatalı şifre' }, { status: 401 });
    }

    // Madde 2.4: JWT oluşturma
    const token = jwt.sign(
      { id: user.id, role: user.role, company_id: user.company_id },
      process.env.JWT_SECRET || 'hiipota_gizli_anahtar',
      { expiresIn: '24h' }
    );

    // Madde 12.1: Giriş logu (Opsiyonel, şimdilik başarılı dönüyoruz)
    return NextResponse.json({ 
      success: true, 
      token, 
      role: user.role,
      user: { name: user.full_name, role: user.role }
    });
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'Sunucu hatası oluştu' }, { status: 500 });
  }
}
