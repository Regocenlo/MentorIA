import express from 'express';
import fs from 'fs';
import exec from 'child_process';
const app = express(); 
app.use(express.json());

app.post("/run", (req, res) => {
  const { code } = req.body;
  const className = "Main"; // nombre fijo para el archivo

  fs.writeFileSync(`${className}.java`, code);

  exec(`javac ${className}.java && java ${className}`, { timeout: 2000 }, (err, stdout, stderr) => {
    if (err) return res.json({ error: stderr || err.message });
    res.json({ output: stdout });
  });
});

app.listen(3004, () => console.log("☕ Java Runner listo en puerto 3004"));
