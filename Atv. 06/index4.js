/*4. Reescreva o exercício 3, utilizando apenas o SWITCH. */

var numero = parseInt(prompt('Digite um número de 1 a 7: '))

switch (numero) {
    case 1:
        alert('domingo')
        break;
    case 2:
        alert('Segunda')
        break;
    case 3:
        alert('Terça')
        break;
    case 4:
        alert('Quarta')
        break;
    case 5:
        alert('Quinta')
        break;
    case 6:
        alert('Sexta')
        break;
    case 7:
        alert('Sabado')
        break;            
    default:
        alert('Número invalido... digite um número de 1 a 7!')
}