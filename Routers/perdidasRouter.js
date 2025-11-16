// === ROUTER DE MASCOTAS PERDIDAS ===
// Define las rutas HTTP para mascotas perdidas
const express = require('express');
const router = express.Router();
const perdidasController = require('../Controllers/perdidasController');

// GET /api/mascotas-perdidas - Obtener todas las mascotas perdidas
router.get('/', perdidasController.obtenerTodasLasMascotasPerdidas);

// GET /api/mascotas-perdidas/:id - Obtener una mascota perdida por ID
router.get('/:id', perdidasController.obtenerMascotaPerdidaPorId);

// POST /api/mascotas-perdidas - Crear nuevo reporte de mascota perdida
router.post('/', perdidasController.crearMascotaPerdida);

// PUT /api/mascotas-perdidas/:id - Actualizar reporte de mascota perdida
router.put('/:id', perdidasController.actualizarMascotaPerdida);

// DELETE /api/mascotas-perdidas/:id - Eliminar reporte de mascota perdida
router.delete('/:id', perdidasController.eliminarMascotaPerdida);

module.exports = router;