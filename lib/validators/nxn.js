//Validar que sea una Matriz de NxN

module.exports = class nxnValidator{

    constructor(matrix){
        this.matrix = matrix;
    }
  
    rowsEqualSize(matrix){
        let lengthArray = matrix.map((row) => row.length);
        if (lengthArray.length > 0) {
            return lengthArray.every((elem) => (elem == lengthArray[0]));
        }
        else {
            return false;
        }
    }  
  
    validate(){
      if (this.rowsEqualSize(this.matrix))    
        return (this.matrix.length == this.matrix[0].length);  
      else
        return false;
    }
}