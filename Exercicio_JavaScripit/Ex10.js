//10. Contar Ocorrências de Palavras
//Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
//objeto como contador.

var prompt = require('prompt-sync')();

let frase = prompt("digite sua frase: ");

const maiorPalavra = frase.split(" ").reduce((maior, atual) => atual.length > maior.length ? atual : maior, "");

console.log(maiorPalavra); 
  