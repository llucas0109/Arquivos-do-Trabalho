
import App from "./app.js";
//const { App } = require('./Src/app.js'); 
const port = 3001
const AppInstanciado = App ;
const apl = AppInstanciado.app // Pega 'this.app' do App() 

apl.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});