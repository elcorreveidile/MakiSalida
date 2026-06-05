import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://makisalida.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/familias', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/reinsercion', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/educativo', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/recursos', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/recursos/legal', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/recursos/laboral', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/recursos/psicologico', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/recursos/social', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/recursos/educativo', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/recursos/administrativo', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/ayudar', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/contacto', changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: '/aviso-legal', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/privacidad', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: '/cookies', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return staticPages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
