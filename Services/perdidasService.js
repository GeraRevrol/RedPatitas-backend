// === SERVICIO DE MASCOTAS PERDIDAS ===
// Maneja la lógica de negocio para mascotas perdidas
const perdidasRepository = require('../Repositories/perdidasRepository');

/**
 * Servicio de mascotas perdidas con lógica de negocio
 * Actúa como intermediario entre Controller y Repository
*/
  
class PerdidasService {
  
  async obtenerTodasLasMascotasPerdidas() {
    try {
      console.log("SERVICE - obtenerTodasLasMascotasPerdidas");
      return await perdidasRepository.getAllPerdidas();
    } catch (error) {
      console.log(`Error en SERVICE - obtenerTodasLasMascotasPerdidas: ${error}`);
      throw error;
    }
  }

  async crearMascotaPerdida(datosMascota) {
    try {
      console.log("SERVICE - crearMascotaPerdida");
      return await perdidasRepository.createPerdida(datosMascota);
    } catch (error) {
      console.log(`Error en SERVICE - crearMascotaPerdida: ${error}`);
      throw error;
    }
  }

  async actualizarMascotaPerdida(id, datosMascota) {
    try {
      console.log(`SERVICE - actualizarMascotaPerdida - ID: ${id}`);
      return await perdidasRepository.updatePerdida(id, datosMascota);
    } catch (error) {
      console.log(`Error en SERVICE - actualizarMascotaPerdida: ${error}`);
      throw error;
    }
  }

  async eliminarMascotaPerdida(id) {
    try {
      console.log(`SERVICE - eliminarMascotaPerdida - ID: ${id}`);
      return await perdidasRepository.deletePerdida(id);
    } catch (error) {
      console.log(`Error en SERVICE - eliminarMascotaPerdida: ${error}`);
      throw error;
    }
  }
}

// === EXPORTACIÓN ===
// Exportar instancia única del servicio (Singleton)
module.exports = new PerdidasService();