'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { User } from '@supabase/supabase-js';

export function AuthNav() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="w-20 h-8 bg-gray-200 rounded animate-pulse" />;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/perfil"
          className="flex items-center gap-2 text-gray-700 hover:text-amber-600 font-medium transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-sm font-bold">
            {user.email?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <span className="hidden md:inline text-sm">{user.email?.split('@')[0]}</span>
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-lg font-semibold text-sm hover:from-amber-700 hover:to-yellow-600 transition-all shadow-sm"
    >
      Acceder
    </Link>
  );
}

function SignOutButton() {
  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm"
    >
      Salir
    </button>
  );
}
