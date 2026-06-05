import { NextResponse } from 'next/server';
import { getAdminUser } from '@/lib/auth/admin';
import { prisma } from '@/lib/db/prisma';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

const professionalSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  category: z.enum(['ABOGADO', 'TRABAJADOR_SOCIAL', 'PSICOLOGO', 'EMPLEADOR', 'EDUCADOR', 'ONG', 'OTRO']),
  specialty: z.string().max(200).optional(),
  description: z.string().min(10).max(2000),
  city: z.string().min(2).max(100),
  province: z.string().max(100).optional(),
  website: z.string().url().optional().or(z.literal('')),
});

export async function GET(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const category = searchParams.get('category');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 20;

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (category) where.category = category;

  const [professionals, total] = await Promise.all([
    prisma.professional.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.professional.count({ where }),
  ]);

  return NextResponse.json({ professionals, total, page, totalPages: Math.ceil(total / limit) });
}

export async function POST(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const body = await request.json();
  const result = professionalSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: 'Datos inválidos', details: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const professional = await prisma.professional.create({
    data: {
      ...result.data,
      website: result.data.website || null,
      phone: result.data.phone || null,
      specialty: result.data.specialty || null,
      province: result.data.province || null,
      status: 'APPROVED',
    },
  });

  return NextResponse.json(professional, { status: 201 });
}

export async function PATCH(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const { id, status, ...updates } = await request.json();
  if (!id) {
    return NextResponse.json({ error: 'Falta el ID' }, { status: 400 });
  }

  const data: Record<string, unknown> = {};
  if (status) data.status = status;
  if (updates.name) data.name = updates.name;
  if (updates.category) data.category = updates.category;

  const professional = await prisma.professional.update({
    where: { id },
    data,
  });

  return NextResponse.json(professional);
}

export async function DELETE(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Falta el ID' }, { status: 400 });
  }

  await prisma.professional.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
