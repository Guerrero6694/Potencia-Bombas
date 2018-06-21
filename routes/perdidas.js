const express = require('express');
const router = express.Router();

const AccesorioController = require('../controllers/accesorio');

// Obtiene los accesorios disponibles
router.get('/accesorios', (req, res, next) => {
    AccsesorioController.getAccesorios((data, err) => {
        if (err) throw err;

        if (data) {
            res.json({
                accesorios: data
            });
        }
    });
});

module.exports = router;