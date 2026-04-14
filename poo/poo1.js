/* Cria um objeto do tipo Date (classe) e atribui esse objeto
à variável data */
//let data = new Date()
//getDay() 0 - dom ... 6 sáb
//console.log(data.getDay())
var Data = /** @class */ (function () {
    //Método que inicializa os atributos 
    function Data(dd, mm, aa) {
        if (dd >= 1 && dd <= 31) {
            this.dia = dd;
        }
        else {
            this.dia = 1;
        }
        if (mm >= 1 && mm <= 31) {
            this.mes = mm;
        }
        if (aa <= 2026) {
            this.ano = aa;
        }
        else {
            this.ano = 2026;
        }
        //this.dia = dd
        //this.mes = mm
        //this.ano = aa
    }
    Data.prototype.obterDataFormatada = function () {
        var dia = this.dia < 10 ? '0' + this.dia : '' + this.dia;
        var mes = this.mes < 10 ? '0' + this.mes : '' + this.mes;
        return "".concat(dia, "/").concat(mes, "/").concat(this.ano);
    };
    return Data;
}());
var hoje = new Data(13, 4, 2026);
console.log(hoje.obterDataFormatada());
var outraData = new Data(14, 4, 2026);
console.log(outraData.obterDataFormatada());
console.log(hoje);
