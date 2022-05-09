function contar() {
    let res = document.querySelector('div#res')
    res.innerHTML += `<p>Contando...<p/>`

    let c = 1
    while (c<=10){
        if (c%2==0){
            res.innerHTML += ` <mark>${c}</mark> \u{1F449}`
        } else {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        c++
    }
    res.innerHTML += ` \u{1F3C1}`
}