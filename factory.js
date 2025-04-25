// Padrão de Projeto Factory

let Bicicleta1 = {
    cor: 'Branca',
    marcha: 1,
    aro: 14,
    pedalar() { console.log('Método pedalar executado.'); }
}

let Bicicleta2 = {
    cor: 'Preta',
    marcha: 18,
    aro: 26,
    pedalar() { console.log('Método pedalar executado.'); }
}

console.log(Bicicleta1);
console.log(Bicicleta2);

let BicicletaFactory = function(cor, marcha, aro) {
    return {
        cor,
        marcha,
        aro,
        pedalar() { console.log('Método pedalar executado.'); }
    }
}

let Bicicleta3 = BicicletaFactory('Vermelha', 24, 30);
console.log(Bicicleta3);

let Bicicleta4 = BicicletaFactory('Azul', 21, 28);
console.log(Bicicleta4);