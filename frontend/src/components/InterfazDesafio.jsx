import { useState } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";


export default function InterfazDesafio(){

const navigate = useNavigate();
const location = useLocation();
const {desafio}=location.state;//Extraemos el parametro que pasamos en /Nieveles

const [codigo, setCodigo] = useState("");
const [output, setOutput] = useState([]);
const [error, setError] = useState(false);

//Funcion para verificar si el output es un exito o un error para asignarle color. Tambieb almacenamos el output en el estado
function verificar(res) {
  console.log(res.data)
  if (res.data.success === false) {
    setError(true);
    setOutput(res.data.error)
  } else {
    setError(false);
    setOutput(prev => [
      ...prev,              
      ...res.data.logs,     
      ...res.data.result     
    ]);
    }
  }

//Funcion para calcular el output del codigo del usuario
const consultarIA = async () => {

  try {

    const res = await axios.post("http://localhost:3000/api/output_exercite", {codigo});
    //verificar si res.data.success es verdadero o falso
    verificar(res)  

  } catch (err) {
    setOutput(`Error al consultar la IA:${err}`);
  }
};


  return (
    <div className="mx-auto w-[375px] h-[812px]  border border-black rounded-3xl shadow-lg 
            bg-gray-900 overflow-hidden p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-center">Mentor-IA</h2>
    
    <div className="mt-auto flex flex-col gap-3">
        <textarea
        readOnly
        value={`${desafio}`}
        className="border rounded p-2 w-full h-20 -translate-y-10 text-lg"
      />
      
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Respuesta"
        className="border rounded p-2 mb-4 w-85 h-80 -translate-y-10 text-sm"
      />

      <textarea
        readOnly
        value={output.join("\n")}
        className={`border rounded p-2 w-full h-20 -translate-y-10 text-sm ${error ? 'text-red-500 border-red-500' : 'text-black border-gray-300'}`}
      />

      <button
        onClick={consultarIA}
        className="cursor-pointer text-xl bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4 w-30 h-14 translate-x-27 -translate-y-10"
      >Chequear
      </button>
      <div className="grid grid-cols-2 gap-25">
        <button onClick={() => navigate(-1)}
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
