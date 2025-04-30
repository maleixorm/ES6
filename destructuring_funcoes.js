// array
let arr = [10, 20, 30, 40];

function teste([ a, b, , c, d = 100]) {
    console.log(a, b, c, d);
}
teste(arr);

// objeto

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d:40
}

function tester({ a, b }) {
    console.log(a, b);
}
tester(obj);

// ------------------------------------------------------

// array

let arr2 = [10, 20, 30, 40];
let [ a, ...resto ] = arr2;

console.log(a);
console.log(resto);

// objeto
let obj2 = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let { y, ...z } = obj2;
console.log(y);
console.log(z);