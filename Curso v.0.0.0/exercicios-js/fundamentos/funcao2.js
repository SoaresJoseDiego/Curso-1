// Armazenando uma funcao em uma varíavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2 , 3)

//Armazenando uma funcao arrow em uma varíavel
const soma = (a , b) => {
    return a + b
}
console.log(soma(2,3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')