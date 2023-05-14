const strValidator   = require('./validators/string.js');
const nitroValidator = require('./validators/nitroBase.js');
const nxnValidator   = require('./validators/nxn.js');

module.exports.validateADN = (adnArray)=>{
  let validArray = [strValidator, nitroValidator, nxnValidator];
  return validArray.every((validFn) => new validFn(adnArray).validate());
}