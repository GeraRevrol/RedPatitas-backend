// === CONTROLADOR DE MASCOTAS PERDIDAS ===
// Gateway entre rutas HTTP y servicios de mascotas perdidas
const perdidasService = require('../Services/perdidasService');

/**
 * Controlador de mascotas perdidas
 * Maneja las peticiones HTTP y delega la lógica al servicio
*/

class PerdidasController {
  
  /**
   * GET /api/mascotas-perdidas - Listar todas las mascotas perdidas
  */

  async obtenerTodasLasMascotasPerdidas(req, res) {
    try {
      console.log("CONTROLLER - obtenerTodasLasMascotasPerdidas");
      const mascotas = await perdidasService.obtenerTodasLasMascotasPerdidas();
      
      mascotas.length > 0
        ? res.status(200).json(mascotas)
        : res.status(404).json({ error: 'Error 404 - No se encontraron mascotas perdidas' });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - obtenerTodasLasMascotasPerdidas: ${error}`);
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  /**
   * GET /api/mascotas-perdidas/:id - Obtener reporte específico por ID
  */

  async obtenerMascotaPerdidaPorId(req, res) {
    try {
      console.log("CONTROLLER - obtenerMascotaPerdidaPorId");
      const { id } = req.params;
      const mascota = await perdidasService.obtenerMascotaPerdidaPorId(id);
      
      mascota
        ? res.status(200).json(mascota)
        : res.status(404).json({ error: `Error 404 - No se encontró la mascota perdida con ID: ${id}` });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - obtenerMascotaPerdidaPorId: ${error}`);
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  /**
   * POST /api/mascotas-perdidas - Crear nuevo reporte de mascota perdida
  */

  async crearMascotaPerdida(req, res) {
    try {
      console.log("CONTROLLER - crearMascotaPerdida");
      const mascota = await perdidasService.crearMascotaPerdida(req.body);
      
      mascota
        ? res.status(201).json(mascota)
        : res.status(400).json({ error: 'Error 400 - No se pudo crear la mascota perdida' });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - crearMascotaPerdida: ${error}`);
      res.status(400).json({ error: `Error 400 - Datos inválidos: ${error.message}` });
    }
  }

  /**
   * PUT /api/mascotas-perdidas/:id - Actualizar reporte existente
  */

  async actualizarMascotaPerdida(req, res) {
    try {
      console.log("CONTROLLER - actualizarMascotaPerdida");
      const { id } = req.params;
      const mascota = await perdidasService.actualizarMascotaPerdida(id, req.body);
      
      mascota
        ? res.status(200).json(mascota)
        : res.status(404).json({ error: `Error 404 - No se encontró la mascota perdida con ID: ${id} para actualizar` });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - actualizarMascotaPerdida: ${error}`);
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  /**
   * DELETE /api/mascotas-perdidas/:id - Eliminar reporte de mascota perdida
  */
 
  async eliminarMascotaPerdida(req, res) {
    try {
      console.log("CONTROLLER - eliminarMascotaPerdida");
      const { id } = req.params;
      const resultado = await perdidasService.eliminarMascotaPerdida(id);
      
      resultado
        ? res.status(200).json({ mensaje: `Mascota perdida con ID: ${id} eliminada exitosamente` })
        : res.status(404).json({ error: `Error 404 - No se encontró la mascota perdida con ID: ${id} para eliminar` });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - eliminarMascotaPerdida: ${error}`);
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }
}

// === EXPORTACIÓN ===
// Exportar instancia única del controlador (Singleton)
module.exports = new PerdidasController();