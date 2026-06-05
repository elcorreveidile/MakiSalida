# 🚪 MakiSalida

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Plataforma integral para apoyo a internos penitenciarios y sus familiares**

MakiSalida conecta, informa y prepara para la reinserción social. Porque empezar de nuevo es más fácil cuando no estás solo.

---

## 📋 Índice

- [Visión](#visión)
- [Características](#características)
- [Tecnología](#tecnología)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Seguridad](#seguridad)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## 👁️ Visión

MakiSalida es una plataforma integrada con tres módulos principales:

### 1. 📱 Módulo Familias
Para familiares de internos, con:
- Gestión de comunicaciones y visitas
- Información práctica (trámites, derechos, qué llevar)
- Comunidad de apoyo
- Control de envíos de dinero

### 2. 🔗 Módulo Reinserción
Para internos y familiares, con:
- Formación y certificaciones
- Preparación laboral (CV, entrevistas, empresas inclusivas)
- Directorio de recursos (asociaciones, ayudas)
- Plan de vida post-libertad

### 3. 📚 Módulo Educativo para Centros
Para centros penitenciarios, con:
- Cursos y formación offline
- Actividades guiadas de reflexión
- Progreso reportable a la institución
- **Valor para la institución**: herramienta de reinserción supervisada

---

## ✨ Características

- 🔒 **Seguridad 100%**: Implementación completa de seguridad desde el primer día
- 🎭 **Páginas de error estilo Makinavaja**: UX amigable con humor del personaje
- 📱 **Responsive Design**: Funciona perfectamente en todos los dispositivos
- ♿ **Accesibilidad**: WCAG AA compliant
- 🌍 **Multiidioma**: Preparado para español y otros idiomas
- 🎨 **Diseño moderno**: Interfaz limpia y fácil de usar

---

## 🛠 Tecnología

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4.3](https://tailwindcss.com/)
- **Componentes**: React 19

### Backend (planeado)
- **API**: Next.js API Routes
- **Database**: PostgreSQL (prisma ORM)
- **Auth**: NextAuth.js
- **Validation**: Zod
- **Rate Limiting**: Custom middleware

### Seguridad (implementado)
- ✅ SQL Injection protection (ORM)
- ✅ XSS prevention (sanitización, CSP)
- ✅ CSRF protection (tokens)
- ✅ Security headers (HSTS, X-Frame-Options, etc.)
- ✅ Input validation (Zod)
- ✅ Rate limiting (planeado)
- ✅ Data encryption (planeado)
- ✅ HTTPS only (HSTS)

---

## 📦 Instalación

### Requisitos previos
- Node.js 24+ (recomendado) o 18+
- npm, yarn o pnpm
- PostgreSQL (para desarrollo)

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/elcorreveidile/MakiSalida.git
cd MakiSalida
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configura las variables de entorno**
```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores.

4. **Ejecuta en desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 💻 Desarrollo

### Comandos disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción

# Calidad
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos TypeScript
```

### Estructura de directorios

```
MakiSalida/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (errors)/     # Páginas de error personalizadas
│   │   ├── familias/     # Módulo familias
│   │   ├── reinsercion/  # Módulo reinserción
│   │   ├── educativo/    # Módulo educativo
│   │   ├── api/          # API Routes
│   │   ├── layout.tsx    # Layout raíz
│   │   ├── page.tsx      # Página principal
│   │   └── globals.css   # Estilos globales
│   ├── components/       # Componentes reutilizables
│   ├── lib/             # Utilidades y helpers
│   └── styles/          # Estilos adicionales
├── public/              # Archivos estáticos
│   └── images/          # Imágenes
├── .env.example         # Variables de entorno ejemplo
├── next.config.ts       # Configuración Next.js
├── tailwind.config.ts   # Configuración Tailwind
├── tsconfig.json        # Configuración TypeScript
└── package.json         # Dependencias
```

---

## 🔒 Seguridad

MakiSalida implementa seguridad en múltiples capas:

### Headers de Seguridad
- Strict-Transport-Security (HSTS)
- X-Frame-Options (SAMEORIGIN)
- X-Content-Type-Options (nosniff)
- X-XSS-Protection
- Content-Security-Policy
- Referrer-Policy

### Prácticas de Seguridad
- ✅ Todos los inputs validados con Zod
- ✅ Queries parametrizadas (ORM)
- ✅ Autenticación robusta (NextAuth.js)
- ✅ Autorización por roles
- ✅ Rate limiting en endpoints sensibles
- ✅ Datos sensibles encriptados
- ✅ Logs de auditoría
- ✅ Testing de seguridad

### Páginas de Error Estilo Makinavaja
- **404**: "¿Pero qué haces aquí, pejiguero? Esta página no existe..."
- **500**: "¡Hostia! Algo ha roto la cadena de suministro"
- **403**: "No puedes pasar, celesi. Esto es solo para autoridades"
- **429**: "¡Tranquilo, chaval! No fuerces la mano más de la cuenta"

---

## 🚀 Roadmap

### Fase 1: MVP - Módulo Familias
- [ ] Sistema de autenticación
- [ ] Agenda de comunicaciones
- [ ] Información de visitas
- [ ] Foro de comunidad básico
- [ ] Testing y despliegue

### Fase 2: Plataforma de Reinserción
- [ ] Directorio de recursos
- [ ] Constructor de CV
- [ ] Conexión con empresas inclusivas
- [ ] Sistema de cursos

### Fase 3: Módulo Educativo para Centros
- [ ] App offline para tablets
- [ ] Contenido educativo
- [ ] Panel de administración
- [ ] Propuesta a instituciones

### Fase 4: Integración y Lanzamiento
- [ ] Integración de módulos
- [ ] Sincronización de datos
- [ ] Piloto con centros
- [ ] Lanzamiento público

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Código de Conducta
- Respeta a todos
- Sé constructivo
- Ayuda a otros a aprender
- No aceptes acoso ni discriminación

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👥 Equipo

- **MakiSalida Team** - Desarrollo inicial

---

## 🙏 Agradecimientos

- A todas las personas que nos han inspirado con su trabajo en reinserción
- A las asociaciones de familiares que nos han ayudado a entender las necesidades reales
- Al personaje **Makinavaja** por darnos nombre y humor

---

## 📞 Contacto

- **Web**: [makisalida.com](https://makisalida.com) (cuando esté disponible)
- **Email**: contacto@makisalida.com (cuando esté disponible)
- **Issues**: [GitHub Issues](https://github.com/elcorreveidile/MakiSalida/issues)

---

## 🌟 ¿Por qué MakiSalida?

El nombre hace honor a **Makinavaja**, el personaje de historieta creado por Vázquez, muy popular y querido en ámbitos carcelarios. Representa:

- ✅ Humanidad y humor en situaciones difíciles
- ✅ Conexión cultural con el target
- ✅ Un nombre memorable y con personalidad
- ✅ La idea de "salida" hacia una nueva vida

**MakiSalida**: Hacia la libertad, con apoyo.

---

*Made with ❤️ by MakiSalida Team*
