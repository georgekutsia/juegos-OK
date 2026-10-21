# Asignado

Juego integrado en Sumas y restas después de Resta-dos. Ocupa un espacio reservado: el catálogo mantiene seis tarjetas, con cinco juegos disponibles y una pelota para el próximo. La tarjeta y la escena usan el mismo tren en SVG, con cinco vagones de colores y una locomotora con el personaje de los otros juegos.

## Reglas y decisiones

- Fácil: una operación completa salvo el signo. Se elige sumar o restar.
- Medio: faltan el signo y el segundo número. Hay dos signos y tres números distintos; exactamente una pareja completa la igualdad. El signo y el número se pueden elegir en cualquier orden.
- Difícil: el formato de Medio, con 5, 7 o 10 segundos por pregunta. Inicialmente son 7 segundos; no hay plazo total de partida.
- Los operandos y resultados generados son positivos, acotados por 10, 20 y 50 según el nivel. No se repite consecutivamente la misma operación.
- La respuesta correcta se valida al elegir, sin confirmación adicional. Se mantiene visible en verde un segundo. Después el siguiente vagón se acerca y engancha al tren; aparece otra pregunta durante la animación.
- Una elección completa incorrecta se marca en rojo un segundo y se puede corregir. Conserva la operación y el plazo restante. La pérdida de vagón se produce al agotar el tiempo sin acertar.
- Se comienza por el vagón más próximo a la locomotora, a la derecha. Los vencimientos retiran el vagón superviviente más a la izquierda, que se aleja hasta desaparecer. Cada vencimiento retira uno solo.
- Cuando todos los vagones supervivientes están enganchados, arranca el tren. Esto permite completar Difícil con entre uno y cinco vagones. Si el último vagón suelto se marcha por tiempo, el tren puede partir con los que ya estaban enganchados. Si se queda sin ninguno, se pierde.
- Repetir conserva la dificultad y el tiempo elegido; restaura los cinco vagones sin enganchar. No se cambia de nivel al completar una ronda y no se muestra un contador 0/5.

## Acceso e implementación

- `/puzzles/sumas-y-restas/asignado` abre Fácil.
- `/puzzles/sumas-y-restas/asignado/facil`
- `/puzzles/sumas-y-restas/asignado/medio`
- `/puzzles/sumas-y-restas/asignado/dificil`

Las rutas se registran en `gameRoutes.js` y se resuelven en `GameScreen.jsx`. El juego está exportado en `components/index.js`; `addSubtractGameData.js` y `AddSubtractGameComponent.jsx` integran la tarjeta y sus tres niveles. Se mantiene el catálogo principal de Puzles, sin duplicar entradas.

`AssignedGameComponent.jsx` contiene las elecciones, el plazo y el flujo de ronda. `assignedGameData.js` genera operaciones y resuelve la progresión del tren con funciones puras. `AssignedTrainScene.jsx` y `assignedTrain.css` dibujan los vagones, enganches, retirada, ruedas y salida del tren. `assignedGame.css` adapta los controles. Se reutilizan los estilos de los juegos anteriores, el retorno, `MathPassenger`, el selector de tiempos y el confeti de Sumas. No hay recursos externos ni preferencias de localStorage nuevas.

El niño elige números entre tres botones, sin campo de texto ni teclado nativo del teléfono. Todos los controles son botones que funcionan con Tab, Enter y Espacio. Las selecciones exponen `aria-pressed`; la igualdad y el tren tienen descripciones accesibles. El foco pasa al siguiente ejercicio y al botón de repetir al terminar. El estado correcto/incorrecto tiene explicación textual además del color. Las animaciones respetan movimiento reducido. Los intervalos, avisos y la salida pendiente se cancelan al abandonar el juego.

Los textos `assigned*` existen en español y alemán. La pista se mantiene encima de la operación. En teléfonos bajos el catálogo pasa a dos columnas para mostrar sus seis tarjetas sin scroll.

## Verificación

- Seis pruebas de lógica: 9.000 operaciones con una sola solución entre las seis combinaciones ofrecidas, rechazo de selecciones inválidas, enganche desde la locomotora, salida del vagón izquierdo, derrota sin vagones, los 32 órdenes posibles de aciertos y vencimientos, y rutas por nivel.
- 147 comprobaciones de navegador, sin excepciones: victoria y reinicio en los tres niveles, pausa correcta de un segundo, selección de signo/número en ambos órdenes, error corregible, cinco vencimientos reales de cinco segundos, pérdida de un solo vagón por plazo, orden de retirada y derrota. Se prueban victorias con uno, dos, tres y cinco vagones, incluida la salida al perder el último vagón suelto.
- Se revisan las opciones de 5/7/10 segundos, el valor inicial de 7, la conservación del tiempo al reiniciar, la ausencia de reinicio del plazo tras un error, la aceptación de un acierto antes del límite y el rechazo de un clic posterior. Salir durante una penalización o durante la salida del tren cancela los cambios pendientes.
- Se verifican Tab/Enter/Espacio mediante botones nativos, elección del número antes del signo, foco de reinicio, catálogo → juego → retorno, URL base, URL por nivel, recarga y Atrás/Adelante. Con movimiento reducido se evita el desplazamiento de los vagones y del tren, conservando la posibilidad de terminar.
- Catálogo en 1542 × 787, 768 × 1024, 390 × 844, 320 × 568, 844 × 390 y 568 × 320. Juego y estados de elección de tiempo, pregunta y derrota en escritorio y los cuatro tamaños de teléfono, con textos españoles y alemanes. Sin scroll ni controles recortados en las vistas revisadas.
- Pruebas de navegador con emulación de Chrome; no sustituyen una comprobación en teléfono físico ni con lector de pantalla real.
- Compilación final correcta. Pasan las seis pruebas nuevas y las nueve anteriores de Combina-dos/Resta-dos: quince en total. El lint de los archivos afectados pasa; el global mantiene los 26 errores y 8 avisos anteriores fuera del cambio. La compilación conserva el aviso previo de tamaño del paquete JavaScript.

Comandos: `node src/data/assignedGameData.test.js`, `node src/data/subtractTwoGameData.test.js`, `node src/data/combineTwoGameData.test.js`, ESLint sobre los archivos afectados, `npm run lint` y `npm run build`.

## Capturas

- [Catálogo móvil](qa/assigned/menu-320.png)
- [Medio en escritorio](qa/assigned/medio-1542.png)
- [Medio en móvil vertical](qa/assigned/medio-390.png)
- [Medio en móvil horizontal](qa/assigned/medio-568.png)
- [Todos los vagones enganchados](qa/assigned/all-coupled.png)
- [Un vagón perdido](qa/assigned/one-wagon-lost.png)
- [Salida con tres vagones](qa/assigned/departing-three-wagons.png)
- [Derrota](qa/assigned/lost-desktop.png)
