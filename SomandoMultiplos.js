// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

function calcularMultiplos(a, N) {
  
  //numero de multiplos
  let m = N/a
  
  //soma do primeiro multiplo
  //numeros naturais
  let soma = m * (m+1)/2
  
  ans = a * soma
  return ans
}

print(calcularMultiplos(a, N))
