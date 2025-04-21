let nome = 'Marcos';
let idade = 37;
let sexo = 'Masculino';
let profissao = 'Analista de TI';

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`${this.nome}, ${this.idade}, ${this.sexo}, ${this.profissao}`);
    }
}

console.log(objeto);
objeto.exibirResumo();