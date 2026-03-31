/*const contatos = [
    'Álvaro', 'Gabriela', 'Erika',
    'Leticia', 'Andrea', 'Ágata', 'Mariane',
    'Heloyza', 'Jonatas', 'Sara', 'Rafael'
]*/
//3 - Imprimir a lista de contatos 
//let pos = 0 
//while (pos < contatos.length) {
//    console.log(contatos[pos])
//    pos++
//}
//4 - Retirar um contato de uma posição da lista 
//  (pode usar o método splice de array)
//contatos.splice(2,5)
//5 - Buscar por um contato (sem usar métodos de JS)
// dado o nome da pessoa. Verdadeiro (está) ou  falso (não está)
var contatos = [
    'Álvaro', 'Gabriela', 'Erika',
    'Leticia', 'Andrea', 'Ágata', 'Mariane',
    'Heloyza', 'Jonatas', 'Sara', 'Rafael'
];
var buscando = 'Mariane';
var encontrado = false; //Foi encontrado? 
var pos = 0;
//Enquanto tiver elementos na lista e não for encontrado
while (pos < contatos.length && !encontrado) {
    if (buscando === contatos[pos])
        encontrado = true;
    pos++; //atualiza a posiçaõ na lista
}
console.log(encontrado);
var p = contatos.find(function (pessoa) { return pessoa === buscando; });
if (p) {
    console.log(true);
}
else {
    console.log(false);
}
