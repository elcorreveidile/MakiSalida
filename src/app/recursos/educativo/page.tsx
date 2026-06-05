import Link from 'next/link';

export default function EducativoRecursosPage() {
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
            <li className="text-gray-900 font-semibold">Formación y Educación</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4" role="img" aria-label="Libro">📚</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Formación y Educación
            </h1>
          </div>
          <p className="text-xl text-amber-100">
            Recursos educativos para internos y familiares
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-8">
            Oportunidades de formación
          </h2>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💻 Cursos online gratuitos
              </h3>
              <p className="text-gray-700 mb-4">
                Plataformas y programas que ofrecen cursos gratuitos en español, perfectos
                para formarse durante el internamiento o preparar la salida.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Formación profesional:</strong> Electricidad, fontanería,
                  administrativo, cocina, peluquería, mecanografía
                </li>
                <li>
                  <strong>Informática y tecnología:</strong> Ofimática, programación,
                  diseño gráfico, marketing digital
                </li>
                <li>
                  <strong>Idiomas:</strong> Inglés, francés, alemán, portugués,
                  italiano para hispanohablantes
                </li>
                <li>
                  <strong>Habilidades empresariales:</strong> Gestión, contabilidad,
                  atención al cliente, ventas
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver plataformas de cursos
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📖 Materiales de formación auto-dirigida
              </h3>
              <p className="text-gray-700 mb-4">
                Manuales, guías, y materiales educativos que puedes estudiar a tu propio
                ritmo, sin necesidad de conexión a internet.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Manuales de oficios en PDF descargables</li>
                <li>✓ Guías de estudio de formación profesional</li>
                <li>✓ Materiales de alfabetización y educación básica</li>
                <li>✓ Libros y recursos de emprendimiento</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Acceder a materiales
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎓 Programas de reintegración educativa
              </h3>
              <p className="text-gray-700 mb-4">
                Programas específicos diseñados para facilitar la formación educativa de
                internos y personas en proceso de reinserción social.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Dentro del centro:</strong> Muchos centros ofrecen formación
                  presencial. Infórmate en el área de actividades del centro sobre
                  programas disponibles.
                </p>
              </div>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Formación en centros:</strong> Programas educativos dentro
                  de instituciones penitenciarias
                </li>
                <li>
                  <strong>Programas híbridos:</strong> Combinación de presencial y online
                  con seguimiento personalizado
                </li>
                <li>
                  <strong>Becas específicas:</strong> Ayudas económicas para formación
                  post-internamiento
                </li>
                <li>
                  <strong>Convalidación de estudios:</strong> Proceso para validar
                  conocimientos y experiencia laboral
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver programas disponibles
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💰 Becas y ayudas al estudio
              </h3>
              <p className="text-gray-700 mb-4">
                Información sobre becas, ayudas, y subvenciones disponibles para continuar
                estudios tras la salida del centro penitenciario.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Becas 0/2:</strong> Programas de becas para estudio de máster
                  y formación especializada
                </li>
                <li>
                  <strong>Becas collaboration:</strong> Ayudas para estudios universitarios
                  con prácticas incluidas
                </li>
                <li>
                  <strong>Ayudas autonómicas:</strong> Becas específicas por comunidad
                  autónoma para personas en situación de exclusión
                </li>
                <li>
                  <strong>Programas de empresas:</strong> Becas de empresas comprometidas
                  con la reinserción laboral
                </li>
                <li>
                  <strong>Subvenciones a la formación:</strong> Ayudas para cursos específicos
                  y certificaciones profesionales
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Buscar becas disponibles
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎖️ Certificaciones y titulaciones
              </h3>
              <p className="text-gray-700 mb-4">
                Guía sobre las certificaciones y titulaciones más valoradas para el mercado
                laboral y cómo obtenerlas.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Certificados de profesionalidad (FP)</li>
                <li>• Títulos de formación técnica</li>
                <li>• Certificados de idiomas oficiales</li>
                <li>• Acreditaciones informáticas (ECDL, Cisco, Microsoft)</li>
                <li>• Certificados de seguridad y prevención de riesgos</li>
                <li>• Licencias y carnet profesionales</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver guías de certificación
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📱 Recursos de aprendizaje móvil
              </h3>
              <p className="text-gray-700 mb-4">
                Aplicaciones móviles y plataformas diseñadas para aprender desde cualquier
                lugar, idealmente adaptadas para uso en tablets.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Coursera
                  </a>
                  {' '}– Cursos universitarios y profesionales
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    edX
                  </a>
                  {' '}– Formación de las mejores universidades del mundo
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Miriada X
                  </a>
                  {' '}– Plataforma española de cursos online
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Duolingo
                  </a>
                  {' '}– Aprendizaje de idiomas gratuito
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Khan Academy
                  </a>
                  {' '}– Educación matemática y científica gratuita
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Module specific CTA */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-amber-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Eres un centro penitenciario?
            </h3>
            <p className="text-gray-700 mb-6">
              Descubre nuestro módulo educativo específicamente diseñado para funcionar en
              tablets dentro de centros, con contenido offline y sincronización automática.
            </p>
            <Link
              href="/educativo"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver módulo para centros
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            La educación es la clave para la reinserción
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Invierte en tu futuro. Nunca es tarde para aprender y formarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reinsercion"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver guía de reinserción
            </Link>
            <Link
              href="/recursos/laboral"
              className="inline-block bg-amber-600 text-white hover:bg-amber-700 font-bold py-3 px-8 rounded-lg transition-colors text-lg border-2 border-white"
            >
              Formación para empleo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
