const mongoose = require('mongoose');

const conectarBD = async () => {
  try {
    await mongoose.connect('mongodb+srv://robertosinguri_db_user:0Qzx03FUx2HikyFx@cluster0.hvissii.mongodb.net/redpatitas?retryWrites=true&w=majority');
    console.log('✅ MongoDB conectado exitosamente');
  } catch (error) {
    console.error('❌ Error conectando MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = conectarBD;