//10. Contar Ocorrências de Palavras
//Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
//objeto como contador.


function contarOcorrencias(frase) {
    const palavras = frase.split(' ');
    const contador = palavras.reduce((acc, palavra) => {
      acc[palavra] = (acc[palavra] || 0) + 1;
      return acc;
    }, {});
    
    let maisRepetida = '';
    let maxCount = 0;
    
    for (let palavra in contador) {
      if (contador[palavra] > maxCount) {
        maxCount = contador[palavra];
        maisRepetida = palavra;
      }
    }
    
    return maisRepetida;
  }
  
  console.log(contarOcorrencias('banana maçã banana abacaxi maçã banana')); // Saída: banana
  