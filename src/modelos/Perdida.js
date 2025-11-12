// === MODELO DE MASCOTAS PERDIDAS ===
// Define la estructura de reportes de mascotas perdidas para MongoDB
const mongoose = require('mongoose');

// Esquema de mascota perdida
const mascotaPerdidaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  ubicacionPerdida: {
    type: String,
    required: true
  },
  fechaPerdida: {
    type: Date,
    required: true
  },
  contactoReporte: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Perdido', 'Encontrado'],
    default: 'Perdido'
  }
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

// Exportar modelo - Crea colección "mascotaperdidas" en MongoDB
module.exports = mongoose.model('MascotaPerdida', mascotaPerdidaSchema);