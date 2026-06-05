'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Communication {
  id: string;
  type: 'video' | 'cabin' | 'visit';
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  center: string;
}

export function CommunicationScheduler() {
  const [communications, setCommunications] = useState<Communication[]>([
    {
      id: '1',
      type: 'video',
      date: '2026-06-10',
      time: '10:00',
      status: 'scheduled',
      center: 'Centro Penitenciario A'
    },
    {
      id: '2',
      type: 'cabin',
      date: '2026-06-05',
      time: '15:30',
      status: 'completed',
      center: 'Centro Penitenciario A'
    }
  ]);

  const getTypeLabel = (type: Communication['type']) => {
    const labels = {
      video: '📹 Videollamada',
      cabin: '📞 Cabina',
      visit: '👥 Visita presencial'
    };
    return labels[type];
  };

  const getStatusBadge = (status: Communication['status']) => {
    const badges = {
      scheduled: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    const labels = {
      scheduled: 'Programada',
      completed: 'Completada',
      cancelled: 'Cancelada'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>📅 Agenda de Comunicaciones</CardTitle>
          <Button size="sm">+ Nueva</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {communications.map((comm) => (
            <div
              key={comm.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold">{getTypeLabel(comm.type)}</span>
                  {getStatusBadge(comm.status)}
                </div>
                <div className="text-sm text-gray-600">
                  <p>📍 {comm.center}</p>
                  <p>📅 {new Date(comm.date).toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                  <p>⏰ {comm.time}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {comm.status === 'scheduled' && (
                  <>
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="danger" size="sm">Cancelar</Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {communications.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="mb-2">No hay comunicaciones programadas</p>
            <Button size="md">Programar primera comunicación</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
