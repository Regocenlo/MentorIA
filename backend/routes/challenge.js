import express from 'express';
import axios from "axios"
import { consultarIa } from '../services/ollamaService.js';

const router = express.Router();

//Endpoint donde le vamos a dar al usuario los 10 ejercicios
router.post('/api/generate_challenge', async (req, res) => {
  const { lenguaje, nivel } = req.body;

  const prompt = `Soy un estudiante autodidacta de ${lenguaje}, mi nivel de conocimiento es ${nivel}. A continuacion necesito que plantees 10 ejercicios, solo quiero la consigna, que a prueba mis conocimientos. 
    Tu respuesta debe tener el siguiente formato de un json:
  {
  "Ejercicio 1": "<Aqui tu ejercicio>",
  "Ejercicio 2": "<Aqui tu ejercicio>",
  "Ejercicio 3": "<Aqui tu ejercicio>",
  "Ejercicio 4": "<Aqui tu ejercicio>",
  "Ejercicio 5": "<Aqui tu ejercicio>",
  "Ejercicio 6": "<Aqui tu ejercicio>",
  "Ejercicio 7": "<Aqui tu ejercicio>",
  "Ejercicio 8": "<Aqui tu ejercicio>",
  "Ejercicio 9": "<Aqui tu ejercicio>",
  "Ejercicio 10": "<Aqui tu ejercicio>"
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

//Endpoint donde vamos a darle el outPut del codigo al usuario (por el momento solo js)
router.post('/api/output_exercite',async (req,res)=>{

  const {codigo}=req.body;

  try {
    const response = await axios.post("http://js-runner:3001/run", { codigo });
    res.json(response.data);
    //Esto devuelve un json al frontend, cuando pueda arregarlo je
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Endpoint donde vamos a darle una devolucion de rendimiento al usuario
router.post('/api/feedback_solution',async (req, res)=>{
  const {desafio, codigo, output}=req.body;
  console.log("----------------------------------------------");
  console.log(desafio);
  console.log("----------------------------------------------");
  console.log(codigo);
  console.log("----------------------------------------------");
  console.log(output);
  console.log("----------------------------------------------");
  

  const prompt = `
    Eres un asistente experto en programación que analiza código y detecta errores.

    Te proporcionaré un objeto con los siguientes campos:
    {
      "enunciado": ${desafio},
      "codigo": ${codigo},
      "output": ${output.join("\n")}
    }

    Tu tarea es:
    1. Comprender el objetivo del enunciado.
    2. Determinar cuál sería la **salida esperada** del enunciado.
    3. Comparar la salida esperada con la salida real ("output").
    Si coinciden → success: true  
    Si difieren → success: false
    4. Determinar si el codigo proporcionado satisface al enunciado.
    Si coinciden → success: true  
    Si difieren → success: false
    5. Si hay error, indica de forma breve:
      - En qué línea se encuentra el problema (por número aproximado o descripción clara).
      - Qué está mal y qué debería hacerse para corregirlo.

    Formato OBLIGATORIO de respuesta (sin explicaciones fuera del JSON):

    {
      "success": <true o false>,
      "solution": "<Explicación ordenada del problema, si lo hubiera. indicar linea del error y posible solucion, si existiera. En caso de no haber error inficar que el ejercicio se cumplio satisfactoriamente>"
      "feedback": "<Indicar consejos sobre el codigo del usuario, tanto como si se cumplio el objetivo como si no. Se busca que se den consejos sobre utilizacion de variables, funciones, optimizaciones o demas cuestiones que tengan que ver con buenas tecnicas de desarrollo, Siempre recordando que hablas con desarrolladores principiantes>",
    }

    Reglas:
    - Siempre responde en **español**.
    - No incluyas comentarios, texto fuera del JSON ni explicaciones adicionales.
    - "feedback" debe fortalecer las tectincas de programacion del usuario.
    - "solution" debe proporcionar una correccion del codigo de caracter mas formal. ser un texto legible (no un array), por ejemplo:
    "Error en la línea 3: se usa '-' en lugar de '+'. Debería sumarse numero1 y numero2."
    `;

  try {
    const resultado = await consultarIa(prompt);
    res.json(resultado);
    //Esto devuelve un json al frontend, cuando pueda arregarlo je
  } catch (err) {
    console.error("Error en feedback_solution:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
