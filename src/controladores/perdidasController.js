const perdidasService = require('../servicios/perdidasService');

class PerdidasController {
  async obtenerTodasLasMascotasPerdidas(req, res) {
    try {
      const mascotas = await perdidasService.obtenerTodasLasMascotasPerdidas();
      res.setHeader('Content-Type', 'application/json');
      res.json(mascotas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async obtenerMascotaPerdidaPorId(req, res) {
    try {
      const mascota = await perdidasService.obtenerMascotaPerdidaPorId(req.params.id);
      res.json(mascota);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async crearMascotaPerdida(req, res) {
    try {
      const mascota = await perdidasService.crearMascotaPerdida(req.body);
      res.status(201).json(mascota);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async actualizarMascotaPerdida(req, res) {
    try {
      const mascota = await perdidasService.actualizarMascotaPerdida(req.params.id, req.body);
      res.json(mascota);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async eliminarMascotaPerdida(req, res) {
    try {
      await perdidasService.eliminarMascotaPerdida(req.params.id);
      res.json({ mensaje: 'Mascota perdida eliminada exitosamente' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new PerdidasController();