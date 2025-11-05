const express = require("express");
const { VM } = require("vm2");
const app = express();
app.use(express.json());

app.post("/run", (req, res) => {
  const { code } = req.body;
  const vm = new VM({ timeout: 2000, sandbox: {} });

  try {
    const result = vm.run(code);
    res.json({ output: String(result) });
  } catch (err) {
    res.json({ error: err.message });
  }
});

app.listen(3001, () => console.log("JS Runner listo en puerto 3001"));
