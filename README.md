# LifePilot

Panel de control personal — productividad, hábitos, nutrición, seguimiento.

🌐 **Producción**: https://50690daniel.github.io/LifePilot/

---

## ⚡ Cómo usar

1. **Ver la app** → https://50690daniel.github.io/LifePilot/
2. **Probar local** → doble-click en `serve.bat` y abre http://localhost:8000
3. **Subir cambios** → commit + push en GitHub Desktop
4. **Tras subir** → siempre **Ctrl+Shift+R** en el navegador

⚠️ **NUNCA abras los .html con doble-click directo** (URLs `file://` rompen Firebase, SW y APIs). Usa siempre `http://localhost:8000` o GitHub Pages.

---

## 🤖 Configurar IA (primera vez)

LifePilot soporta **Google Gemini** (recomendado, gratis, generoso) y **Groq** (más rápido pero menor cupo).

**La API key NO está en el código** — la metes tú una vez en Ajustes y se guarda solo en tu navegador. Esto evita que GitHub Pages exponga la key públicamente.

### Pasos:
1. **Crea tu key gratis**:
   - Gemini (recomendado): https://aistudio.google.com/apikey
   - Groq: https://console.groq.com/keys
2. **Abre LifePilot** → Ajustes (⚙️) → sección "🤖 IA — API Key"
3. **Selecciona proveedor** y pega tu key → "Guardar"
4. Ya tienes briefing IA, coach, búsqueda alimentos, etc.

⚠️ **Por dispositivo**: tienes que pegar la key una vez en cada navegador/dispositivo (PC, móvil). Solo una vez por dispositivo.

---

## 📁 Archivos

```
LifePilot/
├── index.html       Desktop completo
├── mobile.html      Versión móvil
├── ocio.html        App Ocio standalone
├── ejercicios.html  App Ejercicios standalone
├── manifest.json    PWA manifest
├── sw.js            Service Worker (offline)
├── icon-192.png     Icono PWA
├── icon-512.png     Icono PWA grande
├── icon.svg         Icono vectorial
├── serve.bat        Servidor local Windows
└── README.md        Este archivo
```

## 🧩 Módulos

- 🏠 **Inicio** — Briefing IA, agenda, métricas, medicación
- 🥗 **Nutrición** — Macros por tipo de día, búsqueda IA alimentos
- 💪 **Ejercicios** — Rutina semanal, series, pesos, coach IA
- 🎬 **Ocio** — YouTube, pelis, podcasts, música, juegos
- ✅ **Tareas** — Sincronizadas con Firebase (tiempo real)
- 👧 **Kira** — Actividades padre-hija, calendario, hitos
- 📍 **Planes** — Planes familiares por categoría
- 🧠 **Aprender** — Libros, podcasts, cursos
- 📝 **Diario** — Mood tracker, calendario emocional (Firebase)
- 📅 **Calendario** — iCloud + eventos locales
- ✨ **IA** — Coach, patrones, predicciones, patrimonio

## 🛠 Stack

- HTML + CSS + JS vanilla (sin build tools)
- **Firebase Firestore** — diario, tareas
- **Google Gemini** o **Groq** — funciones IA (key del usuario, no expuesta)
- **iCloud Calendar** — eventos vía webcal
- **Google Sheets** — cartera de inversión
- **Service Worker** — funciona offline tras primera carga

## 📲 Instalar en iPhone

1. Abre la URL en **Safari**
2. Compartir → "Añadir a pantalla de inicio"
3. Configura tu API key en Ajustes (una vez)

## 📲 Instalar en Android

1. Abre la URL en **Chrome**
2. Menú → "Instalar aplicación"
3. Configura tu API key en Ajustes (una vez)

## 🐛 Troubleshooting

| Problema | Solución |
|---|---|
| Página en blanco al cambiar tab | Ctrl+Shift+R (caché del SW) |
| "Configura tu API key" en briefing | Ajustes → pega tu key de Gemini/Groq |
| Error 401 / 403 IA | La key está mal o se ha desactivado, genera otra |
| Error 429 IA | Cuota agotada, espera unos minutos o cambia de proveedor |
| GIFs ejercicios no cargan | Normal — ahora muestra emojis |

## 📜 Licencia

Privado.
