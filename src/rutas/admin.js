const express = require('express');
const enrutador = express.Router();
const adopcionController = require('../controladores/adopcionController');

// CRUD Mascotas
enrutador.post('/mascotas', adopcionController.crearMascota);
enrutador.put('/mascotas/:id', adopcionController.actualizarMascota);
enrutador.delete('/mascotas/:id', adopcionController.eliminarMascota);

module.exports = enrutador;