
import { useState } from "react";
import axios from 'axios'
import ReactCodeMirror, { oneDark } from "@uiw/react-codemirror";

async function llamado(code){
  const response = await axios.post('/api/feedback_solution', {
    codigo: code
  });
}

export default function App() {
  const [code, setCode] = useState("// Escribe tu código aquí");
  return (
    <div className="text-4xl font-bold text-blue-500 text-center mt-10">
      <ReactCodeMirror value={code} onChange={setCode} theme={oneDark}></ReactCodeMirror>
      <button onClick={llamado(code)}>Buton</button>
    </div> 
  );

}

