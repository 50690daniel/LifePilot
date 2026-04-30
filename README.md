# LifePilot

Panel de control personal — productividad, hábitos, nutrición y seguimiento diario.

🌐 **Producción**: https://50690daniel.github.io/LifePilot/

---

## ⚡ Cómo trabajar con esto

1. **Ver la app** → https://50690daniel.github.io/LifePilot/
2. **Probar local** → doble-click en `serve.bat` y abre http://localhost:8000
3. **Subir cambios** → commit + push en GitHub Desktop
4. **Después de subir** → siempre **Ctrl+Shift+R** en el navegador

⚠️ **NUNCA abras los .html con doble-click directo.** Las URLs `file://` rompen Firebase, Service Worker, iCloud y la mayoría de APIs. Siempre vía `http://localhost:8000` o GitHub Pages.

---

## 📁 Archivos

```
LifePilot/
├── index.html       Desktop completo
├── mobile.html      Versión móvil
├── ocio.html        App Ocio standalone
├── ejercicios.html  App Ejercicios standalone
├── manifest.json    PWA manifest
├── sw.js            Service Worker (cache offline)
├── icon-192.png     Icono PWA
├── icon-512.png     Icono PWA grande
├── icon.svg         Icono vectorial
├── serve.bat        Servidor local Windows
└── README.md        Este archivo
```

## 🧩 Módulos

- 🏠 **Inicio** — Briefing IA, agenda del día, métricas, medicación, nutrición
- 🥗 **Nutrición** — Macros por tipo de día, búsqueda IA de alimentos
- 💪 **Ejercicios** — Rutina semanal con series, pesos, timer, coach IA
- 🎬 **Ocio** — YouTube, pelis/series, podcasts, música, juegos
- ✅ **Tareas** — Sincronizadas con Firebase (tiempo real entre dispositivos)
- 👧 **Kira** — Actividades padre-hija, calendario semanal, hitos
- 📍 **Planes** — Planes familiares por categoría
- 🧠 **Aprender** — Libros, podcasts, cursos
- 📝 **Diario** — Mood tracker, calendario emocional (Firebase)
- 📅 **Calendario** — iCloud + eventos locales
- ✨ **IA** — Coach, patrones, predicciones, proyección patrimonio

## 🛠 Stack

- HTML + CSS + JS vanilla (sin build tools)
- **Firebase Firestore** — diario, tareas, hábitos
- **Groq API** (Llama 3) — funciones IA
- **iCloud Calendar** — eventos vía webcal
- **Google Sheets** — cartera de inversión
- **localStorage** — caché local
- **Service Worker** — funciona offline
- **PWA instalable** en iPhone y Android

## 📲 Instalar en iPhone

1. Abre https://50690daniel.github.io/LifePilot/ en **Safari**
2. Botón Compartir → "Añadir a pantalla de inicio"
3. Acepta permisos de notificación

## 📲 Instalar en Android

1. Abre la URL en **Chrome**
2. Menú → "Instalar aplicación"

## 🐛 Troubleshooting

| Problema | Solución |
|---|---|
| Página en blanco al cambiar de tab | Ctrl+Shift+R (caché del SW) |
| Groq da 401 | Renovar key en console.groq.com |
| Notificaciones no llegan | Solo funcionan tras instalar como PWA |
| GIFs ejercicios no cargan | Normal — ahora muestra emojis del grupo muscular |

---

## 🔑 Keys

- **Firebase** — config en el `<script type="module">` al inicio del HTML
- **Groq** — `const GROQ_KEY = ...` (renovar en console.groq.com si caduca)
- **Google Sheets** — `const SHEET_ID = ...`

## 📜 Licencia

Privado.
