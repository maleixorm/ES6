Object.prototype.attr4 = 'Z' // Objeto global para a aplicação

let animal = {
    attr1: 'a'
}

let vertebrado = {
    __proto__: animal,
    attr2: 'b'
}

let ave = {
    __proto__: vertebrado,
    attr3: 'c'
}

console.log(ave.attr1, ave.attr4);
console.log(ave.attr2);
console.log(ave.attr3);