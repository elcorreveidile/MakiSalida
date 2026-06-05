import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ScrollToTop } from '@/components/ScrollToTop';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MakiLibre - Apoyo a Internos y Familias',
  description: 'Plataforma integral para apoyo a internos penitenciarios y sus familias. Conexión, reinserción y nueva vida.',
  keywords: ['reinserción', 'penitenciario', 'familias', 'apoyo', 'derechos internos', 'recursos legales penitenciarios'],
  authors: [{ name: 'MakiLibre Team' }],
  creator: 'MakiLibre',
  publisher: 'MakiLibre',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://makilibre.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'MakiLibre',
    title: 'MakiLibre - Apoyo a Internos y Familias',
    description: 'Plataforma integral para apoyo a internos penitenciarios y sus familias. Conexión, reinserción y nueva vida.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MakiLibre - Apoyo a Internos y Familias',
    description: 'Plataforma integral para apoyo a internos penitenciarios y sus familias.',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Additional security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={inter.className}>
        {/* Skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Saltar al contenido principal
        </a>
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
