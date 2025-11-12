// === IMPORTACIONES ===
const Perdida = require('../modelos/Perdida');

// === SERVICIO DE MASCOTAS PERDIDAS ===
// Maneja la lógica de aplicación y conexión con MongoDB
class PerdidasService {
  
  // === READ (GET) ===
  
  // Obtener todas las mascotas perdidas
  async obtenerTodasLasMascotasPerdidas() {
    const mascotas = await Perdida.find();
    return mascotas || [];
  }

  // Obtener una mascota perdida específica por ID
  async obtenerMascotaPerdidaPorId(id) {
    const mascota = await Perdida.findById(id);
    if (!mascota) {
      throw new Error('Mascota perdida no encontrada');
    }
    return mascota;
  }

  // === CREATE (POST) ===
  
  // Crear nuevo reporte de mascota perdida
  async crearMascotaPerdida(datosMascota) {
    const mascota = new Perdida(datosMascota);
    return await mascota.save();
  }

  // === UPDATE (PUT) ===
  
  // Actualizar datos de mascota perdida existente
  async actualizarMascotaPerdida(id, datosMascota) {
    const mascotaActualizada = await Perdida.findByIdAndUpdate(id, datosMascota, { new: true });
    if (!mascotaActualizada) {
      throw new Error('Mascota perdida no encontrada');
    }
    return mascotaActualizada;
  }

  // === DELETE ===
  
  // Eliminar reporte de mascota perdida de la base de datos
  async eliminarMascotaPerdida(id) {
    const mascotaEliminada = await Perdida.findByIdAndDelete(id);
    if (!mascotaEliminada) {
      throw new Error('Mascota perdida no encontrada');
    }
    return mascotaEliminada;
  }
}

// === EXPORTACIÓN ===
// Exportar instancia única del servicio
module.exports = new PerdidasService();