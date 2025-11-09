const mongoose = require('mongoose');

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
  timestamps: true
});

module.exports = mongoose.model('MascotaPerdida', mascotaPerdidaSchema);