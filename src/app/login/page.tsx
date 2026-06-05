'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError('Error al enviar el enlace. Inténtalo de nuevo.');
      setLoading(false);
    } else {
      setSent(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <Header showNav={false} />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-md">
          {sent ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 text-2xl font-bold">@</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Revisa tu email</h1>
              <p className="text-gray-600 mb-2">
                Hemos enviado un enlace mágico a:
              </p>
              <p className="font-semibold text-gray-900 mb-6">{email}</p>
              <p className="text-sm text-gray-500 mb-6">
                Haz clic en el enlace del email para acceder a tu cuenta. Si no lo ves, revisa la carpeta de spam.
              </p>
              <button
                onClick={() => { setSent(false); setEmail(''); }}
                className="text-amber-600 hover:text-amber-700 font-semibold text-sm"
              >
                Usar otro email
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Accede a MakiLibre</h1>
                <p className="text-gray-600">Te enviaremos un enlace mágico a tu email</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-lg font-bold text-lg hover:from-amber-700 hover:to-yellow-600 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando enlace...' : 'Enviar enlace mágico'}
                </button>
              </form>

              <p className="mt-6 text-center text-xs text-gray-400">
                Al continuar, aceptas nuestra{' '}
                <Link href="/privacidad" className="underline hover:text-gray-600">
                  Política de Privacidad
                </Link>{' '}
                y{' '}
                <Link href="/aviso-legal" className="underline hover:text-gray-600">
                  Aviso Legal
                </Link>
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
