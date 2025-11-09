const Perdida = require('../modelos/Perdida');

class PerdidasService {
  async obtenerTodasLasMascotasPerdidas() {
    const mascotas = await Perdida.find();
    return mascotas || [];
  }

  async obtenerMascotaPerdidaPorId(id) {
    const mascota = await Perdida.findById(id);
    if (!mascota) {
      throw new Error('Mascota perdida no encontrada');
    }
    return mascota;
  }

  async crearMascotaPerdida(datosMascota) {
    const mascota = new Perdida(datosMascota);
    return await mascota.save();
  }

  async actualizarMascotaPerdida(id, datosMascota) {
    const mascotaActualizada = await Perdida.findByIdAndUpdate(id, datosMascota, { new: true });
    if (!mascotaActualizada) {
      throw new Error('Mascota perdida no encontrada');
    }
    return mascotaActualizada;
  }

  async eliminarMascotaPerdida(id) {
    const mascotaEliminada = await Perdida.findByIdAndDelete(id);
    if (!mascotaEliminada) {
      throw new Error('Mascota perdida no encontrada');
    }
    return mascotaEliminada;
  }
}

module.exports = new PerdidasService();