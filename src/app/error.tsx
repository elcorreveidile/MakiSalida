'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('MakiLibre Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <div className="maki-card text-center">
          {/* Maki icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
            <span className="text-5xl">💥</span>
          </div>

          {/* Error code */}
          <h1 className="text-9xl font-bold text-red-600 mb-4">500</h1>

          {/* Maki-style message */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              "¡Hostia! Algo ha roto la cadena de suministro"
            </h2>
            <p className="text-gray-700 text-lg">
              Lo siento, colega, pero ha habido un error en el servidor.<br />
              <span className="text-sm text-gray-600 mt-2 block">
                Ni el Maki puede arreglar esto, ¡pero nuestros técnicos ya están en el caso!
              </span>
            </p>
          </div>

          {/* Technical info (sanitized) */}
          {error.digest && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Código de error:</span>{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">{error.digest}</code>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Este código nos ayuda a identificar el problema. No incluye información sensible.
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all"
            >
              Intentar de nuevo
            </button>
            <Link
              href="/"
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all"
            >
              Volver al inicio
            </Link>
          </div>

          {/* Footer message */}
          <p className="mt-6 text-xs text-gray-500 italic">
            "Hasta el Maki tiene días malos. ¡Vuelve a probar en unos minutos!"
          </p>
        </div>
      </div>
    </div>
  );
}
