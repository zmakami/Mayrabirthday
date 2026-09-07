# Mayra's 29th — V3.3.1 Local Audio Final 🌿🎵

Esta versión deja el sitio listo para usar **audio local** sin mostrar ninguna caja de Spotify.

## Cambios principales

- El título general ahora es **Mayra's 29th**.
- Quité completamente la sección/reproductor visible de Spotify.
- El botón **GO ✦** tiene más separación debajo de la barra de carga.
- Al tocar **GO ✦**, el sitio intenta iniciar el audio local.
- Las fotos siguen sin captions/descripciones visibles.
- Hay un botón pequeño **♪** en la esquina para pausar/reanudar la música después de entrar.

## Cómo nombrar la canción

Pon el archivo de audio dentro de `assets/` con este nombre exacto:

```text
forever.mp3
```

La ruta final debe quedar:

```text
assets/forever.mp3
```

Usa una copia de audio que tengas derecho a alojar. No necesitas modificar el código si respetas ese nombre.

## Tu carpeta debería verse así

```text
Mayrabirthday/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── forever.mp3
    ├── hero-main.jpg
    ├── polaroid-1.jpg
    ├── polaroid-2.jpg
    ├── polaroid-3.jpg
    ├── gallery-large.jpg
    ├── gallery-small-1.jpg
    └── gallery-small-2.jpg
```

## Subirlo a GitHub

Reemplaza en tu repo actual:

- `index.html`
- `styles.css`
- `script.js`

Después entra a `assets/` y sube `forever.mp3`.

Haz **Commit changes**, espera el check verde de GitHub Pages y tu URL seguirá siendo la misma.

## Prueba importante en iPhone

1. Abre el sitio con datos móviles.
2. Espera a que aparezca **GO ✦**.
3. Toca GO.
4. La canción debería comenzar al entrar.
5. Comprueba el botón pequeño **♪** para pausar/reanudar.

Los navegadores móviles pueden comportarse distinto con audio, pero el código dispara `play()` directamente desde el toque de GO, que es la forma más compatible.


## Fix V3.3.1 — GO button

The GO button now closes the intro immediately and starts audio in parallel.
If `assets/forever.mp3` is missing, slow to load, or blocked by the browser, the page still opens normally.
