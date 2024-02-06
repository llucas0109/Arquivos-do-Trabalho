import Sequelize from 'sequelize';
import pkg from 'sequelize';
const { Model } = pkg; 

class Servico extends Model{
  static init(sequelize){
    super.init({
      nome: Sequelize.STRING, 
      dataCadastro: Sequelize.DATE,
      dataConclusao: Sequelize.DATE,
    },{
      sequelize,
    })
  }
}

export default Servico 