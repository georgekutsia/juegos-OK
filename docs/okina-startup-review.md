# Saludo de Okina al iniciar la web

**Estado actual:** desactivado por petición del usuario. `App.jsx` muestra directamente la aplicación; los archivos de animación se conservan. Las notas siguientes describen la integración anterior. La pantalla de inicio utiliza ahora las cinco imágenes de categoría de Okina; véase `okina-categories-review.md`.

Cada carga completa o recarga reproduce el saludo de Okina una vez, durante aproximadamente 6,5 segundos. También funciona al abrir directamente la URL de un juego. La navegación interna mantiene la aplicación montada y no repite el saludo.

`src/components/loaders/StartupIntro.jsx` envuelve la navegación y las rutas en `App.jsx`. Las pantallas se montan cuando termina el saludo o se pulsa Saltar saludo/Escape: los juegos no consumen tiempo durante la introducción. El vídeo se reproduce silenciado, dentro de la página y sin controles nativos. Fondo difuminado y tamaño limitado tanto por anchura como por altura disponibles.

Vídeo: `public/video/okina-welcome.mp4`, copia del MP4 aprobado en `Okina-avatar/Okina-saludo.mp4` (720 × 720, 1.440.522 bytes). Queda incluido en `dist/video/` al compilar. No se añaden dependencias ni se cambian las animaciones de carga de cada juego.

Accesibilidad: botón nativo de al menos 44 px, foco visible, Tab contenido en el saludo y Escape para salir. Las preferencias de movimiento reducido abren directamente la pantalla. Los fallos de descarga o reproducción permiten continuar; un límite de 15 segundos evita bloqueos del reproductor. Efectos, temporizador y reproducción se limpian al terminar.

Traducciones añadidas en español y alemán: `okinaWelcome`, `okinaWelcomeSkip`.

## Verificación

- 19 comprobaciones de navegador correctas: primera visita, reproducción completa, recarga, navegación interna, URL directa de suma fácil, salto con botón/Enter/Escape, foco y Tab, alemán, movimiento reducido, vídeo bloqueado y respuesta del recurso MP4.
- Escritorio 1280 × 800 y móvil 390 × 844, 844 × 390 y 320 × 568: sin scroll ni recortes del saludo.
- Sin excepciones de JavaScript durante las pruebas.
- ESLint de `App.jsx` y `StartupIntro.jsx`: correcto.
- `npm run build`: correcto. Conserva el aviso previo de tamaño del paquete JavaScript.
- `npm run lint`: 25 errores y 8 advertencias previos en otros componentes. Antes del cambio había 26 errores y 8 advertencias; se ha eliminado la importación sin uso de `useEffect` en `App.jsx`.

Resultados y capturas: `docs/qa/okina-startup/`.

Comprobado con Chrome local en modo headless. No se ha desplegado ni comprobado en un dispositivo iOS físico.
