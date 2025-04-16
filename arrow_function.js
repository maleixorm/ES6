let quadrado = function (x) {
    return x * x;
}
console.log(quadrado(17));

let quad = y => y * y;
console.log(quad(19));

/*

*/

let parOuImpar = function (numero) {
    if (numero % 2 === 0) {
        console.log('O número escolhido é par!');
    } else {
        console.log('O número escolhido é ímpar.');
    }
}

parOuImpar(4);


let parImpar = numero => {
    if (numero % 2 === 0) {
        console.log('O número escolhido é par!');
    } else {
        console.log('O número escolhido é ímpar.');
    }
}

parImpar(7);

let numeroParImpar = numero => numero % 2 === 0 ? 'par' : 'ímpar';

console.log(numeroParImpar(13));