# Combina-dos

Nuevo juego en Sumas y Restas, inmediatamente después de Restas. Ocupa el primer espacio reservado y deja tres tarjetas con pelota para próximos juegos. El catálogo conserva seis tarjetas.

## Reglas y decisiones

- Fácil conserva las dos casillas vacías. Cualquier pareja de enteros no negativos que forme el objetivo es válida, incluido cero. Ambas casillas deben contener un número; una casilla vacía no se interpreta como cero.
- Medio muestra un sumando fijo en una de las dos casillas, elegida al azar. Ese número es siempre mayor que cero y menor que el resultado. Solo se puede editar la otra casilla, cuyo valor correcto también es positivo.
- Difícil usa el mismo formato que Medio, con un plazo por respuesta de 5, 7 o 10 segundos, elegido antes de empezar. El valor predeterminado es 7 segundos. No hay límite total de partida.
- Los objetivos son enteros entre 2 y 10, 2 y 20, y 2 y 50 para Fácil, Medio y Difícil respectivamente.
- La respuesta correcta se valida al teclear. La pareja y el objetivo permanecen visibles un segundo, con las casillas verdes. Después se vacían las casillas, aparece otro objetivo y avanza el vagón.
- Cada acierto avanza un quinto de la subida. El quinto bloquea las respuestas mientras el vagón llega a la cima y baja por la otra pendiente. Después termina la ronda en esa misma dificultad. No se cambia de nivel automáticamente.
- Los colores de las vigas y los raíles distinguen los modos: naranja/morado, verde/azul y morado/coral. «Volver a empezar» inicia otra ronda del mismo modo, con el vagón en la base. En Difícil conserva el tiempo elegido.
- Si vence el plazo de una pregunta en Difícil, se rompe una viga: se separa en dos fragmentos con astillas visibles. La casilla editable se marca en rojo durante un segundo y se genera una pregunta nueva, sin avanzar el vagón. El daño se conserva entre preguntas y aciertos. Al romper cinco vigas, la estructura se desploma hasta el suelo y el vagón baja al suelo; los controles se bloquean y la ronda termina con opción de volver a empezar. Repetir reconstruye todas las vigas y conserva el tiempo elegido. Una comprobación incorrecta manual no rompe vigas ni reinicia el plazo. Un acierto aceptado dentro de tiempo conserva su segundo de confirmación y la siguiente pregunta recibe el plazo completo.
- Cada casilla puede seleccionarse con un toque. Se reutilizan el patrón y los estilos del teclado numérico de Sumas: 0–9, borrar y el botón ✓, sin abrir el teclado nativo móvil. El teclado físico admite cifras, borrar, Enter, Tab y flechas para cambiar de casilla.
- Si se confirma una respuesta incorrecta o incompleta con ✓ o Enter, ambas casillas se ponen rojas un segundo y luego recuperan su aspecto normal. Los números se conservan para corregirlos. Los controles se bloquean durante estas pausas para evitar comprobaciones duplicadas.

## Acceso y archivos

- `/puzzles/sumas-y-restas/combina-dos` abre Fácil.
- `/puzzles/sumas-y-restas/combina-dos/facil`
- `/puzzles/sumas-y-restas/combina-dos/medio`
- `/puzzles/sumas-y-restas/combina-dos/dificil`

Las rutas se registran en `src/data/gameRoutes.js` y se resuelven en `GameScreen.jsx`. La URL solo cambia al elegir un modo desde el menú; completar o repetir una ronda mantiene esa URL. Recargar inicia de nuevo el modo indicado, mostrando la elección de tiempo si es Difícil.

`CombineTwoGameComponent.jsx` contiene las respuestas y la progresión; `CoasterScene.jsx` dibuja la montaña rusa, el vagón y su único pasajero en SVG. La escena usa el mismo trazado para dibujar la vía y posicionar el vagón durante la animación. `combineTwoGameData.js` define los niveles, colores y validación. Se reutilizan el botón de retorno y el confeti de Sumas, con textos `combineTwo*` y `mathFutureSoon` en español y alemán.

Los fotogramas de animación y los temporizadores de respuesta se cancelan al salir. Con movimiento reducido se muestran las posiciones finales de subida y bajada sin desplazamiento continuo. No se muestra un contador 0/5. La selección de tiempo se guarda solo en el estado del componente; no se añaden ni modifican claves de localStorage.

La rotura y el derrumbe respetan también la preferencia de movimiento reducido, mostrando el resultado estático. La escena describe las vigas rotas para lectores de pantalla, el fallo se anuncia con texto y el foco pasa al botón de reinicio al terminar. El intervalo queda detenido durante el derrumbe y la derrota; salir cancela tanto la caída del vagón como el cierre pendiente de la ronda.

El vagón comienza más adentro de la vía, con suficiente raíl detrás de la rueda trasera y la carrocería. Los cinco avances siguen llegando exactamente a la cima. Los temporizadores del aviso de respuesta también se cancelan al salir.

## Verificación

- Cinco pruebas automatizadas de lógica: objetivos enteros dentro del máximo y sin repetición consecutiva, todas las descomposiciones de 2 a 50, rechazo de respuestas inválidas, dos mil preguntas guiadas con un sumando menor que el resultado y un único hueco, y separación del formato Fácil y el temporizador de Difícil.
- 78 comprobaciones funcionales de la separación de modos: cinco aciertos y repetición en cada dificultad sin cambios de URL, regreso del vagón a la base, sumando fijo no editable y siempre menor, opciones de 5/7/10 segundos, cuenta atrás real, vencimiento sin avance del vagón, pregunta nueva con plazo completo y limpieza al salir. Otras 24 comprobaciones revisan textos alemanes y diseño móvil: 102 en total.
- Salida durante la última subida sin navegación posterior pendiente; progresión comprobada con movimiento reducido. Sin excepciones de ejecución.
- Menú y juego sin scroll ni recortes en 1542 × 787, 1024 × 768, 768 × 1024, 390 × 844, 320 × 568, 844 × 390 y 568 × 320. Los cuatro tamaños de teléfono se comprueban además con textos alemanes. Pruebas con emulación de Chrome, no con un teléfono físico.
- Compilación correcta. Lint de los archivos nuevos y modificados correcto. El lint global conserva los 26 errores y 8 avisos previos.
- Derrumbe de Difícil: 77 comprobaciones adicionales en navegador, sin excepciones. Cinco vencimientos reales de cinco segundos rompen exactamente una viga cada vez y el quinto cierra la ronda. Se revisan daños persistentes tras acertar, victoria con daños, reinicio tras ganar y perder, conservación del plazo elegido, ausencia de penalización por un error manual, bloqueo durante la caída y limpieza al salir durante el aviso y durante el derrumbe. Se verifican textos en español y alemán, foco del reinicio, movimiento reducido y ausencia de scroll en escritorio y cuatro tamaños de teléfono. Las comprobaciones complementarias aceleran solo el reloj de las preguntas.

Comandos: `node src/data/combineTwoGameData.test.js`, `npm run lint` y `npm run build`.

La revisión de la pausa de respuesta pasa 48 comprobaciones adicionales: conservación de los números correctos, cambio posterior de objetivo, rojo temporal mediante Enter y ✓, recuperación de las casillas sin perder números, recorrido de los tres niveles, posición inicial interior en cada nivel, cancelación al salir y ausencia de scroll en los cuatro tamaños de teléfono. Pausas medidas en navegador: 1,012 s para el acierto y 1,003 s para el error.

## Capturas

- [Menú de escritorio](qa/combine-two/menu-1542.png)
- [Juego en escritorio](qa/combine-two/game-1542.png)
- [Móvil vertical](qa/combine-two/game-390.png)
- [Móvil horizontal](qa/combine-two/game-568.png)
- [Llegada a la cima](qa/combine-two/summit.png)
- [Juego completado](qa/combine-two/complete.png)
- [Posición inicial corregida](qa/combine-two-feedback/start-desktop.png)
- [Respuesta correcta visible durante un segundo](qa/combine-two-feedback/correct.png)
- [Respuesta incorrecta en rojo](qa/combine-two-feedback/incorrect.png)
- [Botón ✓ en móvil](qa/combine-two-feedback/start-mobile.png)
- [Medio con un sumando fijo](qa/combine-two-modes/medio-desktop.png)
- [Opciones de tiempo en Difícil](qa/combine-two-modes/hard-options-mobile.png)
- [Difícil en móvil vertical](qa/combine-two-modes/dificil-390.png)
- [Difícil en móvil horizontal](qa/combine-two-modes/dificil-568.png)
- [Difícil en alemán, pantalla estrecha](qa/combine-two-modes/hard-german-320.png)
- [Dos vigas rotas](qa/combine-two-collapse/two-broken-desktop.png)
- [Derrumbe completado](qa/combine-two-collapse/collapsed-desktop.png)
- [Derrota en móvil horizontal](qa/combine-two-collapse/collapsed-568.png)
- [Derrota en alemán, pantalla estrecha](qa/combine-two-collapse/lost-german-320.png)
