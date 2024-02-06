import chamada from '../../config/config.js';

class DadosDeimags {
  async DadoImagem(request, response) {
    try {
      const resultados = await new Promise((resolve, reject) => {
        chamada.connect((err) => {
          if (err) {
            console.error('Erro ao conectar ao MySQL:', err);
            reject(err);
          } else {
            console.log('Conexão bem-sucedida ao MySQL');

            chamada.query("SELECT * FROM `brightspeed_servicos` WHERE `nome` IS NOT NULL", (erroConsulta, resultados) => {
              if (erroConsulta) {
                console.error('Erro ao executar a consulta:', erroConsulta);
                reject(erroConsulta);
              } else {
                console.log('Resultados da consulta:', resultados);
                resolve(resultados);
              }

              // chamada.end(); // Você pode fechar a conexão aqui, se necessário
            });
          }
        });
      });

      console.log("resultados   ",resultados);
      return resultados;
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      throw error;
    }
  }
}

export default new DadosDeimags();
