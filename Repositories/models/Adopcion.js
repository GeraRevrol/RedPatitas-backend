// === MODELO DE ADOPCIÓN ===
// Define la estructura de mascotas en adopción para MongoDB
const mongoose = require('mongoose');

// Esquema de mascota en adopción
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true,
    enum: ['Perro', 'Gato', 'Otro']
  },
  breed: String,
  age: {
    type: Number,
    required: true
  },
  description: String,
  status: {
    type: String,
    enum: ['Disponible', 'Adoptado', 'Perdido'],
    default: 'Disponible'
  },
  refugio: {
    type: String,
    default: 'Sin refugio'
  },
  contacto: {
    type: String,
    default: ''
  }
});

// Exportar modelo - Crea colección "pets" en MongoDB
module.exports = mongoose.model('Pet', petSchema);