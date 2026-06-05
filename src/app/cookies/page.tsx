import Link from 'next/link';
import { Header } from '@/components/Header';

export default function CookiesPage() {
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
            <li className="text-gray-900 font-semibold">Política de Cookies</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Cookies
          </h1>
          <p className="text-xl text-amber-100">
            Última actualización: Junio 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose prose-amber max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ¿Qué son las cookies?</h2>
              <p className="text-gray-700 mb-6">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                (ordenador, tablet o móvil) cuando visitas un sitio web. Se utilizan para recordar
                tus preferencias y mejorar tu experiencia de navegación.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipos de cookies que utilizamos</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Cookies técnicas (necesarias)</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Propósito:</strong> Son necesarias para el funcionamiento del sitio web
                </p>
                <p className="text-gray-700">
                  No requieren consentimiento y no pueden ser deshabilitadas.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Autenticación y sesión de usuario</li>
                <li>Recordar si has aceptado la política de cookies</li>
                <li>Mantenimiento de preferencias básicas</li>
                <li>Gestión de colas de procesos</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2. Cookies analíticas</h3>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Propósito:</strong> Analizar el uso del sitio web para mejorarlo
                </p>
                <p className="text-gray-700">
                  Requieren tu consentimiento previo.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Número de visitas</li>
                <li>Páginas más visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Dispositivo y navegador utilizado</li>
                <li>Ubicación geográfica aproximada</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3. Cookies de preferencias</h3>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Propósito:</strong> Recordar tus configuraciones personales (idioma,
                  tema, etc.)
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies de terceros</h2>
              <p className="text-gray-700 mb-4">
                Algunos servicios de terceros pueden instalar cookies a través de nuestro sitio web:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio</li>
                <li><strong>Vercel Analytics:</strong> Para monitorizar el rendimiento</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Gestión de cookies</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1. Aceptación de cookies</h3>
              <p className="text-gray-700 mb-4">
                Al continuar navegando en nuestro sitio web después de ver el banner de cookies,
                aceptas el uso de todas las cookies descritas en esta política.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2. Rechazo de cookies</h3>
              <p className="text-gray-700 mb-4">
                Puedes rechazar las cookies (excepto las técnicas necesarias) a través de:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Configurar tu navegador para rechazar cookies</li>
                <li>Utilizar el modo de navegación privada</li>
                <li>Borrar cookies ya instaladas</li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Configuración por navegador:</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Duración de las cookies</h2>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-amber-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Sesión</td>
                      <td className="border border-gray-300 px-4 py-2">Hasta que cierres el navegador</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Persistentes</td>
                      <td className="border border-gray-300 px-4 py-2">1 año</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Analíticas</td>
                      <td className="border border-gray-300 px-4 py-2">2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Actualizaciones de la política</h2>
              <p className="text-gray-700 mb-6">
                Esta política de cookies puede actualizarse para reflejar cambios en nuestras
                prácticas o por cambios legislativos. Te recomendamos revisar esta política
                periódicamente.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Más información</h2>
              <p className="text-gray-700 mb-4">
                Para más información sobre cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>
                  <a
                    href="https://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700"
                  >
                    www.allaboutcookies.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.aepd.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700"
                  >
                    Agencia Española de Protección de Datos
                  </a>
                </li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
                <p className="text-gray-700 mb-4">
                  <strong>Información adicional:</strong>
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>Para cuestiones sobre privacidad:
                    <Link href="/privacidad" className="text-amber-600 hover:text-amber-700 font-semibold ml-1">
                      Política de Privacidad
                    </Link>
                  </li>
                  <li>Para información legal:
                    <Link href="/aviso-legal" className="text-amber-600 hover:text-amber-700 font-semibold ml-1">
                      Aviso Legal
                    </Link>
                  </li>
                  <li>Para contactarnos:
                    <Link href="/contacto" className="text-amber-600 hover:text-amber-700 font-semibold ml-1">
                      Formulario de contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
