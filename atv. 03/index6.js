/* 
6. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16
*/

const number = 17;
let numPrimos = true;

if (number < 2) {
  numPrimos = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      numPrimos = false;
      break;
    }
  }
}

if (numPrimos) {
  console.log(number + " é um número primo.");
} else {
  console.log(number + " não é um número primo.");
}