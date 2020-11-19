//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(1)
imprimirSoma(1, 4, 85, 'dq')
imprimirSoma()

//Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())