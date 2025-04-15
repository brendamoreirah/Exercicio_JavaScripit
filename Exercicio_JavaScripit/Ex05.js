
    //5. Limpar Espaços Dobrados
//Crie uma função que remove espaços repetidos de uma
//  frase (ex: "Olá mundo bonito" → "Olá mundo bonito"), usando split(), filter() e join().

const frase = "  Esta   frase    tem   espaços   extras   ";

const fraseSemDuplicados = frase.split(" ").filter(palavra => palavra !== "").join(" "); 

console.log(fraseSemDuplicados); 
