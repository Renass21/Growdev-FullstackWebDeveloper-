/* Faça um algoritmo que armazene um número e imprima os
números ímpares entre 1 e o número armazenado. */ 

let numero = 10;
let i = 1;

while (i <= numero) {
    if (i % 2 != 0 ) {
        console.log(i);
    }
    i++;
}
