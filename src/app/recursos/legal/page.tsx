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
                  <li><strong>Derechos religiosos:</strong> Libertad de culto y asistencia religiosa</li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-4">
                <p className="text-sm text-gray-700">
                  <strong>📥 ¿Necesitas esta guía en PDF?</strong> Puedes copiar esta información
                  o <Link href="/contacto" className="text-amber-600 hover:text-amber-700 font-semibold underline">contactarnos</Link> para
                  recibir una versión imprimible.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded border border-amber-200">
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
                Información sobre los principales escritos que puedes presentar ante la
                administración penitenciaria. Cada modelo es adaptable a tu situación específica.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Solicitud de permisos</h4>
                  <p className="text-sm text-gray-600 mb-2">Modelo para solicitar permisos de salida ordinarios y extraordinarios</p>
                  <p className="text-xs text-gray-500">Se presenta ante la Junta de Tratamiento del centro penitenciario</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Queja administrativa</h4>
                  <p className="text-sm text-gray-600 mb-2">Presentar queja ante la dirección del centro por irregularidades</p>
                  <p className="text-xs text-gray-500">Dirigida al Director del centro o al Juez de Vigilancia Penitenciaria</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Solicitud de traslado</h4>
                  <p className="text-sm text-gray-600 mb-2">Solicitar traslado a otro centro penitenciario por razones familiares</p>
                  <p className="text-xs text-gray-500">Se presenta ante la Secretaría General de Instituciones Penitenciarias</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Recurso contra sanciones</h4>
                  <p className="text-sm text-gray-600 mb-2">Recurrir sanciones disciplinarias impuestas por el centro</p>
                  <p className="text-xs text-gray-500">Recurso ante el Juez de Vigilancia Penitenciaria (plazo de 5 días)</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Libertad condicional</h4>
                  <p className="text-sm text-gray-600 mb-2">Solicitud de libertad condicional ante el Juez de Vigilancia</p>
                  <p className="text-xs text-gray-500">Requiere cumplir 3/4 de la condena y clasificación en tercer grado</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">📄 Petición de 3º grado</h4>
                  <p className="text-sm text-gray-600 mb-2">Solicitar clasificación en tercer grado de tratamiento</p>
                  <p className="text-xs text-gray-500">Se presenta ante la Junta de Tratamiento del centro</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-4">
                <p className="text-sm text-gray-700">
                  <strong>📥 ¿Necesitas los modelos?</strong> <Link href="/contacto" className="text-amber-600 hover:text-amber-700 font-semibold underline">Escríbenos</Link> indicando
                  qué modelo necesitas y te lo enviaremos por email.
                </p>
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
                  href="/contacto"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
                >
                  Solicitar información
                </Link>
              </div>

              <h4 className="font-bold text-gray-900 mb-4">Colegios de Abogados por ciudad</h4>
              <p className="text-sm text-gray-600 mb-4">
                Los Colegios de Abogados ofrecen servicios de orientación jurídica gratuita y gestionan el turno de oficio:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Madrid</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ilustre Colegio de Abogados de Madrid</li>
                    <li>• Turno de oficio y orientación jurídica gratuita</li>
                    <li>• Tel: 91 788 93 80</li>
                  </ul>
                  <a
                    href="https://web.icam.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-2 inline-block"
                  >
                    🔗 Web ICAM
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Barcelona</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Il·lustre Col·legi de l&apos;Advocacia de Barcelona</li>
                    <li>• Servicio de atención al ciudadano</li>
                    <li>• Tel: 93 496 18 80</li>
                  </ul>
                  <a
                    href="https://www.icab.cat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-2 inline-block"
                  >
                    🔗 Web ICAB
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Valencia</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ilustre Colegio de Abogados de Valencia</li>
                    <li>• Turno de oficio y guardia</li>
                    <li>• Tel: 96 394 12 90</li>
                  </ul>
                  <a
                    href="https://www.icav.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-2 inline-block"
                  >
                    🔗 Web ICAV
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Sevilla</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ilustre Colegio de Abogados de Sevilla</li>
                    <li>• Servicio de orientación jurídica</li>
                    <li>• Tel: 95 450 37 37</li>
                  </ul>
                  <a
                    href="https://www.icas.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-2 inline-block"
                  >
                    🔗 Web ICAS
                  </a>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://www.abogacia.es/encuentra-tu-abogado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                  🔗 Buscar colegios en toda España (abogacia.es)
                </a>
              </div>
            </article>

            {/* Beneficios penitenciarios */}
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Información sobre beneficios penitenciarios
              </h3>
              <p className="text-gray-700 mb-6">
                Guía completa sobre los diferentes beneficios penitenciarios disponibles según
                la Ley Orgánica General Penitenciaria y el Código Penal.
              </p>

              <div className="space-y-6">
                {/* Permisos */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">🔓 Permisos de salida</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Permisos ordinarios:</strong> Hasta 36 días al año para internos en
                      segundo grado, y hasta 48 días para internos en tercer grado (art. 154 RP)
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
                      <strong>Requisitos básicos:</strong> Clasificación en 2º o 3er grado, haber cumplido
                      1/4 de la condena, buena conducta, y propuesta favorable del equipo técnico (art. 47 LOGP)
                    </p>
                  </div>
                </div>

                {/* Libertad condicional */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">⚖️ Libertad condicional (suspensión de la ejecución del resto de la pena)</h4>
                  <p className="text-sm text-gray-600 mb-3">Regulada en los artículos 90-93 del Código Penal</p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Requisitos generales (art. 90 CP):</strong>
                    </li>
                    <li className="ml-4 pl-4 border-l border-gray-300">
                      • Estar clasificado en <strong>tercer grado</strong> de tratamiento penitenciario
                    </li>
                    <li className="ml-4 pl-4 border-l border-gray-300">
                      • Haber extinguido <strong>3/4 partes</strong> de la condena impuesta
                    </li>
                    <li className="ml-4 pl-4 border-l border-gray-300">
                      • Buena conducta y pronóstico favorable de reinserción social
                    </li>
                    <li className="ml-4 pl-4 border-l border-gray-300">
                      • Haber satisfecho la responsabilidad civil derivada del delito (según posibilidades)
                    </li>
                    <li>
                      <strong>Supuesto anticipado (art. 90.2 CP):</strong> A los <strong>2/3</strong> de la condena
                      cuando existan circunstancias excepcionales (participación efectiva en programas de tratamiento)
                    </li>
                    <li>
                      <strong>Supuesto especial (art. 90.3 CP):</strong> A la <strong>mitad</strong> de la condena
                      para primarios condenados a pena no superior a 3 años
                    </li>
                  </ul>
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
                    <p className="text-sm text-gray-700">
                      <strong>Nota:</strong> La libertad condicional es ahora una forma de suspensión de la ejecución
                      del resto de la pena (tras la reforma LO 1/2015). El Juez de Vigilancia Penitenciaria puede
                      imponer condiciones y revocarla si se incumplen.
                    </p>
                  </div>
                </div>

                {/* Clasificación de grados */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">🎖️ Clasificación en grados</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Primer grado:</strong> Régimen cerrado — aplicable a internos de peligrosidad extrema o inadaptación al régimen ordinario (art. 10 LOGP)</li>
                    <li><strong>Segundo grado:</strong> Régimen ordinario — la clasificación más habitual, permite permisos de salida y actividades</li>
                    <li><strong>Tercer grado:</strong> Régimen abierto — el interno reside en un Centro de Inserción Social (CIS), puede salir a trabajar y dormir en el centro</li>
                  </ul>
                  <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-gray-700">
                      <strong>Revisión:</strong> La clasificación se revisa cada 6 meses como máximo (art. 105 RP).
                      Puedes solicitar la revisión en cualquier momento.
                    </p>
                  </div>
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
                    Organismo responsable de la administración penitenciaria, centros penitenciarios y la política de reinserción
                  </p>
                  <a
                    href="https://www.institucionpenitenciaria.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Web oficial (institucionpenitenciaria.es)
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Consejo General del Poder Judicial (CGPJ)</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Información sobre el sistema judicial, directorio de juzgados y acceso a la justicia.
                    Incluye los Juzgados de Vigilancia Penitenciaria.
                  </p>
                  <a
                    href="https://www.poderjudicial.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Web oficial CGPJ
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Defensor del Pueblo</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Defensa de los derechos fundamentales y libertades públicas. Puedes presentar
                    quejas sobre condiciones penitenciarias o vulneración de derechos.
                  </p>
                  <a
                    href="https://www.defensordelpueblo.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Web oficial (defensordelpueblo.es)
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Boletín Oficial del Estado (BOE)</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Consulta leyes, reglamentos y normativa penitenciaria en su versión consolidada actualizada
                  </p>
                  <a
                    href="https://www.boe.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Buscar normativa (boe.es)
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Consejo General de la Abogacía Española</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Servicios de orientación jurídica gratuita, turnos de oficio y búsqueda de abogados por especialidad
                  </p>
                  <a
                    href="https://www.abogacia.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-sm font-semibold"
                  >
                    🔗 Web oficial (abogacia.es)
                  </a>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Servicio de Asistencia Jurídica Gratuita</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Si no tienes recursos económicos, tienes derecho a un abogado de oficio gratuito.
                    Solicítalo en cualquier Colegio de Abogados o en el propio centro penitenciario.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <p className="text-sm text-gray-700">
                      <strong>Requisito:</strong> Ingresos inferiores a 2 veces el IPREM (indicador público de renta de efectos múltiples).
                      Los internos sin recursos cumplen este requisito automáticamente.
                    </p>
                  </div>
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
                  <p className="text-sm text-gray-600">
                    Art. 15 (derecho a la vida e integridad física), art. 17 (derecho a la libertad y seguridad),
                    art. 18 (derecho a la intimidad y al honor), art. 24 (derecho a la tutela judicial efectiva),
                    art. 25.2 (derechos de los condenados a pena de prisión)
                  </p>
                  <a
                    href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-1 inline-block"
                  >
                    🔗 Ver texto consolidado (BOE)
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Ley Orgánica 1/1979 - General Penitenciaria (LOGP)</h4>
                  <p className="text-sm text-gray-600">Ley que regula el régimen penitenciario, derechos y deberes de los internos</p>
                  <a
                    href="https://www.boe.es/buscar/act.php?id=BOE-A-1979-23708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-1 inline-block"
                  >
                    🔗 Ver texto consolidado (BOE)
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Real Decreto 190/1996 - Reglamento Penitenciario</h4>
                  <p className="text-sm text-gray-600">Reglamento que desarrolla la LOGP 1/1979</p>
                  <a
                    href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-3307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-1 inline-block"
                  >
                    🔗 Ver texto consolidado (BOE)
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Código Penal (LO 10/1995)</h4>
                  <p className="text-sm text-gray-600">
                    Arts. 90-93 (libertad condicional), art. 136 (cancelación de antecedentes penales),
                    arts. 80-87 (suspensión de la ejecución de penas)
                  </p>
                  <a
                    href="https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-1 inline-block"
                  >
                    🔗 Ver texto consolidado (BOE)
                  </a>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-900">Ley Orgánica 5/2000 - Responsabilidad Penal del Menor</h4>
                  <p className="text-sm text-gray-600">Regula la responsabilidad penal de menores de 18 años</p>
                  <a
                    href="https://www.boe.es/buscar/act.php?id=BOE-A-2000-641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 text-xs font-semibold mt-1 inline-block"
                  >
                    🔗 Ver texto consolidado (BOE)
                  </a>
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
              href="/contacto"
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
