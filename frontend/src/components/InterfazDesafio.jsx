import { useState } from "react";
import axios from "axios";


export default function interfazDesafio(){

const [prompt, setPrompt] = useState("");
const [respuesta, setRespuesta] = useState("");


const consultarIA = async () => {
  if (!prompt) return; // si no hay prompt, no hacer nada
  try {
    const res = await axios.post("http://localhost:3000/api/generate_challenge", { prompt });
    setRespuesta(JSON.stringify(res.data, null, 2)); // formatea JSON
  } catch (err) {
    console.error(err);
    setRespuesta("Error al consultar la IA.");
  }
};


    return (
  <div className="mx-auto w-[375px] h-[812px]  border
         border-black rounded-3xl shadow-lg 
         bg-gray-900 overflow-hidden p-4 flex flex-col">
    <h2 className="text-xl font-bold mb-4 text-center">Mentor-IA</h2>

   <div className="mt-auto flex flex-col gap-3">
       <textarea
      readOnly
      value={respuesta}
      className="border rounded p-2 w-full h-20 -translate-y-10 text-lg"
    />

    <input
      type="text"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Respuesta"
      className="border rounded p-2 mb-4 w-85 h-80 -translate-y-10"
    />

    <textarea
      readOnly
      value={respuesta}
      className="border rounded p-2 w-full h-20 -translate-y-10 text-lg"
    />

    <button
      onClick={consultarIA}
      className="cursor-pointer text-xl bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4 w-30 h-14 translate-x-27 -translate-y-10"
    >Chequear
    </button>
    <div className="grid grid-cols-2 gap-25">
      <button
      className="cursor-pointer text-xl bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4 w-30 h-14 translate-x-0 -translate-y-10"
    >Volver
    </button>
    <button
      className="cursor-pointer text-xl bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4 w-30 h-14 translate-x-0 -translate-y-10"
    >Terminar
    </button>
    </div>



    </div> 
   
  </div>
);


}
