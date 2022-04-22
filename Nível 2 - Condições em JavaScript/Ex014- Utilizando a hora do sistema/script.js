function verificar() {
    let agora = new Date
    let info = document.querySelector('div#info')

    info.innerHTML = `<p>O sistema apresenta a data e hora: <mark>${agora}</mark></p>`
}