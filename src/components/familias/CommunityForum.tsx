'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';

interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: number;
  category: 'general' | 'consejos' | 'recursos' | 'emocional';
}

export function CommunityForum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'MaríaG',
      content: '¿Alguien sabe cómo preparar los paquetes de ropa? Es la primera vez que voy a enviar.',
      timestamp: '2026-06-04T10:30:00',
      likes: 5,
      replies: 3,
      category: 'consejos'
    },
    {
      id: '2',
      author: 'JuanP',
      content: 'Comparto el listado de asociaciones de ayuda que me han sido muy útiles durante este proceso.',
      timestamp: '2026-06-03T15:45:00',
      likes: 12,
      replies: 7,
      category: 'recursos'
    },
    {
      id: '3',
      author: 'AnaM',
      content: 'Hoy es un día difícil. A veces siento que nadie entiende lo que pasamos. Gracias por estar aquí.',
      timestamp: '2026-06-02T20:15:00',
      likes: 18,
      replies: 12,
      category: 'emocional'
    }
  ]);

  const [newPost, setNewPost] = useState({
    content: '',
    category: 'general' as Post['category']
  });

  const getCategoryColor = (category: Post['category']) => {
    const colors = {
      general: 'bg-gray-100 text-gray-800',
      consejos: 'bg-blue-100 text-blue-800',
      recursos: 'bg-green-100 text-green-800',
      emocional: 'bg-purple-100 text-purple-800'
    };
    return colors[category];
  };

  const getCategoryLabel = (category: Post['category']) => {
    const labels = {
      general: 'General',
      consejos: 'Consejos',
      recursos: 'Recursos',
      emocional: 'Apoyo Emocional'
    };
    return labels[category];
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.content.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      author: 'Usuario',
      content: newPost.content,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: 0,
      category: newPost.category
    };

    setPosts([post, ...posts]);
    setNewPost({ content: '', category: 'general' });
  };

  return (
    <div className="space-y-6">
      {/* Crear nuevo post */}
      <Card>
        <CardHeader>
          <CardTitle>💬 Comparte tu Experiencia</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitPost}>
            <Textarea
              label="¿Qué quieres compartir?"
              placeholder="Escribe tu mensaje aquí... Recuerda ser respetuoso y considerado con otros familiares."
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              rows={4}
              maxLength={500}
            />
            <div className="flex justify-between items-center mt-4">
              <select
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value as Post['category'] })}
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="general">General</option>
                <option value="consejos">Consejos</option>
                <option value="recursos">Recursos</option>
                <option value="emocional">Apoyo Emocional</option>
              </select>
              <Button type="submit" disabled={!newPost.content.trim()}>
                Publicar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Lista de posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(post.timestamp).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{post.content}</p>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <button className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                  <span>❤️</span>
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                  <span>💬</span>
                  <span>{post.replies} respuestas</span>
                </button>
                <button className="hover:text-amber-600 transition-colors">
                  Compartir experiencia
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500 mb-4">Aún no hay publicaciones.</p>
            <p className="text-sm text-gray-600">
              Sé el primero en compartir tu experiencia con otros familiares.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
