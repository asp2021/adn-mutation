const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URL_CONNECT, { useNewUrlParser: true }, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});
module.exports = mongoose; 

