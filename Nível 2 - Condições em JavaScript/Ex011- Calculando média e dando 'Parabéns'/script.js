function media() {
    let nome = prompt("Digite o nome do aluno: ")
    let n1 = Number(prompt(`Digite a primeira nota de ${nome}`))
    let n2 = Number(prompt(`Digite a segunda nota de ${nome}`))
    let calcMedia = (n1+n2)/2
    let res = document.querySelector('div#res')

    res.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${calcMedia}</mark>.</p>`

    if (calcMedia >= 6) {
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red'>Meus parabéns!</strong></p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red'>Estude um pouco mais!</strong></p>`
    }
}