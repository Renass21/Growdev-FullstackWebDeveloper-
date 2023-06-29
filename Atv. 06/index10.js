/*10. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
*/
var pesoIdeal;
var altura = 1.8;
var sexo= 1;

switch (sexo) {
    case 1:
        pesoIdeal = 62.1 * altura - 44.7
        break;
    case 2:
        pesoIdeal = 72.7 * altura - 58 
        break;
    default:
       console.log('Valor invalido para sexo. ');
       return;
}

console.log('O peso ideal é: ', pesoIdeal.toFixed(2));