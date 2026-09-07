# MAYRA.exe — V3.2 Mobile Final 🌿📱

Esta versión está optimizada para que Mayra la vea principalmente desde su celular.

## Qué cambia

- Se quitaron todos los textos internos de desarrollo.
- El menú se oculta en móvil para que la página se sienta como una historia vertical.
- Las polaroids ya no usan posiciones peligrosas en móvil: pasan a una fila responsive.
- Los botones tienen tamaño cómodo para touch.
- El confetti usa menos partículas en teléfono.
- Las fotos de la galería usan lazy loading.
- Se integró el reproductor oficial de Spotify de **Forever — Noah Kahan**.
- No necesitas subir un MP3.

## Archivos que debes reemplazar en GitHub

En tu repo `Mayrabirthday`, reemplaza:

```text
index.html
styles.css
script.js
```

No necesitas crear otro repositorio.

## Fotos requeridas

Dentro de `assets/` deben existir exactamente:

```text
hero-main.jpg
polaroid-1.jpg
polaroid-2.jpg
polaroid-3.jpg
gallery-large.jpg
gallery-small-1.jpg
gallery-small-2.jpg
```

GitHub distingue mayúsculas/minúsculas: `foto.JPG` y `foto.jpg` no son la misma ruta.

## Cómo actualizar tu GitHub Pages

1. Entra a tu repo `Mayrabirthday`.
2. `Add file` → `Upload files`.
3. Sube los nuevos `index.html`, `styles.css` y `script.js`.
4. Confirma **Commit changes**.
5. Espera a que `Deployments → github-pages` tenga check verde.
6. Tu URL seguirá siendo:

```text
https://zmakami.github.io/Mayrabirthday/
```

## Spotify

La sección usa un embed oficial de Spotify de **Forever — Noah Kahan**. La canción comienza cuando Mayra toca Play en el reproductor; no se intenta autoplay porque iPhone suele bloquear audio automático.

## Countdown

En `script.js` cambia esta línea si quieres usar la hora exacta del vuelo:

```js
const tripDate = "2026-09-13T09:00:00";
```

## Las 29 razones

En `script.js`, busca:

```js
const reasons = [
```

y cambia las 29 frases por cosas personales.

## Checklist antes del QR

1. Abre la URL en tu celular.
2. Apaga Wi‑Fi y pruébala con datos móviles.
3. Confirma que carguen las 7 fotos.
4. Dale Play a Forever.
5. Comprueba el countdown.
6. Recorre toda la página.
7. Presiona `Unlock final surprise`.
8. Confirma que aparezca `INTOCABLE`.
9. Recarga una vez más.
10. Ya con eso genera el QR final.

El QR puede apuntar a la misma URL aunque después hagas cambios al contenido.


---

# Cambios de V3.2

- Botón inicial: `GO ✦`
- Más espacio entre el texto/barra y el botón GO
- Fotos sin captions ni descripciones
- 29 razones más chistosas y específicas
- `Forever — Noah Kahan` intenta iniciar al tocar GO
- Si iPhone/Spotify lo bloquean, el reproductor queda visible como fallback
