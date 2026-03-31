"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hoje = new Date();
let diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let diasMesAtual = hoje.getDate();
let mesAtual = hoje.getMonth();
let totalDias = 0;
for (let mes = 0; mes < mesAtual; mes++) {
    totalDias += diasMes[mes];
}
totalDias += diasMesAtual;
console.log(totalDias);