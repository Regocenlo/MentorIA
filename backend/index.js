import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import challengeRoutes from './routes/challenge.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Llamadas al endpoint
app.use('/', challengeRoutes);

app.listen(3000, () => console.log('El backend esta escuchando en el puerto 3000'));
