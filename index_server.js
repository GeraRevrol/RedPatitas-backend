const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config({ debug: false });

// Configuración del servidor
const HOSTNAME = '127.0.0.1';
const PORT = process.env.PORT || 3000;

// === EQUIPO DE DESARROLLO ===
const COLABORADOR_1 = 'Zacagnino A.';
const COLABORADOR_2 = 'Reverol G.';
const COLABORADOR_3 = 'Salva I.';
const COLABORADOR_4 = 'Singuri R.';

// === EQUIPO DE COORDINACION DOCENTE ===
const DOCENTE_1 = 'Zammataro G.';
const DOCENTE_2 = 'Balbuena F.';

// === RUTAS ===
const adopcionRouter = require('./Routers/adopcionRouter');
const perdidasRouter = require('./Routers/perdidasRouter');

// Middleware
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/adopcion-mascotas', adopcionRouter);
app.use('/api/mascotas-perdidas', perdidasRouter);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Servidor RedPatitas corriendo en http://${HOSTNAME}:${PORT}`);
  console.log(`Equipo de desarrollo MVPP - ${COLABORADOR_1} - ${COLABORADOR_2} - ${COLABORADOR_3} - ${COLABORADOR_4}`);
  console.log(`Equipo coordinacion docente IFTS11 - ${DOCENTE_1} - ${DOCENTE_2}`);
}); 