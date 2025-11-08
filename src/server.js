require('dotenv').config({ path: '../.env' })
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const rutasPublicas = require('./rutas/public')
const rutasAdmin = require('./rutas/admin')
const rutasMascotasPerdidas = require('./rutas/mascotasPerdidas')

const app = express()

const HOST = '127.0.0.1'
const PUERTO = process.env.PORT || 3000
const NOMBRE = 'Equipo MVPP - Zancagnino - Revrol - salva - Singuri'


// Conectar base de datos según documentación oficial
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error MongoDB:', err))
// Middleware
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:3001'],
  credentials: true
}))
app.use(express.json())

// Rutas
app.use('/api/publico', rutasPublicas)
app.use('/api/admin', rutasAdmin)
app.use('/api/mascotas-perdidas', rutasMascotasPerdidas)

app.get('/', (req, res) => {
  res.json({
    mensaje: 'RedPatitas Backend API 🐶',
    desarrollador: NOMBRE
  })
})

app.listen(PUERTO, HOST, () => {
  console.log(`Servidor corriendo en localhost http://${HOST}:${PUERTO}`)
  console.log(`Desarrollado por: ${NOMBRE}`)
})