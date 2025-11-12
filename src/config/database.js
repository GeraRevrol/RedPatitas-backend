// === CONEXIÓN MONGODB (VERSIÓN SIMPLE) ===
// Conexión directa con credenciales integradas
const mongoose = require('mongoose');

// Función de conexión a MongoDB Atlas
const conectarBD = async () => {
  try {
    // Conectar a base de datos "redpatitas" en MongoDB Atlas
    await mongoose.connect('mongodb+srv://robertosinguri_db_user:0Qzx03FUx2HikyFx@cluster0.hvissii.mongodb.net/redpatitas?retryWrites=true&w=majority');
    console.log('✅ MongoDB conectado exitosamente');
  } catch (error) {
    console.error('❌ Error conectando MongoDB:', error.message);
    process.exit(1); // Terminar aplicación si falla la conexión
  }
};

// Exportar función de conexión
module.exports = conectarBD;