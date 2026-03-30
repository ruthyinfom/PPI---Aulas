enum Cursov1 {
    INFO, MECA, SUBREDES, SUBMECA, TSI 
}

enum Curso {
    INFO = "Integrado em Informática", 
    MECA = "Integrado em Mecatrônoca",
    SUBREDES = "Subsequente em Redes",
    SUBMECA = "Subsequente em Mecatrônica",
    TSI = "Superior de Tecnologias em Sistemas para Internet"
}

console.log(Curso.INFO)

//Type: definir valores contantes relacionados de forma simples
type disciplinas = 'PPI' | 'PDS' | 'SOR'
type Turno = 'Matutino' | 'VESPERTINO' | 'NOTURNO'

//interface: Estabelecer um contrato a ser implementado por uma classe ou 
//receber valores de uma aplicação externa e tipar esses valores de forma simples, 
//sem a necessidade de criar uma classe

interface Turma {
    cod: number,
    nome: string,
    curso: Curso
    turno: Turno
}

const ppi: Turma = {
    cod: 20261,
    nome: 'Programação para Internet',
    curso: Curso.INFO,
    turno: 'MATUTINO'
}