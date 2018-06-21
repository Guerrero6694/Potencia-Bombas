const express = require('express');
const router = express.Router();

const VUController = require('../controllers/vivienda_unifamiliar');
const diametroController= require('../controllers/diametro');
const accesorioController=require('../controllers/accesorio');
// Obtiene la dotacion de vivienda unifamiliar
router.post('/vivienda_unifamiliar', (req, res, next) => {
    console.log('esto es donde tiene q darme ',req.body.dimension);

    VUController.getCaudal(req.body.dimension, (data, err) => {
        
        if (err) throw err;

        if (data) {
            res.json({
                data
            });
        }
    }    
);
});
// Obtiene los diametros en metros
router.post('/diametro', (req, res, next) => {
    console.log('esto es donde tiene q darme ',req.body.diametro);

    diametroController.getDiametro(req.body.diametro, (data, err) => {
        
        if (err) throw err;

        if (data) {
            res.json({
                data
            });
        }
    }    
);
});

// Obtiene los diametros en metros
router.post('/perdidas-accesorios', (req, res, next) => {
    console.log('esto es donde tiene q darme ',req.body.test.tipo,req.body.test.diametro);

    accesorioController.getAccesorio(req.body.test, (data, err) => {
        
        if (err) throw err;

        if (data) {
            res.json({
                data
            });
        }
    }    
);
});
module.exports = router;



