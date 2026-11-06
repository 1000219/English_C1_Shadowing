# Shadowing · Inglés C1 · Unidad 1 (Aiming high)

Prototipo web funcional para practicar *shadowing* en español con audios en inglés. Diseño **responsive**, modo oscuro, texto escalable, teclado y seguimiento del progreso. La portada permite ver las **12 unidades del curso** y entrar a la **Unidad 1**, única unidad activa.

## Cómo utilizarlo

1. Descomprime `Shadowing_C1_Unit1.zip` **manteniendo su estructura de carpetas**.
2. Abre `index.html` en el navegador (en ordenador o en móvil si tienes la carpeta en un servidor web).
3. Pulsa «Empezar a practicar» o «Abrir unidad 1».
4. Empieza por los audios de «Mi sesión de hoy» (8 expresiones por defecto); si quieres, muestra los 24 audios de la unidad.
5. Pulsa «Escuchar», repite respetando ritmo y entonación, oculta la transcripción e intenta producirla sin leer. Marca «Necesito practicarlo» o «Ya me sale» solo cuando te resulte útil.
6. En «Vocabulario», «Speaking», «Comprobar» y «Progreso» puedes reforzar lo aprendido. Las preferencias de tarjetas y el progreso anterior se mantienen si usas el mismo origen/navegador.

### ¿Qué incluye?

- `index.html`: portada y listado de las doce unidades reales del libro.
- `unit1.html`: sesión de shadowing y actividades interactivas de la Unidad 1.
- `assets/`: código JavaScript y estilos accesibles y adaptativos, con preferencias persistentes.
- `audios/`: **24 fragmentos MP3** que venían en el ZIP original (Student's Book 1.1 y Workbook Track 1). No se han inventado archivos de audio ni transcripciones.
- **144 expresiones** de la base de datos existente; solo 24 tienen MP3 específicos en esta versión. Las demás están disponibles en Vocabulario y otras prácticas, identificadas como sin clip.

### Accesibilidad y privacidad

- Controles táctiles grandes, HTML semántico y etiquetas para lectores de pantalla, navegación con teclado, foco visible, contrastes de color, texto ampliable del 100 % al 200 %, diseño reflow en 320 px, soporte para preferencias de reducción de movimiento y modo oscuro.
- **No es una certificación de WCAG 2.2 AA:** se han efectuado pruebas de funcionamiento y reflow en navegador, pero falta una auditoría completa con lector de pantalla, teclado real, contraste automatizado y pruebas con personas.
- El progreso se almacena con `localStorage` en **este navegador y para este origen**; se puede exportar en JSON desde «Progreso». No se transmite a ningún servidor.
- La grabación de voz es opcional y local. Los navegadores móviles normalmente requieren **HTTPS o localhost** para dar acceso al micrófono. Al cerrar la pestaña, la grabación no se conserva salvo que descargues el archivo.
- Si abres el proyecto con `file://`, el audio funciona en muchos navegadores, pero la persistencia de datos y el micrófono pueden depender del navegador. Para usarlo cómodamente en el móvil, conviene servir **toda la carpeta** en un hosting HTTPS (por ejemplo, GitHub Pages o Firebase Hosting).

### Para incorporar nuevas unidades

Bastará con facilitar los audios originales MP3 (o un ZIP con varios MP3) de cada unidad, indicando si proceden de Student's Book o Workbook y el número de pista. Por ejemplo: `SB_Unit2_2.1.mp3` y `WB_Unit2_Track1.mp3`. Si ya proporcionaste el Student's Book y Workbook en PDF, **no hace falta reenviarlos** si siguen disponibles en esta conversación/biblioteca. Se ampliará la estructura, los recortes y los ejercicios de manera progresiva, sin activar unidades vacías.

El libro de referencia es *Ready for C1 Advanced*, 4.ª edición, Student's Book y Workbook, pero sus PDF **no están incluidos** en esta descarga. La app se centra en la fluidez y la pronunciación oral como complemento de la preparación de C1 de EOI; no sustituye las otras destrezas del examen.
