/* A prefeitura da cidade de Parnamirim-RN deseja fazer uma pesquisa entre as 
famílias da cidade e precisa da sua ajuda para fazer um programa que calcule:
A renda familiar média da cidade;
A média do número de filhos de cada família.
Use repetição para ler as informações de cada família (uma por vez) e, 
ao término, calcule a média aritmética da renda e do número de filhos. 
Para finalizar a leitura dos dados forneça um valor negativo para a renda familiar.*/ 

const prompt = require("prompt-sync")();
let somaRenda: number = 0; 
let somaFilhos: number = 0; 
let contador: number = 0;
let renda: number = 0

while (true) 
    if (renda < 0) {
        break
    }
renda = Number(prompt("Digite a renda: "));
let filhos: number = Number(prompt("Digite o número de filhos: "));