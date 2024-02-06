import { Router } from 'express';
import  express from 'express';
import cors from 'cors';
import UserController from './UserController.js';

const app = express()
app.use(cors())
const rota = new Router()

rota.post('/users', UserController.store)


export default rota