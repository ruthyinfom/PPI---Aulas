let inicio = 2;
let fim = 100; 
let contador = 0

for (let i = inicio; i <= fim; i++) {
let primo: boolean = true;
let divisor: number = i - 1;

while(primo && divisor > 1) {
    if (i % divisor == 0) {
        primo = false; 
    } 
    else {
        divisor = divisor - 1;
    } 
}
    
    if (primo) {
        contador++
    }
}

console.log(contador)