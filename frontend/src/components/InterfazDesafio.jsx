import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import Feedback from "./Feedback";

export default function InterfazDesafio() {

  const navigate = useNavigate();
  const location = useLocation();
  const { desafio } = location.state;

  const [codigo, setCodigo] = useState("");
  const [output, setOutput] = useState([]);
  const [error, setError] = useState(false);

  function verificar(res) { 
    if (res.data.success === false) {
      setError(true);
      setOutput([res.data.error]);
    } else {
      setError(false);
      setOutput(prev => [
        ...prev,
        ...res.data.logs,
        ...res.data.result
      ]);
    }
  }
  const handleChange = (value) => {
    setCodigo(value);
  };

  function finalizar(){
    navigate("/Feedback")
  }

  const consultarIA = async () => {
    setOutput([]); 
    try {
      const res = await axios.post("/api/output_exercite", { codigo });
      verificar(res);
    } catch (err) {
      setOutput([`Error al consultar la IA: ${err}`]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4">

      <div className="w-full max-w-md md:max-w-xl lg:max-w-3xl bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col gap-6">

        <h2 className="text-2xl md:text-3xl font-bold text-center">Mentor-IA</h2>

        {/* Desafio */}
        <textarea
          readOnly
          value={desafio}
          className="border border-gray-600 bg-gray-700 rounded p-3 w-full h-24 
                     text-sm md:text-base"
        />

        <CodeMirror
          value={codigo}
          height="100px"
          theme={oneDark}
          extensions={[javascript({ jsx: true })]}
          onChange={handleChange}
          className="rounded-lg overflow-hiddenw-full h-24 text-sm md:text-base text-left"
        />

        <textarea
          readOnly
          value={output.join("\n")}
          className={`border rounded p-3 w-full h-28 text-sm md:text-base 
            ${error ? "border-red-500 text-red-400 bg-red-900/20" 
                    : "border-gray-600 text-white bg-gray-700"}`}
        />

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button
            onClick={consultarIA}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg"
          >
            Chequear
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded text-lg"
          >
            Volver
          </button>

          <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded text-lg"
          onClick={Feedback}>
            Terminar
          </button>
        </div>

      </div>
    </div>
  );
}
