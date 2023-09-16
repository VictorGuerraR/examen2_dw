import cors from 'cors';
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import ejemplos from './tarea1/route.js'

dotenv.config()
const app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(ejemplos)

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})
