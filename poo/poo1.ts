/* Cria um objeto do tipo Date (classe) e atribui esse objeto 
à variável data */
//let data = new Date()
//getDay() 0 - dom ... 6 sáb
//console.log(data.getDay())

class Data {
    private dia: number  //private ou # ora deixar a variável privada
    private mes: number
    private ano: number

    //Método que inicializa os atributos 
    constructor(dd: number, mm: number, aa: number) {
        if (dd >= 1 && dd <= 31) {
            this.dia = dd 
        } else {
            this.dia = 1
        }
        if (mm >= 1 && mm <= 31) {
            this.mes = mm 
        }

        if (aa <= 2026) {
            this.ano = aa 
        } else {
            this.ano = 2026
        }
        this.dia = dd
        this.mes = mm
        this.ano = aa
    }
    obterDataFormatada(): string {
        const dia = this.dia < 10 ? '0'+this.dia : ''+this.dia
        const mes = this.mes < 10 ? '0'+this.mes : ''+this.mes 
        return `${dia}/${mes}/${this.ano}`
    }
}

let hoje = new Data(13, 4, 2026)
console.log(hoje. obterDataFormatada())
let outraData = new Data(14, 4, 2026)
console.log(outraData. obterDataFormatada()) 
console.log(hoje)
