const mutation = require('./mutation.js');
const matriz   = require('./matrix.js');
const validate = require('./validator.js');

class mutant{
    // crear un servicio con un método o función con la siguiente firma
    hasMutation(adnArray){

      const isValid= validate.validateADN(adnArray);
      if(isValid==false) {
          throw "error: caracteres invalidos";
      }

      //arraystrings -> matriz.
      let adnMatriz = matriz.adnArrayToMatrix(adnArray);

      //Check is mutant
      return mutation.isMutant(adnMatriz);

    }

}

module.exports = new mutant();