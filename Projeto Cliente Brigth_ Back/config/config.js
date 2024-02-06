import mysql from 'mysql'

function chamada(){
const conexao = mysql.createConnection({
  host: '157.90.238.176',
  user: 'root',
  password: 'poMY9zHgbaN9Aier',
  database: 'servicos'
});
return conexao
}
export default new chamada