class Animal {
    constructor(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
    }

    dormir() {

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

class Papagaio extends Passaro {
    constructor(cor, tamanho, bico, sabeFalar) {
        super(cor, tamanho, bico);
        this.sabeFalar = sabeFalar;
    }
    
    falar() {
        console.log('Falar');
    }
}