/*
1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/


var index = 1
var alturaMenor = 10
var alturaMaior = 0

while(index <= 15 ) {
    var altura = Number(prompt("Digite aqui sua altura" + index))
    index++

    if(altura > alturaMaior) {
        alturaMaior = altura
    } else if (altura < alturaMenor) {
        alturaMenor = altura
    }
}
document.write("A menor altura do grupo é: " + alturaMenor + "<br>")
document.write("A maior altura do grupo é: " + alturaMaior)
