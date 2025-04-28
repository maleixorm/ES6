let frutas = ['abacaxi', 'uva', 'pera', 'mamao'];
let [a, b, c, d, e = 'banana'] = frutas;
console.log(a, b, c, d, e);

let coisas = [['Carne', 'Frutas', 'Verduras', 'legumes'], ['José', 'Maria']];
let [,[,n2]] = coisas;
console.log(n2);

// ----------------------------------------------------------------------------------

let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'asus',
        modelo: 'az2p'
    }
}

let { descricao, preco} = produto;
console.log(descricao, '-', preco);

let { detalhes: { fabricante, modelo } } = produto;
console.log(fabricante, modelo);