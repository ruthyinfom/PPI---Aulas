/* Cria um objeto do tipo Date (classe) e atribui esse objeto
à variável data */
//let data = new Date()
//getDay() 0 - dom ... 6 sáb
//console.log(data.getDay())
var Data = /** @class */ (function () {
    //Método que inicializa os atributos 
    function Data(dd, mm, aa) {
        this.dia = dd;
        this.mes = mm;
        this.ano = aa;
    }
    Data.prototype.obterDataFormatada = function () {
        return "".concat(this.dia, "/").concat(this.mes, "/").concat(this.ano);
    };
    return Data;
}());
var hoje = new Data(13, 4, 2026);
console.log(hoje.obterDataFormatada());
