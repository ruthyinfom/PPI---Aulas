var Emprestimo = /** @class */ (function () {
    function Emprestimo(li, ps) {
        this.livro = li;
        this.usuário = ps;
        this.dataEmprestimo = new Date();
        this.dataPrevistaDevolução = new Date();
        this.dataPrevistaDevolução.setDate(this.dataEmprestimo.getDate() + 15);
    }
    return Emprestimo;
}());
var emp1 = new Emprestimo('Memórias Póstumas de Bras Cubas', 'Bruno');
console.log(emp1);
/* Exercício:
    1. Fazer uma classe pessoa com os atributos nome e cpf
    2. Fazer uma classe Exemplar com os atributos:
            - isbn (código que identifica uma publicação)
            - título
            - autor e ano
            - ano
    3. Modificar a classe empréstimo: tipar com Exemplar e pessoa
*/ 
