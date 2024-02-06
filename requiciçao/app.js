// app.js
//import express from 'express';
//import rota from './route.js';
//import './database/index.js';
import express from 'express';
import rota from './route.js'; 
import cors from 'cors'

class App{ 
  constructor(){
    this.app = express()
    this.app.use(cors())
    this.route()
  } 

  route(){
    this.app.use(rota) 
  }

}
export default new App() 
