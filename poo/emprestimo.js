"use strict";
class Emprestimo {
    livro; //Livro 
    usuario; //pessoa 
    dataEmprestimo;
    dataPrevistaDevolucao;
    constructor(li, ps) {
        this.livro = li;
        this.usuario = ps;
        this.dataEmprestimo = new Date();
        this.dataPrevistaDevolucao = new Date();
        this.dataPrevistaDevolucao.setDate(this.dataEmprestimo.getDate() + 15);
    }
    obterDataEmprestimo() {
        return this.dataEmprestimo.toLocaleDateString();
    }
    obterDataPrevistaDevolucao() {
        return this.dataPrevistaDevolucao.toLocaleDateString();
    }
}
class Pessoa {
    nome;
    cpf;
    constructor(nm, cp) {
        this.nome = nm;
        this.cpf = cp;
    }
    obterNome() {
        return this.nome;
    }
    obterCpf() {
        return this.cpf;
    }
}
class Exemplar {
    isbn;
    titulo;
    autor;
    ano;
    constructor(is, ti, at, an) {
        this.isbn = is;
        this.titulo = ti;
        this.autor = at;
        this.ano = an;
    }
    obterIsbn() {
        return this.isbn;
    }
    obterTitulo() {
        return this.titulo;
    }
    obterAutor() {
        return this.autor;
    }
    obterAno() {
        return this.ano;
    }
}
let pessoa1 = new Pessoa("Ruthyanne", "123.456.789-00");
let livro1 = new Exemplar(1234567890, "Memórias póstumas de Brás Cubas", "Machado de Assis", 1881);
let emp1 = new Emprestimo(livro1, pessoa1);
console.log("-------------");
console.log(`Usuário: ${pessoa1.obterNome()} - CPF: ${pessoa1.obterCpf()}`);
console.log("-------------");
console.log(`Livro: ${livro1.obterTitulo()}
Autor: ${livro1.obterAutor()}
Ano: ${livro1.obterAno()}
ISBN: ${livro1.obterIsbn()}`);
console.log("-------------");
console.log("Data do empréstimo:", emp1.obterDataEmprestimo());
console.log("Data de devolução:", emp1.obterDataPrevistaDevolucao());
