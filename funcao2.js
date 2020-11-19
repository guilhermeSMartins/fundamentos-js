//armazenando funcao em var
const imprimirSoma = function (a, b) {
    console.log(a + b)

}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma var
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 98))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')