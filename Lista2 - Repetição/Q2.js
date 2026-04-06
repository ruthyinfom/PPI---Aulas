"use strict";
//Número para saber se é ou não primo 
const num = 17;
while (num <= 1) {
    console.log("Número inválido");
}
let primo = true;
let divisor = num - 1;
while (primo && divisor > 1) {
    if (num % divisor == 0) {
        primo = false;
    }
    else {
        divisor = divisor - 1;
    }
}
if (primo) {
    console.log("O número ", num, " é primo");
}
else {
    console.log("O número ", num, " não é primo");
}
