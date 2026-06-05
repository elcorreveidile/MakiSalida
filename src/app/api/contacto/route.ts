import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { sendContactEmail } from '@/lib/email/send-contact';

export const dynamic = 'force-dynamic';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 15 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Demasiados mensajes. Inténtalo de nuevo en 15 minutos.' },
        { status: 429 },
      );
    }

    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { createClient } = await import('@/utils/supabase/server');
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { prisma } = await import('@/lib/db/prisma');
    await prisma.contactMessage.create({
      data: {
        ...result.data,
        userId: user?.id ?? null,
      },
    });

    if (process.env.RESEND_API_KEY) {
      await sendContactEmail(result.data);
    }

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente. Te responderemos pronto.' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Inténtalo de nuevo.' },
      { status: 500 },
    );
  }
}
