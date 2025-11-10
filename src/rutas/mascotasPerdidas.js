const express = require('express');
const router = express.Router();
const perdidasController = require('../controladores/perdidasController');

// GET /api/mascotas-perdidas - Obtener todas las mascotas perdidas
router.get('/', perdidasController.obtenerTodasLasMascotasPerdidas);

// GET /api/mascotas-perdidas/:id - Obtener una mascota perdida por ID
router.get('/:id', perdidasController.obtenerMascotaPerdidaPorId);

// POST /api/mascotas-perdidas - Crear nueva mascota perdida
router.post('/', perdidasController.crearMascotaPerdida);

// PUT /api/mascotas-perdidas/:id - Actualizar mascota perdida
router.put('/:id', perdidasController.actualizarMascotaPerdida);

// DELETE /api/mascotas-perdidas/:id - Eliminar mascota perdida
router.delete('/:id', perdidasController.eliminarMascotaPerdida);

module.exports = router;