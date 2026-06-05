import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { createClient } from '@/utils/supabase/server';
import { prisma } from '@/lib/db/prisma';

const SUPERADMIN_EMAILS = ['javier@blablaele.com'];

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  let dbUser = await prisma.user.findUnique({ where: { email: user.email! } });

  if (!dbUser) {
    const role = SUPERADMIN_EMAILS.includes(user.email!) ? 'SUPERADMIN' : 'USER';
    dbUser = await prisma.user.create({
      data: { email: user.email!, authId: user.id, role },
    });
  }

  const isAdmin = dbUser.role === 'ADMIN' || dbUser.role === 'SUPERADMIN';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-amber-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Mi Perfil</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mi Perfil</h1>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-3xl font-bold">
              {user.email?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.email?.split('@')[0]}</h2>
              <p className="text-gray-600">{user.email}</p>
              {isAdmin && (
                <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold ${
                  dbUser.role === 'SUPERADMIN' ? 'bg-purple-100 text-purple-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {dbUser.role}
                </span>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {isAdmin && (
              <Link
                href="/admin"
                className="p-6 border-2 border-amber-400 bg-amber-50 rounded-xl hover:border-amber-600 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Panel de Administración</h3>
                <p className="text-gray-600 text-sm">Gestiona usuarios, mensajes y profesionales</p>
              </Link>
            )}
            <Link
              href="/familias"
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Módulo Familias</h3>
              <p className="text-gray-600 text-sm">Gestiona comunicaciones y visitas</p>
            </Link>
            <Link
              href="/recursos"
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Recursos</h3>
              <p className="text-gray-600 text-sm">Accede a guías y documentos legales</p>
            </Link>
            <Link
              href="/contacto"
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contacto</h3>
              <p className="text-gray-600 text-sm">Escríbenos si necesitas ayuda</p>
            </Link>
            <Link
              href="/reinsercion"
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reinserción</h3>
              <p className="text-gray-600 text-sm">Guías de reinserción social</p>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
