const express = require('express');
const router = express.Router();
const { generarDesafio } = require('../services/ollamaService');

//Declaracion del endpoint
router.post('/generate_challenge', async (req, res) => {
  const { lenguaje, nivel } = req.body;

  try {
    const desafio = await generarDesafio({ lenguaje, nivel });

    res.json(desafio);
    //Esto devuelve un json al frontend, cuando pueda arregarlo je
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
