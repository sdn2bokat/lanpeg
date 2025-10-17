import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCgKG1VWZmZabSnBrjqdyZfQ"
    );
    const xml = await res.text();
    return NextResponse.json({ xml });
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil feed" }, { status: 500 });
  }
}
