const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(
        {
            endpoint: 'Expedientes',
            updates: new Date(2022, 0, 22, 13, 46, 00),
            author: 'alan'
        }
    );
}); // GET /

router.post('/new', async (req, res) => {
    const { identidad, fecha, descripcion, observacion, registros, ultimaActualizacion } = req.body;

    res.status(200).json({
        status: 'ok',
        recieved: {
            identidad,
            fecha: new Date().toISOString(),
            descripcion,
            observacion,
            registros,
            ultimaActualizacion
        }
    });
}); //POST /new


module.exports = router;