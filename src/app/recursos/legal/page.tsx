import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-3 px-4" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-amber-600 hover:text-amber-700">
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/recursos" className="text-amber-600 hover:text-amber-700">
                Recursos
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Asesoría Legal</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4" role="img" aria-label="Balanza">⚖️</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Asesoría Legal
            </h1>
          </div>
          <p className="text-xl text-amber-100">
            Recursos y orientación legal para internos y familiares
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-8">
            Recursos disponibles
          </h2>

          {/* Guías */}
          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📖 Guía de derechos penitenciarios
              </h3>
              <p className="text-gray-700 mb-4">
                Conoce los derechos fundamentales de los internos durante el cumplimiento de condena,
                incluyendo derechos de comunicación, visitas, y condiciones de internamiento.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Derechos de comunicación y visitas</li>
                <li>✓ Regimen de vida en prisión</li>
                <li>✓ Permisos y salidas</li>
                <li>✓ Beneficios penitenciarios</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Descargar guía (PDF)
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📝 Modelos de solicitudes y escritos
              </h3>
              <p className="text-gray-700 mb-4">
                Plantillas oficiales para presentar solicitudes, quejas y recursos ante la
                administración penitenciaria.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Solicitud de permisos de salida</li>
                <li>• Queja por condiciones de internamiento</li>
                <li>• Solicitud de traslado de centro</li>
                <li>• Recurso contra sanciones disciplinarias</li>
                <li>• Petición de beneficios penitenciarios</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver modelos
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👨‍⚖️ Directorio de abogados especializados
              </h3>
              <p className="text-gray-700 mb-4">
                Listado de abogados y despachos con experiencia en derecho penitenciario y
                penal, organizados por provincias.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Nota:</strong> Los abogados de oficio también pueden especializarse
                  en derecho penitenciario. Pregunta en el juzgado de vigilancia penitenciaria.
                </p>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Buscar abogados
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Información sobre beneficios penitenciarios
              </h3>
              <p className="text-gray-700 mb-4">
                Guía completa sobre los diferentes beneficios penitenciarios disponibles:
                permisos, salida definitiva, libertad condicional, redención de pena por trabajo.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Permisos de salida:</strong> Salidas temporales del centro
                  por razones familiares, laborales o de tratamiento
                </li>
                <li>
                  <strong>Libertad condicional:</strong> Cumplimiento de condena en
                  libertad con medidas de control
                </li>
                <li>
                  <strong>Redención de pena:</strong> Reducción de condena por trabajo,
                  estudios u otras actividades
                </li>
                <li>
                  <strong>Salida definitiva:</strong> Finalización anticipada del
                  internamiento por buena conducta
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver guía completa
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏛️ Recursos institucionales
              </h3>
              <p className="text-gray-700 mb-4">
                Enlaces oficiales y recursos de instituciones públicas relacionadas con
                el sistema penitenciario.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Instituciones Penitenciarias
                  </a>
                  {' '}– Información oficial sobre centros y normativa
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Jueces de Vigilancia Penitenciaria
                  </a>
                  {' '}– Órganos judiciales de control
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Defensor del Pueblo
                  </a>
                  {' '}– Defensa de derechos fundamentales
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Colegios de Abogados
                  </a>
                  {' '}– Servicios de orientación jurídica gratuita
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesitas asesoramiento personalizado?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Nuestro equipo puede orientarte sobre tus derechos y opciones legales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recursos"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver más recursos
            </Link>
            <Link
              href="/ayudar"
              className="inline-block bg-amber-600 text-white hover:bg-amber-700 font-bold py-3 px-8 rounded-lg transition-colors text-lg border-2 border-white"
            >
              Contactar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
