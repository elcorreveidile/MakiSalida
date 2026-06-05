import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <div className="maki-card text-center">
          {/* Maki icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
            <span className="text-5xl">🚭</span>
          </div>

          {/* Error code */}
          <h1 className="text-9xl font-bold text-amber-600 mb-4">404</h1>

          {/* Maki-style message */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              "¿Pero qué haces aquí, pejiguero?"
            </h2>
            <p className="text-gray-700 text-lg">
              Esta página no existe, como mi honestidad...<br />
              <span className="text-sm text-gray-600 mt-2 block">
                Pero tranquilo, que no es por falta de trying. ¡Busca bien y encontrarás lo que buscas!
              </span>
            </p>
          </div>

          {/* Suggestion */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Quizás buscabas:</span>
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="/" className="text-amber-600 hover:text-amber-700 underline">
                  La página principal
                </Link>
              </li>
              <li>
                <Link href="/familias" className="text-amber-600 hover:text-amber-700 underline">
                  El módulo de familias
                </Link>
              </li>
              <li>
                <Link href="/reinsercion" className="text-amber-600 hover:text-amber-700 underline">
                  El módulo de reinserción
                </Link>
              </li>
            </ul>
          </div>

          {/* Action button */}
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-600 transition-all"
          >
            Volver al inicio
          </Link>

          {/* Footer message */}
          <p className="mt-6 text-xs text-gray-500 italic">
            "El Maki no pierde tiempo, ¡y tú tampoco!"
          </p>
        </div>
      </div>
    </div>
  );
}
