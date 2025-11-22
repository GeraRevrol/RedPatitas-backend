const Adopcion = require('./models/Adopcion');
const { getMongoDBConnection } = require('../database/conexion');

// Conectar una sola vez al cargar el módulo
getMongoDBConnection();

exports.getAllAdopciones = async () => {
    try {
        console.log("REPOSITORY - getAllAdopciones");
        return await Adopcion.find();
    } catch (error) {
        console.log(`Error en REPOSITORY - getAllAdopciones: ${error}`);
        throw new Error(`Error en REPOSITORY - getAllAdopciones: ${error}`);
    }
};

exports.createAdopcion = async (datos) => {
    try {
        console.log(`REPOSITORY - createAdopcion - Datos: ${JSON.stringify(datos)}`);
        const mascota = new Adopcion(datos);
        return await mascota.save();
    } catch (error) {
        console.log(`Error en REPOSITORY - createAdopcion: ${error}`);
        throw new Error(`Error en REPOSITORY - createAdopcion: ${error}`);
    }
};

exports.updateAdopcion = async (id, datos) => {
    try {
        console.log(`REPOSITORY - updateAdopcion - ID: ${id} - Datos: ${JSON.stringify(datos)}`);
        const mascota = await Adopcion.findByIdAndUpdate(id, datos, { new: true });
        if (!mascota) {
            throw new Error('Mascota no encontrada');
        }
        return mascota;
    } catch (error) {
        console.log(`Error en REPOSITORY - updateAdopcion: ${error}`);
        throw new Error(`Error en REPOSITORY - updateAdopcion: ${error}`);
    }
};

exports.deleteAdopcion = async (id) => {
    try {
        console.log(`REPOSITORY - deleteAdopcion - ID: ${id}`);
        const mascota = await Adopcion.findByIdAndDelete(id);
        if (!mascota) {
            throw new Error('Mascota no encontrada');
        }
        return mascota;
    } catch (error) {
        console.log(`Error en REPOSITORY - deleteAdopcion: ${error}`);
        throw new Error(`Error en REPOSITORY - deleteAdopcion: ${error}`);
    }
};