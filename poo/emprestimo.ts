class Emprestimo {
    livro: string //Livro 
    usuario: string //pessoa 
    dataEmprestimo: Date
    dataPrevistaDevolucao : Date

    constructor(li: string, ps: string) {
        this.livro = li
        this.usuario = ps
        this.dataEmprestimo = new Date()
        this.dataPrevistaDevolucao = new Date()
        this.dataPrevistaDevolucao.setDate(
        this.dataEmprestimo.getDate()+15)
}

    obterDataEmprestimo() {
        return this.dataEmprestimo.toLocaleDateString() 

}

    obterDataPrevistaDevolucao() {
        return this.dataPrevistaDevolucao.toLocaleDateString() 
    }
}
class Pessoa {
    nome: 
    cpf: 
}
class Exemplar {

}

let emp1 = new Emprestimo('Memórias Póstumas de Bras Cubas', 'Bruno')
console.log(emp1)

/* Exercício: 
    1. Fazer uma classe pessoa com os atributos nome e cpf 
    2. Fazer uma classe Exemplar com os atributos: 
            - isbn (código que identifica uma publicação)
            - título 
            - autor e ano 
            - ano 
    3. Modificar a classe empréstimo: tipar com Exemplar e pessoa
*/ 