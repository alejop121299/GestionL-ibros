const Libro = require('../models/libroModels');

/**
 * Agrega un nuevo libro a la base de datos.
 */
exports.agregarLibro = async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        if (req.headers.accept.includes('text/html')) {
            res.redirect('/'); 
        } else {
            res.json({ message: 'Libro agregado correctamente', libro: nuevoLibro }); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar libro');
    }
};


/**
 * Obtiene todos los libros de la base de datos.
 */
exports.obtenerLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        if (req.headers.accept.includes('text/html')) {
            res.render('listaLibros', { libros }); 
        } else {
            res.json(libros);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los libros');
    }
};


/**
 * Elimina un libro de la base de datos.
 */
exports.eliminarLibro = async (req, res) => {
    const { id } = req.params;
    try {
        await Libro.findOneAndDelete({ _id: id });
        if (req.headers.accept.includes('text/html')) {
            res.redirect('/libros'); 
        } else {
            res.json({ message: 'Libro eliminado correctamente' }); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el libro');
    }
};

/**
 * Muestra el formulario para editar un libro.
 */
exports.mostrarFormularioEditar = async (req, res) => {
    const { id } = req.params;
    try {
        const libro = await Libro.findById(id);
        res.render('editarLibro', { libro });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al mostrar el formulario de edición');
    }
};

/**
 * Actualiza un libro en la base de datos.
 */
exports.actualizarLibro = async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, publicado, estado } = req.body;
    try {
        await Libro.findByIdAndUpdate(id, { titulo, autor, publicado, estado });
        if (req.headers.accept.includes('text/html')) {
            res.redirect('/libros'); 
        } else {
            res.json({ message: 'Libro actualizado correctamente' }); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el libro');
    }
};
