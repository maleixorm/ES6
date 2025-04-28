let frutas = ['abacaxi', 'uva', 'pera', 'mamao'];
let [a, b, c, d, e = 'banana'] = frutas;
console.log(a, b, c, d, e);

let coisas = [['Carne', 'Frutas', 'Verduras', 'legumes'], ['José', 'Maria']];
let [,[,n2]] = coisas;
console.log(n2);