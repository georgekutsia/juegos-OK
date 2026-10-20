# Carátulas separadas de matemáticas

En Puzles → juegos interactivos hay dos entradas contiguas:

- Sumas y restas: conserva la carátula y la descripción «practica sumas y restas». Su menú contiene únicamente Sumas y Restas, con sus seis niveles actuales.
- Multiplicaciones y divisiones: nueva carátula con × y ÷. Su menú contiene únicamente Multiplicaciones y Divisiones. Estos juegos aún no están implementados; sus niveles aparecen deshabilitados e identificados como «Próximamente».

La organización usa `mathGameGroups` en los datos y reutiliza el menú existente. `MultiplyDivideGameComponent` selecciona el nuevo grupo y recibe el retorno al catálogo. No se añaden rutas ni se modifican categorías de navegación. Las entradas interactivas se enlazan por su clave en `PuzzleGameScreen.jsx`.

Se añaden `interactiveMultiplyDivide` y `interactiveMultiplyDivideDescription` en español y alemán. Los enlaces del catálogo tienen un nombre accesible, además de la ilustración.

## Carátula

Generada y editada con la herramienta integrada de imágenes, revisada e incorporada al catálogo. Archivo final: `public/img/games/multiply-divide/multiply-divide-card.png`. La revisión conserva los colores y la textura, muestra «5 × 2» y «8 ÷ 2», y sustituye el ábaco por cajas de distintos tamaños y colores. Se conserva la carátula original de sumas y restas.

Prompt final:

```text
Edit the referenced children's game catalogue cover. Preserve the existing square composition, honey-colored thick rounded wooden frame, turquoise teal board, sky-blue background, cheerful palette, soft lighting, raised tactile clay/toy forms, and subtle material texture. Make only these content changes: the upper expression must read exactly '5 × 2', with a coral red 5, yellow multiplication cross, and sky-blue 2; the lower expression must read exactly '8 ÷ 2', with a purple 8, coral red division symbol (a horizontal bar and two dots), and yellow 2. Keep both expressions large, clearly readable, and on two separate rows. Completely remove the abacus at the bottom, including all rods, posts, rails and beads. In its place draw a small appealing collection of colorful boxes of noticeably different sizes: a large blue box, medium coral red and yellow boxes, and smaller purple and teal boxes. They must look like dimensional box-shaped objects with visible top and side faces, consistent with the same handcrafted toy style. Arrange the boxes along the lower part without covering either expression. Leave comfortable padding inside the frame. No extra text, no extra symbols, no watermark. Opaque square raster illustration.
```

## Verificación

- Carátula revisada: operaciones y cajas correctas; PNG cuadrado de 1254 × 1254, 2,06 MB. Carga completa en el catálogo a 1542 × 787 (tarjeta de 127 px) y 390 × 844 (tarjeta de 69,5 px), sin recortes. Captura del catálogo actualizada tras sustituir la imagen.
- 66 comprobaciones de navegador: entradas distintas, carga de la carátula, nombres accesibles, separación de opciones, retorno al catálogo y etiquetas de juegos pendientes.
- Menús revisados en español y alemán a 1542 × 787, 1024 × 768, 768 × 1024, 390 × 844, 320 × 568, 844 × 390, 568 × 320 y 390 × 300, sin scroll interno ni recortes.
- Los seis niveles de sumas y restas siguen abriendo, conservan el teclado numérico y validan inmediatamente la respuesta correcta. El retorno mantiene el menú original con solo dos operaciones.
- Compilación correcta, con el aviso previo de tamaño del paquete. ESLint de los componentes y traducciones modificados correcto; el análisis global conserva 46 errores y 8 avisos anteriores.
- Pruebas móviles con emulación de Chrome; no se han realizado en un teléfono físico.

## Capturas

- [Las dos carátulas en el catálogo](qa/math-groups/catalogue-desktop.png)
- [Menú de sumas y restas](qa/math-groups/add-subtract-mobile.png)
- [Menú de multiplicaciones y divisiones](qa/math-groups/multiply-divide-mobile.png)
