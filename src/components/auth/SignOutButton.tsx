'use client';

import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm"
    >
      Cerrar sesión
    </button>
  );
}
