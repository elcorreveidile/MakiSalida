import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
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
            <li className="text-gray-900 font-semibold">Política de Privacidad</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-amber-500 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidad
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable del tratamiento</h2>
              <p className="text-gray-700 mb-6">
                <strong>MakiSalida</strong> es responsable del tratamiento de los datos personales
                recopilados a través de este sitio web, de conformidad con el Reglamento (UE) 2016/679
                (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos que recopilamos</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Datos de navegación</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Sitio web de referencia</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2. Datos personales voluntarios</h3>
              <p className="text-gray-700 mb-2">
                Si decides registrarte o contactarnos, podemos recopilar:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Nombre y apellidos</li>
                <li>Correo electrónico</li>
                <li>Teléfono (si lo proporcionas voluntariamente)</li>
                <li>Mensajes o consultas que nos envías</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidad del tratamiento</h2>
              <p className="text-gray-700 mb-2">Tus datos serán utilizados para:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Gestionar y responder a tus consultas y solicitudes</li>
                <li>Prestar los servicios solicitados a través de la web</li>
                <li>Mejorar la funcionalidad y usabilidad del sitio web</li>
                <li>Enviar comunicaciones comerciales (solo con tu consentimiento previo)</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base legal</h2>
              <p className="text-gray-700 mb-2">El tratamiento de tus datos se basa en:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Consentimiento:</strong> Has dado tu consentimiento explícito</li>
                <li><strong>Contrato:</strong> Es necesario para la prestación de servicios solicitados</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y seguridad</li>
                <li><strong>Obligación legal:</strong> Para cumplir con la normativa aplicable</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservación de datos</h2>
              <p className="text-gray-700 mb-4">
                Los datos se conservarán mientras exista una relación comercial o mientras seas
                usuario de la plataforma, o durante el tiempo necesario para cumplir con las
                obligaciones legales. Una vez finalizado el tratamiento, los datos serán eliminados
                o bloqueados según corresponda.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Destinatarios</h2>
              <p className="text-gray-700 mb-2">
                Tus datos no serán cedidos a terceros, salvo en los siguientes casos:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Prestadores de servicios necesarios para el funcionamiento de la web</li>
                <li>Cuando sea necesario para cumplir con una obligación legal</li>
                <li>Cuando sea necesario para la ejecución del contrato</li>
                <li>Con tu consentimiento explícito</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Derechos de los usuarios</h2>
              <p className="text-gray-700 mb-4">Tienes derecho a:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li><strong>Acceso:</strong> Solicitar información sobre tus datos</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar el borrado de tus datos</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Revocación:</strong> Retirar el consentimiento en cualquier momento</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ejercicio de derechos</h2>
              <p className="text-gray-700 mb-4">
                Para ejercer tus derechos, puedes enviarnos un correo electrónico a:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r mb-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacidad@makisalida.es
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Medidas de seguridad</h2>
              <p className="text-gray-700 mb-6">
                Adoptamos las medidas técnicas y organizativas necesarias para garantizar la
                seguridad de tus datos personales y protegerlos contra accesos no autorizados,
                alteración, pérdida o destrucción.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Este sitio web utiliza cookies. Puedes obtener más información en nuestra
                <Link href="/cookies" className="text-amber-600 hover:text-amber-700 font-semibold ml-1">
                  Política de Cookies
                </Link>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios en la política</h2>
              <p className="text-gray-700 mb-6">
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier
                momento. Los cambios entrarán en vigor desde su publicación en la web.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r">
                <p className="text-gray-700">
                  <strong>Información adicional:</strong> Si consideras que tus derechos
                  han sido vulnerados, tienes derecho a presentar una reclamación ante la
                  Agencia Española de Protección de Datos (AEPD).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
