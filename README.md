# MakiSalida

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Plataforma web de apoyo a familias de internos penitenciarios**

MakiSalida proporciona recursos, información y herramientas para facilitar la reinserción social y el apoyo familiar durante y después de la privación de libertad.

---

## 📋 Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Funcionalidades Pendientes (Pre-Producción)](#funcionalidades-pendientes-pre-producción)
- [Sistema de PDFs](#sistema-de-pdfs)
- [Arquitectura de Cursos de Formación (Futuro)](#arquitectura-de-cursos-de-formación-futuro)
- [Variables de Entorno](#variables-de-entorno)
- [Instalación y Desarrollo](#instalación-y-desarrollo)
- [Despliegue en Producción](#despliegue-en-producción)
- [Consideraciones de Seguridad](#consideraciones-de-seguridad)
- [Recursos Externos y Referencias](#recursos-externos-y-referencias)

---

## Descripción del Proyecto

MakiSalida es una aplicación web construida con Next.js 16 que ofrece:

1. **Información legal penitenciaria**: Guías completas sobre derechos, permisos, recursos y procedimientos
2. **Recursos laborales**: Orientación para la búsqueda de empleo tras la salida de prisión
3. **Apoyo psicológico**: Información sobre salud mental y bienestar para familias e internos
4. **Trámites administrativos**: Guías paso a paso para burocracia penitenciaria
5. **Apoyo social**: Recursos y redes de apoyo
6. **Formación educativa**: Recursos educativos para internos y familiares
7. **Módulo de familias**: Gestor de comunicaciones, programación de llamadas y visitas
8. **Generación de documentos PDF**: Modelos de solicitudes y escritos legales descargables

El proyecto está enfocado en la **reinserción social** y el **apoyo familiar**, proporcionando información verificada y recursos oficiales del sistema penitenciario español.

---

## Tecnologías Utilizadas

### Frontend Core
- **Next.js 16.2.7** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Turbopack** - Bundler de próxima generación (habilitado por defecto en Next.js 16)

### Estilos
- **Tailwind CSS 4** - Framework de utilidades CSS
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad de navegadores

### Generación de PDFs
- **@react-pdf/renderer** - Generación de PDFs con componentes React

### Pagos (Futuro)
- **Stripe** - Procesamiento de pagos (ya integrado pero pendiente de activación)

### Hosting e Infraestructura
- **Vercel** - Plataforma de despliegue (recomendada para Next.js)
- **Node.js** - Entorno de ejecución

---

## Estructura del Proyecto

```
makisalida/
├── src/
│   ├── app/                          # App Router de Next.js
│   │   ├── (marketing)/              # Páginas públicas (home, sobre nosotros, etc.)
│   │   │   ├── page.tsx              # Homepage principal
│   │   │   ├── sobre-nosotros/       # Información sobre el proyecto
│   │   │   └── layout.tsx            # Layout compartido
│   │   ├── recursos/                 # Sección de recursos
│   │   │   ├── page.tsx              # Índice de recursos
│   │   │   ├── legal/                # Recursos legales
│   │   │   │   ├── page.tsx          # Página principal de recursos legales
│   │   │   │   └── guia-derechos-penitenciarios.html
│   │   │   ├── laboral/              # Recursos laborales
│   │   │   ├── psicologico/          # Recursos psicológicos
│   │   │   ├── administrativo/       # Recursos administrativos
│   │   │   ├── social/               # Recursos sociales
│   │   │   └── educativo/            # Recursos educativos
│   │   ├── familias/                 # Módulo de familias
│   │   │   └── page.tsx              # Gestor de comunicaciones y visitas
│   │   ├── ayudar/                   # Cómo ayudar/donar
│   │   ├── reinsercion/              # Guía de reinserción
│   │   ├── contacto/                 # Formulario de contacto
│   │   ├── privacidad/               # Política de privacidad (RGPD)
│   │   ├── aviso-legal/              # Aviso legal
│   │   ├── cookies/                  # Política de cookies
│   │   ├── api/                      # API Routes
│   │   │   ├── pdf/                  # Endpoints para generar PDFs
│   │   │   │   ├── guia-derechos/
│   │   │   │   ├── solicitud-permisos/
│   │   │   │   ├── queja-administrativa/
│   │   │   │   ├── solicitud-traslado/
│   │   │   │   ├── recurso-sanciones/
│   │   │   │   ├── libertad-condicional/
│   │   │   │   └── peticion-3er-grado/
│   │   │   └── (stripe)/             # Webhooks de Stripe (pendiente activación)
│   │   ├── layout.tsx                # Layout raíz
│   │   └── globals.css               # Estilos globales
│   ├── components/                   # Componentes React reutilizables
│   │   ├── Footer.tsx               # Footer con enlaces legales
│   │   ├── Header.tsx                # Header de navegación
│   │   └── (otros componentes)
│   ├── lib/                          # Utilidades y bibliotecas
│   │   ├── pdf-documents/           # Componentes de PDF
│   │   │   ├── styles.ts            # Estilos globales para PDFs
│   │   │   └── legal/               # Documentos legales
│   │   │       ├── GuiaDerechos.tsx
│   │   │       ├── SolicitudPermisos.tsx
│   │   │       ├── QuejaAdministrativa.tsx
│   │   │       ├── SolicitudTraslado.tsx
│   │   │       ├── RecursoSanciones.tsx
│   │   │       ├── LibertadCondicional.tsx
│   │   │       └── Peticion3erGrado.tsx
│   │   └── utils.ts                 # Funciones utilitarias
│   └── middleware.ts                 # Middleware de Next.js (protección de rutas)
├── public/                           # Archivos estáticos
│   ├── recursos/legal/              # Versiones HTML de documentos legales
│   └── (otros estáticos)
├── .env.local                       # Variables de entorno (NO committed)
├── .env.example                     # Ejemplo de variables de entorno
├── next.config.ts                   # Configuración de Next.js
├── tailwind.config.ts              # Configuración de Tailwind
├── package.json                     # Dependencias
├── tsconfig.json                   # Configuración de TypeScript
└── README.md                       # Este archivo
```

---

## Funcionalidades Implementadas

### ✅ 1. Sistema de Recursos Legales

**Ubicación**: `/recursos/legal`

**Características**:
- Guía completa de derechos penitenciarios (7 páginas PDF)
- 6 modelos de solicitudes descargables:
  - Solicitud de permisos de salida
  - Queja administrativa
  - Solicitud de traslado de centro
  - Recurso contra sanciones disciplinarias
  - Solicitud de libertad condicional
  - Petición de 3er grado
- Directorio de Colegios de Abogados (futura plataforma de publicidad para abogados)
- Enlaces a instituciones oficiales (BOE, Instituciones Penitenciarias, etc.)
- Información sobre beneficios penitenciarios

**Archivos clave**:
- `src/app/recursos/legal/page.tsx`
- `src/lib/pdf-documents/legal/*.tsx`
- `src/app/api/pdf/*/route.ts`

### ✅ 2. Recursos por Categorías

Seis secciones de recursos especializados:

**a) Laboral** (`/recursos/laboral`):
- Guía de búsqueda de empleo con antecedentes
- Cómo explicar antecedentes penales en entrevistas
- Programas de formación profesional (SEPE)
- Directorio de empresas que contratan con antecedentes
- Enlaces a servicios públicos de empleo (SEPE, RedTrabaja)
- Historias de éxito laboral

**b) Psicológico** (`/recursos/psicologico`):
- Recursos de salud mental para internos y familiares
- Guía de afrontamiento durante la privación de libertad
- Lista de psicólogos y terapeutas especializados
- Líneas de ayuda y prevención del suicidio

**c) Administrativo** (`/recursos/administrativo`):
- Guías de trámites burocráticos
- Documentación necesaria para cada tramite
- Calendario de plazos y fechas importantes
- Enlaces a servicios administrativos oficiales

**d) Social** (`/recursos/social`):
- Recursos de inserción social
- Asociaciones y ONGs de apoyo
- Programas de acompañamiento
- Redes de apoyo mutuo

**e) Educativo** (`/recursos/educativo`):
- Recursos educativos para internos
- Programas de formación en prisión
- Cursos online y certificaciones
- Becas y ayudas

### ✅ 3. Módulo de Familias

**Ubicación**: `/familias`

**Características**:
- Calendario de comunicaciones y visitas
- Programador de llamadas
- Gestión de permisos y salidas
- Comunidad de apoyo para familiares
- Foro de preguntas y respuestas (pendiente implementación)

**Acciones rápidas disponibles**:
- 📞 Programar Llamada
- 📅 Consultar Calendario
- 📖 Ver Guía de Visitas
- 💬 Buscar Apoyo

### ✅ 4. Generación de PDFs

**Sistema implementado**: `@react-pdf/renderer`

**PDFs disponibles**:
1. Guía de derechos penitenciarios (7 páginas)
2. Solicitud de permisos de salida
3. Queja administrativa
4. Solicitud de traslado
5. Recurso contra sanciones
6. Solicitud de libertad condicional
7. Petición de 3er grado

**Arquitectura**:
```
Componente PDF (React) → API Route → PDF Buffer → Descarga del usuario
```

**Ejemplo de uso**:
```typescript
// API Route: /api/pdf/guia-derechos
import { renderToBuffer } from '@react-pdf/renderer';
import GuiaDerechosPDF from '@/lib/pdf-documents/legal/GuiaDerechos';

export async function GET() {
  const pdfBuffer = await renderToBuffer(GuiaDerechosPDF());
  return new NextResponse(pdfBuffer, {
    headers: { 'Content-Type': 'application/pdf' }
  });
}
```

**Estilos globales de PDF**:
- Colores de marca MakiSalida (#d97706 amber-600)
- Logo basado en texto "MS" (compatibilidad con @react-pdf/renderer)
- Tipografía Helvetica (compatible con todos los visores PDF)
- Layout A4 estándar

### ✅ 5. Cumplimiento RGPD

**Páginas legales**:
- `/privacidad` - Política de privacidad completa
- `/aviso-legal` - Limitación de responsabilidad
- `/cookies` - Política de cookies

**Footer legal**:
- Incluye enlaces a todas las páginas legales
- Año de copyright dinámico
- Información de contacto

**Protección de datos**:
- Sin cookies de seguimiento sin consentimiento
- Sin recopilación de datos personales sin consentimiento explícito
- Derechos ARCO explicados (Acceso, Rectificación, Cancelación, Oposición)

### ✅ 6. Navegación y UX

**Características UX**:
- Breadcrumbs en páginas interiores
- Navegación intuitiva por categorías
- Enlaces externos con `target="_blank" rel="noopener noreferrer"`
- Diseño responsive (mobile-first)
- Colores de accesibilidad (WCAG AA compliant)
- Iconos emoji como marcadores visuales

---

## Funcionalidades Pendientes (Pre-Producción)

### 🔴 CRÍTICAS (Bloqueantes para producción)

#### 1. Sistema de Autenticación
**Estado**: ❌ NO IMPLEMENTADO

**Necesidad**:
- Protección de rutas administrativas
- Acceso de usuarios a área personal
- Gestión de perfil de usuario

**Opciones recomendadas**:
- **Clerk** (integración nativa con Vercel)
- **Auth0**
- **NextAuth.js** (open source)

**Implementación sugerida**:
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  if (!token && request.nextUrl.pathname.startsWith('/familias')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

#### 2. Base de Datos
**Estado**: ❌ NO IMPLEMENTADA

**Necesidad**:
- Persistencia de datos de usuarios
- Guardar calendarios de comunicaciones
- Almacenar progreso de cursos (futuro)
- Registrar contactos y mensajes

**Opciones recomendadas**:
- **Supabase** (PostgreSQL + Auth + Storage)
- **Neon** (PostgreSQL serverless)
- **Vercel Postgres** (integración nativa)
- **PlanetScale** (MySQL serverless)

**Esquema sugerido**:
```sql
-- Usuarios
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'user', -- 'user' | 'admin'
  created_at TIMESTAMP DEFAULT NOW()
);

-- Calendarios de comunicaciones
CREATE TABLE communication_calendars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  inmate_name TEXT NOT NULL,
  center_id TEXT,
  next_communication DATE,
  communication_type TEXT, -- 'visita' | 'llamada' | 'permiso'
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Progreso de cursos (futuro)
CREATE TABLE course_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  course_id UUID REFERENCES courses(id),
  completed_lessons TEXT[],
  progress_percentage INTEGER,
  last_accessed TIMESTAMP,
  certificate_issued BOOLEAN DEFAULT FALSE
);
```

#### 3. Sistema de Pagos
**Estado**: ⚠️ PARCIALMENTE IMPLEMENTADO

**Lo que falta**:
- Conectar Stripe con productos reales
- Crear página de checkout
- Implementar webhooks de Stripe
- Gestionar suscripciones

**Archivos Stripe existentes**:
- `src/app/api/stripe/webhook/route.ts` (webhook implementado)
- Suscripciones ya mencionadas en el código

**Pasos para completar**:
1. Crear productos en Stripe Dashboard:
   - "Donación única"
   - "Suscripción mensual"
   - "Curso premium" (futuro)
2. Implementar checkout page
3. Configurar webhooks en Stripe Dashboard
4. Probar flujo completo en modo test

#### 4. Formularios Funcionales
**Estado**: ⚠️ PARCIALMENTE IMPLEMENTADO

**Pendiente**:
- Backend para formulario de contacto (`/contacto`)
- Sistema de envío de emails
- Validación de formularios
- Rate limiting para prevenir spam

**Implementación sugerida**:
```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // Validar con Zod
  // Enviar email con Resend/SendGrid
  // Guardar en base de datos
  return NextResponse.json({ success: true });
}
```

### 🟡 IMPORTANTES (Necesarias para buen funcionamiento)

#### 5. Optimización SEO
**Estado**: ⚠️ PARCIALMENTE IMPLEMENTADO

**Pendiente**:
- Meta tags completos en todas las páginas
- Sitemap.xml
- Robots.txt
- Open Graph tags para redes sociales
- Schema markup (JSON-LD)

**Ejemplo de implementación**:
```typescript
// src/app/layout.tsx
export const metadata = {
  title: 'MakiSalida - Recursos para familias de internos',
  description: 'Apoyo, información y recursos para familias de personas privadas de libertad',
  openGraph: {
    title: 'MakiSalida',
    description: '...',
    images: ['/og-image.jpg'],
  },
};
```

#### 6. Testing
**Estado**: ❌ NO IMPLEMENTADO

**Necesidad**:
- Tests unitarios para componentes críticos
- Tests E2E para flujos principales
- Tests de API routes
- Tests de generación de PDFs

**Herramientas sugeridas**:
- **Jest** + **React Testing Library** (unitarios)
- **Playwright** o **Cypress** (E2E)

#### 7. Monitoring y Analytics
**Estado**: ❌ NO IMPLEMENTADO

**Sugerido**:
- **Vercel Analytics** (gratis en Vercel)
- **Sentry** (error tracking)
- **Google Analytics 4** (opcional, respetando privacidad)

### 🟢 DESEABLES (Mejoras post-producción)

#### 8. Sistema de Buscador
**Estado**: ❌ NO IMPLEMENTADO

**Sugerido**:
- Algolia DocSearch (documentación)
- Buscador interno conFuse.js

#### 9. Internacionalización (i18n)
**Estado**: ❌ NO IMPLEMENTADO

**Sugerencia**: Next.js i18n para traducir a:
- Inglés
- Francés
- Árabe (alta demanda)

#### 10. PWA (Progressive Web App)
**Estado**: ❌ NO IMPLEMENTADO

**Beneficios**:
- Instalable en móviles
- Funciona offline parcialmente
- Notificaciones push (futuro)

---

## Sistema de PDFs

### Arquitectura Actual

El sistema de generación de PDFs utiliza **@react-pdf/renderer**, lo que permite:

1. **Componentes React como PDFs**: Cada PDF es un componente React
2. **Tipado TypeScript**: Total seguridad de tipos
3. **Estilos globales reutilizables**: Marca consistente
4. **Generación on-demand**: No se almacenan PDFs estáticos

### Flujo de Generación

```
Usuario hace clic en "Descargar PDF"
  → Request a /api/pdf/[documento]
  → renderToBuffer(PDFComponent())
  → PDF Buffer
  → Response con Content-Type: application/pdf
  → Navegador descarga el archivo
```

### Crear un Nuevo PDF

**1. Crear el componente**:

```typescript
// src/lib/pdf-documents/legal/NuevoDocumento.tsx
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import createStyles, { colors } from '../styles';

const styles = createStyles();

const FormHeader = () => (
  <View style={styles.header}>
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <View style={{
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
      }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.white }}>MS</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary }}>
          MakiSalida
        </Text>
        <Text style={{ fontSize: 9, color: colors.textLight }}>
          Recursos para familias de internos
        </Text>
      </View>
    </View>
    <Text style={styles.headerTitle}>TÍTULO DEL DOCUMENTO</Text>
  </View>
);

export const NuevoDocumentoPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <FormHeader />
      {/* Contenido del documento */}
    </Page>
  </Document>
);

export default NuevoDocumentoPDF;
```

**2. Crear la API route**:

```typescript
// src/app/api/pdf/nuevo-documento/route.ts
import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import NuevoDocumentoPDF from '@/lib/pdf-documents/legal/NuevoDocumento';

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(NuevoDocumentoPDF());

    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="nuevo-documento-makisalida.pdf"');
    headers.set('Cache-Control', 'public, max-age=31536000');

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error generando PDF:', error);
    return NextResponse.json(
      { error: 'Error generando el PDF' },
      { status: 500 }
    );
  }
}
```

**3. Añadir enlace en la página**:

```typescript
<a
  href="/api/pdf/nuevo-documento"
  className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
>
  📥 Descargar documento (PDF)
</a>
```

### Estilos Globales Disponibles

**Colores**:
```typescript
colors = {
  primary: '#d97706',      // amber-600
  primaryLight: '#fbbf24', // amber-400
  primaryDark: '#92400e',  // amber-800
  secondary: '#f59e0b',    // amber-500
  text: '#1f2937',
  textLight: '#6b7280',
  white: '#ffffff',
  light: '#fef3c7',
  // ...
}
```

**Componentes de estilo**:
```typescript
styles = {
  page: Padding y márgenes de página
  header: Header con logo y título
  section: Secciones con borde inferior
  formField: Campos de formulario
  formLabel: Etiquetas de formulario
  formInput: Inputs (líneas)
  formTextarea: Áreas de texto
  infoBox: Caja de información
  warningBox: Caja de advertencias
  successBox: Caja de éxito
  highlightBox: Caja destacada
  signatureBox: Caja de firma
  listItem: Estilo de lista
  // ...
}
```

### Consideraciones Importantes

1. **NO usar emojis**: `@react-pdf/renderer` no soporta emojis nativamente
   - ✅ `<Text>MS</Text>`
   - ❌ `<Text>🚪</Text>`

2. **Tipografía**: Usar Helvetica (fuente por defecto, compatible con todos los visores)

3. **Layout**: Respetar márgenes de 40px para A4

4. **Multi-página**: Para documentos de varias páginas:
```typescript
export const MultiPagePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <FormHeader />
      {/* Página 1 */}
    </Page>
    <Page size="A4" style={styles.page}>
      {/* Página 2 */}
    </Page>
  </Document>
);
```

---

## Arquitectura de Cursos de Formación (Futuro)

### Visión General

El sistema de cursos permitirá a MakiSalida ofrecer formación online para:

1. **Internos**: Formación profesional durante y después de la privación de libertad
2. **Familiares**: Cursos de apoyo, gestión emocional, comprensión del sistema
3. **Profesionales**: Formación para trabajadores de instituciones penitenciarias
4. **General**: Cursos sobre derechos legales, reinserción, etc.

### Arquitectura Propuesta

#### 1. Base de Datos - Cursos

```sql
-- Cursos
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT, -- 'laboral', 'legal', 'psicologico', etc.
  level TEXT, -- 'basico', 'intermedio', 'avanzado'
  price INTEGER DEFAULT 0, -- 0 = gratuito
  duration_minutes INTEGER,
  thumbnail_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Lecciones
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  title TEXT NOT NULL,
  content TEXT, -- Markdown o JSON
  video_url TEXT, -- URL del video (si aplica)
  duration_minutes INTEGER,
  order_index INTEGER NOT NULL,
  is_free BOOLEAN DEFAULT FALSE, -- Primera lección gratis (marketing)
  created_at TIMESTAMP DEFAULT NOW()
);

-- Progreso de usuarios
CREATE TABLE course_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  course_id UUID REFERENCES courses(id),
  completed_lessons UUID[], -- Array de lesson IDs completados
  current_lesson_id UUID REFERENCES lessons(id),
  progress_percentage INTEGER,
  last_accessed TIMESTAMP DEFAULT NOW(),
  certificate_issued BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP
);

-- Certificados
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  course_id UUID REFERENCES courses(id),
  issued_at TIMESTAMP DEFAULT NOW(),
  certificate_url TEXT, -- PDF del certificado
  verification_code TEXT UNIQUE -- Para validar certificados externamente
);
```

#### 2. Generación de Certificados PDF

El sistema existente de PDFs se extenderá para generar certificados:

```typescript
// src/lib/pdf-documents/courses/Certificate.tsx
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { styles } from '../styles';

interface CertificateProps {
  studentName: string;
  courseName: string;
  completionDate: Date;
  verificationCode: string;
}

export const CertificatePDF = ({
  studentName,
  courseName,
  completionDate,
  verificationCode
}: CertificateProps) => (
  <Document>
    <Page size="A4" style={styles.certificatePage}>
      <View style={styles.certificateHeader}>
        <Text style={styles.certificateTitle}>CERTIFICADO DE COMPLETUD</Text>
        <Text style={styles.certificateSubtitle}>MakiSalida</Text>
      </View>

      <View style={styles.certificateBody}>
        <Text style={styles.certificationText}>
          Certifica que
        </Text>
        <Text style={styles.studentName}>{studentName}</Text>
        <Text style={styles.certificationText}>
          ha completado satisfactoriamente el curso
        </Text>
        <Text style={styles.courseName}>{courseName}</Text>
        <Text style={styles.dateText}>
          {completionDate.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>

      <View style={styles.certificateFooter}>
        <Text style={styles.verificationCode}>
          Código de verificación: {verificationCode}
        </Text>
        <Text style={styles.verifyText}>
          Validar en: makisalida.es/validar/{verificationCode}
        </Text>
      </View>
    </Page>
  </Document>
);
```

#### 3. API Route - Generación de Certificado

```typescript
// src/app/api/courses/certificate/route.ts
import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { CertificatePDF } from '@/lib/pdf-documents/courses/Certificate';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  const { userId, courseId } = await request.json();

  // Verificar que el usuario completó el curso
  const progress = await db.courseProgress.findFirst({
    where: { userId, courseId, certificateIssued: true }
  });

  if (!progress) {
    return NextResponse.json({ error: 'Curso no completado' }, { status: 403 });
  }

  // Generar código de verificación único
  const verificationCode = `${userId.slice(0, 8)}-${courseId.slice(0, 8)}-${Date.now()}`;

  // Obtener datos del usuario y curso
  const [user, course] = await Promise.all([
    db.user.findUnique({ where: { id: userId } }),
    db.course.findUnique({ where: { id: courseId } })
  ]);

  // Generar PDF
  const pdfBuffer = await renderToBuffer(
    CertificatePDF({
      studentName: user.name,
      courseName: course.title,
      completionDate: progress.completedAt,
      verificationCode
    })
  );

  // Guardar código en base de datos
  await db.certificate.create({
    data: {
      userId,
      courseId,
      verificationCode,
      certificateUrl: null // Se sube a storage externo si se desea
    }
  });

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="certificado-${course.title}.pdf"`
    }
  });
}
```

#### 4. Páginas de Cursos

**Estructura de URLs**:
- `/cursos` - Catálogo de cursos
- `/cursos/[id]` - Página del curso
- `/cursos/[id]/lecciones/[lessonId]` - Lección individual
- `/cursos/[id]/progreso` - Panel de progreso del alumno
- `/validar/[code]` - Validación de certificados

**Ejemplo de página de curso**:

```typescript
// src/app/cursos/[id]/page.tsx
import { db } from '@/lib/db';
import { CoursePlayer } from '@/components/CoursePlayer';
import { CourseProgress } from '@/components/CourseProgress';

export default async function CoursePage({ params }: { params: { id: string } }) {
  const course = await db.course.findUnique({
    where: { id: params.id },
    include: {
      lessons: { orderBy: { orderIndex: 'asc' } }
    }
  });

  const user = await getCurrentUser();
  const progress = user ? await db.courseProgress.findUnique({
    where: {
      userId_courseId: { userId: user.id, courseId: params.id }
    }
  }) : null;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <CoursePlayer
        course={course}
        progress={progress}
      />

      <CourseProgress progress={progress} />
    </div>
  );
}
```

#### 5. Integración con Pagos

Para cursos de pago, integrar con Stripe:

```typescript
// src/app/api/courses/checkout/route.ts
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  const { courseId, userId } = await request.json();

  const course = await db.course.findUnique({ where: { id: courseId } });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: { name: course.title },
        unit_amount: course.price * 100, // En céntimos
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/cursos/${courseId}?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cursos/${courseId}?canceled=true`,
    metadata: { userId, courseId }
  });

  return NextResponse.json({ sessionId: session.id });
}
```

#### 6. Video Hosting

**Opciones**:
- **Vimeo** (privacidad por dominio, analíticas)
- **Mux** (video hosting con analíticas)
- **AWS CloudFront** (s3 + CDN)

**Ejemplo con Vimeo**:
```typescript
// Componente de lección de video
export function VideoLesson({ vimeoId }: { vimeoId: string }) {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
```

### Ventajas de esta Arquitectura

1. **Escalabilidad**: El sistema de PDFs ya existe, solo se extiende
2. **Tipado seguro**: TypeScript en toda la stack
3. **Offline-first**: Los PDFs se generan on-demand
4. **Verificación**: Los certificados son verificables externamente
5. **Monetización**: Integración directa con Stripe existente
6. **Progresivo**: Se puede empezar con cursos gratuitos y añadir pago después

---

## Variables de Entorno

### Archivo `.env.local` (NO committed)

```bash
# Database (cuando se implemente)
DATABASE_URL="postgresql://user:password@host:5432/makisalida"

# Authentication (cuando se implemente)
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe (ya parcialmente implementado)
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email (para formularios)
RESEND_API_KEY="re_..." # o SendGrid API key

# Analytics (opcional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# App URL
NEXT_PUBLIC_URL="http://localhost:3000" # Cambiar a dominio real en producción
```

### Archivo `.env.example` (committed)

```bash
# Copy this file to .env.local and fill in the values

# Database
DATABASE_URL="postgresql://user:password@host:5432/makisalida"

# Authentication
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email
RESEND_API_KEY="re_..."

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# App URL
NEXT_PUBLIC_URL="http://localhost:3000"
```

---

## Instalación y Desarrollo

### Requisitos Previos

- **Node.js**: 18.x o superior
- **npm** o **yarn** o **pnpm**
- **Git**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/elcorreveidile/MakiSalida.git
cd MakiSalida

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
```

El servidor estará disponible en `http://localhost:3000`

**Nota**: Next.js 16 usa **Turbopack** por defecto, que es significativamente más rápido que Webpack.

### Build de Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

### Linting

```bash
# Ejecutar ESLint
npm run lint
```

### Type Checking

```bash
# Verificar tipos de TypeScript
npm run type-check
```

---

## Despliegue en Producción

### Opción 1: Vercel (Recomendado)

**Ventajas**:
- Integración nativa con Next.js
- Deploy automático desde Git
- CDN global
- Analytics gratis
- Edge functions

**Pasos**:

1. **Conectar repositorio a Vercel**:
   - Ir a [vercel.com](https://vercel.com)
   - Importar repositorio GitHub
   - Vercel detectará automáticamente Next.js

2. **Configurar variables de entorno**:
   En Vercel Dashboard → Settings → Environment Variables:
   ```
   DATABASE_URL
   NEXTAUTH_SECRET
   STRIPE_SECRET_KEY
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   STRIPE_WEBHOOK_SECRET
   RESEND_API_KEY
   NEXT_PUBLIC_URL=https://tu-dominio.com
   ```

3. **Deploy**:
   ```bash
   # Vercel hace deploy automático en cada push a main
   git push origin main
   ```

4. **Configurar dominio personalizado**:
   - Vercel Dashboard → Settings → Domains
   - Añadir dominio (ej: `makisalida.es`)
   - Configurar DNS según instrucciones de Vercel

### Opción 2: Docker

**Dockerfile** (crear en raíz):

```dockerfile
FROM node:18-alpine AS base

# Dependencias
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**docker-compose.yml**:

```yaml
version: '3.8'

services:
  makisalida:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
      - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      - STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK_SECRET}
      - RESEND_API_KEY=${RESEND_API_KEY}
      - NEXT_PUBLIC_URL=${NEXT_PUBLIC_URL}
```

**Ejecutar**:

```bash
docker-compose up -d
```

### Opción 3: VPS/Cloud (DigitalOcean, AWS, etc.)

1. **Configurar servidor**:
   ```bash
   # Instalar Node.js en el servidor
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Clonar repositorio
   git clone https://github.com/elcorreveidile/MakiSalida.git
   cd MakiSalida

   # Instalar dependencias
   npm install --production

   # Build
   npm run build
   ```

2. **Usar PM2 para proceso**:
   ```bash
   # Instalar PM2 globalmente
   npm install -g pm2

   # Iniciar app
   pm2 start npm --name "makisalida" -- start

   # Guardar configuración
   pm2 save
   pm2 startup
   ```

3. **Configurar Nginx como reverse proxy**:

```nginx
# /etc/nginx/sites-available/makisalida
server {
    listen 80;
    server_name makisalida.es www.makisalida.es;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **SSL con Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d makisalida.es -d www.makisalida.es
   ```

---

## Consideraciones de Seguridad

### 1. Variables de Entorno Sensibles

- **NUNCA** commitear `.env.local`
- Añadir `.env.local` a `.gitignore` (ya está hecho)
- Usar diferentes claves para desarrollo y producción

### 2. Headers de Seguridad

**Añadir en `next.config.ts`**:

```typescript
const nextConfig = {
  // ... config existente

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
```

### 3. Protección de Rutas

**Implementar middleware** (`src/middleware.ts`):

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas protegidas
const protectedRoutes = ['/familias', '/cursos', '/perfil'];
const adminRoutes = ['/admin'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Verificar rutas protegidas
  if (protectedRoutes.some(path => pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Verificar rutas de admin
  if (adminRoutes.some(path => pathname.startsWith(path))) {
    const userRole = request.cookies.get('role')?.value;
    if (userRole !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

### 4. Rate Limiting

Para API routes, usar `upstash/ratelimit` o implementar manual:

```typescript
// src/lib/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

// En API route
const { success } = await ratelimit.limit(userId);
if (!success) {
  return new Response("Too many requests", { status: 429 });
}
```

### 5. Sanitización de Inputs

```typescript
// Usar biblioteca como 'validator' o 'zod'
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

// Validar
const result = contactSchema.safeParse(body);
if (!result.success) {
  return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
}
```

### 6. Configuración de CSP (Content Security Policy)

**Usar `next-secure-headers`**:

```typescript
import { getCSP } from 'next-secure-headers';

const securityHeaders = {
  'Content-Security-Policy': getCSP({
    'default-src': "'self'",
    'img-src': ["'self'", 'data:', 'https://makisalida.es'],
    'script-src': ["'self'", 'unsafe-inline'],
    'style-src': ["'self'", 'unsafe-inline'],
  }),
};
```

---

## Recursos Externos y Referencias

### Documentación Oficial

- **Instituciones Penitenciarias**: https://www.institucionpenitenciaria.es
- **BOE - Centro Documental**: https://www.boe.es/buscar/act.php
- **SEPE - Servicio Público de Empleo**: https://www.sepe.es
- **RedTrabaja - Servicios Autonómicos**: https://www.redtrabaja.gob.es
- **Guía del Usuario Penitenciario**: https://www.institucionpenitenciaria.es/web/services/documentacion.html

### Referencias Legales

- **Reglamento Penitenciario** (RD 190/1996): https://www.boe.es/buscar/act.php?id=BOE-A-1996-4190
- **Código Penal** (Artículos 90-92): https://www.boe.es/buscar/act.php?id=BOE-A-1995-25445
- **Ley Orgánica 1/1979** (General Penitenciaria): https://www.boe.es/buscar/act.php?id=BOE-A-1979-14502

### Colegios de Abogados

Referenciados en `/recursos/legal`:
- **ICAM (Madrid)**: https://icam.es
- **ICAB (Barcelona)**: https://icab.cat
- **ICA Sevilla**: https://icasevilla.es
- Otros colegios provinciales disponibles en directorio

### Directorio de Recursos

- **ONGs de reinserción**: Listado en `/recursos/social`
- **Centros de inserción**: Disponibles por provincia
- **Empresas colaboradoras**: Directorio en `/recursos/laboral`

---

## Continuar el Proyecto

Para otro agente que continúe este proyecto:

### 1. Configurar Entorno

```bash
# Clonar repositorio
git clone https://github.com/elcorreveidile/MakiSalida.git
cd MakiSalida

# Copiar variables de entorno
cp .env.example .env.local

# Editar .env.local con valores reales
nano .env.local
```

### 2. Prioridades (Orden Sugerido)

1. **Implementar autenticación** (Bloqueante)
   - Elegir entre Clerk, Auth0, o NextAuth
   - Proteger rutas de `/familias`
   - Crear páginas de login/registro

2. **Implementar base de datos** (Bloqueante)
   - Elegir Supabase, Neon, o Vercel Postgres
   - Crear esquemas de usuarios y progresos
   - Migrar datos iniciales

3. **Completar sistema de pagos**
   - Configurar productos en Stripe
   - Crear página de checkout
   - Probar webhooks

4. **Formularios funcionales**
   - Backend para contacto
   - Sistema de emails (Resend/SendGrid)
   - Validación

5. **Optimización SEO**
   - Meta tags completos
   - Sitemap.xml
   - Open Graph

### 3. Tests Antes de Producción

**Checklist**:

- [ ] Todos los PDFs se generan correctamente
- [ ] Todos los enlaces funcionan (no dead links)
- [ ] Formularios envían datos correctamente
- [ ] Autenticación funciona (login/logout)
- [ ] Base de datos persiste datos
- [ ] Pagos de Stripe funcionan en modo test
- [ ] Webhooks de Stripe reciben confirmaciones
- [ ] SEO: meta tags en todas las páginas
- [ ] Responsive design funciona en móvil
- [ ] RGPD: todas las páginas legales accesibles
- [ ] Performance: Lighthouse score > 90
- [ ] Accessibility: WCAG AA compliant
- [ ] Security: headers configurados
- [ ] Variables de entorno configuradas en producción

### 4. Monitorización Post-Producción

- [ ] Configurar Vercel Analytics
- [ ] Configurar Sentry (error tracking)
- [ ] Configurar uptime monitoring
- [ ] Crear alertas de errores
- [ ] Revisar logs regularmente

### 5. Comandos Útiles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build           # Build de producción
npm start                # Servidor de producción
npm run lint            # Verificar código
npm run type-check      # Verificar tipos

# Git
git pull origin main    # Actualizar código
git status              # Ver cambios
git add .               # Añadir todos los cambios
git commit -m "mensaje" # Commit con mensaje
git push origin main    # Subir cambios

# Vercel CLI
vercel                  # Deploy preview
vercel --prod           # Deploy a producción
```

---

## Estado del Proyecto

### Completado ✅

- [x] Estructura base del proyecto (Next.js 16 + TypeScript + Tailwind)
- [x] Sistema de recursos legales completo
- [x] 6 páginas de recursos por categorías
- [x] Módulo de familias (UI completa)
- [x] Sistema de generación de PDFs (7 documentos)
- [x] Cumplimiento RGPD (3 páginas legales + footer)
- [x] Sistema de navegación (breadcrumbs, menús)
- [x] Diseño responsive (mobile-first)
- [x] Estilos consistentes con marca MakiSalida

### En Progreso 🚧

- [ ] Sistema de autenticación
- [ ] Base de datos y persistencia
- [ ] Sistema de pagos completo (Stripe parcialmente implementado)
- [ ] Formularios funcionales (contacto, registro, etc.)

### Pendientes para Producción ⏳

- [ ] Tests completos (unitarios + E2E)
- [ ] Optimización SEO completa
- [ ] Monitoring y analytics
- [ ] Security headers completos
- [ ] Performance optimisation (Lighthouse > 90)

### Futuro (Post-Producción) 🔮

- [ ] Sistema de cursos de formación
- [ ] Certificados PDF generables
- [ ] Plataforma de abogados (directorio pagado)
- [ ] Comunidad y foros
- [ ] App móvil (React Native o PWA)
- [ ] Internacionalización (i18n)

---

## Licencia y Contacto

**Licencia**: MIT License - Ver archivo [LICENSE](LICENSE)

**Contacto**:
- Web: https://makisalida.es (dominio pendiente de registro)
- Email: contacto@makisalida.es (pendiente de configuración)

**Repositorio**: https://github.com/elcorreveidile/MakiSalida

---

## Notas Finales

Este proyecto está en desarrollo activo. Cualquier agente que continúe debe:

1. **Leer este README completo** antes de comenzar
2. **Revisar la sección "Funcionalidades Pendientes"** para prioridades
3. **Respetar la arquitectura existente** (PDF system, routing, etc.)
4. **Mantener la coherencia de código** (TypeScript, Tailwind, etc.)
5. **Testear cambios** antes de commitear a main
6. **Documentar nuevas funcionalidades** en este README

El sistema de PDFs está completamente funcional y escalable para futuros cursos. La estructura del proyecto permite crecimiento sin refactorización mayor.

**¡Buena suerte continuando el proyecto! 🚀**

---

*Made with ❤️ by MakiSalida Team*
