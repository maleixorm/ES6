function soma(...param) {
    let resultado = 0;
    param.forEach( v => resultado += v);
    return resultado;
}

console.log(soma(3, 5, 7, 8, -10, 15, 120));