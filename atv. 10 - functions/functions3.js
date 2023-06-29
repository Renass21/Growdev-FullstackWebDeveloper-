/*3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.*/

function isPrime2(value) {
    if (value > 0) {
      
      for (let i = 2; i < value; i++) {
        console.log(i);
        if (value % i == 0) {
          return document.write("nao e primo");
        } else {
          return document.write("primo");
        }
      }
    }
  }
  
  isPrime2(parseInt(prompt("digite um valor")));