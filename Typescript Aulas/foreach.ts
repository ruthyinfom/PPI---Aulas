//Média artmetica de um comjunto de notas 

const notas = [87, 48, 90, 94, 61, 82, 80, 70, 100, 90, 67, 83, 20, 17]
let media = 0 
const quantNotas = notas.length
/*for (let pos = 0; pos < quantNotas; pos++) {
    media += notas[pos]
}*/ 
notas.forEach(nota => {
    media += nota
})

console.log(`Média = ${(media / quantNotas).toFixed(2)}`)