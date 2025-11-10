const express = require('express');
const cors = require('cors');
const conectarBD = require('./config/database');
const rutasPublicas = require('./rutas/public');
const rutasAdmin = require('./rutas/admin');
const rutasMascotasPerdidas = require('./rutas/mascotasPerdidas');

const app = express();
const PUERTO = process.env.PORT || 3000;

// Conectar base de datos
conectarBD();

// Middleware
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());

// Rutas
app.use('/api/publico', rutasPublicas);
app.use('/api/admin', rutasAdmin);
app.use('/api/mascotas-perdidas', rutasMascotasPerdidas);

app.get('/', (req, res) => {
  res.json({ mensaje: 'RedPatitas Backend API 🐶' });
});

app.listen(PUERTO, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PUERTO}`);
});