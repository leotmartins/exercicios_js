let res = document.querySelector('div#resultado')
let computador = 0
let jogador = 0

function sortear() {
   let min = 1
   let max = 100
   let dif = max - min
   let aleatorio = Math.random()
   computador = min + Math.trunc(dif*aleatorio)
}

function jogar() {
    let jogador = Number(prompt('Qual é o seu palpite?'))
    if (jogador < computador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        resultado.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (jogador == computador) {
        resultado.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.querySelector('button#botao').style.visibility = 'hidden'
    }
}