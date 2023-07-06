const menorValor = 1;
const maiorValor = 1000;
const NumeroSecreto = geradorAleatorio();


document.getElementById('maior-valor').innerHTML = maiorValor;
document.getElementById('menor-valor').innerHTML = menorValor;

function geradorAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}


console.log("O numero secreto é: "+ NumeroSecreto);