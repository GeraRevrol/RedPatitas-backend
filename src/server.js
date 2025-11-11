const express = require('express');
const cors = require('cors');
const conectarBD = require('./config/database');
const rutasPublicas = require('./rutas/public');
const rutasAdmin = require('./rutas/admin');
const rutasMascotasPerdidas = require('./rutas/mascotasPerdidas');

const app = express();
const PUERTO = 3000;
const HOST = '127.0.0.1'

const COLABORADOR_1 = 'Zacagnino A.'
const COLABORADOR_2 = 'Reverol G.'
const COLABORADOR_3 = 'Salva I.'
const COLABORADOR_4 = 'Singuri R.'
const DOCENTE_1 = 'Zammataro G.'
const DOCENTE_2 = 'Balbuena F.'


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
  res.status(200).send('Bienvenidos al servidor de RedPatitas Backend');
});

app.listen(PUERTO, HOST, () => {
  console.log(`Servidor RedPatitas corriendo en localhost http://${HOST}:${PUERTO}`);
  console.log(`Se inicia conexion con Base de datos MongoDB`);
  console.log(`Equipo de desarrollo MVPP - ${COLABORADOR_1} - ${COLABORADOR_2} - ${COLABORADOR_3} - ${COLABORADOR_4}`);
  console.log(`Equipo coordinacion docente IFTS11 - ${DOCENTE_1} - ${DOCENTE_2} `);
});





