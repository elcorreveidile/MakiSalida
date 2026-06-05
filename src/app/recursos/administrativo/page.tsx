import Link from 'next/link';
import { Header } from '@/components/Header';

export default function AdministrativoPage() {
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
            <li className="text-gray-900 font-semibold">Trámites Administrativos</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4" role="img" aria-label="Documentos">📄</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Trámites Administrativos
            </h1>
          </div>
          <p className="text-xl text-amber-100">
            Guías para gestionar documentación y trámites
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4" aria-labelledby="contenido-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="contenido-title" className="text-3xl font-bold text-gray-900 mb-8">
            Guías paso a paso
          </h2>

          <div className="space-y-8">
            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📝 Solicitud de permisos y comunicaciones
              </h3>
              <p className="text-gray-700 mb-4">
                Guía completa para solicitar permisos de salida, comunicaciones familiares,
                y otros trámites de solicitud ante la dirección del centro.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Tipos de permisos:</strong> Permisos ordinarios (1-7 días),
                  permisos extraordinarios, salidas programadas, y comunicaciones íntimas
                  con familiares.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Requisitos y documentación necesaria</li>
                <li>✓ Modelos de solicitud actualizados</li>
                <li>✓ Plazos y tiempos de respuesta</li>
                <li>✓ Qué hacer en caso de denegación</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver guía completa
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🔓 Trámites de libertad condicional
              </h3>
              <p className="text-gray-700 mb-4">
                Información detallada sobre el proceso de solicitud de libertad condicional,
                requisitos, documentación, y qué esperar durante el procedimiento judicial.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Requisitos legales:</strong> Tiempo de condena cumplido,
                  clasificación en 2º grado, conducta, reintegración familiar y laboral
                </li>
                <li>
                  <strong>Documentación necesaria:</strong> Informes del centro,
                  propuesta de reintegración, antecedentes, certificados
                </li>
                <li>
                  <strong>Procedimiento:</strong> Solicitud, informe del centro,
                  vista en el juzgado, resolución, y condiciones impuestas
                </li>
                <li>
                  <strong>Seguimiento:</strong> Obligaciones durante el periodo de
                  libertad condicional y posibles revocaciones
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver procedimiento completo
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📋 Gestión de documentación oficial
              </h3>
              <p className="text-gray-700 mb-4">
                Trámites para obtener y renovar documentos oficiales necesarios tras la salida:
                DNI, pasaporte, permiso de conducción, tarjeta sanitaria, y otros documentos.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Importante:</strong> Muchos documentos pueden caducar durante
                  el internamiento. Es recomendable verificar su vigencia y renovarlos
                  antes de la salida para evitar problemas posteriores.
                </p>
              </div>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Renovación de DNI y pasaporte</li>
                <li>• Obtención de certificados de antecedentes penales</li>
                <li>• Trámite de permiso de conducción</li>
                <li>• Alta en la seguridad social y tarjeta sanitaria</li>
                <li>• Empadronamiento y certificados de residencia</li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver guías por documento
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ⚖️ Recursos y quejas
              </h3>
              <p className="text-gray-700 mb-4">
                Guías para presentar recursos, quejas, y reclamaciones ante decisiones
                administrativas del centro penitenciario o el juez de vigilancia.
              </p>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li>
                  <strong>Recurso contra sanciones disciplinarias:</strong> Cómo recurrir
                  sanciones impuestas en el centro, plazos, y procedimiento
                </li>
                <li>
                  <strong>Queja por condiciones de internamiento:</strong> Canal para
                  denunciar situaciones irregulares o vulneraciones de derechos
                </li>
                <li>
                  <strong>Recurso ante el JVP:</strong> Presentación de recursos ante
                  el Juzgado de Vigilancia Penitenciaria
                </li>
                <li>
                  <strong>Queja al Defensor del Pueblo:</strong> Cómo presentar quejas
                  ante esta institución para defensa de derechos fundamentales
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Ver modelos de recursos
              </button>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                💼 Trámites laborales y de seguridad social
              </h3>
              <p className="text-gray-700 mb-4">
                Procesos para darse de alta en la seguridad social, solicitar prestaciones,
                  y tramitar documentos necesarios para trabajar tras la salida.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Alta y situación en la seguridad social</li>
                <li>• Solicitud de prestaciones por desempleo</li>
                <li>• Certificados de empresa y vida laboral</li>
                <li>• Carnet de profesional (si aplica)</li>
                <li>• Tramitación de pensions y subsidios</li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏠 Vivienda y empadronamiento
              </h3>
              <p className="text-gray-700 mb-4">
                Trámites relacionados con vivienda, empadronamiento, y documentos de
                residencia necesarios para la reintegración en la vida civil.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Empadronamiento en el municipio de residencia</li>
                <li>• Solicitud de vivienda social o protegida</li>
                <li>• Tramites de alquiler y contratos de vivienda</li>
                <li>• Acceso a servicios sociales municipales</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ⚠️ Consideraciones importantes
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Los trámites pueden variar según la comunidad autónoma</li>
              <li>• Es recomendable asesorarse con un abogado o trabajador social</li>
              <li>• Muchos trámites se pueden realizar online con certificado digital</li>
              <li>• Los plazos son importantes: respeta los tiempos legales</li>
              <li>• Guarda siempre copias de toda la documentación presentada</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesitas ayuda con trámites específicos?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Los procesos administrativos pueden ser complejos. Estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recursos/legal"
              className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Ver asesoría legal
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
