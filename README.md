# 🌐 Mi Primer Proyecto de Diseño Web

¡Bienvenido/a a mi primer repositorio! Este proyecto es el resultado de mis primeras clases de diseño web, donde aprendí a configurar un entorno de desarrollo profesional y a estructurar contenido utilizando HTML5 y CSS3.

## 🛠️ Herramientas Utilizadas

En este proceso configuramos y aprendimos a usar las siguientes tecnologías:

* **Visual Studio Code**: Mi editor de código principal, configurado con:
    * Idioma: Español.
    * Extensión **Live Server** para visualización en tiempo real.
* **Git**: Sistema de control de versiones para registrar mis cambios.
* **GitHub**: Plataforma para alojar el código y publicar el sitio mediante **GitHub Pages**.
* **Bash (Terminal)**: Uso de comandos básicos para gestionar archivos y carpetas.

## 📚 Conceptos Aprendidos

### 1. Estructura HTML5
He trabajado con las etiquetas más importantes del lenguaje:
- **Estructura semántica**: `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>`.
- **Contenido**: Títulos (`<h1>` - `<h6>`), párrafos (`<p>`), enlaces (`<a>`) e imágenes (`<img>`).
- **Organización**: Listas ordenadas y desordenadas.
- **Datos y Formularios**: Creación de tablas y formularios de contacto con diferentes tipos de `input`.
- **Multimedia**: Incrustación de videos y mapas mediante `<iframe>`.

### 2. Estilos con CSS3
- Implementación de **CSS Externo** para mantener el código limpio.
- Uso de selectores, manejo de colores, tipografías y bordes.
- Comprensión del **Modelo de Caja (Box Model)**.



### 3. Control de Versiones con Git
Manejo de la terminal para el flujo de trabajo básico:
1. `git status` (Ver estado)
2. `git add .` (Preparar cambios)
3. `git commit -m "mensaje"` (Guardar cambios localmente)
4. `git push` (Subir cambios a la nube)

## 🚀 Demo
Puedes ver este proyecto en vivo a través de GitHub Pages haciendo clic en el siguiente enlace:
*(Nota: Alumno, pega aquí tu link de GitHub Pages)*

---
*Guía realizada bajo la supervisión del docente de Diseño Web.*

----------------------------------------------------------------------------------------------

# 20/03/2026

# 📸 Tarea: Mi Galería Fotográfica Profesional

¡Hola a todos! Después de ver cómo darle vida a una web con JavaScript y cómo manejar Flexbox, vamos a poner todo en práctica con un proyecto real. El objetivo es que aprendan a gestionar archivos multimedia (imágenes) y a publicar su propio contenido en la web.

## 🎯 Objetivo de la Tarea
Deben construir una galería de fotos funcional utilizando **HTML** y **CSS (Flexbox)**. Primero haremos funcionar el ejemplo que les doy y luego lo personalizarán con sus propias fotos.

---

## 🛠️ Parte 1: El Desafío Técnico (Hacerlo funcionar)

Creen dos archivos en su carpeta de proyecto: `index.html` y `styles.css`. Copien los códigos que les paso a continuación y asegúrense de que se vean correctamente usando **Live Server**.

### Código HTML de base:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <h1>Mi Galería con Flexbox</h1>
    </header>
    <div class="gallery">
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" alt="gatos">
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg" alt="gatos">
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg" alt="gatos">
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg" alt="gatos">
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg" alt="gatos">
        <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg" alt="gatos">
    </div>
</body>
</html>
```

### Código CSS de base:
```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: sans-serif;
    background: #f5f6f7;
}

.header {
    text-align: center;
    text-transform: uppercase;
    padding: 32px;
    background-color: #0a0a23;
    color: #fff;
    border-bottom: 4px solid #fdb347;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 10px;
}

.gallery img {
    width: 100%;
    max-width: 350px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

---

## 🔍 Parte 2: Investigación (Teoría necesaria)

Antes de subir sus fotos, deben investigar y responder en su archivo **README.md** lo siguiente:

1.  **Formatos de Imagen:** ¿Qué significan y cuándo conviene usar las siguientes extensiones?
    * `.png`
    * `.jpeg` / `.jpg`
    * `.webp` (Investiguen esta, es la que más se usa hoy en web).
    * `.svg`
2.  **Límites de GitHub:** Investiguen cuál es el tamaño máximo de un archivo que permite subir GitHub y cuánto es el límite total recomendado para un repositorio para no tener problemas de rendimiento.

---

## 🎨 Parte 3: Personalización (Tu toque personal)

Ahora viene lo bueno:
1.  Creen una carpeta llamada `img` dentro de su proyecto.
2.  Busquen **9 imágenes propias** o de algún tema que les guste (hobbies, paisajes, viajes).
3.  Reemplacen los enlaces de ejemplo (los `src` de las etiquetas `img`) por las rutas locales de sus fotos (ejemplo: `src="img/mi-foto.jpg"`).
4.  **RETO EXTRA:** Agreguen un efecto de JavaScript para que, al hacer clic en una foto, salga un mensaje con el nombre de la imagen.

---

## 🚀 Entrega

Para dar por finalizada la tarea, deben realizar el ciclo de Git que ya conocemos:
1.  `git add .`
2.  `git commit -m "Tarea: Mi galería personalizada finalizada"`
3.  `git push`

**Me deben pasar el link de su GitHub Pages por el medio habitual.**

---
*¡A darle átomos! Si tienen dudas con las rutas de las imágenes, me consultan.*

