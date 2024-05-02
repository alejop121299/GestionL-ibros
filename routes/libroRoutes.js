const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

/**
 * Renderiza la vista para agregar un nuevo libro.
 */
router.get('/', (req, res) => {
    res.render('agregarLibro');
});

/**
 * Ruta para agregar un nuevo libro.
 */
router.post('/libros/agregar', libroController.agregarLibro);

/**
 * Ruta para obtener todos los libros.
 */
router.get('/libros', libroController.obtenerLibros);

/**
 * Ruta para eliminar un libro por su ID.
 */
router.delete('/libros/:id', libroController.eliminarLibro);

/**
 * Ruta para mostrar el formulario de edición de un libro por su ID.
 */
router.get('/libros/:id/editar', libroController.mostrarFormularioEditar);

/**
 * Ruta para actualizar un libro por su ID.
 */
router.put('/libros/:id/actualizar', libroController.actualizarLibro);

module.exports = router;
