const connection = require('../config/database');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Modelos Utilizados
const accesorio = require('../models/accesorio');


const controller = {};

controller.getAccesorio = async function (info,callback) {
    try {
        console.log('llegue al controlador  con:',info)
        let data = await accesorio.findOne({ where: { diametro:info.diametro},attributes: [info.tipo]});
        
        callback(data, null);
    } catch (err) {
        console.log('Se produjo un error en el controlador diametro: ', err);
        callback(null, err);
    }
}
module.exports = controller;