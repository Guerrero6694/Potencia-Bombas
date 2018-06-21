const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de vivienda unifamiliar
const vivienda_unifamiliar = connection.define('vivienda_unifamiliar',
    {
        dimension: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        dotacion: {
            type: Sequelize.INTEGER,
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

module.exports = vivienda_unifamiliar;
