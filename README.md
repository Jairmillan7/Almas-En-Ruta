# Almas en Ruta

Almas en Ruta es una plataforma web dedicada a la gestión de viajes y peregrinaciones religiosas. Recientemente ha sido migrada a una arquitectura **Single Page Application (SPA)** utilizando Vanilla JavaScript, HTML y CSS, e integra un backend completo utilizando **Supabase** para la autenticación de usuarios y la gestión de datos.

## 🚀 Características Principales

*   **Arquitectura SPA:** Navegación fluida y rápida sin recargas de página utilizando enrutamiento del lado del cliente en JavaScript puro.
*   **Autenticación de Usuarios:** Sistema completo de registro e inicio de sesión seguro, respaldado por la autenticación de Supabase.
*   **Portal de Viajeros:** Dashboard personalizado donde los usuarios pueden ver sus próximos viajes, el estado de sus pagos y gestionar su documentación.
*   **Gestión de Documentos:** Subida segura de documentos de viaje (pasaportes, visas, etc.) con validación estricta para asegurar que solo se admiten imágenes, e incluye vista previa de los mismos.
*   **Panel Administrativo:** Interfaz para que los administradores sincronicen información de viajes, aprueben documentos y realicen un seguimiento detallado de los pagos.
*   **Diseño Premium y Responsivo:** Interfaz moderna y elegante (colores azul marino y dorado) con micro-animaciones e iconos (Lucide Icons) que se adapta perfectamente a dispositivos móviles y de escritorio.

## 🛠️ Tecnologías Utilizadas

*   **Frontend:**
    *   HTML5 (Estructura semántica)
    *   CSS3 (Variables globales, Flexbox/Grid, Animaciones, Diseño Responsivo)
    *   Vanilla JavaScript (Lógica de la aplicación, Enrutamiento SPA, Interacción con DOM)
*   **Backend & Base de Datos:**
    *   Supabase (PostgreSQL, Auth, Storage)
*   **Iconografía:**
    *   Lucide Icons

## ⚙️ Estructura del Proyecto

```text
├── index.html                 # Punto de entrada de la aplicación SPA
├── assets/
│   ├── css/
│   │   ├── variables.css      # Variables globales de diseño (colores, fuentes)
│   │   ├── global.css         # Estilos base y resets
│   │   └── components.css     # Estilos de componentes específicos (botones, tarjetas)
│   ├── js/
│   │   ├── main.js            # Lógica principal, enrutador SPA y renderizado de vistas
│   │   ├── auth.js            # Controladores de autenticación y flujos de sesión
│   │   └── supabase-api.js    # Cliente de inicialización e interacción con Supabase
```

## 💻 Instalación y Ejecución Local

Para correr este proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/Jairmillan7/Almas-En-Ruta.git
    cd Almas-En-Ruta
    ```

2.  **Configura las variables de Supabase:**
    Asegúrate de que dentro del archivo `assets/js/supabase-api.js` (o en tu entorno de configuración) estén definidas la URL y la API Key pública de tu proyecto de Supabase.

3.  **Inicia un servidor local:**
    Al ser una aplicación web estática, necesitas un servidor HTTP básico para evitar problemas de CORS y permitir la correcta importación de módulos JS. Puedes usar:
    *   Extensión **Live Server** en VS Code.
    *   O usando Node.js/npx: `npx serve .`
    *   O usando Python: `python -m http.server 8000`

4.  **Abre tu navegador:**
    Navega a `http://localhost:8000` (o el puerto que te indique tu servidor) para ver la aplicación funcionando.
