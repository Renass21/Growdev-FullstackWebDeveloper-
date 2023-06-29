/*Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero.*/

var numero;

var numero = prompt('digite um numero ');


if (numero >= 1 ) {
    alert('Você digitou o numero '+ numero + '! E este é um numero positivo!!!')
} else if (numero < 0) {
    alert('Você digitou o numero '+ numero +'! E este é um numero negativo!!!')
} else {
    alert('Você digitou o numero '+ numero +'! E este numero não tem valor!!!')
}
