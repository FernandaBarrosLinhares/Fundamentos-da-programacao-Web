const PromptSync = require("prompt-sync")

//Exercicio 3
const prompt = require ("prompt-sync")({sigint: true})
const numeros=[]
//primeiro pra ler
for(let i = 0; i<5; i++){
    let numero=parseInt(prompt(`Digite o ${i+1} número:`))
    numeros.push(numero)

}
for(let i = 0; i<5; i++){
console.log(`O ${i + 1}numerosé ${numeros[i]}`)
}

//Exercicio 4

const soma = numeros.reduce((acumulador, numeroAtual)=>{
    return acumulador + numeroAtual ;

}, 0)

console.log("A soma dos numeros é", soma)

//Exercicio 5

const numerosOrdenados = [...numeros]
numerosOrdenados.sort((numero1, numero2) => numero1 - numero2 )
console.log(numerosOrdenados)

//Exercicio 6

const soPares = numeros.filter(numeroAtual =>{
    if(numeroAtual % 2 === 0){
        return true
    }
})

console.log("O novo array de numeros pares é" ,soPares)

//Exercicio 7

const quadrados = numeros.map(numeroAtual => numeroAtual *numeroAtual)

console.log(quadrados)