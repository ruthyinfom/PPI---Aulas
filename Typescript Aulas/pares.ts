//soma dos números pares de 2 a 100
let soma = 0; 

for (let par = 2; par <= 100; par += 2) {
    soma = soma + par
}

console.log(`Somas dos pares de 2 a 100 = ${soma}`)