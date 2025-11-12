// === IMPORTACIONES ===
const servicioAdopcion = require('../servicios/adopcionService');

// === CONTROLADOR DE ADOPCIÓN ===
// Gateway entre rutas HTTP y servicios de adopción
class AdopcionController {
  
  // ===== READ (GET) =====
  
  // GET /api/adopcion-mascotas - Listar todas las mascotas disponibles
  async obtenerMascotas(req, res) {
    try {
      const mascotas = await servicioAdopcion.obtenerTodasLasMascotas();
      
      mascotas
      ? res.status(200).json(mascotas)
      : res.status(404).json({ error: 'Error 404 - No se encontraron mascotas' });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  // GET /api/adopcion-mascotas/:id - Obtener mascota específica por ID
  async obtenerMascotaPorId(req, res) {
    try {
      const { id } = req.params; // Extraer ID de los parámetros de la URL
      const mascota = await servicioAdopcion.obtenerMascotaPorId(id);
      
      mascota
      ? res.status(200).json(mascota)
      : res.status(404).json({ error: `Error 404 - No se encontró la mascota con ID: ${id}` });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  // ===== CREATE (POST) =====
  
  // POST /api/adopcion-mascotas - Crear nueva mascota para adopción
  async crearMascota(req, res) {
    try {
      const mascota = await servicioAdopcion.crearMascota(req.body); // Datos del frontend
      
      mascota
      ? res.status(201).json(mascota)
      : res.status(400).json({ error: 'Error 400 - No se pudo crear la mascota' });
      
    } catch (error) {
      res.status(400).json({ error: `Error 400 - Datos inválidos: ${error.message}` });
    }
  }

  // ===== UPDATE (PUT) =====
  
  // PUT /api/adopcion-mascotas/:id - Actualizar datos de mascota existente
  async actualizarMascota(req, res) {
    try {
      const { id } = req.params; // ID de la mascota a actualizar
      const mascota = await servicioAdopcion.actualizarMascota(id, req.body);
      
      mascota
      ? res.status(200).json(mascota)
      : res.status(404).json({ error: `Error 404 - No se encontró la mascota con ID: ${id} para actualizar` });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }

  // ===== DELETE =====
  
  // DELETE /api/adopcion-mascotas/:id - Eliminar mascota de la base de datos
  async eliminarMascota(req, res) {
    try {
      const { id } = req.params; // ID de la mascota a eliminar
      const resultado = await servicioAdopcion.eliminarMascota(id);
      
      resultado
      ? res.status(200).json({ mensaje: `Mascota con ID: ${id} eliminada exitosamente` })
      : res.status(404).json({ error: `Error 404 - No se encontró la mascota con ID: ${id} para eliminar` });
      
    } catch (error) {
      res.status(500).json({ error: `Error 500 - ${error.message}` });
    }
  }


}

// === EXPORTACIÓN ===
// Exportar instancia única del controlador
module.exports = new AdopcionController();