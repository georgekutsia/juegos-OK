# URLs propias para los juegos

El catálogo abre enlaces reales. Las rutas seleccionan el juego directamente y funcionan al pegar la URL, recargar o usar Atrás y Adelante. Se conserva la animación de entrada de las tarjetas y se permite abrirlas en otra pestaña.

Las rutas se declaran en `src/data/gameRoutes.js`; `GameScreen.jsx` renderiza el componente correspondiente. Los catálogos conservan sus imágenes, traducciones y orden, pero ya no guardan el juego activo en un estado local. Los enlaces son independientes del idioma y de la posición de la tarjeta.

| Juego o menú | Ruta |
| --- | --- |
| Elecciones | `/questions/elecciones` |
| Tamaños y fuerzas | `/questions/tamanos-y-fuerzas` |
| Sonidos de animales | `/sounds/sonidos-de-animales` |
| Cuentos y aventuras | `/sounds/cuentos-y-aventuras` |
| Historias de los amigos | `/sounds/historias-de-los-amigos` |
| Colores, ¡a correr! | `/sports/colores-a-correr` |
| Busca el tesoro | `/sports/busca-el-tesoro` |
| Dibuja formas | `/drawings/dibuja-formas` |
| Siluetas y animales | `/puzzles/siluetas-y-animales` |
| Imagen desaparecida | `/puzzles/imagen-desaparecida` |
| Memoria | `/puzzles/memoria` |
| Rompecabezas deslizante | `/puzzles/rompecabezas-deslizante` |
| Sumas y restas | `/puzzles/sumas-y-restas` |
| Multiplicaciones y divisiones | `/puzzles/multiplicaciones-y-divisiones` |
| Los despistes de Okina | `/sounds/cuentos-y-aventuras/los-despistes-de-okina` |
| Jifi, la jirafa | `/sounds/cuentos-y-aventuras/jifi-la-jirafa` |
| Primer día de cole | `/sounds/historias-de-los-amigos/primer-dia-de-cole` |

Sumas y Restas tienen además rutas por operación y nivel: `/puzzles/sumas-y-restas/{sumas|restas}/{facil|medio|dificil}`. La URL abre la configuración del nivel; recargar permite iniciar una partida nueva. Las operaciones mantienen la validación inmediata y el teclado numérico. Cambiar de URL desmonta la partida anterior.

El catálogo interactivo se identifica con `/puzzles?view=interactive`, por lo que al volver se conserva la vista adecuada incluso después de una recarga. Las rutas inexistentes muestran la página 404. Las tarjetas sin implementación permanecen deshabilitadas; los cuentos que antes abrían una vista vacía se identifican como «Próximamente».

Netlify conserva la regla `/* /index.html 200` en `public/_redirects`, copiada a `dist/_redirects`. Es la regla necesaria para servir la aplicación al solicitar una URL de juego directamente. No se ha realizado ningún despliegue.

## Salida de una partida

Los audios creados mediante JavaScript en Sonidos de animales, Okina, Jifi y Primer día de cole se registran en `useGameAudio` y se pausan al desmontar el juego. Se limpian también el cronómetro de Busca el tesoro y los intervalos, avisos y sonido de Colores, ¡a correr! Los tiempos guardados y las preferencias conservan sus claves y valores.

## Verificación

- 426 comprobaciones automatizadas en Chrome local: apertura desde las tarjetas, URL correcta, componente esperado, acceso directo, recarga, retorno y rutas inexistentes. Comprobación de Atrás/Adelante para los 14 accesos del catálogo y los seis niveles de matemáticas.
- Escritorio de 1542 × 787 y móvil vertical de 390 × 844. Restas en móvil horizontal de 844 × 390 sigue sin scroll y conserva sus doce botones numéricos. Son emulaciones de navegador, no pruebas en un teléfono físico.
- Los seis niveles de sumas y restas aceptan respuestas correctas inmediatamente. Tras recargar aparece la configuración del mismo juego y nivel.
- Entrada con Enter desde un enlace y foco en la pantalla de juego; etiquetas y rutas comprobadas en español y alemán.
- Limpieza de audios verificada con reproducción instrumentada; limpieza de intervalos comprobada al usar Atrás. No se ha evaluado el sonido audible de los cuentos.
- Compilación correcta. ESLint de los archivos nuevos y de navegación sin errores. El análisis global pasa de 46 a 26 errores y conserva 8 avisos, todos anteriores; no se introducen diagnósticos.
- [Captura de Restas con URL propia en horizontal](qa/game-routes/subtraction-landscape.png).
