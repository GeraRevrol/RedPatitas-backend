// === SERVICIO DE ADOPCIÓN ===
// Maneja la lógica de negocio para mascotas en adopción
const adopcionRepository = require('../Repositories/adopcionRepository');

/**
 * Servicio de adopción con lógica de negocio
 * Actúa como intermediario entre Controller y Repository
*/

class AdopcionService {
  
  async obtenerTodasLasMascotas() {
    try {
      console.log("SERVICE - obtenerTodasLasMascotas");
      return await adopcionRepository.getAllAdopciones();
    } catch (error) {
      console.log(`Error en SERVICE - obtenerTodasLasMascotas: ${error}`);
      throw error;
    }
  }

  async crearMascota(datosMascota) {
    try {
      console.log("SERVICE - crearMascota");
      return await adopcionRepository.createAdopcion(datosMascota);
    } catch (error) {
      console.log(`Error en SERVICE - crearMascota: ${error}`);
      throw error;
    }
  }

  async actualizarMascota(id, datosMascota) {
    try {
      console.log(`SERVICE - actualizarMascota - ID: ${id}`);
      return await adopcionRepository.updateAdopcion(id, datosMascota);
    } catch (error) {
      console.log(`Error en SERVICE - actualizarMascota: ${error}`);
      throw error;
    }
  }

  async eliminarMascota(id) {
    try {
      console.log(`SERVICE - eliminarMascota - ID: ${id}`);
      return await adopcionRepository.deleteAdopcion(id);
    } catch (error) {
      console.log(`Error en SERVICE - eliminarMascota: ${error}`);
      throw error;
    }
  }
}

// === EXPORTACIÓN ===
// Exportar instancia única del servicio (Singleton)
module.exports = new AdopcionService();