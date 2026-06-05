import Link from 'next/link';

export default function SocialPage() {
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
            <li className="text-gray-900 font-semibold">Redes de Apoyo</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4" role="img" aria-label="Gente">👥</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Redes de Apoyo
            </h1>
          </div>
          <p className="text-xl text-amber-100">
            Conecta con otras familias y asociaciones
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-8">
            Comunidades de apoyo
          </h2>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏛️ Directorio de asociaciones
              </h3>
              <p className="text-gray-700 mb-4">
                Listado de asociaciones y ONGs que apoyan a familias de internos y personas
                en proceso de reinserción, organizadas por provincia y tipo de apoyo.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Asociaciones de familiares de internos</li>
                <li>✓ ONGs de reinserción social</li>
                <li>✓ Cooperativas de inserción laboral</li>
                <li>✓ Grupos de voluntariado social</li>
                <li>✓ Organizaciones religiosas de apoyo</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Buscar asociaciones
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💬 Foros de familias
              </h3>
              <p className="text-gray-700 mb-4">
                Espacios online donde familiares de internos pueden compartir experiencias,
                hacer preguntas, ofrecer apoyo, y conectar con otras personas en situaciones similares.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Espacio seguro:</strong> Los foros son moderados para garantizar un
                  ambiente respetuoso y confidencial. Puedes participar de forma anónima
                  si lo deseas.
                </p>
              </div>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Foro general:</strong> Conversaciones abiertas sobre todos los temas
                </li>
                <li>
                  <strong>Foro por provincias:</strong> Conecta con familias de tu zona
                </li>
                <li>
                  <strong>Foro temático:</strong> Grupos específicos (legal, laboral, emocional, etc.)
                </li>
                <li>
                  <strong>Preguntas y respuestas:</strong> Comunidad para resolver dudas
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Acceder a foros
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🤝 Grupos de mutuo apoyo
              </h3>
              <p className="text-gray-700 mb-4">
                Grupos presenciales y online donde personas con experiencias similares se
                reúnen regularmente para compartir apoyo, recursos y estrategias.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Grupos presenciales:</strong> Reuniones periódicas en ciudades
                  principales para compartir experiencias y apoyo
                </li>
                <li>
                  <strong>Grupos online:</strong> Videollamadas semanales para quienes no
                  pueden asistir presencialmente
                </li>
                <li>
                  <strong>Grupos especializados:</strong> Grupos para madres, parejas, hijos,
                  o para personas en situaciones específicas
                </li>
                <li>
                  <strong>Grupos de pares:</strong> Facilitados por personas que han pasado
                  por experiencias similares
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Encontrar grupo cercano
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📅 Eventos y actividades
              </h3>
              <p className="text-gray-700 mb-4">
                Calendario de eventos, talleres, conferencias y actividades organizadas
                por asociaciones y grupos de apoyo de toda España.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Talleres de formación y empleo</li>
                <li>• Conferencias sobre derechos y recursos</li>
                <li>• Actividades de integración y ocio</li>
                <li>• Encuentros anuales de familias</li>
                <li>• Webinars y sesiones online</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver calendario de eventos
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌱 Programas de voluntariado
              </h3>
              <p className="text-gray-700 mb-4">
                Oportunidades para voluntariarse y apoyar a otras familias, contribuyendo con
                tu experiencia y tiempo a ayudar a otros en situaciones similares.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>El voluntariado también ayuda:</strong> Ayudar a otros puede ser
                  terapéutico y te permite conectar con personas que entienden tu situación.
                  Tu experiencia es valiosa para otros.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Apoyo telefónico a nuevas familias</li>
                <li>• Mentoria en foros online</li>
                <li>• Organización de eventos locales</li>
                <li>• Representación de asociaciones</li>
                <li>• Acompañamiento en visitas y trámites</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver programas de voluntariado
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🔗 Recursos adicionales
              </h3>
              <p className="text-gray-700 mb-4">
                Otros recursos y servicios de la red de apoyo comunitaria.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Cruz Roja – Programa de Reinserción
                  </a>
                  {' '}– Apoyo integral a ex-reclusos
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Cáritas
                  </a>
                  {' '}– Programas de inserción y acompañamiento
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Secretariado Gitano
                  </a>
                  {' '}– Apoyo a la comunidad gitana en reinserción
                </li>
                <li>
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-semibold">
                    ATD Cuarto Mundo
                  </a>
                  {' '}– Lucha contra la pobreza y exclusión
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="testimonios-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="testimonios-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Historias de la comunidad
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "El grupo de apoyo me salvó durante los primeros meses. Poder hablar con
                otras familias que entendían exactamente lo que estaba pasando me dio
                fuerzas para seguir adelante. Hoy yo apoyo a nuevas familias."
              </p>
              <p className="text-amber-600 font-semibold">— Carmen, madre de un interno</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                "Conocí a mi actual pareja en un evento de la asociación. Ambos habíamos
                pasado por situaciones similares y eso nos unió. Ahora estamos casados
                y ayudamos a otros juntos."
              </p>
              <p className="text-amber-600 font-semibold">— Luis, en proceso de reinserción</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            No estás solo/a en esto
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Hay una comunidad entera dispuesta a apoyarte. Únete a nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/familias"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver módulo familias
            </Link>
            <Link
              href="/ayudar"
              className="inline-block bg-amber-600 text-white hover:bg-amber-700 font-bold py-3 px-8 rounded-lg transition-colors text-lg border-2 border-white"
            >
              Quiero apoyar a otros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
