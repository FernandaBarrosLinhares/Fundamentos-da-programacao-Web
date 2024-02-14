function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é par.";
    } else {
        return "O número " + numero + " é ímpar.";
    }
}

// Exemplo de uso da função
console.log(parOuImpar(7)); // Saída: O número 7 é ímpar.
console.log(parOuImpar(10)); // Saída: O número 10 é par.
console.log(parOuImpar(13)); // Saída: O número 13
