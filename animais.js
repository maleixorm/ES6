class Animal {
    constructor(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
    }

    dormir() {

    }
}

class Cachorro extends Animal {
    constructor(cor, tamanho, orelhas) {
        super(cor, tamanho);
        this.orelhas = orelhas;
    }

    correr() {

    }

    rosnar() {

    }
}

class Passaro extends Animal  {
    constructor(cor, tamanho, bico) {
        super(cor, tamanho);
        this.bico = bico;
    }

    voar() {

    }
}

let cachorro = new Cachorro('Preto e Amarelo', 'Grande', 'Longas e Caídas');
console.log(cachorro);

let passaro = new Passaro('Branco e Azul', 'Médio', 'Pequenas');
console.log(passaro);