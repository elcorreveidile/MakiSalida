import Link from 'next/link';
import { Header } from '@/components/Header';

export default function AyudarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-amber-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ayuda a cambiar vidas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Tu apoyo hace la diferencia en la reinserción de internos y sus familias
          </p>
        </div>
      </section>

      {/* Ways to help */}
      <section className="py-16 px-4" aria-labelledby="formas-ayudar-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="formas-ayudar-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Formas de colaborar
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Voluntariado */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Manos juntas">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voluntariado</h3>
              <p className="text-gray-700 mb-4">
                Ofrece tu tiempo y habilidades para apoyar a familias de internos. Buscamos profesionales en:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Apoyo legal y administrativo</li>
                <li>• Orientación laboral</li>
                <li>• Apoyo psicológico</li>
                <li>• Tutoría y mentoría</li>
              </ul>
              <Link
                href="#contacto"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Únete como voluntario
              </Link>
            </article>

            {/* Donaciones */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Corazón">💛</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donaciones</h3>
              <p className="text-gray-700 mb-4">
                Tu aportación económica nos ayuda a mantener la plataforma y ofrecer servicios gratuitos:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Mantenimiento de la plataforma</li>
                <li>• Desarrollo de nuevos recursos</li>
                <li>• Acceso gratuito para familias</li>
                <li>• Materiales educativos</li>
              </ul>
              <button
                className="inline-block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Hacer una donación
              </button>
            </article>

            {/* Difusión */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Megáfono">📢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Difusión</h3>
              <p className="text-gray-700 mb-4">
                Ayúdanos a llegar a más familias que necesitan apoyo:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Comparte en redes sociales</li>
                <li>• Difunde en tu comunidad</li>
                <li>• Contacta con asociaciones</li>
                <li>• Cuéntalo a quien pueda necesitarlo</li>
              </ul>
              <button
                className="inline-block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Compartir ahora
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Impact section */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="impacto-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="impacto-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestro impacto
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">500+</div>
              <p className="text-gray-700">Familias conectadas</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">50+</div>
              <p className="text-gray-700">Voluntarios activos</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">100+</div>
              <p className="text-gray-700">Historias de éxito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contacto" className="py-16 px-4" aria-labelledby="contacto-title">
        <div className="max-w-2xl mx-auto">
          <h2 id="contacto-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Quieres colaborar?
          </h2>
          <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-lg font-semibold text-gray-900 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="tipo-colaboracion" className="block text-lg font-semibold text-gray-900 mb-2">
                Tipo de colaboración
              </label>
              <select
                id="tipo-colaboracion"
                name="tipo-colaboracion"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Selecciona una opción</option>
                <option value="voluntariado">Voluntariado</option>
                <option value="donacion">Donación</option>
                <option value="difusion">Difusión</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-lg font-semibold text-gray-900 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Cuéntanos cómo quieres colaborar..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Juntos podemos hacer la diferencia
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Cada pequeña acción cuenta. Únete a nuestra comunidad today.
          </p>
          <Link
            href="/familias"
            className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Ver cómo ayudamos
          </Link>
        </div>
      </section>
    </div>
  );
}
