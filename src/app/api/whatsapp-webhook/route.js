// /app/api/whatsapp-webhook/route.js

export async function GET(req) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "verify_me";

  // WA Webhook Verification
  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }

  // Jika token salah → WA HARUS gagal
  return new Response("Forbidden", { status: 403 });
}


export async function POST(req) {
  const data = await req.json().catch(() => null);

  // WA mewajibkan selalu membalas 200 OK
  if (!data) return new Response("No data", { status: 200 });

  // Cek apakah ada pesan masuk
  const entry = data.entry?.[0];
  const changes = entry?.changes?.[0];
  const message = changes?.value?.messages?.[0];

  if (message) {
    const from = message.from;          // Nomor pengirim
    const text = message.text?.body;    // Isi pesan

    console.log("Pesan masuk:", text);

    // 👉 Kirim balasan otomatis
    await sendReply(from, `Pesan Anda diterima: "${text}"`);
  }

  return new Response("EVENT_RECEIVED", { status: 200 });
}


// ========================================
// FUNGSI KIRIM PESAN
// ========================================
async function sendReply(to, text) {
  const TOKEN = process.env.WHATSAPP_TOKEN;
  const PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

  const url = `https://graph.facebook.com/v19.0/${PHONE_ID}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: { body: text },
  };

  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
