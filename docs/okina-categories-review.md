# Okina como mascota de las categorías

El inicio de la aplicación muestra directamente su pantalla. Se ha retirado `StartupIntro` de `App.jsx`; su código y sus recursos se conservan para posibles usos posteriores y no se descargan durante el arranque.

Cinco ilustraciones nuevas de Okina representan Preguntas (pensando), Sonidos (auriculares), Deportes (pelota), Dibujos (pincel y paleta) y Puzles (piezas). Los originales transparentes y los prompts están en `Okina-avatar/categorias/`. La web utiliza `public/img/okina/categories/okina-<categoría>.webp`: 512 × 512, con alfa, entre 36.924 y 46.276 bytes; total 210.918 bytes. Se reutiliza cada imagen en navegación e inicio, y la primera como icono del menú.

`navbarData.js` y `navbarNamesData.js` incluyen Okina. `App.jsx` deriva las imágenes y los nombres de una única mascota seleccionada; la barra y los ajustes ya no restauran preferencias por separado. `mascotPreferences.js` valida la selección y aplica la nueva mascota predeterminada a las preferencias anteriores una sola vez, con `mascotPreferenceVersion=okina-default-v1`. Se actualizan `selectedCreature` y, al migrar/cambiar mascota, `selectedCreatureIndex`. Las elecciones explícitas posteriores se conservan al recargar. Colores, dirección del fondo y otros datos no se alteran.

En ajustes se puede seleccionar Okina u otra de las cuatro mascotas existentes; el botón seleccionado expone `aria-pressed`. Las imágenes de inicio tienen descripción en español y alemán, y los enlaces y el control de menú tienen nombres accesibles traducidos. El menú cerrado excluye sus elementos de la navegación por teclado. En móvil se muestran las imágenes en dos columnas; en horizontal, en una fila. Las imágenes se contienen sin estirarse ni recortarse.

## Verificación

- 27 comprobaciones correctas de navegador: primera visita, cinco enlaces de categorías, imágenes idénticas entre barra e inicio, ausencia de animación y de solicitudes de sus recursos, cambios de mascota, recarga, migración de preferencias antiguas, datos inválidos, conservación de otros ajustes, alemán y teclado.
- Capturas revisadas en 1280 × 800, 390 × 844, 844 × 390 y 320 × 568. Sin desbordamiento horizontal; imágenes cuadradas completas.
- Los cinco recursos responden como `image/webp`, tienen 512 × 512 píxeles y transparencia real.
- Sin excepciones JavaScript. Resultados y capturas en `docs/qa/okina-categories/`.
- ESLint de los archivos JavaScript/JSX modificados: correcto.
- `npm run build`: correcto; continúa el aviso previo de paquete JavaScript mayor de 500 kB.
- `npm run lint`: conserva los 25 errores y 8 advertencias existentes en otros componentes. No se añaden errores.

Verificación local con Chrome headless. No se ha desplegado a Netlify ni comprobado en dispositivos físicos.
