/*2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
semana correspondente utilizando a estrutura condicional switch.*/
var diaDaSemana;
var diaDaSemana = Number(prompt('Digite um numero de 1 a 7, este será equivalente a um dia da semana: '));

switch (diaDaSemana) {
    case 1:
        diaDaSemana = 'Equivalente ao Domingo';
        break;

    case 2:
        diaDaSemana = 'Equivalente a Segunda';
        break;

    case 3:
        diaDaSemana= 'Equivalente a Terça';
        break;
        
    case 4:
        diaDaSemana = 'Equivalente a Quarta ';
        break;

    case 5:
        diaDaSemana = 'Equivalente a Quinta';
        break;

    case 6:
        diaDaSemana = 'Equivalente a Sexta ';
        break;
   
    case 7:
        diaDaSemana = 'Equivalente ao Sábado ';
        break;  
    default:    
        diaDaSemana = 'Numero proibido'
}

window.alert('O Numero escolhido foi: ' + diaDaSemana)