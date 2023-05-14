module.exports = class stringsValidator{

    constructor(matrix){
        this.matrix = matrix;
    }
  
    validate(){
        return this.matrix.every((adn) => (typeof adn ==='string') );
    }
}