const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const diametro = require('../models/diametro');


const controller = {};

controller.getDiametro = async function (pulgadas,callback) {
    try {
        console.log('llegue al controlador  con:',pulgadas)
        let data = await diametro.findOne({ where: { pulgadas:pulgadas} });
        
        callback(data, null);
    } catch (err) {
        console.log('Se produjo un error en el controlador diametro: ', err);
        callback(null, err);
    }
}
module.exports = controller;