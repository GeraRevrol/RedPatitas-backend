// === IMPORTACIONES ===
const perdidasService = require('../servicios/perdidasService');

// === CONTROLADOR DE MASCOTAS PERDIDAS ===
// Gateway entre rutas HTTP y servicios de mascotas perdidas
class PerdidasController {
  
  // ===== READ (GET) =====
  
  // GET /api/mascotas-perdidas - Listar todas las mascotas perdidas
  async obtenerTodasLasMascotasPerdidas(req, res) {
    try {
      const mascotas = await perdidasService.obtenerTodasLasMascotasPerdidas();
      
      mascotas
      ? res.status(200).json(mascotas)
      : res.status(404).json({ error: 'Error 404 - No se encontraron mascotas perdidas' });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  // GET /api/mascotas-perdidas/:id - Obtener reporte específico por ID
  async obtenerMascotaPerdidaPorId(req, res) {
    try {
      const { id } = req.params; // Extraer ID de los parámetros de la URL
      const mascota = await perdidasService.obtenerMascotaPerdidaPorId(id);
      
      mascota
      ? res.status(200).json(mascota)
      : res.status(404).json({ error: `Error 404 - No se encontró la mascota perdida con ID: ${id}` });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  // ===== CREATE (POST) =====
  
  // POST /api/mascotas-perdidas - Crear nuevo reporte de mascota perdida
  async crearMascotaPerdida(req, res) {
    try {
      const mascota = await perdidasService.crearMascotaPerdida(req.body); // Datos del reporte
      
      mascota
      ? res.status(201).json(mascota)
      : res.status(400).json({ error: 'Error 400 - No se pudo crear la mascota perdida' });
      
    } catch (error) {
      res.status(400).json({ error: `Error 400 - Datos inválidos: ${error.message}` });
    }
  }

  // ===== UPDATE (PUT) =====
  
  // PUT /api/mascotas-perdidas/:id - Actualizar reporte existente
  async actualizarMascotaPerdida(req, res) {
    try {
      const { id } = req.params; // ID del reporte a actualizar
      const mascota = await perdidasService.actualizarMascotaPerdida(id, req.body);
      
      mascota
      ? res.status(200).json(mascota)
      : res.status(404).json({ error: `Error 404 - No se encontró la mascota perdida con ID: ${id} para actualizar` });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  // ===== DELETE =====
  
  // DELETE /api/mascotas-perdidas/:id - Eliminar reporte de mascota perdida
  async eliminarMascotaPerdida(req, res) {
    try {
      const { id } = req.params; // ID del reporte a eliminar
      const resultado = await perdidasService.eliminarMascotaPerdida(id);
      
      resultado
      ? res.status(200).json({ mensaje: `Mascota perdida con ID: ${id} eliminada exitosamente` })
      : res.status(404).json({ error: `Error 404 - No se encontró la mascota perdida con ID: ${id} para eliminar` });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }
}

// === EXPORTACIÓN ===
// Exportar instancia única del controlador
module.exports = new PerdidasController();