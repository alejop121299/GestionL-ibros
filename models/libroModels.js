const mongoose = require('mongoose');

/**
 * Esquema para un libro en la base de datos.
 */
const libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    autor: {
        type: String,
        required: true,
        trim: true
    },
    publicado: {
        type: Date,
        default: Date.now
    },
    estado: {
        type: String,
        enum: ['disponible', 'reservado'],
        default: 'disponible'
    }
});

/**
 * Modelo de mongoose para el esquema de libro.
 */
module.exports = mongoose.model('Libro', libroSchema);
