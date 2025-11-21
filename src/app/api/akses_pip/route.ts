import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Fungsi bantu deteksi IP
function getClientIP(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip");
  if (forwarded) return forwarded.split(",")[0].trim();
  // @ts-ignore
  return req.socket?.remoteAddress || "127.0.0.1";
}

// Fungsi validasi kode_akses: hanya angka, panjang 11–18
function isValidKodeAkses(kode: string) {
  return /^[0-9]{11,18}$/.test(kode);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { role, nama, kode_akses, status_akses } = body;

    if (!role || !nama || !kode_akses) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    if (!isValidKodeAkses(kode_akses)) {
      return NextResponse.json({ success: false, error: "Kode akses harus angka dan panjang 11–18" }, { status: 400 });
    }

    // Deteksi perangkat dari user-agent
    const userAgent = req.headers.get("user-agent") || "Unknown";
    let perangkat = "Lainnya";
    if (/android/i.test(userAgent)) perangkat = "Android";
    else if (/iphone|ipad|ipod/i.test(userAgent)) perangkat = "iPhone/iOS";
    else if (/windows/i.test(userAgent)) perangkat = "Windows";
    else if (/mac os/i.test(userAgent)) perangkat = "macOS";
    else if (/linux/i.test(userAgent)) perangkat = "Linux";

    // Deteksi IP pengguna otomatis
    const ip_perangkat = getClientIP(req);

    const { data, error } = await supabase
      .from("masuk_pip")
      .insert([{ role, nama, kode_akses, status_akses, perangkat, ip_perangkat }])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("masuk_pip insert error:", err.message);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
