// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let numero = gets();
// print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(numero) {
  
    //se multiplo de 3 e 5 --> 'FizzBuzz'
    if((numero % 3) == 0 && (numero % 5) == 0) {
      print("FizzBuzz")
    }
    
    //se for apenas multiplo de 3 --> 'Fizz'
    else if(numero % 3 == 0) {
      print("Fizz")
    }
    
    //se for apneas multiplo de 5 --> 'Buzz'
    else if(numero % 5 == 0) {
      print("Buzz")
    }
    
    //se nao for multiplo de 3 ou 5 --> 'numero'
    
    else {
      print(numero)
    }
    
}

fizzBuzz(numero)
