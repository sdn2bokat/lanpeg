import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const kode_akses = searchParams.get("kode_akses");

  if (!kode_akses) {
    return NextResponse.json({ found: false, error: "kode_akses required" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from("db_siswa")
      .select("id")
      .or(`nisn.eq.${kode_akses},nik.eq.${kode_akses}`)
      .limit(1);

    if (error) throw error;

    const found = data && data.length > 0;
    return NextResponse.json({ found });
  } catch (err: any) {
    console.error("check_siswa error:", err.message);
    return NextResponse.json({ found: false, error: err.message }, { status: 500 });
  }
}
