import Link from 'next/link';

export default function TooManyRequestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <div className="maki-card text-center">
          {/* Maki icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center">
            <span className="text-5xl">🐌</span>
          </div>

          {/* Error code */}
          <h1 className="text-9xl font-bold text-orange-600 mb-4">429</h1>

          {/* Maki-style message */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              "¡Tranquilo, chaval! No fuerces la mano más de la cuenta"
            </h2>
            <p className="text-gray-700 text-lg">
              Estás haciendo demasiadas peticiones, colega.<br />
              <span className="text-sm text-gray-600 mt-2 block">
                Ni el Maki va tan rápido. ¡Tómate un respiro y vuelve en unos minutos!
              </span>
            </p>
          </div>

          {/* Explanation */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">¿Por qué pasa esto?</span>
            </p>
            <p className="mt-2 text-xs text-gray-600">
              Para proteger el sistema y mantener MakiSalida funcionando para todos, limitamos el número de peticiones.
              Es una medida de seguridad, no es nada personal. ¡El Maki lo entendería!
            </p>
          </div>

          {/* Action button */}
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-600 transition-all"
          >
            Volver al inicio
          </Link>

          {/* Footer message */}
          <p className="mt-6 text-xs text-gray-500 italic">
            "Las cosas buenas llevan tiempo. ¡Como el trabajo bien hecho!"
          </p>
        </div>
      </div>
    </div>
  );
}
