# NodeJS ADN

- ### Enunciado:
Este es una función desarrollada en JavaScript mediante Node.js que determina si una persona tiene mutaciones genéticas basándose en una secuencia de ADN
Una secuencia de ADN con mutaciones geneticas es aquella que tiene más de una secuencia de cuatro letras iguales de forma oblicua, horizontal o vertical.

##### boolean hasMutation(string[] dna);

En donde recibirás como parámetro un array de Strings que representan cada fila de una matriz de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN.

###### SIN MUTACION

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | T | T |
| A | G | A | C | G | G |
| G | C | G | T | C | A |
| T | C | A | C | T | G |

###### CON MUTACION

| A | T | G | C | G | A |
|---|---|---|---|---|---|
| C | A | G | T | G | C |
| T | T | A | T | G | T |
| A | G | A | A | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |


Ejemplo (Caso mutante):

##### String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};

En este caso el llamado a la función hasMutation(dna) devuelve “true”.



## Ejecución:
Descarga del repositorio de https://github.com/asp2021/adn-mutation  
y ejecuta:
yarn install o npm install

Para ejecutar:
$ node app.js o npm start o yarn start


## Configuración:
Base de datos Mongo.
Podras cambiar los datos de la conexión desde bin/mongodb.js

## Postman:
POST -> http://localhost:3000/mutations/ -> ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] -> Mutation detected
POST -> http://localhost:3000/mutations/ -> ["ATGCGA","CCGTGC","TTATGT","AGAFGG","CCCCTA","TCACTG"] -> Ha ocurrido un error: error: caracteres invalidos
POST -> http://localhost:3000/mutations/ -> ["ATGCGA","CAGTCC","TTGTGT","AGAAGG","ACCCTA","TCACTG"] -> No mutation detected
GET  -> http://localhost:3000/mutations/stats/ -> (ejemplo de json retornado ) ->
    {
        "count_mutations": 22,
        "count_no_mutation": 12,
        "ratio": "0.65"
    }


## Test Unitarios:
Se encuentran en la carpeta tests.

Para ejecutar test:
yarn test

## Resultado:

Ejemplo de uso:
```sh
// modulo que analiza las mutaciones.
const mutant = require('./../lib/mutants.js');

//Matriz de ADN.
let adn = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];

//Reviso si es mutante o no.
console.log(mutant.hasMutation(adn));
```
