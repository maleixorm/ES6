// cadeira
class Cadeira {
    constructor(qtdPernas, giratoria, cor) {
        this.qtdPernas = qtdPernas;
        this.giratoria = giratoria;
        this.cor = cor;
    }

    girarCadeira() {
        if (this.giratoria === true) {
            console.log('Girou');
        } else {
            console.log('A cadeira não é giratória');
        }
    }
}