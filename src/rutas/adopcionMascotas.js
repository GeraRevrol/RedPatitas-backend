const express = require('express');
const router = express.Router();
const adopcionController = require('../controladores/adopcionController');

// GET /api/adopcion-mascotas - Obtener todas las mascotas en adopción
router.get('/', adopcionController.obtenerMascotas);

// GET /api/adopcion-mascotas/:id - Obtener una mascota en adopción por ID
router.get('/:id', adopcionController.obtenerMascotaPorId);

// POST /api/adopcion-mascotas - Crear nueva mascota en adopción
router.post('/', adopcionController.crearMascota);

// PUT /api/adopcion-mascotas/:id - Actualizar mascota en adopción
router.put('/:id', adopcionController.actualizarMascota);

// DELETE /api/adopcion-mascotas/:id - Eliminar mascota en adopción
router.delete('/:id', adopcionController.eliminarMascota);

module.exports = router;