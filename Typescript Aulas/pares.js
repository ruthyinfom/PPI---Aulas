//soma dos números pares de 2 a 100
var soma = 0;
for (var par = 2; par <= 100; par += 2) {
    soma = soma + par;
}
console.log("Somas dos pares de 2 a 100 = ".concat(soma));
