// === EXPLORADOR DE COLECCIONES MONGODB ===
// Muestra todas las colecciones y sus documentos en formato árbol
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

async function explorarColecciones() {
  try {
    console.log('📊 Conectando a MongoDB...');
    await mongoose.connect(URI_MONGO_DB);
    
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    
    console.log('\n🗂️  BASE DE DATOS: redpatitas');
    console.log('├─────────────────────────────────');
    
    for (let i = 0; i < collections.length; i++) {
      const collection = collections[i];
      const isLast = i === collections.length - 1;
      const prefix = isLast ? '└──' : '├──';
      
      console.log(`${prefix} 📁 ${collection.name}`);
      
      // Obtener documentos de la colección
      const docs = await db.collection(collection.name).find({}).limit(5).toArray();
      
      if (docs.length === 0) {
        console.log(`${isLast ? '    ' : '│   '}└── (vacía)`);
      } else {
        console.log(`${isLast ? '    ' : '│   '}├── Documentos: ${docs.length > 5 ? '5+' : docs.length}`);
        
        docs.forEach((doc, docIndex) => {
          const isLastDoc = docIndex === docs.length - 1;
          const docPrefix = isLast ? '    ' : '│   ';
          const docSymbol = isLastDoc ? '└──' : '├──';
          
          console.log(`${docPrefix}${docSymbol} 📄 ID: ${doc._id}`);
          
          // Mostrar campos principales (excluyendo _id y __v)
          Object.keys(doc).forEach((key, keyIndex) => {
            if (key !== '_id' && key !== '__v') {
              const isLastKey = keyIndex === Object.keys(doc).length - 1;
              const keyPrefix = `${docPrefix}${isLastDoc ? '    ' : '│   '}`;
              const keySymbol = isLastKey ? '└──' : '├──';
              
              let value = doc[key];
              if (typeof value === 'string' && value.length > 30) {
                value = value.substring(0, 30) + '...';
              }
              
              console.log(`${keyPrefix}${keySymbol} ${key}: ${JSON.stringify(value)}`);
            }
          });
        });
      }
      
      if (!isLast) console.log('│');
    }
    
    console.log('\n📋 RESUMEN JSON:');
    console.log('================');
    
    const resumen = {};
    for (const collection of collections) {
      const count = await db.collection(collection.name).countDocuments();
      const sample = await db.collection(collection.name).findOne({});
      
      resumen[collection.name] = {
        total_documentos: count,
        campos: sample ? Object.keys(sample).filter(k => k !== '_id' && k !== '__v') : [],
        ejemplo: sample || null
      };
    }
    
    console.log(JSON.stringify(resumen, null, 2));
    
    await mongoose.connection.close();
    console.log('\n✅ Exploración completada');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

explorarColecciones();