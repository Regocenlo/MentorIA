const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Mentoria esta en ejecucion!'));

app.listen(3000, () => console.log('El backend esta escuchando en el puerto 3000'));
