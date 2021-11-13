# Project Euler 

**Múltiplos de 3 ou 5.**   https://projecteuler.net/problem=1

A escolha desse problema foi porque eu ja tinha visto algo parecido em uma aula da Alura e támbem por ele ser um pouco mais simples, já que ainda estou no começo dos estudos do JavaScript.

**EXPLICAÇÃO**

Decedi usar um laço de repetição  para passar por todos os números até 1000 e usaria támbem uma condicional.

fiz três variáveis, duas para os múltiplos de 3 e 5 e uma para o resultado.

```javascript
let x = 3;
let y = 5;
let resultado = 0;
```

Na condicional fiz o `i` ser dividido retornando o valor inteiro pelo `x` e `y` utilizando o OU lógico e no bloco da condicional somar as variáveis que tão sendo acumuladas.

```javascript
for(let i = 0; i < 1000; i++){
    if(i % x == 0 || i % y == 0){
        resultado += i;
    }
}
```

