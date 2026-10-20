# Revisión de juegos en móvil — 19/10/2026

## Ajuste adicional: velocidad y panel de sumas

- El avance azul dura ahora 1.920 ms en vez de 960 ms: la misma distancia a la mitad de velocidad. La siguiente pregunta aparece inmediatamente y se puede responder mientras el coche avanza. Solo la victoria espera al final del ?ltimo movimiento.
- El panel se ajusta al tamaño real del contenedor del juego, también en ordenador y tableta. Se redujeron márgenes y relleno, y las pistas y la respuesta se colocan en columnas cuando hay más anchura que altura.
- Menú y configuración: 72 comprobaciones de distribución en español y alemán, sin desbordamiento.
- Carrera, victoria, respuesta incorrecta y derrota: 37 comprobaciones sin desbordamiento ni controles recortados. Se completaron los tres niveles y se verificó que la respuesta permaneciera bloqueada durante el avance.
- Tamaños de carrera: 1542 × 787, 1366 × 768, 1280 × 720, 1024 × 768, 768 × 1024, 390 × 844, 320 × 568, 844 × 390, 568 × 320 y 390 × 300. El último simula una altura reducida; no sustituye una prueba de teclado físico/virtual en un teléfono.
- [Panel compacto en ordenador](qa/mobile/sumas-panel-compacto.png) y [carrera difícil en horizontal](qa/mobile/sumas-carrera-horizontal.png).

Se revisaron primero las sumas fácil, media y difícil y después todos los juegos accesibles del catálogo actual. Los cambios se aplican a teléfonos verticales de hasta 600 px de ancho y a pantallas horizontales de hasta 600 px de alto. En móvil, la navegación principal se oculta durante el juego; el botón de retorno permite recuperar el catálogo y la navegación.

## Cobertura

| Juego | Ajuste y comprobación |
| --- | --- |
| Sumas: fácil, medio y difícil | Menú, configuración, pistas, operación, temporizador y respuesta. Configuración compacta con selectores; pistas arriba y operaci?n y respuesta debajo en ambas orientaciones. |
| Memory | Tablero limitado por la altura disponible, controles y puntuaciones compactos; opciones abiertas contenidas en la pantalla. |
| Rompecabezas deslizante | Tablero, imagen de referencia, instrucciones y niveles; movimiento de una pieza. |
| Elecciones | Dos opciones dentro del ancho disponible; personaje en su propia fila. |
| Tamaño, peso y velocidad | Comparación en dos columnas y solución; imágenes y datos dentro de cada columna. |
| Siluetas y efectos | Fila de herramientas independiente de la imagen; solución y botones de avance. |
| Animal que falta | Grupo giratorio contenido, controles de velocidad y botón de ocultar separados. |
| Sonidos de animales | Imagen de solución, reproducción y retorno dentro del espacio disponible. |
| Cuentos narrados y cuento de opciones | Escenas, controles de audio y opciones; capítulos en una fila desplazable. Se eliminó un botón de depuración y se corrigió la función inexistente usada por «Siguiente» en el cuento especial. |
| Corre al color | Configuración y área de juego apiladas en vertical y en columnas en horizontal. |
| Busca por la sala | Miniaturas, imagen seleccionada y temporizador separados. |
| Luz roja | Vista y retorno al catálogo; se añadió el botón de retorno que faltaba. |

## Pruebas

- Chrome con emulación móvil: 320 × 568, 390 × 844, 568 × 320, 667 × 375 y 844 × 390. Comprobación adicional de escritorio a 1280 × 800.
- Verificación final de los casos más estrechos: 320 × 568 y 568 × 320. Menú, configuración y carrera de sumas comprobados en español y alemán, sin desbordamiento horizontal ni vertical.
- En el nivel difícil se completaron cinco respuestas correctas, victoria, reinicio, respuesta incorrecta y retorno al catálogo en ambos idiomas y orientaciones.
- Se comprobaron opciones abiertas de Memory, movimiento de puzle, soluciones de animales, selección de imagen en busca por la sala y retorno desde luz roja.
- Se midió también el desbordamiento durante la animación del botón de solución y se contuvo su decoración para evitar que amplíe la pantalla.
- Para comprobar las escenas y opciones de los cuentos se simularon los eventos de fin de audio en el navegador. Esto verifica la distribución visual, no la reproducción completa del audio.
- `npm run build`: correcto. Queda el aviso previo sobre el tamaño del paquete JavaScript.
- ESLint de los componentes de sumas, cuento especial y entrada de la aplicación: correcto. El análisis global conserva 46 errores y 8 avisos previos en otros componentes y pantallas; no se han ocultado mediante desactivaciones de reglas.

## Límites

Los catálogos de libros conservan desplazamiento vertical y los capítulos desplazamiento horizontal. También se permite desplazar contenido cuando se amplía el texto o el espacio disponible resulta excepcionalmente pequeño. Se mantiene el tamaño utilizable de los controles.

Falta validar en un teléfono físico, especialmente Safari y el teclado virtual. Se añadió la indicación de redimensionar el contenido al abrir el teclado en navegadores compatibles. La emulación de Chrome no reproduce todos los comportamientos de iOS ni garantiza los tiempos de carga de las imágenes externas.

## Prueba de teclado integrado — 20/10/2026

El teclado se probó primero en sumas fáciles y ahora se aplica a todos los niveles implementados de sumas y restas: números de 0 a 9 y borrado de la última cifra. La respuesta correcta se valida inmediatamente al teclear, sin esperar a Enter; Enter sigue disponible para comprobar una respuesta. El recuadro es de solo lectura con `inputMode="none"` para evitar abrir el teclado virtual. Se puede usar también el teclado físico. La ampliación y sus comprobaciones están documentadas en [la revisión de matemáticas e información](math-mobile-and-info-review.md).

Las teclas se distribuyen en tres columnas; con poca altura pasan a dos filas. La pista continúa por encima de la operación y del teclado. Se comprobaron 41 casos en Chrome: todos los números, borrado, error, confirmación, cinco aciertos, victoria, reinicio, teclado físico y aislamiento de los otros modos. Sin scroll ni controles recortados en 390 × 844, 320 × 568, 768 × 1024, 844 × 390, 568 × 320, 390 × 300 y 1542 × 787. Etiquetas verificadas en español y alemán. Pendiente de probar en un teléfono físico.

Corrección posterior: 13 comprobaciones adicionales verifican la validación inmediata de cinco respuestas de dos cifras, también con teclado físico, la espera mientras la respuesta está incompleta, la victoria, el reinicio y Enter para comprobar errores.

- [Teclado en vertical](qa/mobile/sumas-teclado-vertical.png)
- [Teclado en horizontal](qa/mobile/sumas-teclado-horizontal.png)

## Capturas anteriores

- [Configuración de sumas en vertical](qa/mobile/sumas-vertical.png)
- [Carrera de sumas en horizontal](qa/mobile/sumas-horizontal.png)
- [Opciones de Memory en horizontal](qa/mobile/memory-horizontal.png)
- [Escena de cuento en vertical](qa/mobile/cuento-vertical.png)
