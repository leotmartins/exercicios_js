function verificar() {
    let numero = Number(prompt("Digite um numero: "))
    let res = document.querySelector('div#res')

    if (numero%2 == 0) {
        res.innerHTML = `<p>O número ${numero} que foi digitado é <strong>PAR</strong>!</p>`
    } else {
        res.innerHTML = `<p>O número ${numero} que foi digitado é <strong>ÍMPAR</strong>!</p>`
    }
}