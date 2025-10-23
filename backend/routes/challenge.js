import express from 'express';
import { generarDesafio, salidaDesafio, revisionSolucion } from '../services/ollamaService.js';

const router = express.Router();
//Declaracion del endpoint

//Endpoint donde le vamos a dar al usuario los 10 ejercicios
router.post('/api/generate_challenge', async (req, res) => {
  const { lenguaje, nivel } = req.body;

  try {

    const desafio = await generarDesafio({ lenguaje, nivel });

    res.json(desafio);
    //Esto devuelve un json al frontend, cuando pueda arregarlo je
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Endpoint donde vamos a darle el outPut del codigo al usuario
router.post('/api/output_exercite',async (req,res)=>{
  const {codigo,desafio}=req.body;

  try {

    const solucion = await salidaDesafio({ codigo,desafio });
    res.json(solucion);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

//Endpoint donde vamos a darle una devolucion de rendimiento al usuario
router.post('/api/feedback_solution',async (req,res)=>{
  const {desafio,codigo,output}=req.body;

  try {

    const solucion = await revisionSolucion({desafio, codigo, output});
    res.json(solucion);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

export default router;
