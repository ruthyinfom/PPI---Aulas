class Emprestimo {
    livro: Exemplar //Livro 
    usuario: Pessoa //pessoa 
    dataEmprestimo: Date
    dataPrevistaDevolucao : Date

    constructor(li: Exemplar, ps: Pessoa) {
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
    nome: string; 
    cpf: string 

    constructor (nm: string, cp: string) {
        this.nome = nm
        this.cpf = cp 
}
    obterNome(): string {
        return this.nome
}
    obterCpf(): string {
        return this.cpf
}
}

class Exemplar {
    isbn: number;
    titulo: string; 
    autor: string; 
    ano: number

    constructor (is: number, ti: string, at: string, an: number) {
        this.isbn = is
        this.titulo = ti
        this.autor = at
        this.ano = an 
}
    obterIsbn(): number {
        return this.isbn 
}
    obterTitulo(): string {
        return this.titulo
}
    obterAutor(): string {
        return this.autor
}
    obterAno(): number {
        return this.ano 
}
}

let pessoa1 = new Pessoa ("Ruthyanne", "123.456.789-00")
let livro1 = new Exemplar(1234567890, "Memórias póstumas de Brás Cubas", "Machado de Assis", 1881)
let emp1 = new Emprestimo(livro1, pessoa1)

console.log("-------------")
console.log(`Usuário: ${pessoa1.obterNome()} - CPF: ${pessoa1.obterCpf()}`)
console.log("-------------")
console.log(`Livro: ${livro1.obterTitulo()}
Autor: ${livro1.obterAutor()}
Ano: ${livro1.obterAno()}
ISBN: ${livro1.obterIsbn()}`)
console.log("-------------")
console.log("Data do empréstimo:", emp1.obterDataEmprestimo())
console.log("Data de devolução:", emp1.obterDataPrevistaDevolucao())
