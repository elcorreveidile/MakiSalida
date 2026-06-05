'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { contactSchema } from '@/lib/validations/contact';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: [] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setStatus('idle');

    const validation = contactSchema.safeParse(form);
    if (!validation.success) {
      setErrors(validation.error.flatten().fieldErrors as Record<string, string[]>);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setStatusMessage(data.error);
      } else {
        setStatus('success');
        setStatusMessage(data.message);
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setStatus('error');
      setStatusMessage('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <span className="text-xl">🚪</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">MakiSalida</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/familias" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Familias</Link>
              <Link href="/recursos" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Recursos</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-amber-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Contacto</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              ¿Tienes alguna pregunta, sugerencia o necesitas ayuda? Escríbenos y te responderemos lo antes posible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-sm">@</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 text-sm">informa@blablaele.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 font-bold text-sm">?</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tiempo de respuesta</h3>
                  <p className="text-gray-600 text-sm">Respondemos en un máximo de 48 horas laborables</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">OK</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Mensaje enviado</h2>
                <p className="text-gray-600">{statusMessage}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {statusMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                  {errors.name?.map((e) => <p key={e} className="text-red-500 text-xs mt-1">{e}</p>)}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                  {errors.email?.map((e) => <p key={e} className="text-red-500 text-xs mt-1">{e}</p>)}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                  {errors.subject?.map((e) => <p key={e} className="text-red-500 text-xs mt-1">{e}</p>)}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                  <p className="text-xs text-gray-400 mt-1">{form.message.length}/5000</p>
                  {errors.message?.map((e) => <p key={e} className="text-red-500 text-xs mt-1">{e}</p>)}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-lg font-bold text-lg hover:from-amber-700 hover:to-yellow-600 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
