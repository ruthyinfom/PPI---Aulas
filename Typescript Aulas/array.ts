let disciplinas: string[] = 
            ['PPI', 'Espanhol', 'PDS',
            'SOR','História']


let carro = ['Chevette', 1987, 4400.00, 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/11/hr_8387.cr2_-e1574446155118.jpg?quality=70&strip=info']

console.log(carro[3])
carro.push('GT')//modelo
carro.push(123000)//km rodados
//primeiro argumento: posição inicial. Segundo argumento: quantos elementos serõ removidos a partir daposição inicial
carro.splice(4,1)
delete carro[3] //delete:
console.log(carro)

let carro2 = {
    "nome" : "Chevette",
    "ano" : 1986,
    "preco" : 44000.00,
    "foto" : 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/11/hr_8387.cr2_-e1574446155118.jpg?quality=70&strip=info'
}
console.log(carro2.foto)