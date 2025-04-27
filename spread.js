let tituloArtigo = 'Como utilizar o operador spread/rest';

console.log(tituloArtigo);
console.log(...tituloArtigo);
console.log([...tituloArtigo]);

listaCursos1 = ['node js', 'mongo db', 'es6', 'ts', 'angular'];
listaCursos2 = ['android', 'ios', 'linux'];
listaCursosCompleta = ['web', 'windows', ...listaCursos1, ...listaCursos2];

console.log(listaCursosCompleta);


let pessoa = {
    nome: 'João',
    idade: 27
}

let clone = {
    ...pessoa,
    endereco: 'Rua abc'
}

console.log(clone);