const notas = [6.7, 7.4, 9.8, 8.1, 7.7]


for (let i in notas){

    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Diego',
    sobrenome: 'Soares',
    idade: 21,
    peso: 67
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

