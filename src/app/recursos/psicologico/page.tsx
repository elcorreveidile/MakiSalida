import Link from 'next/link';
import { Header } from '@/components/Header';

export default function PsicologicoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
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
            <li className="text-gray-900 font-semibold">Apoyo Psicológico</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4" role="img" aria-label="Cerebro">🧠</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Apoyo Psicológico
            </h1>
          </div>
          <p className="text-xl text-amber-100">
            Recursos para el bienestar emocional y mental
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-8">
            Recursos de apoyo emocional
          </h2>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📖 Guía de afrontamiento para familias
              </h3>
              <p className="text-gray-700 mb-4">
                Estrategias y recursos para que familiares de internos afronten el estrés,
                la ansiedad y los desafíos emocionales durante el internamiento de un ser querido.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Cómo manejar la incertidumbre y la preocupación</li>
                <li>✓ Estrategias de comunicación efectiva</li>
                <li>✓ Cuidado personal y prevención del burnout</li>
                <li>✓ Apoyo a otros miembros de la familia</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Descargar guía (PDF)
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🧘 Técnicas de manejo del estrés
              </h3>
              <p className="text-gray-700 mb-4">
                Ejercicios y técnicas prácticas para reducir el estrés, la ansiedad y mejorar
                el bienestar emocional tanto para internos como para familiares.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Respiración consciente:</strong> Ejercicios de respiración para
                  calmar la mente y reducir la ansiedad
                </li>
                <li>
                  <strong>Meditación guiada:</strong> Audios y ejercicios de meditación
                  específicos para personas en situación de estrés
                </li>
                <li>
                  <strong>Mindfulness:</strong> Técnicas de atención plena para gestionar
                  pensamientos y emociones difíciles
                </li>
                <li>
                  <strong>Relajación muscular:</strong> Ejercicios para liberar tensión
                  física y mental
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver ejercicios guiados
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👨‍⚕️ Directorio de psicólogos especializados
              </h3>
              <p className="text-gray-700 mb-4">
                Listado de psicólogos, terapeutas y consejeros con experiencia en apoyo
                a familias de internos y personas en proceso de reinserción.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Importante:</strong> Buscar ayuda profesional es un acto de valentía,
                  no de debilidad. Un psicólogo puede proporcionar herramientas valiosas
                  para afrontar esta situación.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Psicólogos clínicos especializados en familias</li>
                <li>• Terapeutas con experiencia en reinserción</li>
                <li>• Servicios de terapia online y presencial</li>
                <li>• Grupos de apoyo facilitados por profesionales</li>
                <li>• Terapia accesible (tarifas reducidas y seguros)</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Buscar profesionales
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👥 Grupos de apoyo virtual
              </h3>
              <p className="text-gray-700 mb-4">
                Espacios seguros y confidenciales donde compartir experiencias, recibir apoyo
                y conectar con otras personas que están pasando por situaciones similares.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Grupos para familiares:</strong> Sesiones online para compartir
                  experiencias y estrategias de afrontamiento
                </li>
                <li>
                  <strong>Grupos para ex-internos:</strong> Espacio para compartir experiencias
                  de reinserción y apoyarse mutuamente
                </li>
                <li>
                  <strong>Grupos temáticos:</strong> Grupos enfocados en temas específicos
                  (ansiedad, manejo de emociones, relaciones familiares, etc.)
                </li>
                <li>
                  <strong>Foros 24/7:</strong> Comunidad online para conectar en cualquier momento
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Unirse a grupos de apoyo
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📱 Recursos de crisis inmediata
              </h3>
              <p className="text-gray-700 mb-4">
                Números de teléfono y recursos de ayuda inmediata para situaciones de crisis
                emocional o urgencia psicológica.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r mb-6">
                <p className="text-gray-900 font-bold mb-3">🚨 Si estás en crisis:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>024</strong> - Teléfono de atención a la conducta suicida</li>
                  <li>• <strong>112</strong> - Emergencias (si hay riesgo inmediato)</li>
                  <li>• <strong>900 202 010</strong> - Teléfono de la Esperanza (ansiedad y depresión)</li>
                  <li>• <strong>116 123</strong> - Samaritans (escucha emocional)</li>
                </ul>
              </div>
              <p className="text-gray-700">
                Estos servicios son gratuitos, confidenciales y disponibles 24 horas.
                No estás solo/a, hay ayuda disponible.
              </p>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📚 Biblioteca de recursos de bienestar
              </h3>
              <p className="text-gray-700 mb-4">
                Colección de libros, podcasts, videos y otros recursos recomendados por
                profesionales para mejorar el bienestar emocional.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Libros sobre resiliencia y superación</li>
                <li>• Podcasts de psicología y bienestar</li>
                <li>• Videos con ejercicios guiados</li>
                <li>• Aplicaciones de meditación y sueño</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Cuidar tu salud mental es importante
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            No tienes que pasar por esto solo/a. Hay recursos y personas dispuestas a escucharte.
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
              Contactar para apoyo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
