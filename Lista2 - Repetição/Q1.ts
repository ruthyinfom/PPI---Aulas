/*
Instalar: npm i prompt-sync
npm i @types/node */

const prompt = require("prompt-sync")();

let somaRenda = 0;
let somaFilhos = 0; 
let contador = 0;
let renda = +prompt('Renda familiar: ')
let numFilhos = 0

while(renda > 0 ) {
    //Faz as contagens que o programa tá pedindo
    numFilhos = +prompt('Quantidade de filhos: ');

    somaRenda+= renda; 
    somaFilhos+=numFilhos; 
    contador++ ;

    renda = +prompt('Renda familiar: ');
    
}

if (contador > 0) {
    let mediaRenda = somaRenda / contador; 
    let mediaFilhos = somaFilhos / contador; 

    console.log(`Média da renda familiar = ${(mediaRenda).toFixed(2)}`)
    console.log(`Média de filhos = ${(mediaFilhos)}`)
}