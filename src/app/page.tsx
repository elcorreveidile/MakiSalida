export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <span className="text-2xl">🚪</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MakiSalida</h1>
                <p className="text-sm text-gray-600">Hacia la libertad, con apoyo</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary-600">Familias</a>
              <a href="#" className="text-gray-700 hover:text-primary-600">Reinserción</a>
              <a href="#" className="text-gray-700 hover:text-primary-600">Recursos</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Apoyo integral para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">internos y familias</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Plataforma que conecta, informa y prepara para la reinserción social. Porque empezar de nuevo es más fácil cuando no estás solo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-600 transition-all shadow-md">
              Soy Familiar
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-300 hover:border-amber-500 transition-all">
              Quiero Ayudar
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Módulo Familias */}
          <div className="maki-card">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Módulo Familias</h3>
            <p className="text-gray-600 mb-4">
              Gestiona comunicaciones, visita información y conecta con otros familiares.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ Agenda de videollamadas</li>
              <li>✅ Información de visitas</li>
              <li>✅ Comunidad de apoyo</li>
            </ul>
          </div>

          {/* Módulo Reinserción */}
          <div className="maki-card">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Módulo Reinserción</h3>
            <p className="text-gray-600 mb-4">
              Formación, preparación laboral y conexión con empresas inclusivas.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ Cursos y certificaciones</li>
              <li>✅ Constructor de CV</li>
              <li>✅ Bolsa de empleo inclusiva</li>
            </ul>
          </div>

          {/* Módulo Educativo */}
          <div className="maki-card">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Módulo Educativo</h3>
            <p className="text-gray-600 mb-4">
              Programas de formación para centros penitenciarios con tablets dedicadas.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ Cursos offline</li>
              <li>✅ Actividades guiadas</li>
              <li>✅ Progreso reportable</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-yellow-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para empezar un nuevo camino?
          </h3>
          <p className="mb-6 text-amber-50">
            Únete a MakiSalida y descubre el apoyo que necesitas para la reinserción.
          </p>
          <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-semibold hover:bg-gray-100 transition-all">
            Crear Cuenta Gratuita
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-lg">🚪</span>
              <span className="font-semibold text-gray-900">MakiSalida</span>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} MakiSalida. Apoyo a la reinserción.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
