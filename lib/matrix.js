//array strings -> matriz
module.exports.adnArrayToMatrix = (adnArray)=>{
    let finalMtx = [];
    adnArray.forEach((adn)=>{
        let tmpArray = adn.split('');
        finalMtx.push(tmpArray);
    });
    return finalMtx;
}

// get colum -> array plano
module.exports.extractCol = (matrix,columnNumber)=>{
    let columnArray = [];
    for (let i = 0; i < matrix.length; i++) {
        columnArray.push(matrix[i][columnNumber]);
    }
    return columnArray;
}

//get fila -> un array plano
module.exports.extractRow = (matrix,rowNumber)=>{
    let rowArray = [];
    for (let i = 0; i < matrix[rowNumber].length; i++) {
        rowArray.push(matrix[rowNumber][i]);
    }
    return rowArray;
}

//get diagonal sup by n° columna
module.exports.extractDiagSupCol = (matrix, columnNumber)=>{
let diagonalArray = [];
    for (let i = 0; i < matrix.length - columnNumber; i++) {
        diagonalArray.push(matrix[i][i + columnNumber]);
    }
    return diagonalArray;
}

//get diagonal inf by n° fila
module.exports.extractDiagInfRow = (matrix, rowNumber)=>{
    let diagonalArray = [];
    for (let i = 0; i < matrix.length - rowNumber; i++) {
        diagonalArray.push(matrix[i + rowNumber][i]);
    }
    return diagonalArray;
}