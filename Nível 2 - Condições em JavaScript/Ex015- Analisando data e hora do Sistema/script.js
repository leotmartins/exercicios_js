function analisar() {
    let data = new Date
    let meses = new Array('Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')
    let semana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let diaDaSemana = data.getDay()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    let analise = document.querySelector('div#analise')

    analise.innerHTML = `<p>Dia: ${dia}</p>`
    analise.innerHTML += `<p>Mês: ${meses[mes]}</p>`
    analise.innerHTML += `<p>Ano: ${ano}</p>`
    analise.innerHTML += `<p>Dia da Semana: ${semana[diaDaSemana]}</p>`
    analise.innerHTML += `<p>Hora: ${hora}</p>`
    analise.innerHTML += `<p>Minuto: ${minuto}</p>`
    analise.innerHTML += `<p>Segundo: ${segundo}</p>`
}