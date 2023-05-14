const basesNitrogenadas = require('../constants.js').nitroBases;

module.exports = class nitrogenateBaseValidator{

  constructor(matrix){
    this.matrix = matrix;
  }

  //Debes validar que sólo puedas recibir bases nitrogenadas válidas.
  validateSimbols(adnStr){

    for (let i=0;i<=adnStr.length-1;i++)
      if (!basesNitrogenadas.includes(adnStr[i])){
            return false;
      }
    return true;
  }

  validate(){
    let resu = this.matrix.map((adn) => this.validateSimbols(adn));
    return resu.every((stat) => stat==true);
  }
}