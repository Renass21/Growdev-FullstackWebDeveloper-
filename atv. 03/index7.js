/*
7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
 */

var qtdePositivos = 0;
var qtdeNegativos = 0;
var qtdeValores = 0;
var soma = 0;
while (qtdeValores < 10) {
  var numero = parseInt(
    prompt("Digite um número " + (qtdeValores + 1) + ":")
  );
  soma += numero;
  qtdeValores++;

  if (numero > 0) {
    qtdePositivos++;
  } else if (numero < 0) {
    qtdeNegativos++;
  }
  debugger;
}
var media = soma / 10;

var percentual1 = (qtdePositivos / 10) * 100;
var percentual2 = (qtdeNegativos / 10) * 100;

console.log(`${media}, ${percentual1}, ${percentual2}, ${qtdeNegativos} e ${qtdePositivos}`);