'use client';

import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" role="main">
        <section className="text-center mb-16" aria-labelledby="hero-title">
          <h2 id="hero-title" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Apoyo integral para <span className="text-amber-600 font-semibold">internos y familias</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Plataforma que conecta, informa y prepara para la reinserción social. Porque empezar de nuevo es más fácil cuando no estás solo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/familias"
              className="px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-xl font-bold text-lg hover:from-amber-700 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              Soy Familiar
            </Link>
            <Link
              href="/ayudar"
              className="px-10 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg border-3 border-gray-400 hover:border-amber-500 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              Quiero Ayudar
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section aria-labelledby="features-title" className="mb-16">
          <h2 id="features-title" className="sr-only">Nuestros módulos de apoyo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Módulo Familias */}
            <article className="bg-white rounded-xl border-2 border-gray-300 p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Módulo Familias</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Gestiona comunicaciones, visita información y conecta con otros familiares.
              </p>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Agenda de videollamadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Información de visitas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Comunidad de apoyo</span>
                </li>
              </ul>
              <Link
                href="/familias"
                className="inline-block mt-6 text-amber-600 hover:text-amber-700 font-semibold text-base underline"
              >
                Acceder al módulo familias →
              </Link>
            </article>

            {/* Módulo Reinserción */}
            <article className="bg-white rounded-xl border-2 border-gray-300 p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Módulo Reinserción</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Formación, preparación laboral y conexión con empresas inclusivas.
              </p>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Cursos y certificaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Constructor de CV</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Bolsa de empleo inclusiva</span>
                </li>
              </ul>
              <Link
                href="/reinsercion"
                className="inline-block mt-6 text-amber-600 hover:text-amber-700 font-semibold text-base underline"
              >
                Acceder al módulo reinserción →
              </Link>
            </article>

            {/* Módulo Educativo */}
            <article className="bg-white rounded-xl border-2 border-gray-300 p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Módulo Educativo</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Programas de formación para centros penitenciarios con tablets dedicadas.
              </p>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Cursos offline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Actividades guiadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl" aria-hidden="true">✅</span>
                  <span>Progreso reportable</span>
                </li>
              </ul>
              <Link
                href="/educativo"
                className="inline-block mt-6 text-amber-600 hover:text-amber-700 font-semibold text-base underline"
              >
                Más información →
              </Link>
            </article>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-amber-600 to-yellow-500 rounded-2xl p-10 text-white text-center shadow-xl" aria-labelledby="cta-title">
          <h2 id="cta-title" className="text-3xl font-bold mb-4">
            ¿Listo para empezar un nuevo camino?
          </h2>
          <p className="text-xl mb-6 text-amber-50 leading-relaxed">
            Únete a MakiLibre y descubre el apoyo que necesitas para la reinserción.
          </p>
          <Link
            href="/login"
            className="inline-block px-10 py-4 bg-white text-amber-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            Acceder con tu Email
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
