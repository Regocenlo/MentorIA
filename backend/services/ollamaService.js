import axios from 'axios'

const OLLAMA_URL = 'http://ollama:11434/api/generate';

//Funcion para extraer solo el JSON de las respuestas de ollama
function extractJson(texto) {
  const inicio = texto.indexOf('{');
  const fin = texto.lastIndexOf('}');
  if (inicio === -1 || fin === -1 || fin <= inicio) {
    throw new Error('No se encontró un bloque JSON válido');
  }

  const jsonStr = texto.slice(inicio, fin + 1);

  try {
    return JSON.parse(jsonStr);
  } catch (err) {
    throw new Error('El bloque JSON extraído no es válido');
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
"EJercicio 10": "<Aqui tu ejercicio>",
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
Eres un asistente que corrige código de programación.
Analiza cuidadosamente este código del usuario:
${codigo}

Este código intenta resolver el enunciado:
${desafio}

La salida que produjo al ejecutarlo fue:
${output}

Tu tarea es:
1. Determinar si el código es correcto comparando la salida con la esperada según el enunciado.
2. Dar un feedback breve sobre qué se hizo bien o sugerencias de mejora.
3. Si hay errores, listar de forma clara y concisa los problemas o cosas a corregir.

⚠️ Devuelve **solo un JSON válido**, sin explicaciones adicionales ni comentarios.  
⚠️ Si no hay errores, solution debe ser "", si no hay feedback, feedback debe ser "".

Formato esperado:
{
  "success": <true o false>,
  "feedback": "<mensaje de feedback o ''>",
  "solution": "<listado de correcciones o ''>"
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
