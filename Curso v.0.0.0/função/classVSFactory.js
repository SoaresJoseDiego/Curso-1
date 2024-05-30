class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pl = new Pessoa ('João')
pl.falar()

const CriarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = CriarPessoa('Joao')

p2.falar()