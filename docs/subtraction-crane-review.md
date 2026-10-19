# Restas: la grúa y los globos

Acceso: Puzles → juegos interactivos → Sumas y restas → Restas → nivel.

La ilustración de la grúa sustituye al coche en la opción Restas. El dibujo vectorial se reutiliza dentro del juego: cable, gancho, tablón de madera y 30 globos rojos distribuidos en tres filas. No depende de imágenes externas.

La carga se balancea ligeramente (±0,75 grados, ciclo de seis segundos). No se muestra el contador de aciertos en ninguno de los niveles.

Al ganar el nivel medio, los cuervos presentes se transforman en confeti desde su posición, también si están en vuelo. Sumas y restas reutilizan el mismo componente, colores y animación de confeti. La celebración dura 1,1 segundos; después no quedan pájaros visibles. Con movimiento reducido se omite la animación.

Cada respuesta correcta hace explotar tantos globos como su resultado y eleva la carga un quinto del recorrido. La siguiente resta aparece de inmediato, mientras continúa el movimiento. Al quinto acierto no quedan globos y la carga llega arriba. El reinicio restaura el tablón y los 30 globos.

Las restas tienen resultados positivos. Para que los globos alcancen exactamente hasta el quinto acierto, las cinco respuestas suman 30; se reservan globos para las preguntas restantes. El máximo de 10, 20, 30, 50 o 100 limita los operandos.

Se mantienen los tres niveles y los valores de configuración de las sumas:

- Fácil: sin límite de tiempo.
- Medio: diez cuervos sustituyen a la cuenta atrás numérica. Vuelan hasta el tablón y permanecen posados. Llegan cada 12, 9, 6 o 3 segundos según el ritmo elegido (120, 90, 60 o 30 segundos en total). El décimo aterriza antes de que se rompa la cuerda y baje la carga. Si se alcanza el quinto acierto a tiempo, se gana aunque todavía quede movimiento de la grúa.
- Difícil: además, 5, 7 o 10 segundos por pregunta. Un error o tiempo agotado reduce el tiempo total; no retira globos ni eleva la carga.

## Implementación

- `AddSubtractGameComponent.jsx`: integración en el menú existente, controlador y controles compartidos con sumas.
- `SubtractionCraneScene.jsx` y `subtractionCrane.css`: ilustración y animaciones de cable, carga y globos, con alternativa de movimiento reducido.
- `addSubtractGameData.js`: generador de restas y cantidad de globos.
- `esp.jsx` y `ger.jsx`: dieciséis claves nuevas sincronizadas, incluidas instrucciones y descripciones accesibles.
- La categoría y su entrada existente conservan su posición; no se añaden rutas ni se reordenan tarjetas.

## Verificación

- 25.000 restas generadas con todos los máximos: operandos dentro del límite, respuestas positivas y exactamente 30 globos consumidos en cinco aciertos.
- 110 comprobaciones en Chrome: menú, configuración y juego en español y alemán; seis partidas completas, reinicio, errores y agotamiento del tiempo por pregunta.
- Vistas: 1542 × 787, 1024 × 768, 768 × 1024, 390 × 844, 320 × 568, 844 × 390, 568 × 320 y 390 × 300. Las pistas de suma y la escena de restas siguen encima de la operación. Sin desbordamiento ni controles recortados en las vistas comprobadas.
- Comprobaciones adicionales: derrota al agotar el tiempo total, movimiento reducido, victoria alemana en ocho tamaños y retorno al catálogo.
- Regresión de los tres niveles de sumas: siguiente pregunta inmediata y victoria correctas.
- Cuervos: comprobadas las cuarenta llegadas entre las cuatro velocidades, un ave en vuelo antes de cada aterrizaje y ninguna rotura antes del décimo. Se verificó la rotura con la carga elevada, el reinicio, la salida durante el último aterrizaje y la victoria al límite del tiempo.
- Balanceo y vuelo se desactivan con movimiento reducido; los cuervos posados siguen visibles. Otras 42 comprobaciones de distribución en español y alemán, sin scroll.
- Celebración: comprobadas la transformación de cuatro cuervos posados y uno en vuelo, la desaparición final, el reinicio, la ausencia de confeti al perder y la regresión de confeti en sumas. Sin scroll en 1542 × 787, 320 × 568, 568 × 320 y 390 × 300.
- ESLint de los archivos nuevos y modificados del juego y traducciones: correcto. El análisis global conserva los 46 errores y 8 avisos previos del proyecto.
- Compilación de producción correcta; permanece el aviso previo sobre el tamaño del paquete JavaScript.

Las pruebas son de navegador con emulación móvil; no sustituyen la comprobación del teclado virtual en un teléfono físico.

## Capturas

- [Grúa inicial con 30 globos](qa/subtraction/crane-desktop.png)
- [Nivel difícil en móvil horizontal](qa/subtraction/crane-landscape.png)
- [Carga arriba y globos agotados](qa/subtraction/crane-complete.png)
- [El último cuervo llega volando](qa/subtraction/crows-arriving.png)
- [Diez cuervos posados y cuerda rota](qa/subtraction/rope-broken.png)
- [Los cuervos se transforman en confeti al ganar](qa/subtraction/crows-confetti.png)
