import express from 'express';
import { consultarIa } from '../services/ollamaService.js';

const router = express.Router();

//Endpoint donde le vamos a dar al usuario los 10 ejercicios
router.post('/api/generate_challenge', async (req, res) => {
  const { lenguaje, nivel } = req.body;

  const prompt = `Soy un estudiante autodidacta de ${lenguaje}, mi nivel de conocimiento es ${nivel}. A continuacion necesito que plantees 10 desafios, solo quiero la consigna, que a prueba mis conocimientos. 
    Tu respuesta debe tener el siguiente formato de un json:
  {
  "EJercicio 1": "<Aqui tu ejercicio>",
  "EJercicio 2": "<Aqui tu ejercicio>",
  "EJercicio 3": "<Aqui tu ejercicio>",
  "EJercicio 4": "<Aqui tu ejercicio>",
  "EJercicio 5": "<Aqui tu ejercicio>",
  "EJercicio 6": "<Aqui tu ejercicio>",
  "EJercicio 7": "<Aqui tu ejercicio>",
  "EJercicio 8": "<Aqui tu ejercicio>",
  "EJercicio 9": "<Aqui tu ejercicio>",
  "EJercicio 10": "<Aqui tu ejercicio>"
  }
  `;
  try {
    const desafio = await consultarIa(prompt);
    res.json(desafio);
    //Esto devuelve un json al frontend, cuando pueda arregarlo je
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Endpoint donde vamos a darle el outPut del codigo al usuario
router.post('/api/output_exercite',async (req,res)=>{
  /* Esto lo vamos a hacer con sandboxes

    const response = await axios.post("http://js-runner:3001/run", { code });


  const {codigo,desafio}=req.body;

  const prompt = `
    Eres una terminal de programación. 
    Solo devuelve la salida que tendría este código al ejecutarse. 
    No agregues explicaciones, comentarios ni ningún texto adicional.
    Devuélvelo estrictamente en formato JSON así:

    {
      "Output": "<Aquí la salida exacta de la ejecución>"
    }

    Código del usuario:
    ${codigo}
    `;
  
  try {
    const desafio = await consultarIa(prompt);
    res.json(desafio);
    //Esto devuelve un json al frontend, cuando pueda arregarlo je
  } catch (err) {
    res.status(500).json({ error: err.message });
  }*/
});

//Endpoint donde vamos a darle una devolucion de rendimiento al usuario
router.post('/api/feedback_solution',async (req)=>{
  const {desafio, codigo, output}=req.body;

  const prompt = `
    Eres un asistente experto en programación que analiza código y detecta errores.

    Te proporcionaré un objeto con los siguientes campos:
    {
      "desafio": ${desafio},
      "codigo": ${codigo},
      "output": ${output}
    }

    Tu tarea es:
    1. Comprender qué intenta hacer el código según el "desafio".
    2. Determinar cuál sería la **salida esperada** si estuviera correcto.
    3. Comparar la salida esperada con la salida real ("output").
    4. Si coinciden → success: true  
      Si difieren → success: false
    5. Si hay error, indica de forma breve:
      - En qué línea se encuentra el problema (por número aproximado o descripción clara).
      - Qué está mal y qué debería hacerse para corregirlo.

    Formato OBLIGATORIO de respuesta (sin explicaciones fuera del JSON):

    {
      "success": <true o false>,
      "feedback": "<mensaje breve indicando si la salida es correcta o no>",
      "solution": "<explicación ordenada del error con número de línea y corrección sugerida, o '' si no hay errores>"
    }

    Reglas:
    - Siempre responde en **español**.
    - Si no hay errores, "solution" debe ser "".
    - No incluyas comentarios, texto fuera del JSON ni explicaciones adicionales.
    - "feedback" debe describir claramente si la salida coincide o cuál es la diferencia.
    - "solution" debe ser un texto legible (no un array), por ejemplo:
      "Error en la línea 3: se usa '-' en lugar de '+'. Debería sumarse numero1 y numero2."

    Ejemplo esperado:

    {
      "success": false,
      "feedback": "La salida esperada debe ser 'La suma es: 8', pero la salida real fue 'La suma es: 2'.",
      "solution": "Error en la línea 3: se usa '-' en lugar de '+'. Debería sumarse numero1 y numero2."
    }
    `;

  try {
    const desafio = await consultarIa(prompt);
    res.json(desafio);
    //Esto devuelve un json al frontend, cuando pueda arregarlo je
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
