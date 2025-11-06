const express = require("express");
const { VM } = require("vm2");

const app = express();
app.use(express.json());

app.post("/run", (req, res) => {
  const { codigo } = req.body;

  // Validamos que se haya recibido codigo
  if (typeof codigo !== "string" || codigo.trim() === "") {
    return res.status(400).json({ error: "No se recibió código válido." });
  }

  // Array para capturar los logs del código ejecutado
  const logs = [];

  const vm = new VM({
    timeout: 2000, 
    sandbox: {
      console: {
        log: (...args) => logs.push(args.join(" ")), // capturar console.log
      },
    },
  });

  try {
    const result = vm.run(codigo);

    res.json({
      success: true,
      logs,
      result: result !== undefined ? String(result) : null,
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.message,
      logs,
    });
  }
});


app.listen(3001, () => console.log("JS Runner listo en puerto 3001"));