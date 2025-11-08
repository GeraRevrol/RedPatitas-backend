require('dotenv').config();
const mongoose = require('mongoose');

// Configuración según documentación oficial de Mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Opciones recomendadas por Mongoose 8.x
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4 // IPv4
    });

    console.log(`✅ MongoDB conectado: ${conn.connection.host}`);
    
    // Event listeners según documentación
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
    process.exit(1);
  }
};

// Graceful shutdown según documentación
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

module.exports = connectDB;