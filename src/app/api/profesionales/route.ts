import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const registrationSchema = z.object({
  name: z.string().min(2, 'Nombre demasiado corto').max(100),
  email: z.string().email('Email no válido'),
  phone: z.string().max(20).optional(),
  category: z.enum(['ABOGADO', 'TRABAJADOR_SOCIAL', 'PSICOLOGO', 'EMPLEADOR', 'EDUCADOR', 'ONG', 'OTRO']),
  specialty: z.string().max(200).optional(),
  description: z.string().min(10, 'Descripción demasiado corta').max(2000),
  city: z.string().min(2, 'Ciudad requerida').max(100),
  province: z.string().max(100).optional(),
  website: z.string().url('URL no válida').optional().or(z.literal('')),
});

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry && now < entry.resetTime && entry.count >= 3) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Inténtalo en 30 minutos.' },
      { status: 429 },
    );
  }
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 30 * 60 * 1000 });
  } else {
    entry.count++;
  }

  try {
    const body = await request.json();
    const result = registrationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    await prisma.professional.create({
      data: {
        ...result.data,
        website: result.data.website || null,
        phone: result.data.phone || null,
        specialty: result.data.specialty || null,
        province: result.data.province || null,
        status: 'PENDING',
      },
    });

    return NextResponse.json(
      { message: 'Solicitud enviada correctamente. La revisaremos en breve.' },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar la solicitud.' },
      { status: 500 },
    );
  }
}
