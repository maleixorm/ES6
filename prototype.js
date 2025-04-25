// Objeto Literal
let a1 = {
    cor: 'Branca',
    modelo: 'Airbus A380',
    levantarVoo: function() { 
        console.log('Levantar Voo.'); 
    }
}

// Função Construtora
let AviaoF = function(cor, modelo) {
    this.cor = cor;
    this.modelo = modelo;
    this.levantarVoo = function() {
        console.log('Levantar Voo.');
    }
}

let a2 = new AviaoF('Azul', 'Boeing 747-800');

// Classe
class Aviao {
    constructor(cor, modelo) {
        this.cor = cor;
        this.modelo = modelo;
    }

    levantarVoo() {
        console.log('Levantar Voo.');
    }
}

let a3 = new Aviao('Vermelho', 'ATR-72');

console.log(a1);
console.log(a2);
console.log(a3);