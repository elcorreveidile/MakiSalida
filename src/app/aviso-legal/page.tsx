import Link from 'next/link';
import { Header } from '@/components/Header';

export default function AvisoLegalPage() {
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
            <li className="text-gray-900 font-semibold">Aviso Legal</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviso Legal
          </h1>
          <p className="text-xl text-amber-100">
            Última actualización: Enero 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose prose-amber max-w-none">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r mb-8">
                <p className="text-gray-700">
                  <strong>ATENCIÓN:</strong> MakiLibre es una plataforma informativa y de apoyo.
                  No es un servicio oficial de Instituciones Penitenciarias ni sustituye el asesoramiento
                  legal profesional. Para cuestiones legales específicas, consulta con un abogado
                  especializado.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Titular del sitio web</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Nombre:</strong> MakiLibre
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Domicilio:</strong> [Dirección completa pendiente de registro]
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Contacto:</strong>{' '}
                  <Link href="/contacto" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Formulario de contacto
                  </Link>
                </p>
                <p className="text-gray-700">
                  <strong>Teléfono:</strong> [Pendiente de registro]
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Finalidad del sitio web</h2>
              <p className="text-gray-700 mb-4">
                MakiLibre es una plataforma web cuyo objetivo es proporcionar recursos,
                información y apoyo a familiares de internos penitenciarios. Las finalidades
                específicas son:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Ofrecer información general sobre derechos penitenciarios</li>
                <li>Facilitar modelos de solicitudes y recursos legales</li>
                <li>Proporcionar recursos educativos para internos y familiares</li>
                <li>Crear una comunidad de apoyo entre familiares</li>
                <li>Ofrecer guías y materiales informativos</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Naturaleza de los servicios</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r mb-6">
                <h3 className="font-bold text-gray-900 mb-3">LIMITACIÓN DE RESPONSABILIDAD</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• MakiLibre NO es un despacho de abogados</li>
                  <li>• MakiLibre NO está afiliado a Instituciones Penitenciarias</li>
                  <li>• Los documentos proporcionados son modelos orientativos</li>
                  <li>• La información es general y puede no aplicarse a casos específicos</li>
                  <li>• No ofrecemos asesoramiento legal personalizado</li>
                  <li>• No garantizamos resultados en procedimientos penitenciarios</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propiedad intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todos los contenidos de este sitio web (textos, imágenes, logos, diseños, software,
                documentación, etc.) son propiedad de MakiLibre o de sus licenciantes y están
                protegidos por las leyes de propiedad intelectual e industrial.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Queda prohibido:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Reproducir, copiar, distribuir o modificar los contenidos sin autorización</li>
                  <li>Utilizar los contenidos con fines comerciales</li>
                  <li>Eliminar o modificar cualquier aviso legal o propiedad intelectual</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Los modelos de solicitud proporcionados pueden ser utilizados por los usuarios
                  para presentaciones ante instituciones penitenciarias, siempre que se mantenga
                  el carácter personal de cada solicitud.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Enlaces a terceros</h2>
              <p className="text-gray-700 mb-4">
                Este sitio web puede contener enlaces a sitios web de terceros (instituciones
                penitenciarias, juzgados, asociaciones, etc.). MakiLibre no tiene control sobre
                estos sitios y no se responsabiliza de sus contenidos o políticas de privacidad.
              </p>
              <p className="text-gray-700 mb-6">
                La inclusión de enlaces no implica recomendación ni endorsement de los
                contenidos de dichos sitios.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protección de datos</h2>
              <p className="text-gray-700 mb-4">
                El tratamiento de datos personales se realiza conforme a lo establecido en la
                Política de Privacidad de MakiLibre, de conformidad con el RGPD y la normativa
                española vigente.
              </p>
              <p className="text-gray-700 mb-6">
                Puedes consultar nuestra política completa en:
              </p>
              <Link
                href="/privacidad"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Ver Política de Privacidad
              </Link>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Legislación aplicable</h2>
              <p className="text-gray-700 mb-4">
                Este aviso legal se rige por la legislación española. Para cualquier controversia,
                las partes se someten a los Juzgados y Tribunales del domicilio del titular del
                sitio web.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para cualquier cuestión relacionada con este aviso legal o con el sitio web,
                puedes contactarnos en:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r">
                <p className="text-gray-700 mb-2">
                  <Link href="/contacto" className="text-amber-600 hover:text-amber-700 font-semibold">
                    Formulario de contacto
                  </Link>
                </p>
                <p className="text-gray-700">
                  <strong>Horario de atención:</strong> Lunes a viernes, 9:00 - 18:00
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <p className="text-gray-700 text-sm">
                  <strong>Fecha de entrada en vigor:</strong> Enero 2025
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  Este aviso legal puede ser modificado en cualquier momento. Los cambios
                  entrarán en vigor desde su publicación en la web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
