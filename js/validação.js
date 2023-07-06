function verificacao (chute){
    const numero = +chute
    

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido <i class="fa-solid fa-xmark"></i></div>'
        return
    }

    if (maiorPermitido(numero)) {
        elementoChute.innerHTML += `<div>invalido: o numero está entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === NumeroSecreto) {
        elementoChute.parentNode.innerHTML = `
        <h1 class="win">WIN</h1>
        <div class="win">O numero secreto era: ${NumeroSecreto}</div>
        `
        
    } else if (numero < NumeroSecreto) {
        elementoChute.innerHTML += `
        <div class="mensagem_resposta">o numero secreto é maior <i class="fa-solid fa-up-long"></i> </div> 
        `
    } else {elementoChute.innerHTML +=`
        <div class="mensagem_resposta">o numero secreto é menor<i class="fa-solid fa-down-long"></i> </div> 
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}
    function maiorPermitido(numero) {
        return numero > maiorValor || numero < menorValor
}
