function contar() {
    let res = document.querySelector('div#res')
    res.innerHTML += `<p>Contagem regressiva de 10 a 1...</p>`

    for (let c = 10; c>=1; c--) {
        res.innerHTML += ` ${c} \u{1F449}`
    }
    res.innerHTML += ` \u{1F3C1}`
}