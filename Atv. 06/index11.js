/*11. Utilizando Switch, faça um programa que pergunte em que turno
você estuda. Peça para digitar “M” para matutino ou “V” para
vespertino ou “N” para noturno. Mostre um alerta com a mensagem
“Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
conforme o caso.*/ 

var turno = prompt('Digite o seu Turno de estudo: M/V/N? ');

switch (turno) {
    case m:
        alert('Bom dia!!!');
    break;
    case v:
        alert('Boa Tarde!!!');
        break;
    case n:
        alert('Boa noite!!!');
        break;
    default:
        alert('[erro!]Valores inválidos!!!');
}