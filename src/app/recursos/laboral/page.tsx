import Link from 'next/link';

export default function LaboralPage() {
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
            <li className="text-gray-900 font-semibold">Orientación Laboral</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4" role="img" aria-label="Maletín">💼</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Orientación Laboral
            </h1>
          </div>
          <p className="text-xl text-amber-100">
            Recursos para la inserción laboral tras la salida
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-8">
            Recursos para encontrar empleo
          </h2>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📖 Guía de búsqueda de empleo con antecedentes
              </h3>
              <p className="text-gray-700 mb-4">
                Estrategias específicas para buscar empleo cuando tienes antecedentes penales.
                Incluye cómo preparar CV, dónde buscar, y cómo abordar el tema en entrevistas.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Cómo preparar tu CV y cartas de presentación</li>
                <li>✓ Estrategias de búsqueda activa</li>
                <li>✓ Portales de empleo especiales</li>
                <li>✓ Redes de contacto y networking</li>
              </ul>
              <Link
                href="/recursos/laboral#consejos"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver consejos prácticos
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💬 Cómo explicar los antecedentes penales
              </h3>
              <p className="text-gray-700 mb-4">
                Guía práctica sobre cuándo y cómo explicar tus antecedentes penales en procesos
                de selección, con ejemplos de respuestas y estrategias de comunicación.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Consejo clave:</strong> La honestidad es importante, pero también lo es
                  saber presentar la experiencia de forma positiva. Enfócate en la formación,
                  el trabajo realizado en prisión, y el deseo de empezar de nuevo.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Cuándo mencionar antecedentes</li>
                <li>• Cómo explicarlo de forma honesta y positiva</li>
                <li>• Qué detalles incluir y cuáles omitir</li>
                <li>• Cómo destacar tu rehabilitación y formación</li>
              </ul>
              <Link
                href="#como-explicar"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver sección completa
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎓 Programas de formación profesional
              </h3>
              <p className="text-gray-700 mb-4">
                Cursos y programas de formación gratuitos o subvencionados específicamente
                diseñados para personas en situación de exclusión social o con antecedentes.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Cursos de oficios:</strong> Electricidad, fontanería, carpintería,
                  albañilería, cocina, peluquería
                </li>
                <li>
                  <strong>Formación digital:</strong> Informática básica, ofimática, internet,
                  herramientas digitales
                </li>
                <li>
                  <strong>Certificados profesionales:</strong> Programas que otorgan
                  certificados oficiales de empleabilidad
                </li>
                <li>
                  <strong>Emprendimiento:</strong> Cursos para iniciar tu propio negocio
                  o actividad por cuenta propia
                </li>
              </ul>
              <Link
                href="https://www.sepe.es"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver programas SEPE
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏢 Empresas que contratan con antecedentes
              </h3>
              <p className="text-gray-700 mb-4">
                Directorio de empresas y organizaciones sensibilizadas que contratan activamente
                a personas con antecedentes penales, ordenado por sector y provincia.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Empresas solidarias:</strong> Cada vez más empresas reconocen el
                  valor de dar una segunda oportunidad y contar con trabajadores motivados
                  y comprometidos con su reinserción.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Sectores con más oportunidades: construcción, hostelería, logística</li>
                <li>• Empresas de inserción laboral</li>
                <li>• Cooperativas sociales</li>
                <li>• Programas de empresas colaboradoras</li>
              </ul>
              <Link
                href="#empresas"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver lista de empresas
              </Link>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📞 Servicios públicos de empleo
              </h3>
              <p className="text-gray-700 mb-4">
                Recursos y servicios de los servicios públicos de empleo (SEPE y autonómicos)
                para personas en situación de exclusión.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a
                    href="https://www.sepe.es/es/portal-empleo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    SEPE - Portal de empleo
                  </a>
                  {' '}– Ofertas de trabajo y recursos
                </li>
                <li>
                  <a
                    href="https://www.sepe.es/es/empleo/formacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Programas de empleo
                  </a>
                  {' '}– Iniciativas de inserción laboral
                </li>
                <li>
                  <a
                    href="https://www.redtrabaja.gob.es/es/trabajadores/servicios-de-empleo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Servicios autonómicos
                  </a>
                  {' '}– Recursos por comunidad autónoma
                </li>
                <li>
                  <a
                    href="https://www.redtrabaja.gob.es/es/orientacion-laboral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Orientación laboral
                  </a>
                  {' '}– Servicios gratuitos de asesoramiento
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="exito-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="exito-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Historias de éxito laboral
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "Después de 8 años sin trabajar, conseguí un empleo en construcción gracias a
                los cursos de formación. Ahora llevo 2 años en la empresa y ya soy capataz.
                La clave fue no rendirse y aprovechar todos los recursos disponibles."
              </p>
              <p className="text-amber-600 font-semibold">— Pedro, 45 años</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "Me formé en informática mientras estaba interna. Al salir, hice prácticas en
                una empresa de servicios digitales y me contrataron. Ahora vivo del desarrollo web."
              </p>
              <p className="text-amber-600 font-semibold">— María, 32 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesitas ayuda para encontrar empleo?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            No estás solo/a en esta búsqueda. Hay recursos y personas dispuestas a ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reinsercion"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver guía de reinserción
            </Link>
            <Link
              href="/recursos"
              className="inline-block bg-amber-600 text-white hover:bg-amber-700 font-bold py-3 px-8 rounded-lg transition-colors text-lg border-2 border-white"
            >
              Más recursos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
