import chamada from './config/config.js';


// Estabelecer a conexão
class DadosDeimags {
  async DadoImagem(request,response){  
    chamada.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
      } else {
        console.log('Conexão bem-sucedida ao MySQL');

        // Agora você pode realizar operações no banco de dados aqui

        // Exemplo: Consultar dados
        chamada.query("SELECT * FROM `brightspeed_servicos` WHERE `nome` IS NOT NULL", (erroConsulta, resultados) => {
          if (erroConsulta) {
            console.error('Erro ao executar a consulta:', erroConsulta);
          } else {
            console.log('Resultados da consulta:', resultados);
            return 
          }

          
          chamada.end();
        });
      }
    });
  }
}