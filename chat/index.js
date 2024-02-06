// Importar o módulo mysql2
const mysql = require('mysql2');

// Configurações de conexão com o MySQL
const conexao = mysql.createConnection({
  host: '157.90.238.176',
  user: 'root',
  password: 'poMY9zHgbaN9Aier',
  database: 'servicos'
});

// Estabelecer a conexão
conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {  
    console.log('Conexão bem-sucedida ao MySQL');

    // Agora você pode realizar operações no banco de dados aqui

    // Exemplo: Consultar dados
    conexao.query("SELECT * FROM `brightspeed_servicos` WHERE `nome` IS NOT NULL", (erroConsulta, resultados) => {
      if (erroConsulta) {
        console.error('Erro ao executar a consulta:', erroConsulta);
      } else {
        console.log('Resultados da consulta:', resultados);
        return 
      }

      
      conexao.end();
    });
  }
});
