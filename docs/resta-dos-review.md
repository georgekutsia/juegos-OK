# Resta-dos

Juego integrado en Sumas y restas, después de Combina-dos. Con la incorporación posterior de Asignado, el catálogo mantiene seis tarjetas: cinco juegos y un espacio con pelota para el próximo. La tarjeta utiliza una vista del globo dibujada en SVG, sin recursos externos nuevos.

## Reglas

- Fácil: dos casillas vacías; cualquier pareja de enteros no negativos cuya diferencia sea el resultado indicado es válida. El orden de las casillas importa.
- Medio: una casilla contiene un número fijo. Tanto el número dado como la solución pendiente son positivos y no superan el máximo del modo.
- Difícil: el mismo formato de Medio, con 5, 7 o 10 segundos por respuesta. El valor inicial es 7; no hay límite total de partida.
- Máximos de generación: 10, 20 y 50. Los resultados positivos son menores que el máximo y no se repiten consecutivamente.
- Se valida al teclear, sin esperar a ✓. La respuesta correcta permanece visible un segundo; después cae un peso y aparece otra pregunta. Tras cinco aciertos, cae el último peso y el globo despega. No se cambia automáticamente de dificultad.
- Un error confirmado con Enter o ✓ marca la casilla editable en rojo un segundo, conserva la pregunta y no añade cuervos ni reinicia el plazo.
- Solo en Difícil, cada vencimiento incorpora un cuervo, con vuelo de 900 ms. Los cuatro primeros dejan paso a la siguiente pregunta. El quinto llega antes de que los cinco piquen el globo. El desinflado dura cuatro segundos, con los controles bloqueados; después aparece la derrota y el botón de reinicio. Los aciertos no eliminan cuervos acumulados.
- Repetir restaura los cinco pesos, elimina los cuervos y conserva el tiempo elegido. Salir cancela los temporizadores pendientes de respuesta, llegada del quinto cuervo, desinflado y despegue.

## Acceso y componentes

- `/puzzles/sumas-y-restas/resta-dos` abre Fácil.
- `/puzzles/sumas-y-restas/resta-dos/facil`
- `/puzzles/sumas-y-restas/resta-dos/medio`
- `/puzzles/sumas-y-restas/resta-dos/dificil`

Las URL se registran en `gameRoutes.js` y se resuelven en `GameScreen.jsx`, con el retorno al catálogo de Sumas y restas. Se conserva el catálogo principal de Puzles sin duplicar entradas.

`SubtractTwoGameComponent.jsx` y `CombineTwoGameComponent.jsx` reutilizan `TwoNumberGameComponent.jsx`: respuestas, foco, teclado numérico, pausas, opciones de tiempo, reinicio y confeti. `subtractTwoGameData.js` proporciona la generación y validación de restas; `BalloonScene.jsx` y `balloonScene.css` dibujan y animan el globo, la cesta, los pesos y los cuervos. `MathPassenger.jsx` dibuja el mismo personaje en ambos juegos. Al derrumbarse la montaña rusa, baja los brazos, agacha la cabeza y deja de sonreír; la postura se mantiene hasta reiniciar.

El teclado ofrece 0–9, borrar y ✓, con teclado físico y sin teclado nativo móvil. La escena permanece por encima de la operación y los controles. Las animaciones respetan movimiento reducido; el resultado de la derrota conserva sus cuatro segundos. El foco pasa al reinicio al ganar o perder. Los textos `subtractTwo*`, incluidas las etiquetas accesibles, existen en español y alemán. No se añaden preferencias ni claves de localStorage.

## Verificación

- Cuatro pruebas automatizadas nuevas: 6.000 preguntas guiadas válidas y acotadas, todas las descomposiciones positivas hasta 50 con cero permitido en el segundo término, rechazo de datos inválidos, rutas independientes y duración del desinflado. También pasan las cinco pruebas previas de Combina-dos.
- 165 comprobaciones de navegador sin excepciones: victoria y reinicio en las tres dificultades, un peso por acierto, confirmación de un segundo, errores manuales sin cuervos, cinco vencimientos reales de cinco segundos, llegada del quinto antes del pinchazo, desinflado medido durante aproximadamente cuatro segundos, reinicio tras derrota, persistencia de cuervos entre aciertos y salida durante avisos, llegada y desinflado. Se comprueban también movimiento reducido, teclado físico y de pantalla, borrado, foco, acceso desde el catálogo, URL base y por dificultad, recarga, Atrás/Adelante y retorno al catálogo.
- Regresión de Combina-dos: cinco aciertos siguen completando la montaña rusa; cinco vencimientos la derrumban. La cabeza baja y la boca deja de sonreír durante el derrumbe y la derrota; reiniciar recupera la postura inicial.
- Diseño sin scroll ni controles recortados en 1542 × 787, 768 × 1024, 390 × 844, 320 × 568, 844 × 390 y 568 × 320, con vistas en español y alemán. El catálogo se compacta en pantallas bajas para conservar los cuatro juegos y los dos espacios reservados.
- Pruebas en Chrome mediante emulación de escritorio y teléfono; no se ha usado un teléfono físico ni un lector de pantalla real.
- Compilación final correcta y lint de todos los archivos afectados sin errores. El lint global conserva los 26 errores y 8 avisos anteriores, fuera del cambio. La compilación conserva el aviso de tamaño del paquete JavaScript.

Comandos: `node src/data/subtractTwoGameData.test.js`, `node src/data/combineTwoGameData.test.js`, ESLint sobre los archivos afectados, `npm run lint` y `npm run build`.

## Capturas

- [Catálogo en pantalla estrecha](qa/resta-dos/menu-320.png)
- [Fácil en escritorio](qa/resta-dos/facil-1542.png)
- [Fácil en móvil vertical](qa/resta-dos/facil-390.png)
- [Dos cuervos acumulados](qa/resta-dos/two-crows-desktop.png)
- [Desinflado en curso](qa/resta-dos/deflating-desktop.png)
- [Derrota](qa/resta-dos/lost-desktop.png)
- [Personaje de la montaña rusa tras perder](qa/resta-dos/coaster-sad-passenger.png)
