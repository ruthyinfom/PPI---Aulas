let nome = 'Kauanne';
let matr = 20231144010050;
let outra: string = 'Luíza';
console.log(outra)
let pessoa: any //qualquer tipo

//undefined: sem valor definido
let bim1: number | undefined // a barra vai permitir a variãvel ser mais de uma coisa
console.log(bim1)
bim1 = 75
console.log(bim1)

function acimaMedia(nota:number): boolean {
    let estaAcima = false
    if (nota > 60) {
        estaAcima = true
    }
    return estaAcima
}
if (acimaMedia(bim1)) {
    let acimaMedia = true
    console.log("Acima da média!")
} else {
    console.log("Abaixo da média!")
}