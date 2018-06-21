const Sequelize = require('sequelize');
const connection = require('../config/database');

// Modelo de diametro
const accesorio = connection.define('accesorio',
    {
        diametro: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'valvula de compuerta': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'Valvula de globo': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'valvula de bola': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'valvulas mariposa': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'valvulas retencion (CHECK)': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'valvula retencion  Tipo oscilante (SWING)': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'valvulas de retencion (CHECK)': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'valvulas de retencion tipo obturador ascendente (LIFT)': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'Valvulas de Retencion (CHECK) 5grd.': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'Valvulas de retencion tipo disco inclinado 15grd.': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        '"T" estandar flujo directo': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        '"T" estandar flujo a través del brazo de intercepción': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'Codo estandar de 90 grd.': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'Codo estandar de 45 grd.': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'Codo de radio largo de 90grd.': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'Entrada proyectada dentro del tanque': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        'entrada bajo el nivel de agua': {
            type: Sequelize.FLOAT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        },
        
    },
    {
        timestamps: false,
        freezeTableName: true
    });

module.exports = accesorio;


