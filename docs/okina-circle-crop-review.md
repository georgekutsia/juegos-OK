# Recorte inferior de Okina en navegación

La silueta inferior de los cinco iconos de categoría se recorta siguiendo el círculo de color, mientras la mitad superior puede sobresalir. El icono principal que saluda utiliza el mismo tratamiento con el radio de su propio círculo.

Implementado en `MainNavbar.css` mediante dos máscaras alfa combinadas: una mitad superior rectangular y una parte circular inferior. El radio de categoría coincide con el fondo reducido al 84 %. Se centra el enlace mediante flex y se compensa la escala 1,05 del enlace activo para conservar la coincidencia con el círculo. Se incluyen propiedades prefijadas para WebKit. Las reglas se limitan a la navegación con Okina.

21 comprobaciones correctas en Chrome local: menú abierto/cerrado en 1280 × 800, 390 × 844, 844 × 390 y 320 × 568; teclado, navegación a Preguntas, icono activo, traducción alemana, exclusión de otras mascotas y ausencia de excepciones JavaScript. Las capturas revisadas y los resultados están en `docs/qa/okina-circle-crop/`.

`npm run build` correcto, con el aviso previo de tamaño del paquete JavaScript. `npm run lint` mantiene los 25 errores y 8 advertencias previos; este cambio únicamente modifica CSS.

Verificación visual local; no se ha desplegado ni comprobado en Safari físico.
