const Adopcion = require('../modelos/Adopcion');

class AdopcionService {
  async obtenerTodasLasMascotas() {
    return await Adopcion.find();
  }

  async obtenerMascotaPorId(id) {
    const mascota = await Adopcion.findById(id);
    if (!mascota) {
      throw new Error('Mascota no encontrada');
    }
    return mascota;
  }

  async crearMascota(datosMascota) {
    const mascota = new Adopcion(datosMascota);
    return await mascota.save();
  }

  async actualizarMascota(id, datosMascota) {
    const mascota = await Adopcion.findByIdAndUpdate(id, datosMascota, { new: true });
    if (!mascota) {
      throw new Error('Mascota no encontrada');
    }
    return mascota;
  }

  async eliminarMascota(id) {
    const mascota = await Adopcion.findByIdAndDelete(id);
    if (!mascota) {
      throw new Error('Mascota no encontrada');
    }
    return mascota;
  }

  async obtenerMascotasPorEstado(estado) {
    return await Adopcion.find({ status: estado });
  }
}

module.exports = new AdopcionService();