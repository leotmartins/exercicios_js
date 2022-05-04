function calcular() {
   let v1 = Number(prompt("Primeiro valor: "))
   let v2 = Number(prompt("Segundo valor: "))
   let menu = Number(prompt(`Valores informados: ${v1} e ${v2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

   let saida = document.querySelector('div#resultado')
   saida.innerHTML = `<p>Calculando...</p>`
   switch (menu) {
       case 1:
           saida.innerHTML += `<p>${v1} + ${v2} = <strong>${v1+v2}</strong></p>`
           break
        case 2:
           saida.innerHTML += `<p>${v1} - ${v2} = <strong>${v1-v2}</strong></p>`
           break
        case 3:
            saida.innerHTML += `<p>${v1} * ${v2} = <strong>${v1*v2}</strong></p>`
           break
        case 4:
            saida.innerHTML += `<p>${v1} / ${v2} = <strong>${(v1/v2).toLocaleString('pt-BR')}</strong></p>`
           break
        default:
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${v1} e ${v2}, mas não sei o que fazer com eles. </p>`
           break
   }
}