'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface VisitInfo {
  id: string;
  center: string;
  nextVisitDate: string;
  allowedItems: string[];
  prohibitedItems: string[];
  requirements: string[];
}

export function VisitInfo() {
  const [visitInfo] = useState<VisitInfo>({
    id: '1',
    center: 'Centro Penitenciario A',
    nextVisitDate: '2026-06-15',
    allowedItems: [
      'Documentación de identidad (DNI, pasaporte)',
      'Ropa interior (máximo 3 juegos)',
      'Productos de higiene personal (abiertos)',
      'Medicación necesaria (con receta)',
      'Gafas o lentes de contacto'
    ],
    prohibitedItems: [
      'Dispositivos electrónicos (móviles, tablets)',
      'Alcohol o drogas',
      'Armas u objetos cortantes',
      'Documentación no autorizada',
      'Alimentos o bebidas',
      'Objetos de valor (joyas, relojes caros)',
      'Cámara de fotos o grabación'
    ],
    requirements: [
      'Llegar 30 minutos antes de la visita',
      'Presentar documentación válida',
      'Vestir de forma apropiada (no ropa provocativa)',
      'No portar objetos metálicos',
      'Seguir las instrucciones del personal',
      'Mantener comportamiento respetuoso'
    ]
  });

  return (
    <div className="space-y-6">
      {/* Próxima visita */}
      <Card>
        <CardHeader>
          <CardTitle>📅 Próxima Visita Programada</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="font-semibold text-lg mb-2">
              {visitInfo.center}
            </p>
            <p className="text-gray-700">
              📅 {new Date(visitInfo.nextVisitDate).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              ⏰ Horario: 09:00 - 14:00
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <Button variant="primary">📝 Añadir al calendario</Button>
            <Button variant="outline">ℹ️ Ver requisitos</Button>
          </div>
        </CardContent>
      </Card>

      {/* Qué llevar / No llevar */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Permitido */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">✅ Qué Puedes Llevar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {visitInfo.allowedItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Prohibido */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-700">❌ Qué NO Puedes Llevar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {visitInfo.prohibitedItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Requisitos */}
      <Card>
        <CardHeader>
          <CardTitle>📋 Requisitos Importantes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {visitInfo.requirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span className="text-sm text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">💡 Consejo:</span> Llega con tiempo de sobra.
              Los procedimientos de seguridad pueden tardar.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
