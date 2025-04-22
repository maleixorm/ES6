let pessoa = {
    nome: 'Maria',
    idade: 25
}

console.log(pessoa);

pessoa.sexo = 'Feminino';

console.log(pessoa);

pessoa.dizerOla = () => console.log(`Olá, tudo bem? Meu nome é ${pessoa.nome}!`);

pessoa.dizerOla();