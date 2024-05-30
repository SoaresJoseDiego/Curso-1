// Coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['Marca do produto'];

console.log(produto);

// Objeto carro com propriedades e métodos
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Diego',
        idade: 21,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 243
        }
    },
    condutores: [
        {
            nome: 'Diego',
            idade: 21
        },
        {
            nome: 'Ana',
            idade: 42
        }
    ],
        
        // Implementação da função de cálculo do valor do seguro
    };

carro.proprietario.endereco.numero = 1000
carro ['proprietario']['endereco']['logradouro'] = 'Rua Jaime Rossi'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
//delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.lenght)