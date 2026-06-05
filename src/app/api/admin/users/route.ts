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
  const page = parseInt(searchParams.get('page') || '1');
  const search = searchParams.get('search') || '';
  const limit = 20;

  const where = search
    ? {
        OR: [
          { email: { contains: search, mode: 'insensitive' as const } },
          { name: { contains: search, mode: 'insensitive' as const } },
        ],
      }
    : {};

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        _count: { select: { contactMessages: true, forumPosts: true } },
      },
    }),
    prisma.user.count({ where }),
  ]);

  return NextResponse.json({ users, total, page, totalPages: Math.ceil(total / limit) });
}

export async function PATCH(request: Request) {
  const admin = await getAdminUser();
  if (!admin || admin.role !== 'SUPERADMIN') {
    return NextResponse.json({ error: 'Solo superadmin puede cambiar roles' }, { status: 403 });
  }

  const { id, role } = await request.json();
  if (!id || !role || !['USER', 'ADMIN', 'SUPERADMIN'].includes(role)) {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }

  if (id === admin.id) {
    return NextResponse.json({ error: 'No puedes cambiar tu propio rol' }, { status: 400 });
  }

  const user = await prisma.user.update({
    where: { id },
    data: { role },
  });

  return NextResponse.json(user);
}
