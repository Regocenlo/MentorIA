import axios from 'axios'

const OLLAMA_URL = 'http://ollama:11434/api/generate';

//En los parametros define valores por defecto
export async function generarDesafio({ lenguaje = 'JavaScript', nivel = 'principiante' }) {
  
  const prompt = `Soy un estudiante autodidacta de ${lenguaje}, mi nivel de conocimiento es ${nivel}. A continuacion necesito que plantees 10 desafios, solo quiero la consigna, que a prueba mis conocimientos. 
  Tu respuesta debe tener el siguiente formato:
{
"EJercicio 1": "<Aqui tu ejercicio>"
"EJercicio 2": "<Aqui tu ejercicio>"
"EJercicio 3": "<Aqui tu ejercicio>"
"EJercicio 4": "<Aqui tu ejercicio>"
"EJercicio 5": "<Aqui tu ejercicio>"
"EJercicio 6": "<Aqui tu ejercicio>"
"EJercicio 7": "<Aqui tu ejercicio>"
"EJercicio 8": "<Aqui tu ejercicio>"
"EJercicio 9": "<Aqui tu ejercicio>"
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