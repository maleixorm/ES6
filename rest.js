function soma(...param) {
    let resultado = 0;
    param.forEach(v => resultado += v);
    return resultado;
}

console.log(soma(3, 5, 7, 8, -10, 15, 120));

function multiplicacao(m, ...p) {
    console.log(m);
    let resultado = 0;
    console.log(p);
    p.forEach(v => resultado += m*v);
    return resultado;
}

console.log(multiplicacao(5, 7, 12, 3, 49));