const axios = require('axios');

const OLLAMA_URL = 'http://ollama:11434/api/generate';

//En los parametros define valores por defecto
async function generarDesafio({ lenguaje = 'JavaScript', nivel = 'principiante' }) {
  
  const prompt = `Genera un desafío de programación para ${nivel} en ${lenguaje}. 
Tu respuesta tiene que ser un json con el siguiente formato: 
{
Nivel: "<El nivel de dificultad>",
Lenguaje: "<El lenguaje de programacion>",
Desafio: "<El desafio que propones>
}

Tu respuesta no debe contener encabezado ni conclusion ni cualquier otro formato que no sea el json que te solicite.
".`;

  const response = await axios.post(OLLAMA_URL, {
    model: 'deepseek-coder',
    prompt,
    stream: false
  });

  const raw = response.data.response;
  console.log(raw);
  return { raw };
}
module.exports = { generarDesafio };