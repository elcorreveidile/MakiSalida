import { NextResponse } from 'next/server';
import { getAdminUser } from '@/lib/auth/admin';
import { prisma } from '@/lib/db/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 20;

  const where = status ? { status: status as 'PENDING' | 'READ' | 'REPLIED' | 'ARCHIVED' } : {};

  const [messages, total] = await Promise.all([
    prisma.contactMessage.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
      include: { user: { select: { name: true, email: true } } },
    }),
    prisma.contactMessage.count({ where }),
  ]);

  return NextResponse.json({ messages, total, page, totalPages: Math.ceil(total / limit) });
}

export async function PATCH(request: Request) {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const { id, status } = await request.json();
  if (!id || !status) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
  }

  const message = await prisma.contactMessage.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json(message);
}
