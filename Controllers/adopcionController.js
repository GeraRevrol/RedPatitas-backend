// === CONTROLADOR DE ADOPCIÓN ===
// Gateway entre rutas HTTP y servicios de adopción
const adopcionService = require('../Services/adopcionService');

/**
 * Controlador de adopción
 * Maneja las peticiones HTTP y delega la lógica al servicio
*/

class AdopcionController {
  
  /**
   * GET /api/adopcion-mascotas - Listar todas las mascotas disponibles
  */

  async obtenerMascotas(req, res) {
    try {
      console.log("CONTROLLER - obtenerMascotas");
      const mascotas = await adopcionService.obtenerTodasLasMascotas();
      
      mascotas.length > 0
        ? res.status(200).json(mascotas)
        : res.status(404).json({ error: 'Error 404 - No se encontraron mascotas' });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - obtenerMascotas: ${error}`);
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  /**
   * POST /api/adopcion-mascotas - Crear nueva mascota para adopción
  */

  async crearMascota(req, res) {
    try {
      console.log("CONTROLLER - crearMascota");
      const mascota = await adopcionService.crearMascota(req.body);
      
      mascota
        ? res.status(201).json(mascota)
        : res.status(400).json({ error: 'Error 400 - No se pudo crear la mascota' });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - crearMascota: ${error}`);
      res.status(400).json({ error: `Error 400 - Datos inválidos: ${error.message}` });
    }
  }

  /**
   * PUT /api/adopcion-mascotas/:id - Actualizar datos de mascota existente
  */

  async actualizarMascota(req, res) {
    try {
      console.log("CONTROLLER - actualizarMascota");
      const { id } = req.params;
      const mascota = await adopcionService.actualizarMascota(id, req.body);
      
      mascota
        ? res.status(200).json(mascota)
        : res.status(404).json({ error: `Error 404 - No se encontró la mascota con ID: ${id} para actualizar` });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - actualizarMascota: ${error}`);
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  /**
   * DELETE /api/adopcion-mascotas/:id - Eliminar mascota de la base de datos
  */
 
  async eliminarMascota(req, res) {
    try {
      console.log("CONTROLLER - eliminarMascota");
      const { id } = req.params;
      const resultado = await adopcionService.eliminarMascota(id);
      
      resultado
        ? res.status(200).json({ mensaje: `Mascota con ID: ${id} eliminada exitosamente` })
        : res.status(404).json({ error: `Error 404 - No se encontró la mascota con ID: ${id} para eliminar` });
      
    } catch (error) {
      console.log(`Error en CONTROLLER - eliminarMascota: ${error}`);
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }
}

// === EXPORTACIÓN ===
// Exportar instancia única del controlador (Singleton)
module.exports = new AdopcionController();