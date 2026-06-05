import { NextResponse } from 'next/server';
import { getAdminUser } from '@/lib/auth/admin';
import { prisma } from '@/lib/db/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const admin = await getAdminUser();
  if (!admin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const [
    totalUsers,
    totalMessages,
    pendingMessages,
    totalProfessionals,
    pendingProfessionals,
    recentUsers,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: 'PENDING' } }),
    prisma.professional.count(),
    prisma.professional.count({ where: { status: 'PENDING' } }),
    prisma.user.count({
      where: {
        createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
      },
    }),
  ]);

  return NextResponse.json({
    totalUsers,
    totalMessages,
    pendingMessages,
    totalProfessionals,
    pendingProfessionals,
    recentUsers,
  });
}
