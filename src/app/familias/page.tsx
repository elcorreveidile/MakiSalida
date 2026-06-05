'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CommunicationScheduler } from '@/components/familias/CommunicationScheduler';
import { VisitInfo } from '@/components/familias/VisitInfo';
import { CommunityForum } from '@/components/familias/CommunityForum';

export default function FamiliasPage() {
  const [activeTab, setActiveTab] = useState<'comunicaciones' | 'visitas' | 'comunidad'>('comunicaciones');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-10 shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-md">
                <span className="text-2xl sm:text-3xl">🚪</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">MakiSalida</h1>
                <p className="text-sm text-gray-600">Familias</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6" aria-label="Navegación principal">
              <Link href="/" className="text-base text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/familias" className="text-base text-amber-600 font-bold">
                Familias
              </Link>
              <Link href="/reinsercion" className="text-base text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Reinserción
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="sm:hidden">👨‍👩‍👧‍👦 </span>
                Módulo Familias
              </h2>
              <p className="text-base sm:text-lg text-amber-50 leading-relaxed">
                Gestiona comunicaciones, consulta información de visitas y conecta con otros familiares
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-5xl">👨‍👩‍👧‍👦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - Mobile Optimized */}
      <div className="bg-white border-b border-gray-300 sticky top-[72px] z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto" aria-label="Secciones del módulo">
            <button
              onClick={() => setActiveTab('comunicaciones')}
              className={`flex-1 min-w-max py-4 px-4 sm:px-6 border-b-3 font-bold text-base sm:text-lg transition-all whitespace-nowrap ${
                activeTab === 'comunicaciones'
                  ? 'border-amber-500 text-amber-600 bg-amber-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
              aria-pressed={activeTab === 'comunicaciones'}
            >
              <span className="sm:hidden mr-1">📅</span>
              <span className="hidden sm:inline mr-2">📅</span>
              Comunicaciones
            </button>
            <button
              onClick={() => setActiveTab('visitas')}
              className={`flex-1 min-w-max py-4 px-4 sm:px-6 border-b-3 font-bold text-base sm:text-lg transition-all whitespace-nowrap ${
                activeTab === 'visitas'
                  ? 'border-amber-500 text-amber-600 bg-amber-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
              aria-pressed={activeTab === 'visitas'}
            >
              <span className="sm:hidden mr-1">📋</span>
              <span className="hidden sm:inline mr-2">📋</span>
              Visitas
            </button>
            <button
              onClick={() => setActiveTab('comunidad')}
              className={`flex-1 min-w-max py-4 px-4 sm:px-6 border-b-3 font-bold text-base sm:text-lg transition-all whitespace-nowrap ${
                activeTab === 'comunidad'
                  ? 'border-amber-500 text-amber-600 bg-amber-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
              aria-pressed={activeTab === 'comunidad'}
            >
              <span className="sm:hidden mr-1">💬</span>
              <span className="hidden sm:inline mr-2">💬</span>
              Comunidad
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8" role="main">
        {activeTab === 'comunicaciones' && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Agenda de Comunicaciones
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Gestiona tus videollamadas, llamadas desde cabinas y visitas presenciales
              </p>
            </div>
            <CommunicationScheduler />
          </div>
        )}

        {activeTab === 'visitas' && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Información de Visitas
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Consulta qué puedes llevar, requisitos y próximos horarios de visita
              </p>
            </div>
            <VisitInfo />
          </div>
        )}

        {activeTab === 'comunidad' && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Comunidad de Familiares
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Comparte experiencias, pide consejo y apóyate mutuamente con otros familiares
              </p>
            </div>
            <CommunityForum />
          </div>
        )}
      </main>

      {/* Quick Actions Card - Mobile Optimized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-4">
            ⚡ Acciones Rápidas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-amber-500 text-gray-900 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all">
              📞 Programar Llamada
            </button>
            <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-amber-500 text-gray-900 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all">
              📅 Consultar Calendario
            </button>
            <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-amber-500 text-gray-900 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all">
              📖 Ver Guía de Visitas
            </button>
            <button className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-300 hover:border-amber-500 text-gray-900 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all">
              💬 Buscar Apoyo
            </button>
          </div>
        </div>
      </div>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-white border-t border-gray-300" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🚪</span>
              <span className="font-bold text-lg sm:text-xl text-gray-900">MakiSalida</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
              Apoyo a familias de internos penitenciarios
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
