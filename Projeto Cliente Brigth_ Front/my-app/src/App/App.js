import { Main,Home,Servisos,Images,Botao,Modulo } from "./styled"; 
import Service from "../services/api";
import { useState } from "react"; 

function App(){
   const [service,setservice] = useState([])
  
  async function loadService() {
    try {
      const data = await Service.get('/');
      setservice(data)
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  }
  
  loadService();
  
  // console.log(service);
  return(
    <Home>
      <Main>
        <Servisos > 
          
        </Servisos>
        <Images id="po"> 
        {service &&
          service.map(product => (
            <div key={product}>{product}</div>
          ))}
        <Botao/>
        <Botao/>
        <Botao/>
        </Images>
      </Main>
    </Home>
  )
}
export default App