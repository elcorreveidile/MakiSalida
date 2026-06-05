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

              <div className="bg-amber-50 rounded-lg p-6 space-y-4">
                <h4 className="font-bold text-gray-900">Consejos clave para familiares:</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>1. Acepta tus emociones:</strong> Es normal sentir rabia, tristeza, vergüenza o culpa. No reprimas lo que sientes; reconocerlo es el primer paso para gestionarlo.</p>
                  <p><strong>2. Establece rutinas:</strong> Mantener una estructura diaria te ayuda a sentir control sobre tu vida. Incluye tiempo para ti, para el trabajo y para el descanso.</p>
                  <p><strong>3. Busca tu red de apoyo:</strong> No tienes que cargar con todo. Habla con familiares de confianza, amigos o profesionales. Compartir alivia.</p>
                  <p><strong>4. Cuida tu salud física:</strong> El estrés crónico afecta al cuerpo. Duerme lo suficiente, aliméntate bien y haz ejercicio, aunque sea caminar 30 minutos al día.</p>
                  <p><strong>5. Pon límites sanos:</strong> Ayudar a tu ser querido no significa sacrificar toda tu vida. Establece límites claros para proteger tu bienestar.</p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🧘 Técnicas de manejo del estrés
              </h3>
              <p className="text-gray-700 mb-4">
                Ejercicios y técnicas prácticas para reducir el estrés, la ansiedad y mejorar
                el bienestar emocional tanto para internos como para familiares.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Respiración 4-7-8</h4>
                  <ol className="text-gray-700 text-sm space-y-1">
                    <li>1. Inspira por la nariz contando hasta 4</li>
                    <li>2. Mantén el aire contando hasta 7</li>
                    <li>3. Exhala por la boca contando hasta 8</li>
                    <li>4. Repite 4 veces, 2-3 veces al día</li>
                  </ol>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Técnica 5-4-3-2-1 (ansiedad)</h4>
                  <ol className="text-gray-700 text-sm space-y-1">
                    <li>1. Nombra 5 cosas que ves</li>
                    <li>2. Toca 4 cosas a tu alrededor</li>
                    <li>3. Escucha 3 sonidos</li>
                    <li>4. Identifica 2 olores</li>
                    <li>5. Saborea 1 cosa</li>
                  </ol>
                </div>
                <div className="bg-amber-50 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Relajación muscular progresiva</h4>
                  <ol className="text-gray-700 text-sm space-y-1">
                    <li>1. Siéntate cómodamente y cierra los ojos</li>
                    <li>2. Tensa los músculos de los pies 5 segundos</li>
                    <li>3. Suelta y relaja 10 segundos</li>
                    <li>4. Sube por piernas, abdomen, manos, hombros, cara</li>
                  </ol>
                </div>
                <div className="bg-purple-50 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Diario de gratitud</h4>
                  <ol className="text-gray-700 text-sm space-y-1">
                    <li>1. Cada noche, escribe 3 cosas buenas del día</li>
                    <li>2. Pueden ser pequeñas: un café, una conversación</li>
                    <li>3. Reléelo cuando te sientas mal</li>
                    <li>4. Reduce la ansiedad en pocas semanas</li>
                  </ol>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                <p className="text-gray-700 text-sm">
                  <strong>Apps gratuitas recomendadas:</strong> Insight Timer (meditación guiada en español),
                  Petit BamBou (mindfulness), Headspace (ejercicios de respiración).
                </p>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👨‍⚕️ Directorio de psicólogos y recursos profesionales
              </h3>
              <p className="text-gray-700 mb-4">
                Servicios de atención psicológica accesibles para familias de internos
                y personas en proceso de reinserción.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Importante:</strong> Buscar ayuda profesional es un acto de valentía,
                  no de debilidad. Un psicólogo puede proporcionar herramientas valiosas
                  para afrontar esta situación.
                </p>
              </div>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Psicología sanitaria pública:</strong> Pide cita con tu médico de cabecera y solicita derivación a salud mental. Es gratuito a través de la Seguridad Social.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Colegio Oficial de Psicólogos:</strong> Cada comunidad autónoma tiene un colegio con directorio de profesionales. Busca en <a href="https://www.cop.es" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold">cop.es</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Fundación ANAR:</strong> Apoyo psicológico gratuito para menores y familias. Teléfono: <strong>900 20 20 10</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Cruz Roja — Programa de Salud Mental:</strong> Atención psicológica para personas en vulnerabilidad. Contacta con tu sede local.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Terapia online accesible:</strong> Plataformas como Buencoco o Therapyside ofrecen tarifas reducidas para personas en situación de vulnerabilidad.</span>
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👥 Grupos de apoyo
              </h3>
              <p className="text-gray-700 mb-4">
                Espacios seguros y confidenciales donde compartir experiencias, recibir apoyo
                y conectar con otras personas que están pasando por situaciones similares.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Asociaciones de familiares:</strong> Muchas ciudades tienen asociaciones locales de familiares de internos que organizan reuniones periódicas. Pregunta en los servicios sociales de tu ayuntamiento.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Cáritas:</strong> Ofrece grupos de apoyo y acompañamiento para familias en todas las diócesis de España.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Cruz Roja:</strong> Programa de acompañamiento social con voluntarios formados en escucha activa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 font-bold">•</span>
                  <span><strong>Teléfono de la Esperanza:</strong> Además del teléfono 24h (<strong>717 003 717</strong>), organizan talleres presenciales de desarrollo personal y grupos de autoayuda en muchas ciudades.</span>
                </li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                <p className="text-gray-700 text-sm">
                  <strong>Consejo:</strong> Si no encuentras un grupo presencial en tu zona,
                  busca "grupo de apoyo familias internos" + tu ciudad en redes sociales.
                  Muchos funcionan por WhatsApp o Telegram.
                </p>
              </div>
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
                <p className="text-gray-900 font-bold mb-3">Si estás en crisis:</p>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>024</strong> — Teléfono de atención a la conducta suicida (24h, gratuito)</li>
                  <li>• <strong>112</strong> — Emergencias (si hay riesgo inmediato)</li>
                  <li>• <strong>717 003 717</strong> — Teléfono de la Esperanza (24h, gratuito)</li>
                  <li>• <strong>900 20 20 10</strong> — ANAR, ayuda a menores y familias</li>
                  <li>• <strong>016</strong> — Violencia de género (24h, gratuito, no deja rastro en factura)</li>
                </ul>
              </div>
              <p className="text-gray-700">
                Estos servicios son gratuitos, confidenciales y disponibles 24 horas.
                No estás solo/a, hay ayuda disponible.
              </p>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📚 Recursos recomendados de bienestar
              </h3>
              <p className="text-gray-700 mb-4">
                Materiales recomendados por profesionales para mejorar el bienestar emocional.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Libros</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• "El hombre en busca de sentido" — Viktor Frankl</li>
                    <li>• "Sentirse bien" — David Burns</li>
                    <li>• "Cuando todo se derrumba" — Pema Chödrön</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Podcasts en español</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• "Entiende tu mente" — psicología accesible</li>
                    <li>• "Mente en equilibrio" — técnicas de bienestar</li>
                    <li>• "A buenas horas" — salud mental cotidiana</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Apps gratuitas</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Insight Timer — meditación guiada</li>
                    <li>• Petit BamBou — mindfulness</li>
                    <li>• Woebot — apoyo emocional con IA</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Webs de referencia</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <a href="https://www.cop.es" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">cop.es</a> — Colegio de Psicólogos</li>
                    <li>• <a href="https://www.consaludmental.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">consaludmental.org</a> — Confederación Salud Mental</li>
                  </ul>
                </div>
              </div>
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
              href="/contacto"
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
