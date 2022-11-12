// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

for (let elemento in elementos) {
    let index = elementos.indexOf(valor)

    if(index == -1){
        print("Numero " + valor + " nao encontrado!")
        break
    }

    if(elemento){
        print("Achei " + valor + " na posicao " + index)
        return elemento
    }
    else {
        print("Numero " + valor + " nao encontrado!")
    }
}
