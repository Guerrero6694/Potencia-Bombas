const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const vivienda_unifamiliar = require('../models/vivienda_unifamiliar');


const controller = {};

controller.getCaudal = async function (dimension,callback) {
    try {
        console.log('llegue al controlador  con:',dimension)
        let data = await vivienda_unifamiliar.findOne({ where: { dimension: dimension} });
        
        callback(data, null);
    } catch (err) {
        console.log('Se produjo un error en el controlador de vivienda unifamiliar: ', err);
        callback(null, err);
    }
}
module.exports = controller;