// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, role, email, phone, message } = body

    // Simulasi kirim email (dummy)
    console.log('Pesan baru diterima:', {
      fullName,
      role,
      email,
      phone,
      message,
    })

    // Respon sukses seolah email berhasil dikirim
    return NextResponse.json({
      success: true,
      message: 'Pesan berhasil dikirim (mode dummy)',
      data: {
        fullName,
        role,
        email,
        phone,
        message,
      },
    })
  } catch (error: any) {
    console.error('Kesalahan pada API contact:', error)
    return NextResponse.json(
      { success: false, error: 'Gagal memproses permintaan' },
      { status: 500 }
    )
  }
}
