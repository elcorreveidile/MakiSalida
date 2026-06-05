import Link from 'next/link';

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="bg-amber-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos útiles
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Guías, información y apoyo para internos y sus familias
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4" aria-labelledby="categorias-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="categorias-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Categorías de recursos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Legal */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-4xl mb-4" role="img" aria-label="Balanza">⚖️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Asesoría Legal</h3>
              <p className="text-gray-700 mb-4">
                Recursos y orientación legal para internos y familiares.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Guía de derechos penitenciarios</li>
                <li>• Modelos de solicitudes y escritos</li>
                <li>• Directorio de abogados especializados</li>
                <li>• Información sobre beneficios penitenciarios</li>
              </ul>
              <Link
                href="/recursos/legal"
                className="inline-block w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ver recursos legales
              </Link>
            </article>

            {/* Laboral */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-4xl mb-4" role="img" aria-label="Maletín">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Orientación Laboral</h3>
              <p className="text-gray-700 mb-4">
                Recursos para la inserción laboral tras la salida.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Guía de búsqueda de empleo</li>
                <li>• Cómo explicar los antecedentes penales</li>
                <li>• Programas de formación profesional</li>
                <li>• Empresas que contratan con antecedentes</li>
              </ul>
              <Link
                href="/recursos/laboral"
                className="inline-block w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ver recursos laborales
              </Link>
            </article>

            {/* Psicológico */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-4xl mb-4" role="img" aria-label="Corazón y mente">🧠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apoyo Psicológico</h3>
              <p className="text-gray-700 mb-4">
                Recursos para el bienestar emocional y mental.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Guía de afrontamiento para familias</li>
                <li>• Técnicas de manejo del estrés</li>
                <li>• Directorio de psicólogos especializados</li>
                <li>• Grupos de apoyo virtual</li>
              </ul>
              <Link
                href="/recursos/psicologico"
                className="inline-block w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ver recursos psicológicos
              </Link>
            </article>

            {/* Administrativo */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-4xl mb-4" role="img" aria-label="Documentos">📄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trámites Administrativos</h3>
              <p className="text-gray-700 mb-4">
                Guías para gestionar documentación y trámites.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Solicitud de permisos y comunicaciones</li>
                <li>• Trámites de libertad condicional</li>
                <li>• Gestión de documentación oficial</li>
                <li>• Recursos y quejas</li>
              </ul>
              <Link
                href="/recursos/administrativo"
                className="inline-block w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ver guías administrativas
              </Link>
            </article>

            {/* Social */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-4xl mb-4" role="img" aria-label="Gente">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Redes de Apoyo</h3>
              <p className="text-gray-700 mb-4">
                Conecta con otras familias y asociaciones.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Directorio de asociaciones</li>
                <li>• Foros de familias</li>
                <li>• Grupos de mutuo apoyo</li>
                <li>• Eventos y actividades presenciales</li>
              </ul>
              <Link
                href="/recursos/social"
                className="inline-block w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ver redes de apoyo
              </Link>
            </article>

            {/* Educativo */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-4xl mb-4" role="img" aria-label="Libro">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Formación y Educación</h3>
              <p className="text-gray-700 mb-4">
                Recursos educativos para internos y familiares.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Cursos online gratuitos</li>
                <li>• Materiales de formación</li>
                <li>• Programas de reintegración educativa</li>
                <li>• Becas y ayudas</li>
              </ul>
              <Link
                href="/recursos/educativo"
                className="inline-block w-full text-center bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ver recursos educativos
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Featured guides */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="guias-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="guias-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Guías destacadas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Guía para familias de internos
              </h3>
              <p className="text-gray-700 mb-6">
                Una guía completa para entender el sistema penitenciario, los derechos de los internos,
                y cómo mantener la comunicación y el apoyo familiar durante el internamiento.
              </p>
              <div className="flex items-center text-amber-600">
                <span className="text-2xl mr-2">📖</span>
                <span className="font-semibold">15 minutos de lectura</span>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Guía de reinserción laboral
              </h3>
              <p className="text-gray-700 mb-6">
                Consejos prácticos y recursos para encontrar empleo tras salir del centro penitenciario,
                incluyendo cómo abordar los antecedentes penales en entrevistas y dónde buscar oportunidades.
              </p>
              <div className="flex items-center text-amber-600">
                <span className="text-2xl mr-2">📖</span>
                <span className="font-semibold">20 minutos de lectura</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* External resources */}
      <section className="py-16 px-4" aria-labelledby="externos-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="externos-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recursos externos recomendados
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-900 mb-1">Instituciones Penitenciarias</h4>
                <p className="text-gray-700">Información oficial sobre centros, normas y procedimientos</p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-900 mb-1">Asociaciones de Familias</h4>
                <p className="text-gray-700">Red de asociaciones que apoyan a familiares de internos</p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-gray-900 mb-1">Servicios de Empleo</h4>
                <p className="text-gray-700">Programas de inserción laboral para personas con antecedentes</p>
              </li>
              <li className="pb-4">
                <h4 className="font-bold text-gray-900 mb-1">Servicios Sociales</h4>
                <p className="text-gray-700">Recursos y ayudas disponibles para reintegración social</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesitas ayuda específica?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Nuestra comunidad está aquí para apoyarte. No estás solo/a en esto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/familias"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ir al módulo familias
            </Link>
            <Link
              href="/ayudar"
              className="inline-block bg-amber-600 text-white hover:bg-amber-700 font-bold py-3 px-8 rounded-lg transition-colors text-lg border-2 border-white"
            >
              Quiero colaborar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
