import { createClient } from '@/utils/supabase/server';
import { prisma } from '@/lib/db/prisma';

const SUPERADMIN_EMAILS = [
  'javier@blablaele.com',
];

export async function getAdminUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user?.email) return null;

  let dbUser = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (!dbUser) {
    const role = SUPERADMIN_EMAILS.includes(user.email) ? 'SUPERADMIN' : 'USER';
    dbUser = await prisma.user.create({
      data: {
        email: user.email,
        authId: user.id,
        role,
      },
    });
  } else if (
    SUPERADMIN_EMAILS.includes(user.email) &&
    dbUser.role !== 'SUPERADMIN'
  ) {
    dbUser = await prisma.user.update({
      where: { id: dbUser.id },
      data: { role: 'SUPERADMIN' },
    });
  }

  if (dbUser.role !== 'ADMIN' && dbUser.role !== 'SUPERADMIN') {
    return null;
  }

  return dbUser;
}
