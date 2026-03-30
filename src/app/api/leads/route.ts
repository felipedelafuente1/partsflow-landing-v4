import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

interface LeadFormData {
  fullName: string;
  company: string;
  whatsapp: string;
  chatVolume: string;
  erp: string;
  marketing: string;
}

function parseChatVolume(volume: string): number | null {
  const map: Record<string, number> = {
    "< 1.000": 500,
    "1.000 - 2.500": 1750,
    "2.500 - 5.000": 3750,
    "5.000+": 5000,
  };
  return map[volume] ?? null;
}

function buildNotas(erp: string, marketing: string): string {
  let notas = `ERP: ${erp}`;
  if (marketing.trim()) {
    notas += `\nMarketing: ${marketing.trim()}`;
  }
  return notas;
}

async function notifyGoogleChat(data: LeadFormData) {
  const webhookUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL;
  if (!webhookUrl) return;

  const message = {
    text: [
      "🟢 *Nuevo Lead desde la Web*",
      `*Empresa:* ${data.company}`,
      `*Contacto:* ${data.fullName}`,
      `*WhatsApp:* +56 ${data.whatsapp}`,
      `*Chats/mes:* ${data.chatVolume}`,
      `*ERP:* ${data.erp}`,
      `*Marketing:* ${data.marketing.trim() || "No especificado"}`,
    ].join("\n"),
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.error("Error sending Google Chat notification:", error);
  }
}

export async function POST(request: Request) {
  try {
    const body: LeadFormData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.company || !body.whatsapp) {
      return NextResponse.json(
        { error: "Campos requeridos: nombre, empresa y WhatsApp" },
        { status: 400 }
      );
    }

    const leadData = {
      empresa: body.company,
      contacto_decisor: body.fullName,
      telefono: `+56 ${body.whatsapp}`,
      chats_dia: parseChatVolume(body.chatVolume),
      notas: buildNotas(body.erp, body.marketing),
      fuente: "inbound_web" as const,
      etapa: "inbound",
    };

    const { data, error } = await getSupabase()
      .from("leads")
      .insert(leadData)
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Error al guardar el lead" },
        { status: 500 }
      );
    }

    // Fire-and-forget: don't await, don't block response
    notifyGoogleChat(body);

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("API leads error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
