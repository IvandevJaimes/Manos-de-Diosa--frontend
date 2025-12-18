# 🎨 Manos de Diosa - Frontend

## ⚠️ Estado del Proyecto

**PROYECTO CANCELADO** - Este proyecto fue cancelado por el cliente. Sin embargo, el código se mantiene funcional y bien estructurado, permitiendo que sea retomado a futuro si se requiere continuar con el desarrollo.

---

## 📋 Descripción

**Manos de Diosa** es una plataforma web de servicios de belleza especializada en **manicura, diseño de uñas, lifting de pestañas y diseño de cejas**. El frontend está construido con tecnologías modernas de React para ofrecer una experiencia de usuario fluida y responsiva, permitiendo a los clientes visualizar servicios, agendar citas y gestionar sus perfiles.

### Características principales:
- 🔐 Sistema de autenticación de usuarios
- 👤 Perfiles de usuario personalizables
- 💅 Catálogo de servicios (manicura, uñas gel, pestañas, cejas)
- 🎨 Categorías de servicios: Capping Gel, Soft Gel, Lifting de Pestañas, etc.
- 💳 Integración con Google reCAPTCHA para seguridad
- 📱 Diseño responsive y mobile-first
- 🎯 Interfaz intuitiva con componentes reutilizables
- 📅 Gestión de citas y agendamiento

---

## 🛠️ Stack Tecnológico

### Core Framework
- **React** (^19.1.1) - Biblioteca UI
- **TypeScript** (~5.9.3) - Tipado estático
- **Vite** (^7.1.7) - Build tool y dev server

### Enrutamiento & Estado
- **React Router DOM** (^7.9.4) - Enrutamiento de la aplicación
- **Zustand** (^5.0.8) - Gestión de estado global
- **TanStack React Query** (^5.90.10) - Gestión de datos del servidor y caché

### Estilos
- **Tailwind CSS** (^4.1.14) - Framework CSS utility-first
- **Flowbite** (^3.1.2) - Componentes UI basados en Tailwind
- **Heroicons** (^2.2.0) - Librería de iconos SVG

### Formularios & Validación
- **React Hook Form** (^7.65.0) - Gestión eficiente de formularios
- **Google reCAPTCHA** (^3.1.0) - Protección contra bots

### Notificaciones
- **Toastr** (^2.1.4) - Notificaciones emergentes

### Herramientas de Desarrollo
- **ESLint** (^9.36.0) - Linter de código
- **TypeScript ESLint** (^8.45.0) - Reglas de ESLint para TypeScript
- **Vite React Plugin** (^5.0.4) - Plugin de React para Vite

---

## 📁 Estructura del Proyecto

```
src/
├── API/                          # Conexiones con la API backend
│   ├── authAPI.ts               # Endpoints de autenticación
│   └── profileAPI.tsx           # Endpoints de perfil de usuario
├── assets/                       # Imágenes y recursos estáticos
│   ├── Manos-de-Diosa-Logo.png
│   ├── Manos-de-Diosa-Sublogo.png
│   └── location.png
├── components/                   # Componentes React reutilizables
│   ├── footer/                  # Pie de página
│   │   ├── footer.tsx
│   │   └── footer.css
│   ├── header/                  # Encabezado y navegación
│   │   ├── navbar.tsx
│   │   └── navbar.css
│   ├── pages/                   # Páginas principales
│   │   ├── loginPage/          # Página de login
│   │   │   ├── loginPage.tsx
│   │   │   ├── loginForm.tsx
│   │   │   └── loginPage.css
│   │   ├── mainPage/           # Página principal
│   │   │   ├── mainPage.tsx
│   │   │   ├── carrouselMain.tsx    # Carrusel de servicios/portafolio
│   │   │   ├── cardSectionCategorias.tsx    # Servicios más pedidos
│   │   │   ├── cardSectionColecciones.tsx   # Colecciones/paquetes
│   │   │   ├── title.tsx
│   │   │   ├── mainPage.css
│   │   │   └── title.css
│   │   └── profilePage/        # Página de perfil del usuario
│   │       ├── profilePage.tsx
│   │       ├── profile.tsx
│   │       ├── editAvatar.tsx
│   │       └── profilePage.css
│   └── utils/                  # Componentes utilitarios reutilizables
│       ├── buttons/            # Variantes de botones
│       │   ├── buttonDesign1.tsx
│       │   ├── loadingButton.tsx
│       │   ├── showPassButton.tsx
│       │   └── switchButton.tsx
│       ├── cards/              # Diseños de tarjetas para servicios
│       │   ├── cardDesign1.tsx
│       │   └── cardDesign2.tsx
│       ├── carousel/           # Componentes de carrusel
│       │   └── carousel.tsx
│       ├── inputs/             # Campos de entrada personalizados
│       │   └── inputDesign1.tsx
│       ├── loadingComponents/  # Indicadores de carga
│       │   ├── loadingDiv.tsx
│       │   └── loadingDiv.css
│       ├── loadingScreen/      # Pantalla de carga completa
│       │   ├── loadingScreen.tsx
│       │   └── loadingScreen.css
│       ├── login/              # Componentes de login
│       │   ├── loginScreen.tsx
│       │   └── login.css
│       ├── messages/           # Alertas y mensajes
│       │   ├── bubbleAuth.tsx
│       │   └── errorAlert.tsx
│       ├── modals/             # Ventanas modales
│       │   ├── modal.tsx
│       │   └── modal.css
│       ├── profile/            # Componentes de perfil
│       │   └── profileBubble.tsx
│       └── sidebars/           # Barras laterales
│           ├── sidebar.tsx
│           └── sidebar.css
├── cssVars/                     # Variables CSS globales
│   └── colors.css
├── links/                       # Configuración de enlaces
│   └── links.json              # Enlaces a redes sociales y contacto
├── querys/                      # Hooks de React Query
│   └── profileQuery.ts
├── utilsFunctions/              # Funciones utilitarias
│   └── tokenStorage.ts          # Gestión del token de autenticación
├── App.tsx                      # Componente raíz
├── index.tsx                    # Punto de entrada
├── index.css                    # Estilos globales
└── tailwind.config.cjs          # Configuración de Tailwind CSS
```

---

## 🚀 Requisitos Previos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** (gestor de paquetes)

---

## 📦 Instalación y Setup

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd "Manos de Diosa"
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto:
```env
VITE_API_URL=http://localhost:3000/api
VITE_RECAPTCHA_SITE_KEY=tu_clave_publica_recaptcha
```

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con HMR (Hot Module Replacement) |
| `npm run build` | Compila TypeScript y construye la aplicación para producción |
| `npm run lint` | Ejecuta ESLint para verificar la calidad del código |
| `npm run preview` | Visualiza la compilación de producción localmente |

---

## 🔐 Características de Seguridad

### Autenticación
- Sistema de login seguro con validación de credenciales
- Almacenamiento de tokens JWT en localStorage
- Protección contra CSRF con Google reCAPTCHA v3

### Token Management
- Gestión centralizada de tokens en `tokenStorage.ts`
- Almacenamiento seguro en el cliente
- Validación de tokens en las llamadas a API

---

## 🔌 Integración con API

### Endpoints principales

#### Autenticación (`/auth`)
- `POST /auth/login` - Login de usuarios
- Parámetros: `identifier`, `password`, `captcha`

#### Perfil (`/profile`)
- `GET /profile` - Obtener datos del usuario
- `PUT /profile` - Actualizar datos del usuario

### Configuración de Fetch
El proyecto utiliza la API nativa `fetch` con:
- Headers configurables
- Manejo centralizado de errores
- URL base configurable mediante variables de entorno

---

## 🎨 Diseño y Estilos

### Tailwind CSS
- Framework CSS utility-first para estilos rápidos y consistentes
- Configuración en `tailwind.config.cjs`
- Integración con Vite para optimización automática

### Variables CSS Globales
- Definidas en `src/cssVars/colors.css`
- Paleta de colores consistente en toda la aplicación
- Ideal para mantener coherencia visual en servicios de belleza

### Componentes Flowbite
- Componentes UI pre-construidos y personalizables
- Integración con Tailwind CSS

---

## 📱 Rutas de la Aplicación

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con catálogo de servicios y carrusel |
| `/login` | Página de autenticación de usuarios |
| `/perfil` | Página de perfil del usuario autenticado |

---

## 🔧 Configuración Adicional

### Vite Config (`vite.config.ts`)
- Plugin de React con Fast Refresh habilitado
- Tailwind CSS como procesador de estilos
- Servidor configurado para acceso desde dispositivos locales
- Puerto: `5173`

### TypeScript
- Configuración estricta en `tsconfig.app.json`
- Soporte para JSX
- Configuración separada para código de la app y herramientas de build

### ESLint
- Configuración moderna con `@eslint/js`
- Reglas específicas para React y React Hooks
- Validación de TypeScript con `typescript-eslint`

---

## 📊 Gestión de Estado

### Zustand
- Store global para estado compartido
- Sintaxis simple y sin boilerplate
- Ideal para estado global de autenticación, usuario y citas

### React Query
- Caché inteligente de datos del servidor
- Sincronización automática de servicios y disponibilidad
- Queries centralizadas en `src/querys/`

---

## 🎯 Componentes Principales

### Pages
- **MainPage**: Catálogo de servicios de belleza con categorías y colecciones
- **LoginPage**: Formulario de autenticación de clientes
- **ProfilePage**: Perfil del usuario

### Utils
- **Buttons**: Botones especializados (carga, mostrar contraseña, switch)
- **Cards**: Diseños de tarjetas para mostrar servicios
- **Carousel**: Carrusel interactivo de trabajos/portafolio
- **Forms**: Campos de entrada personalizados
- **Loading**: Indicadores de carga
- **Messages**: Alertas y mensajes de error

---

## 💅 Servicios Disponibles

Los servicios se dividen en varias categorías:

### Uñas
- **Capping Gel**: Extensión reforzada de gel
- **Soft Gel**: Extensión suave y flexible
- Diseños personalizados

### Pestañas
- **Lifting de Pestañas**: Tratamiento de elevación y rizado
- Extensiones de pestañas
- Perming de pestañas

### Cejas
- Diseño y depilación de cejas
---

## 🌐 Enlaces Configurables

El archivo `src/links/links.json` contiene:
- **Redes sociales**: Facebook, Instagram, Twitter, LinkedIn
- **Emails de contacto**: Soporte técnico
- **Ubicaciones**: Dirección del local y mapas
- **Información del desarrollador**: LinkedIn, GitHub

---

## 🐛 Debugging y Desarrollo

### Hot Module Replacement (HMR)
- Actualizaciones instantáneas sin perder el estado durante el desarrollo
- Habilitado automáticamente en modo desarrollo

### Console Logging
- Logs centralizados en funciones de API
- Manejo de errores con mensajes claros

---

## 📧 Contacto

Para consultas sobre la retoma del proyecto, revisar `src/links/links.json`

**Ubicación**: Pcia de Córdoba 561, T4000 San Miguel de Tucumán, Tucumán

