const Adopcion = require('./models/Adopcion');
const { getMongoDBConnection } = require('../database/conexion');

exports.getAllAdopciones = async () => {
    try {
        console.log("REPOSITORY - getAllAdopciones");
        await getMongoDBConnection();
        return await Adopcion.find();
    } catch (error) {
        console.log(`Error en REPOSITORY - getAllAdopciones: ${error}`);
        throw new Error(`Error en REPOSITORY - getAllAdopciones: ${error}`);
    }
};

exports.getAdopcionById = async (id) => {
    try {
        console.log(`REPOSITORY - getAdopcionById - ID: ${id}`);
        await getMongoDBConnection();
        const mascota = await Adopcion.findById(id);
        if (!mascota) {
            throw new Error('Mascota no encontrada');
        }
        return mascota;
    } catch (error) {
        console.log(`Error en REPOSITORY - getAdopcionById: ${error}`);
        throw new Error(`Error en REPOSITORY - getAdopcionById: ${error}`);
    }
};

exports.createAdopcion = async (datos) => {
    try {
        console.log(`REPOSITORY - createAdopcion - Datos: ${JSON.stringify(datos)}`);
        await getMongoDBConnection();
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
        await getMongoDBConnection();
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
        await getMongoDBConnection();
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