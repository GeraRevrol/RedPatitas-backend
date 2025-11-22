const Perdida = require('./models/Perdida');
const { getMongoDBConnection } = require('../database/conexion');

// Conectar una sola vez al cargar el módulo
getMongoDBConnection();

exports.getAllPerdidas = async () => {
    try {
        console.log("REPOSITORY - getAllPerdidas");
        const mascotas = await Perdida.find();
        return mascotas || [];
    } catch (error) {
        console.log(`Error en REPOSITORY - getAllPerdidas: ${error}`);
        throw new Error(`Error en REPOSITORY - getAllPerdidas: ${error}`);
    }
};

exports.createPerdida = async (datos) => {
    try {
        console.log(`REPOSITORY - createPerdida - Datos: ${JSON.stringify(datos)}`);
        const mascota = new Perdida(datos);
        return await mascota.save();
    } catch (error) {
        console.log(`Error en REPOSITORY - createPerdida: ${error}`);
        throw new Error(`Error en REPOSITORY - createPerdida: ${error}`);
    }
};

exports.updatePerdida = async (id, datos) => {
    try {
        console.log(`REPOSITORY - updatePerdida - ID: ${id} - Datos: ${JSON.stringify(datos)}`);
        const mascota = await Perdida.findByIdAndUpdate(id, datos, { new: true });
        if (!mascota) {
            throw new Error('Mascota perdida no encontrada');
        }
        return mascota;
    } catch (error) {
        console.log(`Error en REPOSITORY - updatePerdida: ${error}`);
        throw new Error(`Error en REPOSITORY - updatePerdida: ${error}`);
    }
};

exports.deletePerdida = async (id) => {
    try {
        console.log(`REPOSITORY - deletePerdida - ID: ${id}`);
        const mascota = await Perdida.findByIdAndDelete(id);
        if (!mascota) {
            throw new Error('Mascota perdida no encontrada');
        }
        return mascota;
    } catch (error) {
        console.log(`Error en REPOSITORY - deletePerdida: ${error}`);
        throw new Error(`Error en REPOSITORY - deletePerdida: ${error}`);
    }
};