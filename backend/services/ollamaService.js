import axios from 'axios'

const OLLAMA_URL = 'http://ollama:11434/api/generate';

//Funcion para extraer solo el JSON de las respuestas de ollama
function extractJson(texto) {
  // Limpia posibles bloques markdown
  const limpio = texto.replace(/```(?:json)?/gi, '').trim();

  const inicio = limpio.indexOf('{');
  const fin = limpio.lastIndexOf('}');
  if (inicio === -1 || fin === -1 || fin <= inicio) {
    throw new Error('No se encontró un bloque JSON válido');
  }

  const jsonStr = limpio.slice(inicio, fin + 1);

  try {
    return JSON.parse(jsonStr);
  } catch (err) {
    throw new Error('El bloque JSON extraído no es válido: ' + err.message);
  }
}


//Funcion para devolver los ejercicios para el usuario
//En los parametros define valores por defecto
export async function generarDesafio({ lenguaje = 'JavaScript', nivel = 'principiante' }) {
  
  const prompt = `Soy un estudiante autodidacta de ${lenguaje}, mi nivel de conocimiento es ${nivel}. A continuacion necesito que plantees 10 desafios, solo quiero la consigna, que a prueba mis conocimientos. 
  Tu respuesta debe tener el siguiente formato:
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

  const response = await axios.post(OLLAMA_URL, {
    model: 'codellama:7b',
    prompt,
    stream: false
  });

  const raw = response.data.response;
  console.log(raw);
  const json = extractJson(raw);
  return json;

}

//Funcion para devolver el output del codigo del usuario
export async function salidaDesafio({desafio,codigo}) {
  
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

  const response = await axios.post(OLLAMA_URL, {
    model: 'codellama:7b',
    prompt,
    stream: false
  });

  const raw = response.data.response;
  const json = extractJson(raw);
  return json;

}

//Funcion para corregir los errores al usuario o dar feedback
export async function revisionSolucion({desafio, codigo, output}) {

  const prompt = `
Eres un asistente experto en programación que analiza código y detecta errores.

Te proporcionaré un objeto con los siguientes campos:
{
  "codigo": ${codigo},
  "desafio": ${desafio},
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




  const response = await axios.post(OLLAMA_URL, {
    model: 'codellama:7b',
    prompt,
    stream: false
  });

  const raw = response.data.response;
  const json = extractJson(raw);
  return json;
};
