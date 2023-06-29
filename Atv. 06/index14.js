/*14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor*/ 

let numero = 1;
let soma = 0;

while (soma < 500) {
    soma += numero * 3;
    numero++;
}

console.log ('Ultimo valor', soma);