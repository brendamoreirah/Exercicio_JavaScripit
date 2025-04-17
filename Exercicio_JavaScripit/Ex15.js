//15. Verificação de Email Simples
//Crie uma função que verifica se um texto contém &quot;@&quot; e &quot;.&quot;, retornando se é um e-mail
//válido ou inválido. Use includes() e indexOf().


var prompt = require('prompt-sync')();
let emailFornecido = prompt("Digite seu email: ")

function validar(emailFornecido) {
    
    let arroba = emailFornecido.indexOf("@");
    let ponto = emailFornecido.indexOf(".");
  
   
    if (arroba === -1 || ponto === -1 || ponto < arroba) {
      return "E-mail inválido!";
    } else {
      return "E-mail válido!";
    }
  }
  
  
console.log(validar(emailFornecido));   
  