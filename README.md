# Proyecto de Gestión de Libros

Este es un proyecto de gestión de libros desarrollado con Node.js, Express y MongoDB. Permite agregar, eliminar, actualizar y mostrar libros utilizando una API RESTful y una interfaz gráfica.

## Configuración

Para instalar este proyecto, sigue estos pasos:

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Asegúrate de tener MongoDB instalado y ejecutándose en tu máquina local.

## Configuración de la Base de Datos

1. Abre una terminal y ejecuta el comando mongod para iniciar el servidor de MongoDB.
2. Crea una nueva base de datos llamada books.

## Ejecución del Proyecto

1. En la terminal, ejecuta el comando `node .\app.js` para iniciar el servidor.
2. Abre tu navegador y ve a `http://localhost:3000` para acceder a la aplicación.

## Uso de la API

1. GET /libros: Obtiene todos los libros.
2. POST /libros/agregar: Agrega un nuevo libro.
3. DELETE /libros/:id: Elimina un libro por su ID.
4. GET /libros/:id/editar: Muestra el formulario para editar un libro.
5. PUT /libros/:id/actualizar: Actualiza un libro por su ID.

## Interfaz Gráfica

1. La interfaz gráfica permite:
2. Agregar un nuevo libro.
3. Ver la lista de libros.
4. Eliminar un libro.
5. Editar un libro existente.

## NOTA

1. En el mismo proyecto, se encuentra la solución al primer punto de la prueba, la cual está detallada en el diagrama de flujo titulado `Diagrama de Flujo Cursos`.
2. Para el aplicativo, se omitió la creación del login y la documentación con Swagger debido a la falta de conocimiento en dichos componentes.