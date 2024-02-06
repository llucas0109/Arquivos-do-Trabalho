import { Router } from 'express';
import  express from 'express';
import cors from 'cors';
import DadosDeimags from './controlers/GerenciarDaodos.js'

const app = express()
app.use(cors())

const rota = new Router()
rota.get('/', DadosDeimags.DadoImagem);
// rota.get('/', ProductControllers.index);
// rota.put('/', ProductControllers.update);

export default rota
