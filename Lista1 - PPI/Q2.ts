function calcularMedia (mediaParcial: number): number {
    return (2 * 60) - mediaParcial
}

let resultado = calcularMedia(50)
console.log(`Nota necessária para você passar de ano = ${resultado}`)