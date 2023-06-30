# Proyecto de Single Page Application con Bootstrap

Este proyecto es una Single Page Application (SPA) que utiliza HTML, CSS, Bootstrap y JavaScript para crear una aplicación de página única con un header, contenido dinámico y un footer.

## Requisitos

- Navegador web moderno compatible con HTML5, CSS3 y JavaScript.
- Node.js (opcional, solo si deseas ejecutar un servidor web local con Express).

## Instrucciones

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repositorio o descarga los archivos del proyecto.

2. Abre el archivo `index.html` en tu navegador web.

3. Navega por la aplicación utilizando los enlaces del header.

## Estructura de archivos

- `index.html`: Archivo principal que contiene la estructura básica de la SPA, incluyendo el header, el contenido y el footer.

- `app.js`: Archivo JavaScript que maneja la carga dinámica del contenido de cada página y controla los eventos del usuario.

- `home.html`, `about.html`, `contact.html`: Archivos HTML separados que contienen el contenido de cada página.

## Ejecutar un servidor web local (opcional)

Si deseas ejecutar un servidor web local para evitar problemas de CORS al cargar los archivos HTML, sigue estos pasos adicionales:

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Instala las dependencias de Node.js ejecutando el siguiente comando en la terminal:

```
npm install
```

3. Ejecuta el servidor web local con Express ejecutando el siguiente comando en la terminal:

```
node server.js
```

4. Abre tu navegador web y accede a la URL `http://localhost:3000` para ver la aplicación.

## Contribuir

Si deseas contribuir a este proyecto, puedes realizar los siguientes pasos:

1. Realiza un fork de este repositorio.

2. Crea una rama con tus cambios:

```
git checkout -b nombre-de-la-rama
```

3. Realiza los cambios y realiza commits:

```
git commit -m "Descripción de los cambios"
```

4. Envía tus cambios al repositorio remoto:

```
git push origin nombre-de-la-rama
```

5. Abre una pull request para que tus cambios sean revisados y fusionados.