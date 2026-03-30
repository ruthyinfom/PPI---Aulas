let hoje = new Date()
let inicioAno = new Date('2026-01-01')

//getTime: converter a data para milisegundos
console.log(hoje.getTime())

/*Forma 1: Converte as duas datas para milisegundos e
    faz a conta da diferença entre a data maior e a 
    menor. Converter o resultado para a conta de dias 
*/

/* Forma 2: Cria um array dos dias de cada mês. A partir 
    do mês da data atual soma a quantidade de dias a partir do 
    array e some os dias do mês atual. */

let diasMes = [31, 28, 31]
let diasMesAtual = hoje.getDate() //pega a quantidade de dias do mês atual 
let mesAtual = hoje.getMonth()
for (let mes = 0; mes < mesAtual; mes++) {
    //somar todos os dias dos meses antes do mês atual
    //Após ou antes do 'for' somar os dias do mês atual
}

