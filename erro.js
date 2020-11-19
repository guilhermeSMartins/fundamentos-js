function trtarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(o) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        trtarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto'} //nome no lugar de name (erro)
imprimirNomeGritado(obj)