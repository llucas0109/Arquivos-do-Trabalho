import { Router } from 'express';
import  express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())

const rota = new Router()
rota.post('/', ServicosControllers.store);
// rota.get('/', ProductControllers.index);
// rota.put('/', ProductControllers.update);

export default rota
