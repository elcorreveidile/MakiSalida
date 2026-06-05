import Link from 'next/link';
import { Header } from '@/components/Header';

export default function ReinsercionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-amber-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tu nueva vida empieza aquí
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-amber-100">
            Recursos, guías y apoyo para tu transición a la vida en libertad
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4" aria-labelledby="intro-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="intro-title" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            El camino hacia la reinserción
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            La salida de un centro penitenciario es el comienzo de una nueva etapa. Estamos aquí
            para apoyarte en cada paso del camino, proporcionándote las herramientas, recursos
            y conexiones que necesitas para construir una vida plena y exitosa en libertad.
          </p>
          <p className="text-lg text-gray-700">
            No importa cuánto tiempo haya pasado o cuáles sean tus circunstancias. Siempre es
            posible empezar de nuevo. Nuestra comunidad te ofrece apoyo práctico, orientación
            y, sobre todo, esperanza.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="fases-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="fases-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Fases de la reinserción
          </h2>

          <div className="space-y-8">
            {/* Fase 1 */}
            <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Preparación (durante el internamiento)</h3>
                  <p className="text-gray-700 mb-4">
                    Comienza la preparación para la salida mientras todavía estás en el centro.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ Planificación financiera y administrativa</li>
                    <li>✓ Actualización de documentación</li>
                    <li>✓ Formación y educación</li>
                    <li>✓ Reconexión con red familiar y social</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Fase 2 */}
            <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transición inmediata (primeras semanas)</h3>
                  <p className="text-gray-700 mb-4">
                    El periodo crítico tras la salida. Estabilización y adaptación.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ Alojamiento y vivienda básica</li>
                    <li>✓ Registro administrativo obligatorio</li>
                    <li>✓ Acceso a servicios de salud</li>
                    <li>✓ Gestión de beneficios y ayudas</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Fase 3 */}
            <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Consolidación (primeros 6 meses)</h3>
                  <p className="text-gray-700 mb-4">
                    Construcción de una rutina estable y progreso continuo.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ Búsqueda activa de empleo</li>
                    <li>✓ Desarrollo de hábitos saludables</li>
                    <li>✓ Fortalecimiento de relaciones positivas</li>
                    <li>✓ Acceso a formación continua</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Fase 4 */}
            <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Integración plena (a partir de 1 año)</h3>
                  <p className="text-gray-700 mb-4">
                    Vida normalizada y participación activa en la sociedad.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ Estabilidad laboral y económica</li>
                    <li>✓ Integración social plena</li>
                    <li>✓ Apoyo a otros en proceso de reinserción</li>
                    <li>✓ Proyectos de vida a largo plazo</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-16 px-4" aria-labelledby="recursos-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="recursos-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Recursos para tu reinserción
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Empleo */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Maletín">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empleo</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Orientación laboral personalizada</li>
                <li>• Programas de formación profesional</li>
                <li>• Empresas sensibilizadas</li>
                <li>• Cómo abordar antecedentes</li>
              </ul>
              <Link
                href="/recursos/laboral"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Explorar recursos
              </Link>
              <a
                href="https://makicar.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center mt-3 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
              >
                🚗 MakiCar — Empieza a trabajar ya
              </a>
            </article>

            {/* Vivienda */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Casa">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vivienda</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Alquileres accesibles</li>
                <li>• Residencias de transición</li>
                <li>• Programas de vivienda social</li>
                <li>• Recursos para compartir piso</li>
              </ul>
              <Link
                href="/recursos/social"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Ver redes de apoyo
              </Link>
            </article>

            {/* Salud */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Cruz médica">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Salud</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Acceso a sanidad pública</li>
                <li>• Programas de deshabituación</li>
                <li>• Apoyo psicológico</li>
                <li>• Hábitos saludables</li>
              </ul>
              <Link
                href="/recursos/psicologico"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Apoyo psicológico
              </Link>
            </article>

            {/* Educación */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Libro">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Educación</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Cursos online gratuitos</li>
                <li>• Formación profesional</li>
                <li>• Programas de segundo idioma</li>
                <li>• Becas y ayudas</li>
              </ul>
              <Link
                href="/recursos/educativo"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Formación y educación
              </Link>
            </article>

            {/* Legal */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Balanza">⚖️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Gestión de antecedentes</li>
                <li>• Cancelación de penal</li>
                <li>• Documentación necesaria</li>
                <li>• Asesoría especializada</li>
              </ul>
              <Link
                href="/recursos/legal"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Asesoría legal
              </Link>
            </article>

            {/* Social */}
            <article className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-500">
              <div className="text-5xl mb-4" role="img" aria-label="Gente">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Apoyo social</h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Grupos de apoyo</li>
                <li>• Mentores personales</li>
                <li>• Actividades comunitarias</li>
                <li>• Redes de voluntariado</li>
              </ul>
              <Link
                href="/recursos/social"
                className="inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Redes de apoyo
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="py-16 px-4 bg-amber-50" aria-labelledby="historias-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="historias-title" className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Historias de éxito
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-4">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Miguel, 42 años</h3>
                  <p className="text-gray-600">Libertad hace 3 años</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Tras salir, no sabía por dónde empezar. Con la ayuda de la plataforma encontré
                formación, empleo y, sobre todo, personas que creyeron en mí. Hoy tengo un
                trabajo estable y estoy reconstruyendo mi relación con mi familia."
              </p>
              <p className="text-amber-600 font-semibold">"Si pude yo, puedes tú también"</p>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-4">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ana, 38 años</h3>
                  <p className="text-gray-600">Libertad hace 18 meses</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "El primer mes fue muy duro. Pero gracias a los grupos de apoyo y a los recursos
                que encontré aquí, poco a poco fui construyendo mi nueva vida. Ahora trabajo
                como administrativa y ayudo a otras personas en mi situación."
              </p>
              <p className="text-amber-600 font-semibold">"Nunca es tarde para empezar"</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Estás aquí para ti, pero no estás solo/a
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Nuestra comunidad te acompaña en cada paso de tu camino hacia la libertad plena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recursos"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver todos los recursos
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
