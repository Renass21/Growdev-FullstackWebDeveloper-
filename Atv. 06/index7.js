/*7. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.*/

let numero = 10;
let soma = 0;
do {
    soma += numero;
    numero++;
} while (numero <= 100);

console.log(soma);