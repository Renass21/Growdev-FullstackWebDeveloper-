/*
4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/ 

var num = 1;
while (num <= 250){
num++;
if(num % 3 === 0){
console.log(num, "é múltiplo de 3")
}
if(num % 5 === 0){
console.log(num, "é múltiplo de 5")
}
}