const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de diametro
const diametro = connection.define('diametro',
    {
        pulgadas: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        metros: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        centimetros: {
            type: Sequelize.FLOAT,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    });

module.exports = diametro;
