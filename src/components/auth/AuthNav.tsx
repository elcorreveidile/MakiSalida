'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { SignOutButton } from './SignOutButton';

export function AuthNav() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="w-20 h-8 bg-gray-200 rounded animate-pulse" />;
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/perfil"
          className="flex items-center gap-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-sm font-bold">
            {session.user.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <span className="hidden md:inline text-sm">{session.user.name?.split(' ')[0]}</span>
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="text-gray-700 hover:text-amber-600 font-medium transition-colors text-sm"
      >
        Iniciar sesión
      </Link>
      <Link
        href="/registro"
        className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-lg font-semibold text-sm hover:from-amber-700 hover:to-yellow-600 transition-all shadow-sm"
      >
        Registrarse
      </Link>
    </div>
  );
}
