function estacoes() {
    let mes = prompt("Digite o mês em extenso: \n(ex: Setembro)")
    let estacao
    let resp = document.querySelector('div#resp')
  
    switch (mes.toUpperCase()) {
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'VERÃO'
            break
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'OUTONO'
            break
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'INVERNO'
            break
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'PRIMAVERA'
            break
        default:
            estacao = 'INDEFINIDA'
            break
  }
    resp.innerHTML = `<p>No mês de <mark>${(mes.toLowerCase())}</mark>, estamos na estação: <strong><mark>${estacao}</mark></strong> </p>`
}
