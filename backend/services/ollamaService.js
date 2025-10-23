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
  return JSON.parse(jsonStr);
}

// Funcion para consultar el prompt a la IA
export async function consultarIa(prompt) {
  if(prompt == ""){
    throw new Error('No se encuentra el prompt');
  }
  for (let i = 0; i < 3; i++) {
    const response = await axios.post(OLLAMA_URL, {
      model: 'codellama:7b',
      prompt,
      stream: false
    });

    const raw = response.data.response;
    console.log(raw);

    try {
      const json = extractJson(raw);
      return json;
    } catch(err) {
      console.log("Reintento " + i);
    }
  }
}
