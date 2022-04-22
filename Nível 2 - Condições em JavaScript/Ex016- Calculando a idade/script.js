function calcular() {
    let agora = new Date
    let ano = agora.getFullYear()    
    let nascimento = Number(prompt('Em que ANO você nasceu: '))

    let calculo = ano-nascimento
    let resultado = document.querySelector('div#resultado')
    
   resultado.innerHTML = `<p>Quem nasceu em ${nascimento} vai completar <strong>${calculo}</strong> anos em ${ano}.</p>`
}