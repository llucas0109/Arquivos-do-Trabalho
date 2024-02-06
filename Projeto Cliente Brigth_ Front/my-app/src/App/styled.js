import styled from "styled-components";
import { ConteinerButton } from "../components/Botao/styled";

export const Home = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
` 
export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  
`
export const Servisos = styled.div`
  width: 350px;
  height: 100%;
  background-color: aliceblue;
` 
export const Images = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: end;
  background-color: aliceblue;
  margin: 10px;
` 
export const Botao = styled(ConteinerButton)`
  border-radius: 10px;
  height: 20px;
  margin: 10px;
`
export const Modulo = styled.div`

`


   