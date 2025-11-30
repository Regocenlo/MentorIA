import React, { useState } from "react";


export function CodeEditor() {
  const [code, setCode] = useState("// Escribe tu código aquí");

  const handleChange = (value) => {
    setCode(value);
    console.log("Nuevo código:", value);
  };

  return (
    <div className="bbg-gray-700 w-full h-24 text-sm md:text-base">
      <CodeMirror
        value={code}
        height="100px"
        theme={oneDark}
        extensions={[javascript({ jsx: true })]}
        onChange={handleChange}
        className="rounded-lg overflow-hidden"
      />
    </div>
  );
}
