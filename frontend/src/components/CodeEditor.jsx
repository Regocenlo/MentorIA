import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

export default function CodeEditor() {
  const [code, setCode] = useState("// Escribe tu código aquí");

  const handleChange = (value) => {
    setCode(value);
    console.log("Nuevo código:", value);
  };

  return (
    <div className="p-4 bg-gray-900 rounded-2xl shadow-lg">
      <CodeMirror
        value={code}
        height="300px"
        theme={oneDark}
        extensions={[javascript({ jsx: true })]}
        onChange={handleChange}
        className="rounded-lg overflow-hidden"
      />
    </div>
  );
}
