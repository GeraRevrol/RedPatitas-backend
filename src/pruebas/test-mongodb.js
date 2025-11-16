// === PRUEBA DE CONEXIÓN MONGODB ===
// Archivo para probar la conexión a MongoDB Atlas
require('dotenv').config({ path: '../../.env', debug: false });
const mongoose = require('mongoose');
const { configMongoDB } = require('../../database/config');

console.log('🔍 Variables cargadas:', {
  user: configMongoDB.user,
  database: configMongoDB.database,
  hasPassword: !!configMongoDB.password
});

// Crear conexión independiente
const URI_MONGO_DB = `mongodb+srv://${configMongoDB.user}:${configMongoDB.password}@cluster0.hvissii.mongodb.net/${configMongoDB.database}?retryWrites=true&w=majority`;

async function testMongoDB() {
  console.log('🔍 Iniciando prueba de conexión MongoDB...');
  
  try {
    // Probar conexión
    console.log('📡 Conectando a MongoDB Atlas...');
    await mongoose.connect(URI_MONGO_DB);
    console.log('✅ Conexión exitosa a MongoDB!');
    
    // Probar operación básica
    console.log('🔍 Probando operación básica...');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`📊 Colecciones encontradas: ${collections.length}`);
    collections.forEach(col => console.log(`   - ${col.name}`));
    
    // Cerrar conexión
    console.log('🔌 Cerrando conexión...');
    await mongoose.connection.close();
    console.log('✅ Prueba completada exitosamente!');
    
  } catch (error) {
    console.error('❌ Error en la prueba:', error.message);
    console.error('💡 Verifica:');
    console.error('   - Credenciales en .env');
    console.error('   - IP autorizada en MongoDB Atlas');
    console.error('   - Conexión a internet');
  }
}

// Ejecutar prueba
testMongoDB();