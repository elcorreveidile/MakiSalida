'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

type Tab = 'dashboard' | 'messages' | 'users' | 'professionals';

interface Stats {
  totalUsers: number;
  totalMessages: number;
  pendingMessages: number;
  totalProfessionals: number;
  pendingProfessionals: number;
  recentUsers: number;
}

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
  user?: { name: string | null; email: string };
}

interface User {
  id: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: string;
  _count: { contactMessages: number; forumPosts: number };
}

interface Professional {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  category: string;
  specialty: string | null;
  description: string;
  city: string;
  province: string | null;
  website: string | null;
  status: string;
  createdAt: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  ABOGADO: 'Abogado/a',
  TRABAJADOR_SOCIAL: 'Trabajador/a Social',
  PSICOLOGO: 'Psicólogo/a',
  EMPLEADOR: 'Empleador/a',
  EDUCADOR: 'Educador/a',
  ONG: 'ONG / Asociación',
  OTRO: 'Otro',
};

const STATUS_COLORS: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-800',
  READ: 'bg-blue-100 text-blue-800',
  REPLIED: 'bg-green-100 text-green-800',
  ARCHIVED: 'bg-gray-100 text-gray-800',
  APPROVED: 'bg-green-100 text-green-800',
  REJECTED: 'bg-red-100 text-red-800',
};

export function AdminDashboard({ adminEmail, adminRole }: { adminEmail: string; adminRole: string }) {
  const [tab, setTab] = useState<Tab>('dashboard');
  const [stats, setStats] = useState<Stats | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState(true);
  const [messageFilter, setMessageFilter] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [profFilter, setProfFilter] = useState('');
  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);
  const [showProfForm, setShowProfForm] = useState(false);

  const fetchStats = useCallback(async () => {
    const res = await fetch('/api/admin/stats');
    if (res.ok) setStats(await res.json());
  }, []);

  const fetchMessages = useCallback(async () => {
    const params = messageFilter ? `?status=${messageFilter}` : '';
    const res = await fetch(`/api/admin/messages${params}`);
    if (res.ok) {
      const data = await res.json();
      setMessages(data.messages);
    }
  }, [messageFilter]);

  const fetchUsers = useCallback(async () => {
    const params = userSearch ? `?search=${encodeURIComponent(userSearch)}` : '';
    const res = await fetch(`/api/admin/users${params}`);
    if (res.ok) {
      const data = await res.json();
      setUsers(data.users);
    }
  }, [userSearch]);

  const fetchProfessionals = useCallback(async () => {
    const params = profFilter ? `?status=${profFilter}` : '';
    const res = await fetch(`/api/admin/professionals${params}`);
    if (res.ok) {
      const data = await res.json();
      setProfessionals(data.professionals);
    }
  }, [profFilter]);

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      if (tab === 'dashboard') await fetchStats();
      if (tab === 'messages') await fetchMessages();
      if (tab === 'users') await fetchUsers();
      if (tab === 'professionals') await fetchProfessionals();
      setLoading(false);
    };
    load();
  }, [tab, fetchStats, fetchMessages, fetchUsers, fetchProfessionals]);

  async function updateMessageStatus(id: string, status: string) {
    await fetch('/api/admin/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    fetchMessages();
    fetchStats();
  }

  async function updateUserRole(id: string, role: string) {
    const res = await fetch('/api/admin/users', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, role }),
    });
    if (!res.ok) {
      const data = await res.json();
      alert(data.error);
      return;
    }
    fetchUsers();
  }

  async function updateProfessionalStatus(id: string, status: string) {
    await fetch('/api/admin/professionals', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    fetchProfessionals();
    fetchStats();
  }

  async function deleteProfessional(id: string) {
    if (!confirm('¿Eliminar este profesional?')) return;
    await fetch(`/api/admin/professionals?id=${id}`, { method: 'DELETE' });
    fetchProfessionals();
    fetchStats();
  }

  async function handleAddProfessional(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('/api/admin/professionals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setShowProfForm(false);
      form.reset();
      fetchProfessionals();
      fetchStats();
    } else {
      const err = await res.json();
      alert(err.error || 'Error al crear profesional');
    }
  }

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'messages', label: 'Mensajes', icon: '📨' },
    { key: 'users', label: 'Usuarios', icon: '👥' },
    { key: 'professionals', label: 'Profesionales', icon: '💼' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ML</span>
              </div>
              <span className="text-xl font-bold">MakiLibre</span>
            </Link>
            <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">ADMIN</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{adminEmail}</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded">{adminRole}</span>
            <Link href="/perfil" className="text-sm text-gray-400 hover:text-white">Mi perfil</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <nav className="flex gap-1 mb-8 bg-white rounded-lg shadow-sm p-1">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-4 py-3 rounded-md font-medium text-sm transition-colors ${
                tab === t.key
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{t.icon}</span>
              {t.label}
              {t.key === 'messages' && stats?.pendingMessages ? (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {stats.pendingMessages}
                </span>
              ) : null}
              {t.key === 'professionals' && stats?.pendingProfessionals ? (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {stats.pendingProfessionals}
                </span>
              ) : null}
            </button>
          ))}
        </nav>

        {loading ? (
          <div className="text-center py-20 text-gray-500">Cargando...</div>
        ) : (
          <>
            {/* Dashboard */}
            {tab === 'dashboard' && stats && (
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Panel de Administración</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <StatCard label="Usuarios totales" value={stats.totalUsers} icon="👥" />
                  <StatCard label="Nuevos (7 días)" value={stats.recentUsers} icon="🆕" color="green" />
                  <StatCard label="Mensajes totales" value={stats.totalMessages} icon="📨" />
                  <StatCard label="Mensajes pendientes" value={stats.pendingMessages} icon="⏳" color={stats.pendingMessages > 0 ? 'red' : 'green'} />
                  <StatCard label="Profesionales" value={stats.totalProfessionals} icon="💼" />
                  <StatCard label="Prof. pendientes" value={stats.pendingProfessionals} icon="📋" color={stats.pendingProfessionals > 0 ? 'yellow' : 'green'} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Acciones rápidas</h3>
                    <div className="space-y-3">
                      {stats.pendingMessages > 0 && (
                        <button
                          onClick={() => { setMessageFilter('PENDING'); setTab('messages'); }}
                          className="w-full text-left p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          <span className="font-semibold text-red-700">📨 {stats.pendingMessages} mensajes sin leer</span>
                        </button>
                      )}
                      {stats.pendingProfessionals > 0 && (
                        <button
                          onClick={() => { setProfFilter('PENDING'); setTab('professionals'); }}
                          className="w-full text-left p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
                        >
                          <span className="font-semibold text-yellow-700">💼 {stats.pendingProfessionals} profesionales por aprobar</span>
                        </button>
                      )}
                      <button
                        onClick={() => setTab('users')}
                        className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <span className="font-semibold text-gray-700">👥 Ver usuarios registrados</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Información del sistema</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><strong>Rol:</strong> {adminRole}</li>
                      <li><strong>Email:</strong> {adminEmail}</li>
                      <li><strong>Versión:</strong> v0.1.0</li>
                      <li><strong>Plataforma:</strong> MakiLibre</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            {tab === 'messages' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Mensajes de contacto</h1>
                  <select
                    value={messageFilter}
                    onChange={e => setMessageFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="">Todos</option>
                    <option value="PENDING">Pendientes</option>
                    <option value="READ">Leídos</option>
                    <option value="REPLIED">Respondidos</option>
                    <option value="ARCHIVED">Archivados</option>
                  </select>
                </div>

                {messages.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-sm p-12 text-center text-gray-500">
                    No hay mensajes {messageFilter ? `con estado "${messageFilter}"` : ''}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {messages.map(msg => (
                      <div key={msg.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <button
                          onClick={() => setExpandedMessage(expandedMessage === msg.id ? null : msg.id)}
                          className="w-full text-left p-4 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${STATUS_COLORS[msg.status]}`}>
                              {msg.status}
                            </span>
                            <div className="min-w-0">
                              <p className="font-semibold text-gray-900 truncate">{msg.subject}</p>
                              <p className="text-sm text-gray-500">{msg.name} &lt;{msg.email}&gt;</p>
                            </div>
                          </div>
                          <span className="text-sm text-gray-400 flex-shrink-0 ml-4">
                            {new Date(msg.createdAt).toLocaleDateString('es-ES')}
                          </span>
                        </button>
                        {expandedMessage === msg.id && (
                          <div className="px-4 pb-4 border-t border-gray-100">
                            <p className="text-gray-700 mt-3 whitespace-pre-wrap">{msg.message}</p>
                            <div className="flex gap-2 mt-4">
                              {msg.status !== 'READ' && (
                                <button
                                  onClick={() => updateMessageStatus(msg.id, 'READ')}
                                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium hover:bg-blue-200"
                                >
                                  Marcar leído
                                </button>
                              )}
                              {msg.status !== 'REPLIED' && (
                                <a
                                  href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                                  onClick={() => updateMessageStatus(msg.id, 'REPLIED')}
                                  className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-medium hover:bg-green-200"
                                >
                                  Responder por email
                                </a>
                              )}
                              {msg.status !== 'ARCHIVED' && (
                                <button
                                  onClick={() => updateMessageStatus(msg.id, 'ARCHIVED')}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium hover:bg-gray-200"
                                >
                                  Archivar
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Users */}
            {tab === 'users' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Usuarios registrados</h1>
                  <input
                    type="text"
                    placeholder="Buscar por email o nombre..."
                    value={userSearch}
                    onChange={e => setUserSearch(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64"
                  />
                </div>

                {users.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-sm p-12 text-center text-gray-500">
                    No hay usuarios {userSearch ? `que coincidan con "${userSearch}"` : 'registrados'}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Email</th>
                          <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Nombre</th>
                          <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Rol</th>
                          <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Mensajes</th>
                          <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Registro</th>
                          {adminRole === 'SUPERADMIN' && (
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Acciones</th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {users.map(u => (
                          <tr key={u.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm">{u.email}</td>
                            <td className="px-4 py-3 text-sm text-gray-600">{u.name || '—'}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                u.role === 'SUPERADMIN' ? 'bg-purple-100 text-purple-800' :
                                u.role === 'ADMIN' ? 'bg-amber-100 text-amber-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {u.role}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600">{u._count.contactMessages}</td>
                            <td className="px-4 py-3 text-sm text-gray-500">
                              {new Date(u.createdAt).toLocaleDateString('es-ES')}
                            </td>
                            {adminRole === 'SUPERADMIN' && (
                              <td className="px-4 py-3">
                                <select
                                  value={u.role}
                                  onChange={e => updateUserRole(u.id, e.target.value)}
                                  className="border border-gray-300 rounded px-2 py-1 text-xs"
                                >
                                  <option value="USER">USER</option>
                                  <option value="ADMIN">ADMIN</option>
                                  <option value="SUPERADMIN">SUPERADMIN</option>
                                </select>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Professionals */}
            {tab === 'professionals' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Profesionales</h1>
                  <div className="flex gap-3">
                    <select
                      value={profFilter}
                      onChange={e => setProfFilter(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">Todos</option>
                      <option value="PENDING">Pendientes</option>
                      <option value="APPROVED">Aprobados</option>
                      <option value="REJECTED">Rechazados</option>
                    </select>
                    <button
                      onClick={() => setShowProfForm(!showProfForm)}
                      className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      + Añadir profesional
                    </button>
                  </div>
                </div>

                {showProfForm && (
                  <form onSubmit={handleAddProfessional} className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-amber-200">
                    <h3 className="font-bold text-gray-900 mb-4">Nuevo profesional</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input name="name" required placeholder="Nombre completo *" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                      <input name="email" type="email" required placeholder="Email *" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                      <input name="phone" placeholder="Teléfono" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                      <select name="category" required className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                        <option value="">Categoría *</option>
                        {Object.entries(CATEGORY_LABELS).map(([k, v]) => (
                          <option key={k} value={k}>{v}</option>
                        ))}
                      </select>
                      <input name="specialty" placeholder="Especialidad" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                      <input name="city" required placeholder="Ciudad *" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                      <input name="province" placeholder="Provincia" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                      <input name="website" placeholder="Web (https://...)" className="border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <textarea name="description" required placeholder="Descripción del servicio *" rows={3} className="w-full mt-4 border border-gray-300 rounded-lg px-3 py-2 text-sm" />
                    <div className="flex gap-3 mt-4">
                      <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-colors">
                        Crear profesional
                      </button>
                      <button type="button" onClick={() => setShowProfForm(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm transition-colors">
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}

                {professionals.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-sm p-12 text-center text-gray-500">
                    No hay profesionales {profFilter ? `con estado "${profFilter}"` : 'registrados'}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {professionals.map(prof => (
                      <div key={prof.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-gray-900">{prof.name}</h3>
                              <span className={`px-2 py-0.5 rounded text-xs font-semibold ${STATUS_COLORS[prof.status]}`}>
                                {prof.status}
                              </span>
                              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-100 text-indigo-800">
                                {CATEGORY_LABELS[prof.category] || prof.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">
                              {prof.email} {prof.phone && `· ${prof.phone}`} · {prof.city}{prof.province && `, ${prof.province}`}
                            </p>
                            {prof.specialty && (
                              <p className="text-sm text-gray-500 mb-1">Especialidad: {prof.specialty}</p>
                            )}
                            <p className="text-sm text-gray-700 mt-2">{prof.description}</p>
                            {prof.website && (
                              <a href={prof.website} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 text-sm mt-1 inline-block">
                                🔗 {prof.website}
                              </a>
                            )}
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            {prof.status === 'PENDING' && (
                              <>
                                <button
                                  onClick={() => updateProfessionalStatus(prof.id, 'APPROVED')}
                                  className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium hover:bg-green-200"
                                >
                                  Aprobar
                                </button>
                                <button
                                  onClick={() => updateProfessionalStatus(prof.id, 'REJECTED')}
                                  className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-medium hover:bg-red-200"
                                >
                                  Rechazar
                                </button>
                              </>
                            )}
                            {prof.status === 'REJECTED' && (
                              <button
                                onClick={() => updateProfessionalStatus(prof.id, 'APPROVED')}
                                className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium hover:bg-green-200"
                              >
                                Aprobar
                              </button>
                            )}
                            {prof.status === 'APPROVED' && (
                              <button
                                onClick={() => updateProfessionalStatus(prof.id, 'REJECTED')}
                                className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-medium hover:bg-red-200"
                              >
                                Desactivar
                              </button>
                            )}
                            <button
                              onClick={() => deleteProfessional(prof.id)}
                              className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium hover:bg-gray-200"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          Registrado: {new Date(prof.createdAt).toLocaleDateString('es-ES')}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, color = 'default' }: { label: string; value: number; icon: string; color?: string }) {
  const bgColor = color === 'red' ? 'bg-red-50 border-red-200' :
                   color === 'green' ? 'bg-green-50 border-green-200' :
                   color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                   'bg-white border-gray-200';

  return (
    <div className={`rounded-lg shadow-sm p-6 border ${bgColor}`}>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
}
