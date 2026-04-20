# LifePilot

PWA personal de productividad y seguimiento diario, optimizada para iPhone 15.

## Módulos

- 🥗 **Nutrición** — Checklist diario con racha.
- 💪 **Ejercicios** — Rutina L–J con series, pesos y timer de descanso.
- 🎬 **Ocio** — YouTube, pelis/series, música, juegos, aleatorizador.
- ✅ **Tareas** — Sincronizadas con Notion (Hoy / Próximas / Algún día).
- 👧 **Kira** — Actividades padre–hija por roles (profesor, explorador, artista...).
- 📍 **Planes** — Planes familiares por categoría + webs de recursos locales.
- 🧠 **Aprender** — Lecturas, podcasts y cursos.
- 📝 **Diario** — Mood tracker diario, calendario y exportación (Firebase).

## Stack

- HTML + CSS + JS vanilla en un solo `index.html`.
- **Firebase Firestore** para el diario emocional (sincronización multi-dispositivo).
- **Notion API** para tareas (vía CORS proxy).
- **localStorage** para el resto de estado local.
- PWA instalable (Añadir a pantalla de inicio).

## Instalación en iPhone

1. Abrir `https://50690daniel.github.io/LifePilot/` en Safari.
2. Botón Compartir → "Añadir a pantalla de inicio".
3. Abrir el icono desde la home del iPhone.

## Desarrollo

Todo el código está en `index.html`. Para iterar:

```bash
# Opción A: abrir directamente
open index.html

# Opción B: servidor local (para probar Firebase/Notion sin CORS raro)
python3 -m http.server 8000
# → http://localhost:8000
```

Para desarrollo desde el navegador sin instalar nada: **GitHub Codespaces**
(botón verde "Code" → pestaña Codespaces → "Create codespace on main").

## Optimizaciones iOS aplicadas

- Safe Area top/bottom/left/right vía `env(safe-area-inset-*)`.
- Viewport accesible (sin bloqueo de zoom).
- Capa de haptics (`navigator.vibrate`) en checks, series, guardar, completar, borrar.
- Modal nativo-style para editar pesos (sustituye a `window.prompt`).
- Typography y colores del sistema iOS 17 dark.
- Transiciones slide-in con easing iOS.

## Pendiente

- [ ] Mover token de Notion a un Cloudflare Worker / Firebase Function.
- [ ] Revisar Firestore Security Rules.
- [ ] Pull-to-refresh en Tareas y Diario.
- [ ] Timer de descanso flotante (pseudo-Live Activity).
- [ ] Gesto swipe-back desde borde izquierdo.
- [ ] Permitir editar el diario del día tras guardar.

## Licencia

Privado — uso personal.
