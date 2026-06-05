'use client';

import Link from 'next/link';
import { AuthNav } from '@/components/auth/AuthNav';

interface HeaderProps {
  showNav?: boolean;
}

export function Header({ showNav = true }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">ML</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">MakiLibre</span>
              <p className="text-xs text-gray-500 hidden sm:block">Hacia la libertad, con apoyo</p>
            </div>
          </Link>
          {showNav && (
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex space-x-6" aria-label="Navegación principal">
                <Link href="/familias" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  Familias
                </Link>
                <Link href="/reinsercion" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  Reinserción
                </Link>
                <Link href="/recursos" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  Recursos
                </Link>
                <Link href="/contacto" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  Contacto
                </Link>
              </nav>
              <AuthNav />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
