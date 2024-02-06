import App from "./src/app.js";

const port = 3001
const AppInstanciado = App;
const apl = AppInstanciado.app 

apl.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
