const mongoose = require('mongoose');
const { configMongoDB } = require('./config');

const URI_MONGO_DB = `mongodb+srv://${configMongoDB.user}:${configMongoDB.password}@cluster0.hvissii.mongodb.net/${configMongoDB.database}?retryWrites=true&w=majority`;

exports.getMongoDBConnection = async () => {
  try {
    await mongoose.connect(URI_MONGO_DB);
    console.log('DATABASE - MongoDB conectado correctamente');
  } catch (error) {
    console.log(`Error en getMongoDBConnection: ${error}`);
    throw error;
  }
};

//this.getMongoDBConnection()