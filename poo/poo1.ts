/* Cria um objeto do tipo Date (classe) e atribui esse objeto 
à variável data */
//let data = new Date()
//getDay() 0 - dom ... 6 sáb
//console.log(data.getDay())

class Data {
    dia: number
    mes: number
    ano: number

    //Método que inicializa os atributos 
    constructor(dd: number, mm: number, aa: number) {
        this.dia = dd
        this.mes = mm
        this.ano = aa
    }

    obterDataFormatada(): string {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

let hoje = new Data(13, 4, 2026)
console.log(hoje. obterDataFormatada())