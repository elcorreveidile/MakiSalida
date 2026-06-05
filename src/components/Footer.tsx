import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <span className="text-xl">🚪</span>
              </div>
              <span className="font-bold text-xl">MakiSalida</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Apoyo a familias de internos penitenciarios
            </p>
            <p className="text-gray-400 text-xs">
              Recursos, información y comunidad para familias
            </p>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recursos" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Recursos útiles
                </Link>
              </li>
              <li>
                <Link href="/recursos/legal" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Asesoría Legal
                </Link>
              </li>
              <li>
                <Link href="/recursos/laboral" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Orientación Laboral
                </Link>
              </li>
              <li>
                <Link href="/recursos/psicologico" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Apoyo Psicológico
                </Link>
              </li>
              <li>
                <Link href="/recursos/social" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Redes de Apoyo
                </Link>
              </li>
              <li>
                <Link href="/recursos/educativo" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Formación y Educación
                </Link>
              </li>
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h3 className="font-bold text-lg mb-4">Comunidad</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/familias" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Módulo Familias
                </Link>
              </li>
              <li>
                <Link href="/reinsercion" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Guía de Reinserción
                </Link>
              </li>
              <li>
                <Link href="/ayudar" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Cómo Colaborar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/aviso-legal"
              className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
            >
              Aviso Legal
            </Link>
            <Link
              href="/privacidad"
              className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
            >
              Política de Cookies
            </Link>
            <Link
              href="/contacto"
              className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            © {currentYear} MakiSalida. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs">
            Diseñado para apoyar a familias de internos penitenciarios
          </p>
        </div>
      </div>
    </footer>
  );
}
