const servicioAdopcion = require('../servicios/adopcionService');

class AdopcionController {
  async obtenerMascotas(req, res) {
    try {
      const mascotas = await servicioAdopcion.obtenerTodasLasMascotas();
      res.json(mascotas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerMascotaPorId(req, res) {
    try {
      const mascota = await servicioAdopcion.obtenerMascotaPorId(req.params.id);
      res.json(mascota);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async crearMascota(req, res) {
    try {
      const mascota = await servicioAdopcion.crearMascota(req.body);
      res.status(201).json(mascota);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async actualizarMascota(req, res) {
    try {
      const mascota = await servicioAdopcion.actualizarMascota(req.params.id, req.body);
      res.json(mascota);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async eliminarMascota(req, res) {
    try {
      await servicioAdopcion.eliminarMascota(req.params.id);
      res.json({ mensaje: 'Mascota eliminada exitosamente' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async obtenerMascotasPerdidas(req, res) {
    try {
      const mascotas = await servicioAdopcion.obtenerMascotasPorEstado('Perdido');
      res.json(mascotas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AdopcionController();