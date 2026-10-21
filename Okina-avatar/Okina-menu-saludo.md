# Okina: icono principal de navegación

Imagen nueva generada con la herramienta integrada de imágenes, tomando `categorias/Okina-preguntas.png` como referencia de identidad. Okina aparece sonriendo y saludando con una mano; no lleva símbolos ni objetos de categoría.

- Original sobre croma: `Okina-menu-saludo-fuente.png`.
- PNG transparente: `Okina-menu-saludo.png` (1254 × 1254).
- Recurso conectado: `public/img/okina/okina-menu-saludo.webp` (512 × 512, 36.814 bytes).
- Consumidor: primer elemento de `navbarData.okina`, usado por el botón principal del menú y el selector de mascota. Las cinco categorías conservan sus imágenes.

Se retiró el croma con Canvas y se comprimió en WebP con alfa. Se han conservado los originales.

Los círculos de las categorías en la navegación de Okina tienen ahora el 84 % del diámetro anterior. Se reduce únicamente el fondo mediante un degradado radial, manteniendo tamaño y posición de imágenes y controles. Okina sobresale ligeramente por los bordes. La regla está limitada a sus cinco categorías.

Verificación: 23 comprobaciones de navegador correctas. Menú abierto y cerrado en 1280 × 800, 390 × 844, 844 × 390 y 320 × 568, teclado, navegación a Preguntas y vuelta a Inicio, transparencia y dimensiones del recurso, ausencia de errores JavaScript. Capturas y resultados en `docs/qa/okina-menu/`. Compilación correcta. El lint general conserva 25 errores y 8 advertencias previos; los archivos nuevos/modificados no añaden errores.

## Prompt final

Use case: identity-preserve. Asset type: square website navigation menu mascot icon. Reference image: Okina thinking; keep EXACTLY this same girl's face, hair, age, proportions, outfit and polished 3D cartoon render quality. New pose: Okina faces the viewer directly, tilts her head just slightly, and waves hello warmly with ONE open hand raised beside her head, showing five natural relaxed fingers. Her other arm rests naturally by her side. She has a broad friendly joyful open smile with small white teeth and bright glossy brown eyes, looking straight at the viewer. Chestnut wavy tousled bob with thin mustard-yellow headband. Yellow short-sleeve shirt with large white circular black-smiley patch, denim shorts. Frame from full head to upper thighs, all hair and waving fingers fully inside frame with 8% margin. Character fills about 85% of the square; large face clearly readable at small menu-button sizes. No question mark, musical notes, letters, numbers, props, labels, extra arms, ghost hands, duplicates, border or pedestal. Background: perfectly flat solid chroma-key magenta #FF00FF RGB(255,0,255) across all empty areas, including between the fingers and bent arm. Absolutely no gradients, shadows, texture or magenta reflections on the figure. Soft warm studio lighting on Okina only. Cheerful, welcoming children's educational-game mascot, consistent with the existing five category icons.

