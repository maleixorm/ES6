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

