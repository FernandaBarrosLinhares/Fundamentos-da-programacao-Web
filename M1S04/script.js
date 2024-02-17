//Exercicio 2

// function parOuImpar(numero) {
//     if (numero % 2 === 0) {
//         return "O número " + numero + " é par.";
//     } else {
//         return "O número " + numero + " é ímpar.";
//     }
// }

// // Exemplo de uso da função
// console.log(parOuImpar(7)); // Saída: O número 7 é ímpar.
// console.log(parOuImpar(10)); // Saída: O número 10 é par.
// console.log(parOuImpar(13)); // Saída: O número 13


//Exercicio 3

// const exercicio = (array)=> {
//     let soma = 0;
//     for(let numero of array){
//         soma += numero;
//     }
//     let media = soma/array.length;
//     return media;
// }
// let arrayNumeros = [10,20,30];
// console.log (exercicio(arrayNumeros));

//Exercicio 4

// function adicao(numero1, numero2,funcaoAnonima){
//     let soma = numero1 + numero2;

//     funcaoAnonima(soma);
// }

// adicao(2,2, (sum)=>{
//     console.log("O resultado final é:" + sum);
// })

//Exercicio 5


// let totalRuins = 0;
// let contador = 1;

// while (contador <= 4){
//     let resposta = prompt("Qual a sua avaliação para série Stranger Thinks (bom), (ruim) ou (excelente)?");
//     if (resposta == "ruim"){
//         totalRuins++;
//     }
//     contador++;
// }

// console.log('Total que avaliou como ruim: $ {totalRuins}');


//Exercicio 6

// for (let i = 0; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

//Exercicio 7

function compra(){
    let produto, qtde, index
    let  lista = [0,0,0,0,0]
    let produtos =['Hortifruti','Laticínios','Carnes','Peixes', 'Aves']
    let maiorQtde = 0

    while (true) {
        produto = prompt('Qual produto você deseja comprar?,(1)Hortifruti,(2)Laticínios,(3)Carnes,(4)Peixes,(5)Aves(6)Fechar pedido')

        if (produto == 1 || produto == 2 || produto == 3 || produto == 4 || produto == 5) {
            qtde = parseInt(prompt('Qual a quantidade deste item?'));
            lista[parseInt(produto) -1] +=qtde;

        } else if (produto==6){
            break;
        } else {
            alert("Opção inválida!");
        }

    }
    for(let i =0 ; i< lista.length; i++){
        if(lista[i] > maiorQtde){
            maiorQtde = lista[i];
            index = i;
        }
    }

return document.write('Seu maior pedido foi de ${produtos[index]} com ${maiorQtde} itens.')
}

compra()






