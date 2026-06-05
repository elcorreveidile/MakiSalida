import Link from 'next/link';

export default function EducativoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="bg-amber-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Módulo Educativo para Centros
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Formación y recursos para internos en tablets sin conexión
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4" aria-labelledby="sobre-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="sobre-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Qué es el módulo educativo?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            El módulo educativo de MakiSalida está diseñado específicamente para funcionar en tablets
            dentro de centros penitenciarios, donde el acceso a Internet puede estar limitado o restringido.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            El sistema funciona completamente offline, sincronizándose automáticamente cuando hay
            conexión disponible. Esto garantiza que los internos puedan acceder a contenido educativo
            en cualquier momento, sin depender de la conectividad.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <p className="text-gray-700 font-semibold">
              💡 El contenido está diseñado para facilitar la reinserción a través de la educación,
              el desarrollo de habilidades y la preparación para la vida en libertad.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="caracteristicas-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="caracteristicas-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Características del sistema
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Offline */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Tablet sin wifi">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Offline</h3>
              <p className="text-gray-700">
                Todo el contenido educativo funciona sin conexión. Los internos pueden aprender
                en cualquier momento, sin depender de Internet.
              </p>
            </article>

            {/* Sync */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Sincronización">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sincronización</h3>
              <p className="text-gray-700">
                Progreso, notas y completed se sincronizan automáticamente cuando hay conexión,
                permitiendo continuidad educativa.
              </p>
            </article>

            {/* Progress */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Gráfica de progreso">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seguimiento</h3>
              <p className="text-gray-700">
                Sistema completo de seguimiento del progreso para internos y educadores,
                con informes detallados y certificados.
              </p>
            </article>

            {/* Security */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Candado">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seguridad</h3>
              <p className="text-gray-700">
                Contenido restringido y supervisado. Cumple con todas las normativas
                penitenciarias de seguridad y control.
              </p>
            </article>

            {/* Multi-language */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Mundo">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multiidioma</h3>
              <p className="text-gray-700">
                Contenido disponible en español y otros idiomas para facilitar el aprendizaje
                de internos de diferentes nacionalidades.
              </p>
            </article>

            {/* Certificates */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Certificado">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certificaciones</h3>
              <p className="text-gray-700">
                Certificados oficiales upon completion de cursos, válidos para acreditar
                formación en procesos de reinserción.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Content categories */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Contenido educativo disponible
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Alfabetización */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4" role="img" aria-label="Libro abierto">📖</div>
                <h3 className="text-2xl font-bold text-gray-900">Alfabetización</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Lectura y escritura básica</li>
                <li>• Matemáticas fundamentales</li>
                <li>• Comprensión lectora</li>
                <li>• Niveles adaptados a cada persona</li>
              </ul>
            </article>

            {/* Formación profesional */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4" role="img" aria-label="Herramientas">🔧</div>
                <h3 className="text-2xl font-bold text-gray-900">Formación Profesional</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Oficios y habilidades técnicas</li>
                <li>• Informática básica</li>
                <li>• Atención al cliente</li>
                <li>• Gestión administrativa</li>
              </ul>
            </article>

            {/* Habilidades para la vida */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4" role="img" aria-label="Corazón">❤️</div>
                <h3 className="text-2xl font-bold text-gray-900">Habilidades para la Vida</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Educación financiera básica</li>
                <li>• Habilidades de comunicación</li>
                <li>• Resolución de conflictos</li>
                <li>• Toma de decisiones</li>
              </ul>
            </article>

            {/* Preparación para la salida */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4" role="img" aria-label="Puerta abierta">🚪</div>
                <h3 className="text-2xl font-bold text-gray-900">Preparación para la Salida</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Búsqueda de empleo</li>
                <li>• Gestión de documentación</li>
                <li>• Vivienda y recursos sociales</li>
                <li>• Planificación de futuro</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="implementacion-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="implementacion-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Implementación en centros
          </h2>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Requisitos técnicos</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Tablets Android o iPad (mínimo 2GB RAM)</li>
                <li>✓ Conexión Wi-Fi del centro (para sincronización)</li>
                <li>✓ Software MakiSalida Educativo instalado</li>
                <li>✓ Sistema de gestión de dispositivos (MDM)</li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Formación de personal</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Capacitación de educadores y funcionarios</li>
                <li>✓ Manual de uso del sistema</li>
                <li>✓ Soporte técnico continuo</li>
                <li>✓ Actualización regular de contenidos</li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Personalización</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Adaptación de contenido a necesidades específicas</li>
                <li>✓ Configuración de permisos y restricciones</li>
                <li>✓ Integración con sistemas existentes del centro</li>
                <li>✓ Informes personalizados de seguimiento</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" aria-labelledby="beneficios-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="beneficios-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Beneficios para centros e internos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Para el Centro</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Mejora de programas educativos y reinserción</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Reducción de conflictos mediante actividad ocupacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Mayor control y seguimiento del progreso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Cumplimiento de normativas educativas penitenciarias</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Para los Internos</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Acceso a educación calidad sin barreras</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Preparación efectiva para la vida en libertad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Mayor autonomía y autoestima</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Certificaciones válidas para el mercado laboral</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Interesado en implementarlo en tu centro?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Ofrecemos demos, formación y soporte completo para centros penitenciarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ayudar"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Contactar para demo
            </Link>
            <Link
              href="/recursos"
              className="inline-block bg-amber-600 text-white hover:bg-amber-700 font-bold py-3 px-8 rounded-lg transition-colors text-lg border-2 border-white"
            >
              Ver recursos educativos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
