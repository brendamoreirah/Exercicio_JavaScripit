//8. Remover Caracteres Especiais
//Crie uma função que recebe um texto e remove todos os caracteres que não são letras
//ou números, usando replace() com regex.

const texto = "Bre Moreira @! 7766629 :)";
const limpo = texto.replace(/[^a-zA-Z0-9]/g, "");

console.log(limpo); 
  