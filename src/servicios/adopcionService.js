// === IMPORTACIONES ===
const Adopcion = require('../modelos/Adopcion');

// === SERVICIO DE ADOPCIÓN ===
// Maneja la lógica de aplicación y conexión con MongoDB
class AdopcionService {
  
  // === READ (GET) ===
  
  // Obtener todas las mascotas en adopción
  async obtenerTodasLasMascotas() {
    return await Adopcion.find();
  }

  // Obtener una mascota específica por ID
  async obtenerMascotaPorId(id) {
    const mascota = await Adopcion.findById(id);
    if (!mascota) {
      throw new Error('Mascota no encontrada');
    }
    return mascota;
  }

  // === CREATE (POST) ===
  
  // Crear nueva mascota en adopción
  async crearMascota(datosMascota) {
    const mascota = new Adopcion(datosMascota);
    return await mascota.save();
  }

  // === UPDATE (PUT) ===
  
  // Actualizar datos de mascota existente
  async actualizarMascota(id, datosMascota) {
    const mascota = await Adopcion.findByIdAndUpdate(id, datosMascota, { new: true });
    if (!mascota) {
      throw new Error('Mascota no encontrada');
    }
    return mascota;
  }

  // === DELETE ===
  
  // Eliminar mascota de la base de datos
  async eliminarMascota(id) {
    const mascota = await Adopcion.findByIdAndDelete(id);
    if (!mascota) {
      throw new Error('Mascota no encontrada');
    }
    return mascota;
  }
}

// === EXPORTACIÓN ===
// Exportar instancia única del servicio
module.exports = new AdopcionService();