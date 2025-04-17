//14. Reorganizar Data
//Receba uma data no formato &quot;2025-04-15&quot; e transforme para &quot;15/04/2025&quot; usando
//split() e reverse().

var prompt = require('prompt-sync')();
let data = prompt("Digite uma data no formato YYYY-MM-DD: ");

let divisao = data.split("-");

let dataDividida = divisao.reverse();

let dataInversa = dataDividida.join("-");

console.log("Data com ano e dia invertidos: " + dataInversa);
  