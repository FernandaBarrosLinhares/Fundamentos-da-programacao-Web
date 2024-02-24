//Exercicio 1 solução simples

const PromptSync = require("prompt-sync")


const arrayFrutas =["Banana", "Maça","Laranja"]


console.log(arrayFrutas[1])

//usando o PromptSync
const prompt = require("prompt-sync")
const frutas =[]
for(let i = 0; i<3; i++){
    frutas.push.push(prompt("Digite o nome da fruta:"))

}

console.log(frutas[1])

//Exercicio 2

frutas.push(prompt('Digite uma fruta adicional'))
frutas.shift()

console.log(frutas)



