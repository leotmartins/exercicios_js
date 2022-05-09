function contar() {
    let res = document.querySelector('div#res')
    res.innerHTML += `<p>Contando...</p>`

    for (let c = 1; c<=10; c++) {
        if (c%2==0){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}