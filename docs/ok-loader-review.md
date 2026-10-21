# Carga de juegos con OK

Se elimina por completo la transición de oleadas de colores de las tarjetas: desaparecen los cinco círculos, sus clases, estilos de expansión, estados y temporizadores. Los enlaces navegan directamente, incluidos teclado, navegación modificada y apertura en otra pestaña.

## Comportamiento

- La O entra por la izquierda y la K por la derecha durante 350 ms. Giran juntas alrededor del punto central durante 650 ms y quedan ordenadas como OK. Si los recursos están listos, la entrada completa dura un segundo.
- El juego permanece visible detrás de una capa transparente con desenfoque de 10 px, también con prefijo para Safari. No hay fondo blanco opaco. Las letras tienen un halo claro para conservar contraste y un espacio cuadrado que evita solapar el texto durante el giro en móvil. El retorno mantiene un tamaño de 44 px.
- Tras la entrada, el conjunto respira suavemente entre escalas 0,97 y 1,04 mientras falten imágenes. El juego se muestra cuando termina la entrada y están listas las imágenes y las fuentes. Con movimiento reducido no hay entrada, giro, respiración ni espera mínima por la animación.
- La carga comprueba los recursos del juego realmente renderizado: imágenes HTML, imágenes de SVG y fondos CSS, incluidas las piezas del rompecabezas. Fuerza la carga de las imágenes lazy presentes y espera su decodificación. Si aparecen o cambian imágenes durante la entrada, también las incorpora.
- Los controles del juego quedan inertes y fuera del árbol accesible mientras se carga. Las animaciones del contenido están pausadas. Las secuencias automáticas de Dibuja formas e Imagen desaparecida esperan a que el juego esté listo; el foco de los juegos numéricos también se coloca después de cargar.
- La capa de carga se muestra sobre el juego mediante un portal modal. Mantiene el foco dentro, permite volver con el botón de retorno o Escape y anuncia el estado. Si falla una imagen, presenta un mensaje y un botón de reintento; mantiene el juego bloqueado hasta que sus imágenes se carguen.
- Al cambiar de ruta, se reinicia la entrada para el juego de destino y se limpian observadores, escuchas y temporizadores de la carga anterior. Las respuestas de recursos de una pantalla abandonada no pueden reabrir el cargador.

## Archivos

`ButtonColoredComponent.jsx` y `buttonColored.css` eliminan las oleadas. `OkGameLoader.jsx` y `okGameLoader.css` contienen el nuevo diseño, reutilizable mediante la exportación de `components/index.js`. `GameLoadingGate.jsx` y `useGameLoading.js` conectan la disponibilidad real de recursos a todas las rutas de `GameScreen.jsx`, sin añadir envoltorios DOM que alteren los selectores y diseños existentes.

`gameReadyContext.js` comunica que el contenido ya está listo. Lo consumen los efectos de foco y temporizador de Asignado, Combina-dos/Resta-dos y Sumas/Restas, y las secuencias automáticas afectadas. No se cambian las reglas ni las preferencias guardadas. Se añaden `gameLoading`, `gameLoadingFailed` y `gameLoadingRetry` en español y alemán. No se añaden imágenes ni dependencias externas.

## Verificación

64 comprobaciones de navegador sin excepciones: entrada desde ambos lados, giro, orden final, respiración que continúa con una imagen retenida, carga HTML/SVG/CSS, imagen añadida después del montaje, imágenes remotas, error y recuperación del recurso HTML real, bloqueo de controles, foco y cancelación con recursos todavía pendientes. Las imágenes remotas y algunos recursos de prueba se sirven con una pequeña imagen válida mediante interceptación de red, para probar de forma determinista la carga lenta y los errores.

Se revisan las vistas de 1542 × 787, 390 × 844, 320 × 568, 844 × 390 y 568 × 320, los textos españoles y alemanes, el movimiento reducido y la navegación inmediata sin las antiguas esperas de las tarjetas. Se comprueba el juego posterior en Asignado, Combina-dos, Resta-dos y Sumas, junto con el retorno, Atrás y la recarga. Una imagen retenida durante más de cinco segundos demuestra que Dibuja formas empieza su secuencia después de cargar y conserva el principio de la prueba. Imagen desaparecida mantiene el orden de sus imágenes durante la carga y empieza a reordenarlas después.

Las pruebas usan Chrome con emulación de teléfono; no sustituyen un teléfono físico ni una comprobación con lector de pantalla real.

La revisión del desenfoque añade 64 comprobaciones: fondo realmente transparente con `backdrop-filter: blur(10px)`, respiración después del segundo si una imagen sigue pendiente, cinco posiciones del giro en los cuatro tamaños de móvil y ambos idiomas sin solapar el texto, foco al terminar, reintento, error en horizontal y movimiento reducido. Sin recursos pendientes, la capa dura 1,022 s, 1,034 s y 1,023 s en escritorio, móvil vertical y horizontal respectivamente; la pequeña diferencia corresponde a los fotogramas y la actualización del navegador.

Compilación final correcta. ESLint no introduce errores ni avisos nuevos: se conservan los dos avisos anteriores de Imagen desaparecida. El lint global mantiene los 26 errores y 8 avisos previos, fuera de esta modificación. Continúa el aviso previo del tamaño del paquete JavaScript en la compilación.

## Capturas

- [Desenfoque en escritorio](qa/ok-loader-blur/desktop.png)
- [Móvil vertical](qa/ok-loader-blur/mobile-390.png)
- [Móvil horizontal](qa/ok-loader-blur/mobile-568.png)
- [Error de carga en móvil horizontal](qa/ok-loader-blur/error-mobile.png)
