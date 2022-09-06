

function areaRetangulo (base, altura){
    let area = base * altura
    console.log("A área do retângulo com base de " + base + " m e altura de " + altura + " m é: " + area + " metros quadrados.")
}

areaRetangulo (20, 30)


/*--------------------------------------------------- */


function sinalNumero (numero){
    if (numero>0) {
        console.log("O número " + numero + " é positivo")
    } 
    if (numero<0) {
        console.log("O número " + numero + " é negativo")
    }
    if (numero===0) {
        console.log("O número " + numero + " é zero")
    } 
}

sinalNumero(12)


/*--------------------------------------------------- */


function parImpar (numero){
    if (numero%2 === 0) {
        console.log("O número " + numero + " é par")
    } 
    else
    {
        console.log("O número " + numero + " é ímpar")
    }
}

parImpar(15)
