const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const challengeRoutes = require('./routes/challenge');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Llamadas al endpoint
app.use('/', challengeRoutes);

app.listen(3000, () => console.log('El backend esta escuchando en el puerto 3000'));
