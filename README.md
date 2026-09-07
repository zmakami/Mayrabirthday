# MAYRA.exe — Birthday Edition V3

La versión más completa y bonita del proyecto.

## Qué tiene esta V3
- Intro tipo reveal / boot sequence
- Diseño editorial más pulido
- Paleta **sage green**
- Hero con foto principal + mini polaroids
- Countdown al viaje
- Galería de recuerdos
- Itinerario elegante
- Reveal final de **Intocable**
- Confetti
- Sección automática de **29 Things I Love About You**
- Comentarios en el código para ubicar fotos, textos y cambios importantes
- Manual para subirlo a GitHub Pages

---

# Estructura del proyecto

```text
mayra-birthday-trip-v3/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── hero-main.jpg
    ├── polaroid-1.jpg
    ├── polaroid-2.jpg
    ├── polaroid-3.jpg
    ├── gallery-large.jpg
    ├── gallery-small-1.jpg
    ├── gallery-small-2.jpg
    └── README-assets.txt
```

---

# Dónde agregar fotos

Pon tus fotos dentro de la carpeta `assets/` usando estos nombres exactos:

- `hero-main.jpg`
- `polaroid-1.jpg`
- `polaroid-2.jpg`
- `polaroid-3.jpg`
- `gallery-large.jpg`
- `gallery-small-1.jpg`
- `gallery-small-2.jpg`

Si usas otros nombres, también cambia las rutas en `index.html`.

---

# Dónde editar cada cosa

## 1) Texto general
En `index.html` busca:
- `EDITAR COPY`
- `EDITAR ITINERARIO`
- `EDITAR MENSAJE FINAL`

## 2) Countdown
En `script.js` busca:

```js
const tripDate = "2026-09-13T09:00:00";
```

Cambia la fecha y hora si quieres.

## 3) 29 Things I Love About You
En `script.js` busca:

```js
const reasons = [
  ...
];
```

Ahí puedes personalizar las 29 frases.

---

# Cómo subirlo a GitHub Pages

Tienes 2 opciones:

---

## Opción A — por la web de GitHub

### 1. Crea un repositorio
- Entra a GitHub
- Click en **New repository**
- Nombre sugerido: `mayra-birthday`
- Déjalo **Public**
- Crea el repo

### 2. Sube los archivos
Dentro del repo:
- Click en **Add file**
- Luego **Upload files**
- Sube:
  - `index.html`
  - `styles.css`
  - `script.js`
  - toda la carpeta `assets` con tus fotos

Haz click en **Commit changes**.

### 3. Activa GitHub Pages
Dentro del repo:
- Ve a **Settings**
- Luego **Pages**
- En **Build and deployment**:
  - Source: `Deploy from a branch`
  - Branch: `main`
  - Folder: `/ (root)`

Guarda.

### 4. Obtén el link
GitHub te dará una URL similar a:

```text
https://TUUSUARIO.github.io/mayra-birthday/
```

Ese será tu link final para poner en el QR.

---

## Opción B — usando Git en terminal

### 1. Instala Git
Si no lo tienes:
- https://git-scm.com/

### 2. Crea tu repo en GitHub
Crea el repo nuevo igual que arriba.

### 3. Abre terminal en la carpeta del proyecto
Ejemplo:

```bash
cd ruta/a/mayra-birthday-trip-v3
```

### 4. Inicializa Git y crea el primer commit
```bash
git init
git add .
git commit -m "Mayra birthday site V3"
```

### 5. Conecta tu repo remoto
Reemplaza `TUUSUARIO`:

```bash
git remote add origin https://github.com/TUUSUARIO/mayra-birthday.git
git branch -M main
git push -u origin main
```

### 6. Activa GitHub Pages
Igual que en la opción A:
- Settings
- Pages
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

---

# Cómo actualizar después
Si cambias el sitio:

## Por web
- vuelves a subir archivos
- commit changes

## Por terminal
```bash
git add .
git commit -m "Update site"
git push
```

---

# Cómo hacer el QR
Cuando tengas el link público de GitHub Pages:

1. Copia la URL
2. Usa un generador de QR
3. Pega la URL
4. Descarga el QR como PNG
5. Pon el QR al final de tu carta

## Recomendación
Antes de imprimir:
- ábrelo en tu celular
- pruébalo con datos móviles
- revisa que carguen todas las fotos

---

# Música opcional
No la activé por default porque:
- algunos navegadores bloquean autoplay
- el sitio se ve más limpio sin depender de eso

Pero si quieres agregar una canción:

1. Mete el archivo `song.mp3` en `assets/`
2. Busca en `index.html` el comentario:
   `MÚSICA OPCIONAL`
3. Descomenta el bloque `<audio>`

---

# Qué te recomiendo hacer antes de entregarlo
1. Personaliza el texto para que suene más tú
2. Cambia las 29 razones por cosas reales de ustedes
3. Mete fotos con buena luz y buen recorte
4. Prueba el sitio en tu celular
5. Súbelo a GitHub Pages
6. Haz el QR final

---

# Si quieres una futura V4
Se puede agregar:
- mapa de CDMX
- reveal por secciones con más animación
- tarjeta tipo boarding pass descargable
- “29 things” con animación al hacer scroll
- modal para fotos
- mini página final tipo “Chapter 29 begins here”
