# Rompecabezas deslizante: imagen completa y tamaño en escritorio

El tren estaba dibujado en la parte superior del PNG, pero sus piezas recortaban la fila central y solo mostraban las ruedas. Se ajusta el encuadre al conjunto de fragmentos del juego, reutilizando las imágenes originales. La misma posición y escala se aplican a las piezas, la referencia y la imagen de victoria.

Se corrigen también el cohete y la mariposa para conservar sus extremos dentro de las piezas. El autobús pasa a tres fragmentos disponibles: antes uno estaba asignado a la posición 8, reservada al hueco vacío, por lo que esa pieza no existía.

En escritorio, el componente calcula el tamaño del tablero a partir del espacio real de la pantalla. El encabezado queda encima y la referencia junto al tablero. La victoria también se ajusta a la altura. La distribución móvil se conserva; se elimina únicamente el margen inferior sobrante de la tarjeta de victoria para evitar scroll vacío en 320 × 568.

## Verificación

- Ocho imágenes locales cargadas correctamente. Muestreo de sus píxeles de color: ninguna muestra queda fuera del conjunto de piezas tras el ajuste.
- 79 comprobaciones de navegador: las ocho variantes resueltas mediante movimientos legales, movimientos no adyacentes ignorados, victoria, reinicio a cero y retorno al catálogo. Comprobados los tres niveles y los textos en español y alemán.
- Juego en 1542 × 787, 1024 × 768, 1280 × 720, 1920 × 1080, 1024 × 601, 768 × 1024, 390 × 844, 320 × 568, 844 × 390 y 568 × 320. Sin scroll interno ni tablero recortado.
- Victoria revisada también en escritorio bajo, móvil vertical y horizontal.
- Compilación correcta; permanece el aviso previo de tamaño del paquete. ESLint del componente correcto. El análisis global conserva 46 errores y 8 avisos previos.

Las pruebas móviles usan emulación en Chrome; no se han realizado en un teléfono físico.

## Capturas

- [Tren completo en las piezas, escritorio](qa/sliding-puzzle/train-desktop.png)
- [Mariposa y flor, escritorio](qa/sliding-puzzle/flower-desktop.png)
- [Tren en móvil](qa/sliding-puzzle/train-mobile.png)
