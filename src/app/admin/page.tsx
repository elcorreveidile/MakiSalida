import { redirect } from 'next/navigation';
import { getAdminUser } from '@/lib/auth/admin';
import { AdminDashboard } from './AdminDashboard';

export default async function AdminPage() {
  const admin = await getAdminUser();
  if (!admin) redirect('/perfil');

  return <AdminDashboard adminEmail={admin.email} adminRole={admin.role} />;
}
