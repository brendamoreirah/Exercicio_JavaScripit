//12. Sorteador de Nomes
//Peça uma lista de nomes separados por vírgula e sorteie um aleatoriamente usando
//split() e Math.random().

var prompt = require('prompt-sync')();

let nomesDigitados = prompt("Digite os nomes separados por vírgula (ex: Brenda, Clara, Isadora):");

let nomes = nomesDigitados.split(",").map(nome => nome.trim());


if (nomes.length === 0 || nomes[0] === "") {
  console.log("Você precisa digitar pelo menos um nome");
  
} else {

  let sorteado = nomes[Math.floor(Math.random() * nomes.length)];

  console.log("E o nome  sorteado foi: " + sorteado + "!");
};
