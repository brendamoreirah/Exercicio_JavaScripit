//9. Verificar Palíndromo com Funções
//Crie uma função que verifica se uma palavra é palíndroma usando split(), reverse()
//e join().


function verificarPalindroma(palavra) {
    const palavraReversa = palavra.split('').reverse().join('');
    return palavra === palavraReversa;
  }
  
  console.log(verificarPalindroma('arara')); // Saída: true
  console.log(verificarPalindroma('olá')); // Saída: false
  console.log(verificarPalindroma('ana'));// saida: true
  console.log(verificarPalindroma('ovo'));// saida: true
  console.log(verificarPalindroma('brenda'));// saida: false