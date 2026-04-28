# LifePilot

Panel de control personal — productividad, hábitos, nutrición y seguimiento diario.
PWA optimizada para iPhone, también funciona en desktop.

🌐 **Producción**: https://50690daniel.github.io/LifePilot/

---

## ⚡ TL;DR — Cómo trabajar con esto

1. **Ver la app online** → Abrir https://50690daniel.github.io/LifePilot/
2. **Probar cambios localmente** → Doble-click en `serve.bat` (o `python -m http.server 8000`)
3. **Subir a producción** → Commit + push en GitHub Desktop
4. **Tras subir** → Hard refresh en el navegador con **Ctrl+Shift+R**

⚠️ **NUNCA abras los HTML con doble-click directo desde el explorador de archivos.**
Las URLs `file://` rompen Firebase, Service Worker, iCloud Calendar, Notion, y muchas APIs.
Siempre usa el servidor local (`serve.bat`) o GitHub Pages.

---

## 📁 Estructura

```
LifePilot/
├── index.html         ← Versión desktop (panel completo con sidebar)
├── mobile.html        ← Versión móvil (bottom-nav + screens)
├── ocio.html          ← App de Ocio standalone (responsive)
├── ejercicios.html    ← App de Ejercicios standalone
├── manifest.json      ← PWA manifest
├── sw.js              ← Service Worker (cache offline)
├── icon-192.png       ← Icono PWA pequeño
├── icon-512.png       ← Icono PWA grande
├── icon.svg           ← Icono vectorial
├── serve.bat          ← Arranca servidor local en Windows
└── README.md          ← Este archivo
```

## 🧩 Módulos

- 🏠 **Inicio** — Briefing IA, agenda del día, métricas, medicación, nutrición resumida
- 🥗 **Nutrición** — Macros por tipo de día (laborable/pádel/descanso), búsqueda IA de alimentos
- 💪 **Ejercicios** — Rutina L-J con series, pesos, timer de descanso, coach IA por ejercicio
- 🎬 **Ocio** — YouTube, pelis/series, podcasts, música, juegos, sorpréndeme
- ✅ **Tareas** — Sincronizadas con Notion (Hoy / Próximas / Algún día)
- 👧 **Kira** — Actividades padre-hija por roles, calendario semanal, hitos de desarrollo
- 📍 **Planes** — Planes familiares por categoría (indoor, aire libre, etc.)
- 🧠 **Aprender** — Lista de libros, podcasts, cursos
- 📝 **Diario** — Mood tracker, calendario emocional (Firebase)
- 📅 **Calendario** — iCloud + eventos locales
- ✨ **IA** — Coach diario, patrones, predicciones, proyección patrimonio

## 🛠 Stack técnico

- **HTML + CSS + JS vanilla** — sin build tools, todo en archivos planos
- **Firebase Firestore** — diario emocional sincronizado
- **Notion API** — tareas vía CORS proxy
- **Groq API** (Llama 3 70B / 8B) — funciones IA
- **iCloud Calendar** — eventos vía webcal + corsproxy
- **localStorage** — caché local de todo
- **Service Worker** — funciona offline tras primera carga
- **PWA instalable** en iPhone y Android

---

## 🚀 Desarrollo local

### Opción A (Windows): script
Doble-click en `serve.bat` y abre http://localhost:8000

### Opción B (cualquier sistema): comando
```bash
# Desde la carpeta del proyecto
python -m http.server 8000
# o
python3 -m http.server 8000
```
Luego abre http://localhost:8000

### Opción C: Node.js
```bash
npx serve -p 8000
```

⚠️ **NUNCA abras los .html directamente** — rompe Firebase, Service Worker, iCloud y Notion.

---

## 📲 Instalar en iPhone

1. Abre https://50690daniel.github.io/LifePilot/ en **Safari** (no Chrome)
2. Botón Compartir → "Añadir a pantalla de inicio"
3. Abre el icono desde la home del iPhone
4. Las notificaciones se piden la primera vez — acepta para que funcionen

## 📲 Instalar en Android

1. Abre https://50690daniel.github.io/LifePilot/ en **Chrome**
2. Menú → "Instalar aplicación"
3. Acepta los permisos de notificación

---

## 🔑 API Keys

| Servicio | Variable | Estado |
|---|---|---|
| Firebase | en `<script type="module">` al inicio | ✅ activo |
| Notion | `const TK_NOTION = ...` | ⚠️ revisar token |
| Groq | `const GROQ_KEY = ...` | ✅ activa |
| Google Sheets | `const SHEET_ID = ...` | ✅ activa |

Si Groq da 401 → renovar key en https://console.groq.com y reemplazar
en `index.html`, `mobile.html` y `ejercicios.html`.

---

## 🚢 Deploy

Cada `git push` a `main` despliega automáticamente via GitHub Pages.
Tarda 1-2 min en propagar.

```bash
# Desde GitHub Desktop:
# 1. Commit changes
# 2. Push origin
# 3. Esperar 2 min
# 4. Abrir https://50690daniel.github.io/LifePilot/
# 5. Ctrl+Shift+R para limpiar caché del Service Worker
```

---

## 🐛 Troubleshooting

**Error 401 en Groq** → key caducada, renovar en console.groq.com
**Error 401 en Notion** → token caducado, regenerar en notion.so/my-integrations
**Página en blanco al cambiar de tab** → hacer **Ctrl+Shift+R** (Service Worker cacheó versión vieja)
**Notificaciones no llegan** → solo funcionan tras instalar como PWA y aceptar permisos
**ExerciseDB GIFs no cargan** → API ahora requiere key de pago, ahora muestra emojis del grupo muscular

---

## 📝 Pendiente

- [ ] Mover token Notion a Cloudflare Worker
- [ ] Pull-to-refresh en Tareas y Diario
- [ ] Timer descanso flotante (Live Activity-style)
- [ ] Permitir editar diario tras guardarlo
- [ ] Lista de compra inteligente
- [ ] Review semanal automatizada (domingo)

## 📜 Licencia

Privado — uso personal.
