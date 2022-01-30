const express = require("express");
const router = express.Router();

const Expedientes = new require('../../../../dao/expedientes/expedientes.model');
const expedienteModel = new Expedientes();

router.get('/', (req, res) => {
    res.status(200).json(
        {
            endpoint: 'Expedientes',
            updates: new Date(2022, 0, 22, 13, 46, 00),
            author: 'alan'
        }
    );
}); // GET /

router.get('/all', async (req, res) => {
    try {
        const rows = await expedienteModel.getAll();
        res.status(200).json({ status: 'ok', expedientes: rows });
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ status: 'failed' });
    }
});

// router.post('/new', async (req, res) => {
//     const { identidad, fecha, descripcion, observacion, registros, ultimaActualizacion } = req.body;

//     res.status(200).json({
//         status: 'ok',
//         recieved: {
//             identidad,
//             fecha: new Date().toISOString(),
//             descripcion,
//             observacion,
//             registros,
//             ultimaActualizacion
//         }
//     });
// }); //POST /new

router.post('/new', async (req, res) => {
    const { identidad, fecha, descripcion, observacion, registros, ultimaActualizacion } = req.body;
    try {
        rslt = await expedienteModel.new(identidad, fecha, descripcion, observacion, registros, ultimaActualizacion);
        res.status(200).json(
            {
                status: 'ok',
                result: rslt
            });
    } catch (ex) {
        console.log(ex);
        res.status(500).json(
            {
                status: 'failed',
                result: {}
            });
    }
}); //POST /new


module.exports = router;