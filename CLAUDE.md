# MakiLibre — Resumen del Proyecto

## 1. Visión general

**MakiLibre** (repo: `MakiSalida`) es una plataforma web integral de apoyo a personas internas en centros penitenciarios y sus familias en España. Ofrece recursos legales, laborales, psicológicos, educativos y de reinserción social. Toda la UI está en español.

- **URL producción**: https://makilibre.com
- **Repo**: `elcorreveidile/MakiSalida`
- **Versión**: v0.1.0
- **Desarrollado por**: Por 2 duros (https://www.por2duros.com)
- **Producto hermano**: MakiCar.app (plataforma de empleo como primera salida laboral)

## 2. Tech Stack

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16.2.7 | Framework (App Router, Turbopack) |
| React | 19.2.7 | UI |
| TypeScript | — | Tipado |
| Prisma | 7.8.0 | ORM (PostgreSQL) |
| Supabase | — | Auth (Magic Link) + PostgreSQL |
| Tailwind CSS | 4 | Estilos |
| Zod | — | Validación |
| Resend | — | Emails transaccionales |
| @react-pdf/renderer | — | Generación PDFs legales |
| Jest + Playwright | — | Testing |
| Vercel | — | Hosting/Deploy (auto-deploy desde main) |

## 3. Variables de entorno (.env.local)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_URL=            # PostgreSQL (Supabase session pooler)
RESEND_API_KEY=          # Email service (Resend)
EMAIL_FROM=              # "MakiLibre <noreply@makilibre.com>"
NEXT_PUBLIC_SITE_URL=    # https://makilibre.com
```

Nota: `prisma.config.ts` carga `.env.local` antes de `.env`.

## 4. Estructura de directorios

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/              # Panel de administración (protegido)
│   ├── api/                # API routes
│   │   ├── admin/          # APIs admin (stats, messages, users, professionals)
│   │   ├── contacto/       # Formulario de contacto
│   │   ├── profesionales/  # Auto-registro profesionales
│   │   └── pdf/            # Generación PDFs legales
│   ├── auth/callback/      # Callback Supabase magic link
│   ├── familias/           # Módulo familias (protegido)
│   ├── login/              # Login con magic link
│   ├── perfil/             # Perfil usuario (protegido)
│   ├── recursos/           # Hub de recursos + subpáginas
│   │   ├── legal/
│   │   ├── laboral/
│   │   ├── psicologico/
│   │   ├── educativo/
│   │   ├── social/
│   │   └── administrativo/
│   ├── reinsercion/        # Guía de reinserción
│   ├── contacto/           # Formulario contacto
│   └── ...                 # aviso-legal, privacidad, cookies, ayudar
├── components/
│   ├── Header.tsx          # Header compartido con logo ML y nav
│   ├── Footer.tsx          # Footer con créditos y versión
│   ├── ScrollToTop.tsx     # Botón flotante scroll-to-top
│   └── auth/
│       ├── AuthNav.tsx     # Login/logout + avatar en header
│       └── SessionProvider.tsx
├── lib/
│   ├── auth/admin.ts       # Helper verificación rol admin
│   ├── db/prisma.ts        # Singleton Prisma client
│   ├── email/              # Envío emails (Resend)
│   ├── pdf-documents/      # Templates PDF legales
│   └── validations/        # Schemas Zod (contacto)
├── utils/supabase/
│   ├── client.ts           # Browser Supabase client
│   ├── server.ts           # Server Supabase client (cookies)
│   └── middleware.ts       # Session refresh + route protection
└── middleware.ts            # Next.js middleware entry
```

## 5. Páginas y rutas

### Públicas
| Ruta | Descripción |
|---|---|
| `/` | Homepage con hero, secciones de recursos, CTAs |
| `/reinsercion` | Fases de reinserción + grid de recursos con links específicos |
| `/recursos` | Hub central de recursos |
| `/recursos/legal` | Derechos penitenciarios, beneficios, normativa BOE, directorio abogados |
| `/recursos/laboral` | Empleo, CV, antecedentes penales, empresas inserción, MakiCar.app |
| `/recursos/psicologico` | Apoyo emocional, técnicas estrés, números crisis (024, 112) |
| `/recursos/educativo` | Formación y educación |
| `/recursos/social` | Redes de apoyo social |
| `/recursos/administrativo` | Trámites administrativos |
| `/contacto` | Formulario de contacto (validado con Zod) |
| `/ayudar` | Cómo colaborar / voluntariado |
| `/aviso-legal` | Aviso legal |
| `/privacidad` | Política de privacidad |
| `/cookies` | Política de cookies |
| `/login` | Autenticación por magic link |

### Protegidas (requieren auth)
| Ruta | Descripción |
|---|---|
| `/perfil` | Perfil de usuario, enlace a admin si es ADMIN/SUPERADMIN |
| `/familias` | Módulo familias (comunicaciones, visitas, foro comunitario) |
| `/admin` | Panel de administración (solo ADMIN/SUPERADMIN) |

## 6. API Routes

| Endpoint | Método | Descripción |
|---|---|---|
| `/api/contacto` | POST | Formulario contacto (rate limit 5/15min, guarda en DB, envía email) |
| `/api/profesionales` | POST | Auto-registro de profesionales (rate limit 3/30min, estado PENDING) |
| `/api/admin/stats` | GET | Métricas del dashboard (requiere admin) |
| `/api/admin/messages` | GET/PATCH | Gestión mensajes contacto (requiere admin) |
| `/api/admin/users` | GET/PATCH | Gestión usuarios y roles (PATCH solo SUPERADMIN) |
| `/api/admin/professionals` | GET/POST/PATCH/DELETE | CRUD profesionales (requiere admin) |
| `/api/pdf/*` | GET | 7 endpoints de generación PDFs legales |
| `/auth/callback` | GET | Callback de Supabase magic link → exchangeCodeForSession |

## 7. Base de datos (Prisma)

### Modelos
- **User**: id, authId, name, email, image, role (USER/ADMIN/SUPERADMIN), timestamps
- **ContactMessage**: id, userId?, name, email, subject, message, status (PENDING/READ/REPLIED/ARCHIVED)
- **Professional**: id, name, email, phone, category, specialty, description, city, province, website, status (PENDING/APPROVED/REJECTED)
- **CommunicationCalendar**: userId, type (VIDEOCALL/CABIN_CALL/VISIT), title, date, time, notes, status
- **ForumPost**: userId, category (GENERAL/CONSEJOS/RECURSOS/EMOCIONAL), title, content, likes
- **ForumComment**: postId, userId, content
- **CourseProgress**: userId, courseId, lessonId, progress, completed

### Enums
- `Role`: USER, ADMIN, SUPERADMIN
- `ProfessionalCategory`: ABOGADO, TRABAJADOR_SOCIAL, PSICOLOGO, EMPLEADOR, EDUCADOR, ONG, OTRO
- `ProfessionalStatus`: PENDING, APPROVED, REJECTED
- `MessageStatus`: PENDING, READ, REPLIED, ARCHIVED
- `CommunicationType`: VIDEOCALL, CABIN_CALL, VISIT
- `CalendarStatus`: SCHEDULED, COMPLETED, CANCELLED
- `ForumCategory`: GENERAL, CONSEJOS, RECURSOS, EMOCIONAL

### Migración
Tras cambios en schema: `npx prisma db push` (necesita DATABASE_URL en .env.local)

## 8. Autenticación

- **Supabase Auth** con magic link (email OTP)
- Login en `/login` → `supabase.auth.signInWithOtp()` con `emailRedirectTo: ${window.location.origin}/auth/callback`
- Callback en `/auth/callback/route.ts` → `exchangeCodeForSession()`
- Middleware (`src/utils/supabase/middleware.ts`) protege `/familias`, `/perfil`, `/admin`
- Sesión gestionada via cookies (SSR compatible)
- **Supabase Dashboard**: Site URL debe ser `https://makilibre.com`, Redirect URLs debe incluir `https://makilibre.com/auth/callback`

## 9. Sistema Admin

- **Roles**: USER (default), ADMIN, SUPERADMIN
- **SUPERADMIN auto-asignado** por email en `src/lib/auth/admin.ts`
- **Email superadmin actual**: `javier@blablaele.com`
- **`/admin`** (Server Component): verifica rol → redirige a `/perfil` si no es admin
- **AdminDashboard** (Client Component) con 4 pestañas:
  - **Dashboard**: 6 métricas (usuarios, nuevos 7d, mensajes, pendientes, profesionales, prof. pendientes) + acciones rápidas
  - **Mensajes**: filtro por estado, expandir para leer, marcar leído/respondido/archivar, responder por email
  - **Usuarios**: tabla con búsqueda, cambio de roles (solo SUPERADMIN puede cambiar roles)
  - **Profesionales**: aprobar/rechazar/eliminar, formulario para añadir, filtro por estado/categoría

## 10. Componentes compartidos

| Componente | Archivo | Descripción |
|---|---|---|
| `Header` | `src/components/Header.tsx` | Header sticky con logo "ML" (gradiente), nav, AuthNav. Prop `showNav` para ocultar nav en login |
| `Footer` | `src/components/Footer.tsx` | Footer con branding MakiLibre, v0.1.0, crédito "Desarrollado por Por 2 duros" |
| `ScrollToTop` | `src/components/ScrollToTop.tsx` | Flecha flotante bottom-right, aparece tras 400px scroll, smooth scroll |
| `AuthNav` | `src/components/auth/AuthNav.tsx` | Botón login/logout + avatar, escucha `onAuthStateChange` |

## 11. Branding y estilo

- **Color principal**: amber-500/600 (`#f59e0b` / `#d97706`)
- **Logo**: Círculo con gradiente (yellow-400 → amber-600) con texto "ML" en blanco
- **Tagline**: "Hacia la libertad, con apoyo"
- **Idioma**: Todo en español (locale `es_ES`)
- **Fuente**: Inter (Google Fonts)
- **Responsive**: mobile-first con Tailwind

## 12. Convenciones importantes

- **No emails de admin visibles** al público — siempre enlace a `/contacto`
- **No botones sin funcionalidad** — contenido real o enlace a formulario de contacto
- **Enlaces legales verificados** a BOE (textos consolidados), abogacia.es, instituciones oficiales
- **Contenido legal verificado**: art. 90 CP (libertad condicional: 3/4 + tercer grado), art. 136 CP (cancelación antecedentes: 6m leves, 2a ≤12m, 3a menos graves, 10a graves)
- **Accesibilidad**: skip links, aria-labels, roles en emojis, keyboard navigation
- **Seguridad**: CSP headers, rate limiting en APIs, validación Zod, no credenciales en código

## 13. Deploy

- **Vercel** auto-deploy desde `main`
- PRs generan preview deployments automáticamente
- Workflow: branch → PR → merge squash → deploy automático
- Post-deploy con cambios de schema: `npx prisma db push`
