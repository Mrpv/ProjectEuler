/*
Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obteremos 3, 5, 6 e 9.
A soma desses múltiplos é 23.

Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

*/

let x = 3;
let y = 5;
let resultado = 0;



for(let i = 0; i < 1000; i++){
    if(i % x == 0 || i % y == 0){
        resultado += i;
    }
}

console.log(`A soma de todos os múltiplos de 3 ou 5 abaixo de 1000, é: ${ resultado}`)