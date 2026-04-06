//Média artmetica de um comjunto de notas 
var notas = [87, 48, 90, 94, 61, 82, 80, 70, 100, 90, 67, 83, 20, 17];
var media = 0;
var quantNotas = notas.length;
/*for (let pos = 0; pos < quantNotas; pos++) {
    media += notas[pos]
}*/
notas.forEach(function (nota) {
    media += nota;
});
console.log("M\u00E9dia = ".concat((media / quantNotas).toFixed(2)));
