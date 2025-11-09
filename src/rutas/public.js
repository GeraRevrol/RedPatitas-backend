const express = require('express');
const enrutador = express.Router();
const adopcionController = require('../controladores/adopcionController');

// GET /api/publico/mascotas - Lista de mascotas en adopción
enrutador.get('/mascotas', adopcionController.obtenerMascotas);

// GET /api/publico/mascotas/perdidas - Mascotas perdidas
enrutador.get('/mascotas/perdidas', adopcionController.obtenerMascotasPerdidas);

// GET /api/publico/mascotas/:id - Mascota por ID
enrutador.get('/mascotas/:id', adopcionController.obtenerMascotaPorId);

module.exports = enrutador;