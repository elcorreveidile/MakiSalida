# 🚪 MakiSalida - Proyecto Integrado para Apoyo a Internos y Familiares

## VISIÓN GENERAL

**MakiSalida** es una plataforma integral que combina apoyo familiar, recursos de reinserción y formación educativa para personas en situación de privación de libertad y sus familias.

### ¿Por qué MakiSalida?

El nombre hace honor a **Makinavaja**, el personaje de historieta creado por Vázquez, muy popular y querido en ámbitos carcelarios. Representa:
- ✅ Humanidad y humor en situaciones difíciles
- ✅ Conexión cultural con el target
- ✅ Un nombre memorable y con personalidad
- ✅ La idea de "salida" hacia una nueva vida

**MakiSalida**: Hacia la libertad, con apoyo.

---

## LOS TRES MÓDULOS

### 1. MÓDULO FAMILIAS (App Móvil/Web)
**Para:** Familiares fuera del centro penitenciario
**Acceso:** Smartphones normales con conexión a internet

**Funcionalidades:**
- 📅 **Gestor de comunicaciones**
  - Agenda de videollamadas/cabinas
  - Recordatorios de días y horarios disponibles
  - Historial de contactos
  - Pre-guía de temas a tratar/evitar

- ℹ️ **Centro de información**
  - Calendario de visitas
  - Qué se puede llevar/no llevar (listas interactivas)
  - Trámites y permisos explicados paso a paso
  - Derechos y deberes de familiares e internos

- 💬 **Comunidad de apoyo**
  - Foros anónimos por temática
  - Grupos de apoyo moderados
  - Recursos psicológicos accesibles
  - Chat con profesionales (opcionales)

- 💰 **Gestión económica**
  - Control de envíos de dinero
  - Historial de economatos
  - Presupuesto y gastos relacionados

---

### 2. MÓDULO REINSERCIÓN (Plataforma Web/App)
**Para:** Internos preparando salida + Familiares + Profesionales
**Acceso:** Web + App + Dispositivos en centros (si se autoriza)

**Funcionalidades:**
- 🎓 **Formación y certificación**
  - Cursos online reconocidos
  - Certificaciones laborales
  - Seguimiento de progreso
  - Badge system de logros

- 💼 **Preparación laboral**
  - Constructor de CV adaptado
  - Simulacros de entrevistas
  - Buscador de empresas inclusivas
  - Ofertas de trabajo sin discriminación

- 🆘 **Directorio de recursos**
  - Asociaciones de ayuda
  - Programas de mentoría
  - Ayudas y subvenciones
  - Servicios jurídicos gratuitos

- 📊 **Plan de vida post-libertad**
  - Establecimiento de metas
  - Hitos semanales/mensuales
  - Seguimiento de progreso
  - Sistema de alertas y recordatorios

---

### 3. MÓDULO EDUCATIVO PARA CENTROS (App Offline/Tableta Dedicada)
**Para:** Internos dentro de centros penitenciarios
**Acceso:** Tablet dedicada suministrada por la institución
**Conectividad:** Funciona offline, se sincroniza cuando hay conexión

**Propuesta de valor para Instituciones Penitenciarias:**
- ✅ Cumple objetivos de reinserción
- ✅ Sin acceso a internet (sistema controlado)
- ✅ Monitoreo de progreso educativo
- ✅ Contenido supervisado y aprobado

**Funcionalidades:**
- 📚 **Cursos y formación**
  - Alfabetización digital
  - Formación profesional
  - Educación cívica y habilidades sociales
  - Preparación para retorno a sociedad

- ✏️ **Actividades guiadas**
  - Ejercicios de reflexión
  - Planificación de futuro
  - Desarrollo de habilidades blandas
- 📈 **Progreso reportable**
  - Métricas para institución
  - Certificados de completion
  - Datos para informes de reinserción

**Características técnicas:**
- App nativa (Android/iOS) con bloqueo de otras funciones
- Contenido local (descarga previa)
- Sincronización bidireccional cuando hay conexión
- Panel de administración para personal del centro

---

## FLUJOS DE COMUNICACIÓN ENTRE MÓDULOS

```
┌─────────────────┐
│  MÓDULO FAMILIA │
│   (App Móvil)    │
└────────┬────────┘
         │
         │ Comparte recursos, progreso
         │
┌────────▼────────┐     ┌────────────────────┐
│   MÓDULO        │◄────┤  MÓDULO EDUCATIVO  │
│   REINSERCIÓN   │     │  (Tableta en Centro)│
└─────────────────┘     └────────────────────┘
                               │
                               │ Sincroniza progreso
                               │ (offline → online)
                               ▼
                        ┌──────────────┐
                        │  PANEL ADMIN │
                        │ (Institución)│
                        └──────────────┘
```

### Ejemplo de flujo usuario real:

1. **Juan está interno** → Usa tablet del centro para hacer curso de carpintería
2. **Su progreso se guarda localmente** → Se sincroniza cuando el centro lo permite
3. **María (su esposa)** → Usa app familiar para ver recursos para cuando salga Juan
4. **Ambos acceden al módulo de reinserción** → María ve los cursos completados por Juan
5. **Juan sale** → Puede continuar usando la app ahora con su propio móvil
6. **Juan aplica a trabajos** → Usando su CV + certificados obtenidos dentro

---

## LIMITACIONES TÉCNICAS POR ENTORNO

| Entorno | Limitaciones | Soluciones |
|---------|--------------|------------|
| **Familiares (casa)** | Ninguna especial | App estándar móvil/web |
| **Módulo Reinserción** | Necesita ser accesible | Web responsiva + App |
| **Centro Penitenciario** | ❌ No internet<br>❌ No apps personales<br>❌ Control estricto | ✅ App dedicada<br>✅ Contenido offline<br>✅ Sincronización controlada<br>✅ Panel admin para institución |

---

## ESTRATEGIA DE IMPLEMENTACIÓN POR FASES

### FASE 1: App para Familias (MVP)
**Duración estimada:** 2-3 meses
**Objetivo:** Validar necesidad y crear comunidad

**MVP incluye:**
- Información práctica (visitas, trámites, derechos)
- Agenda de comunicaciones
- Foro de comunidad básico

### FASE 2: Plataforma de Reinserción
**Duración estimada:** 2-3 meses (paralelo a refinamiento Fase 1)
**Objetivo:** Crear ecosistema de recursos

**Incluye:**
- Directorio de recursos exhaustivo
- Constructor de CV
- Conexión con empresas inclusivas
- Sistema de cursos básicos

### FASE 3: Programa Educativo para Centros
**Duración estimada:** 3-4 meses
**Objetivo:** Desarrollar app dedicada y presentar a instituciones

**Incluye:**
- Desarrollo de app offline
- Contenido educativo curado
- Panel de administración
- Propuesta formal para Instituciones Penitenciarias

### FASE 4: Integración y Lanzamiento
**Duración estimada:** 2 meses
**Objetivo:** Unificar todo el ecosistema

**Incluye:**
- Integración de los 3 módulos
- Sincronización de datos
- Lanzamiento piloto con centros colaboradores
- Campaña de difusión

---

## MODELO DE SOSTENIBILIDAD

### Opción A: Sin ánimo de lucro (ONG/Asociación)
- Subvenciones públicas
- Donaciones privadas
- Fondos europeos para reinserción

### Opción B: Híbrido
- App gratuita para familias
- Servicios premium para empresas (contratación inclusiva)
- Certificaciones de centros

### Opción C: Institucional
- Modelo SaaS para Instituciones Penitenciarias
- Pago por centro/instituto

---

## TECNOLOGÍA SUGERIDA

### App Familiares + Reinserción
- **Frontend:** Next.js (React) + Tailwind CSS
- **Mobile:** React Native o PWA
- **Backend:** Node.js/Express o Vercel Functions
- **Database:** PostgreSQL (Vercel Postgres o similar)
- **Auth:** NextAuth.js

### App Educativa para Centros
- **Nativa:** React Native o Flutter
- **Offline storage:** SQLite local + sincronización
- **Content delivery:** Bundle descargable
- **Backend:** Compartido con resto de plataforma

### Panel Administración
- **Stack:** Mismo que frontend principal
- **Role-based access:** Admin centros, supervisores, etc.

---

## PRÓXIMOS PASOS

1. ✅ Definir funcionalidad core de cada módulo
2. 📋 Elegir módulo prioritario para desarrollo inicial
3. 🎨 Diseñar UX/UI para el módulo prioritario
4. 🔧 Configurar stack técnico base
5. 👥 Contactar con asociaciones/centros para validación
6. 💡 Refinar MVP basado en feedback real

---

## POTENCIALES COLABORADORES

- **Instituciones Penitenciarias** (para módulo educativo)
- **Asociaciones de familiares** (validación necesidades)
- **ONGs de reinserción** (contenido, recursos)
- **Empresas sociales** (empleo inclusivo)
- **Universidades** (contenido educativo, investigación)

---

## ESTATUS ACTUAL

📌 **Nombre del proyecto:** MakiSalida ✅
📌 **Fase actual:** Configuración técnica inicial
📌 **Próximo hito:** Desarrollar MVP - Módulo Familias
📌 **Stack tecnológico:** Next.js 16 + TypeScript + Tailwind CSS
📌 **Repositorio GitHub:** [MakiSalida](https://github.com/elcorreveidile/MakiSalida)

### HITOS ALCANZADOS

1. ✅ Definición de funcionalidad core de cada módulo
2. ✅ Elección del nombre del proyecto: MakiSalida
3. ✅ Creación de repositorio en GitHub
4. ✅ Configuración del stack técnico base (Next.js + TypeScript + Tailwind)
5. ✅ Implementación de seguridad base (headers, sanitización, CSP)
6. ✅ Creación de páginas de error estilo Makinavaja (404, 500, 403, 429)
7. ✅ README y documentación inicial

### PRÓXIMOS PASOS INMEDIATOS

1. 🎨 Diseñar la UI/UX del módulo familias
2. 🔐 Implementar sistema de autenticación (NextAuth.js)
3. 📅 Desarrollar gestor de comunicaciones
4. ℹ️ Crear centro de información para visitas
5. 👥 Contactar con asociaciones/centros para validación
6. 💡 Refinar MVP basado en feedback real

---

*Documento de planificación - Versión 1.0*
*Fecha: 2026-06-05*
