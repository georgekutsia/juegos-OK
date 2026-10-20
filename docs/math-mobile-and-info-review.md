# Teclado numérico e información en móvil

El teclado de 0 a 9, borrar y Enter se comparte en los tres niveles de sumas y restas. La respuesta correcta se valida inmediatamente; Enter permite comprobar otras respuestas. El recuadro evita abrir el teclado del teléfono y mantiene el uso del teclado físico. El controlador común contempla también multiplicación y división, cuyos juegos siguen pendientes de implementar.

Se reserva espacio para el teclado antes de calcular el tamaño de las pistas o la grúa. En pantallas bajas, las teclas ocupan dos filas y la operación y su recuadro comparten una fila por debajo de la escena. Los temporizadores y la información de errores siguen visibles.

La grúa del menú móvil pasa de 32 × 24 px a un dibujo de hasta 120 × 54 px; a 320 px de pantalla mide 98 × 54 px. Las opciones de nivel se reorganizan para conservar el espacio disponible. Los títulos de las categorías empiezan por debajo de los botones superiores.

La información utiliza encabezados h4 de 24 px. El globo solo se muestra en pantallas de ordenador con ratón y se cierra al abrir el diálogo. En móvil se abre únicamente el diálogo centrado. El botón de información es accesible por teclado; el diálogo administra el foco y permite cerrar con Escape, el botón de cierre y el fondo. Se añaden `gameInformation` y `closeGameInformation` en español y alemán.

La preferencia de usar botones numéricos y validar inmediatamente queda documentada en `AGENTS.md` para futuros juegos.

## Verificación

- 123 comprobaciones de juego: doce partidas completas, con los seis niveles en ambos idiomas, errores, validación inmediata, bloqueo al finalizar, reinicio y derrota por cuervos.
- 42 comprobaciones de distribución: los seis niveles a 390 × 844, 320 × 568, 768 × 1024, 844 × 390, 568 × 320, 390 × 300 y 1542 × 787. Sin controles recortados ni scroll añadido al juego. La escena permanece encima de la operación.
- Menú en vertical y horizontal, también en alemán, sin scroll. Grúa de mayor tamaño visible.
- 17 comprobaciones de información: pantalla centrada, h4, globo de ordenador, toque móvil sin globo duplicado, cambio de tamaño, idioma alemán y cierre por botón, fondo y Escape.
- Compilación correcta. ESLint de los componentes y traducciones modificados sin errores; el análisis global mantiene 46 errores y 8 avisos previos.

Las pruebas usan Chrome con emulación móvil. Sigue pendiente comprobarlo en un teléfono físico.

## Capturas

- [Menú móvil y grúa ampliada](qa/mobile/matematicas-menu-grua.png)
- [Restas con teclado en horizontal](qa/mobile/restas-teclado-horizontal.png)
- [Información centrada sin duplicado](qa/mobile/info-centrada-movil.png)
