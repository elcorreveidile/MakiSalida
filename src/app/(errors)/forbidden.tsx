import Link from 'next/link';

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <div className="maki-card text-center">
          {/* Maki icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <span className="text-5xl">🔐</span>
          </div>

          {/* Error code */}
          <h1 className="text-9xl font-bold text-purple-600 mb-4">403</h1>

          {/* Maki-style message */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              "No puedes pasar, celesi. Esto es solo para autoridades"
            </h2>
            <p className="text-gray-700 text-lg">
              Lo siento, colega, pero no tienes permiso para acceder aquí.<br />
              <span className="text-sm text-gray-600 mt-2 block">
                Ni el Maki podría entrar sin la autorización adecuada. ¡Necesitas identificarte!
              </span>
            </p>
          </div>

          {/* Suggestion */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">¿Qué puedes hacer?</span>
            </p>
            <ul className="mt-2 space-y-1 text-sm text-left">
              <li>• Verifica que has iniciado sesión correctamente</li>
              <li>• Confirma que tienes permisos para acceder</li>
              <li>• Contacta con el administrador si crees que es un error</li>
            </ul>
          </div>

          {/* Action button */}
          <Link
            href="/login"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-600 transition-all"
          >
            Iniciar sesión
          </Link>

          {/* Footer message */}
          <p className="mt-6 text-xs text-gray-500 italic">
            "El respeto es fundamental. ¡A veces hay que saber esperar!"
          </p>
        </div>
      </div>
    </div>
  );
}
