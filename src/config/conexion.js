// === CONEXIÓN MONGODB (VERSIÓN PROFESIONAL) ===
// Conexión con variables de entorno y manejo avanzado de eventos
require('dotenv').config(); // Cargar variables de entorno desde .env
const mongoose = require('mongoose');

// Función de conexión con configuración avanzada
const connectDB = async () => {
  try {
    // Conectar usando variable de entorno MONGODB_URI
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Opciones recomendadas por Mongoose 8.x
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // IPv4
    });

    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    
    // === EVENT LISTENERS ===
    // Monitoreo de eventos de conexión
    mongoose.connection.on('error', (err) => {
      console.error('❌ Error MongoDB:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB desconectado');
    });
    
    mongoose.connection.on('reconnected', () => {
      console.log('🔄 MongoDB reconectado');
    });
    
  } catch (error) {
    console.error('💥 Error conectando MongoDB:', error.message);
    process.exit(1); // Terminar aplicación si falla
  }
};

// === GRACEFUL SHUTDOWN ===
// Cerrar conexión limpiamente al terminar la aplicación
process.on('SIGINT', async () => {
  console.log('\n🛑 Cerrando aplicación...');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Terminando aplicación...');
  await mongoose.connection.close();
  process.exit(0);
});

// Exportar función de conexión
module.exports = connectDB;