import Link from 'next/link';
import { Header } from '@/components/Header';

export default function LegalPage() {
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

          <div className="space-y-8">
            {/* Guía de derechos */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📖 Guía de derechos penitenciarios
              </h3>
              <p className="text-gray-700 mb-6">
                Conoce los derechos fundamentales de los internos durante el cumplimiento de condena,
                incluyendo derechos de comunicación, visitas, y condiciones de internamiento.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Derechos fundamentales:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Derechos de comunicación:</strong> 5 comunicaciones orales al mes (mínimo 10 minutos cada una), 4 comunicaciones escritas al mes</li>
                  <li><strong>Derechos de visitas:</strong> Visitas de familiares (mínimo 2 al mes), visitas íntimas (cónyuge/pareja)</li>
                  <li><strong>Acciones culturales:</strong> Acceso a educación, trabajo, actividades culturales y deportivas</li>
                  <li><strong>Asistencia sanitaria:</strong> Acceso a atención médica y psicológica</li>
                  <li><strong>Derechos religiosos:</strong> Liberdad de culto y asistencia religiosa</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="/api/pdf/guia-derechos"
                  className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  📥 Descargar guía (PDF)
                </a>
                <a
                  href="/recursos/legal/guia-derechos-penitenciarios.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  👁️ Ver versión online
                </a>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded border border-amber-200">
                <p className="text-sm text-gray-700">
                  <strong>Base legal:</strong> Artículos 25-28 de la Constitución Española, Ley Orgánica General Penitenciaria 1/1979, Reglamento Penitenciario RD 190/1996
                </p>
              </div>
            </article>

            {/* Modelos de solicitudes */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📝 Modelos de solicitudes y escritos
              </h3>
              <p className="text-gray-700 mb-6">
                Plantillas oficiales para presentar solicitudes, quejas y recursos ante la
                administración penitenciaria. Todos los modelos son adaptables a tu situación específica.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Solicitud de permisos</h4>
                  <p className="text-sm text-gray-600 mb-3">Modelo para solicitar permisos de salida ordinarios y extraordinarios</p>
                  <a href="/api/pdf/solicitud-permisos" className="text-amber-600 hover:text-amber-700 text-sm font-semibold">Descargar modelo (PDF)</a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Queja administrativa</h4>
                  <p className="text-sm text-gray-600 mb-3">Presentar queja ante la dirección del centro por irregularidades</p>
                  <a href="/api/pdf/queja-administrativa" className="text-amber-600 hover:text-amber-700 text-sm font-semibold">Descargar modelo (PDF)</a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Solicitud de traslado</h4>
                  <p className="text-sm text-gray-600 mb-3">Solicitar traslado a otro centro penitenciario por razones familiares</p>
                  <a href="/api/pdf/solicitud-traslado" className="text-amber-600 hover:text-amber-700 text-sm font-semibold">Descargar modelo (PDF)</a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Recurso contra sanciones</h4>
                  <p className="text-sm text-gray-600 mb-3">Recurrir sanciones disciplinarias impuestas por el centro</p>
                  <a href="/api/pdf/recurso-sanciones" className="text-amber-600 hover:text-amber-700 text-sm font-semibold">Descargar modelo (PDF)</a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Libertad condicional</h4>
                  <p className="text-sm text-gray-600 mb-3">Solicitud de libertad condicional ante el Juez de Vigilancia</p>
                  <a href="/api/pdf/libertad-condicional" className="text-amber-600 hover:text-amber-700 text-sm font-semibold">Descargar modelo (PDF)</a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Petición de 3º grado</h4>
                  <p className="text-sm text-gray-600 mb-3">Solicitar clasificación en tercer grado de tratamiento</p>
                  <a href="/api/pdf/peticion-3er-grado" className="text-amber-600 hover:text-amber-700 text-sm font-semibold">Descargar modelo (PDF)</a>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Importante:</strong> Estos modelos son orientativos. Para casos complejos,
                  recomendamos consultar con un abogado especializado en derecho penitenciario.
                </p>
              </div>
            </article>

            {/* Directorio de abogados */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                👨‍⚖️ Directorio de abogados especializados
              </h3>
              <p className="text-gray-700 mb-6">
                Abogados y despachos con experiencia en derecho penitenciario y penal.
                <span className="text-amber-600 font-semibold"> Próximamente: los abogados podrán anunciarse aquí</span>
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700 mb-3">
                  <strong>¿Eres abogado especializado en derecho penitenciario?</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Próximamente podrás anunciarte en este directorio para llegar a familias
                  que necesitan tus servicios. Contacta con nosotros para más información.
                </p>
                <Link
                  href="/ayudar#contacto"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
                >
                  Solicitar información
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Madrid</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Colegio de Abogados de Madrid - Turno de oficio</li>
                    <li>• Servicio de orientación jurídica gratuita</li>
                    <li>• Tel: 91 533 75 00</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Barcelona</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ilustre Colegio d'Advocats de Barcelona</li>
                    <li>• Servicio de atención al ciudadano</li>
                    <li>• Tel: 93 317 20 00</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Valencia</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ilustre Colegio de Abogados de Valencia</li>
                    <li>• Turno de oficio y guardia</li>
                    <li>• Tel: 96 339 25 00</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Sevilla</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ilustre Colegio de Abogados de Sevilla</li>
                    <li>• Servicio de orientación jurídica</li>
                    <li>• Tel: 95 422 44 00</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors">
                  Ver todos los colegios provinciales
                </button>
              </div>
            </article>

            {/* Beneficios penitenciarios */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Información sobre beneficios penitenciarios
              </h3>
              <p className="text-gray-700 mb-6">
                Guía completa sobre los diferentes beneficios penitenciarios disponibles según
                la Ley Orgánica General Penitenciaria.
              </p>

              <div className="space-y-6">
                {/* Permisos */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">🔓 Permisos de salida</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Permisos ordinarios:</strong> Hasta 36 días por año de permanencia
                      en el centro (más 7 días adicionales por cada año a partir del tercero)
                    </li>
                    <li>
                      <strong>Permisos extraordinarios:</strong> Por enfermedad grave o fallecimiento
                      de familiar, nacimiento de hijo, o acontecimientos familiares importantes
                    </li>
                    <li>
                      <strong>Salidas programadas:</strong> Salidas preparatorias para la libertad
                      condicional o salida definitiva
                    </li>
                  </ul>
                  <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-gray-700">
                      <strong>Requisitos básicos:</strong> Clasificación en 2º grado, buen comportamiento,
                      no tener sanciones pendientes, y propuesta favorable del equipo técnico
                    </p>
                  </div>
                </div>

                {/* Libertad condicional */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">⚖️ Libertad condicional</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Cumplimiento mínimo:</strong> Haber cumplido:
                    </li>
                    <li className="ml-4 pl-4 border-l border-gray-300">
                      • 3/4 de la condena para condenas hasta 5 años
                    </li>
                    <li className="ml-4 pl-4 border-l border-gray-300">
                      • 2/3 para condenas entre 5-10 años
                    </li>
                    <li className="ml-4 pl-4 border-l border-gray-300">
                      • 1/2 para condenas superiores a 10 años
                    </li>
                    <li>
                      <strong>Clasificación mínima:</strong> Segundo grado de tratamiento
                    </li>
                    <li>
                      <strong>Condiciones:</strong> Buena conducta, actividad laboral/educativa,
                      reintegración familiar y social favorable
                    </li>
                  </ul>
                </div>

                {/* Redención */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">⏰ Redención de pena</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Por trabajo:</strong> 1 día de redención por 2 días trabajados</li>
                    <li><strong>Por actividades:</strong> Hasta 1 mes por año en actividades culturales, deportivas, formativas</li>
                    <li><strong>Límite máximo:</strong> Redención máxima de 1/4 de la condena</li>
                  </ul>
                </div>

                {/* Clasificación de grados */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">🎖️ Clasificación en grados</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Primer grado:</strong> Régimen cerrado (internamiento inicial)</li>
                    <li><strong>Segundo grado:</strong> Régimen ordinario (mayores permisos y actividades)</li>
                    <li><strong>Tercer grado:</strong> Régimen abierto (permisos sin acompañamiento)</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Recursos institucionales */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏛️ Recursos institucionales oficiales
              </h3>
              <p className="text-gray-700 mb-6">
                Enlaces oficiales a instituciones públicas y organismos del sistema penitenciario español.
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Secretaría General de Instituciones Penitenciarias</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Organismo autónomo responsable de los centros penitenciarios y la política penitenciaria
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://www.institucionespenitenciarias.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                    >
                      🔗 Web oficial
                    </a>
                    <a
                      href="https://www.institucionespenitenciarias.es/web/openData"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                    >
                      📊 Datos abiertos
                    </a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Jueces de Vigilancia Penitenciaria</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Órganos judiciales encargados del control de la actividad penitenciaria y los derechos de los internos
                  </p>
                  <a
                    href="https://www.poderjudicial.es/cgpj/es/Colegios/Jueces-de-Vigilancia-Penitenciaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Directorio de JVP
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Defensor del Pueblo</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Defensa de los derechos fundamentales y libertades públicas, incluyendo derechos de los internos
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://www.defensordelpueblo.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                    >
                      🔗 Web oficial
                    </a>
                    <a
                      href="https://www.defensordelpueblo.es/es/defensa/quejas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                    >
                      📝 Presentar queja
                    </a>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Consejo General del Poder Judicial</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Información sobre el sistema judicial y acceso a la justicia
                  </p>
                  <a
                    href="https://www.poderjudicial.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Web oficial CGPJ
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Boletín Oficial del Estado (BOE)</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Consulta leyes, reglamentos y normativa penitenciaria actualizada
                  </p>
                  <a
                    href="https://www.boe.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Buscar normativa
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Colegios de Abogados</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Servicios de orientación jurídica gratuita y turnos de oficio
                  </p>
                  <a
                    href="https://www.abogacia.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Consejo General de la Abogacía
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Comisión Española de Ayuda a las Víctimas</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Apoyo y recursos para víctimas de delitos
                  </p>
                  <a
                    href="https://www.fundacionvictimas.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Fundación de Víctimas
                  </a>
                </div>
              </div>
            </article>

            {/* Normativa básica */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📚 Normativa básica
              </h3>
              <p className="text-gray-700 mb-4">
                Legislación fundamental que regula los derechos y deberes de los internos.
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Constitución Española (1978)</h4>
                  <p className="text-sm text-gray-600">Artículos 15 (libertad ideológica), 17 (derechos sindicales), 18 (derecho al honor), 24 (derecho a la tutela judicial efectiva), 25 (derecho al trabajo)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Ley Orgánica 1/1979 - General Penitenciaria</h4>
                  <p className="text-sm text-gray-600">Ley que regula el régimen penitenciario, derechos y deberes de los internos</p>
                  <a
                    href="https://www.boe.es/buscar/pdf.php?id=BOE-A-1979-27170"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold"
                  >
                    🔗 Ver texto completo
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Real Decreto 190/1996 - Reglamento Penitenciario</h4>
                  <p className="text-sm text-gray-600">Reglamento que desarrolla la LOGP 1/1979</p>
                  <a
                    href="https://www.boe.es/buscar/pdf.php?id=BOE-A-1996-5540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold"
                  >
                    🔗 Ver texto completo
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Ley Orgánica 5/2000 - Responsabilidad Penal de Menores</h4>
                  <p className="text-sm text-gray-600">Regula el responsabilidad penal de menores de 18 años</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Alert */}
      <section className="bg-red-50 border-y border-red-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start">
            <span className="text-3xl mr-4">⚠️</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aviso Legal Importante</h3>
              <p className="text-sm text-gray-700">
                Esta información es orientativa y no sustituye el asesoramiento de un abogado.
                Cada situación es única y las leyes pueden cambiar. Para procedimientos judiciales
                complejos, recomendamos encarecidamente consultar con un profesional del derecho
                especializado en derecho penitenciario.
              </p>
            </div>
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
              href="/ayudar#contacto"
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
