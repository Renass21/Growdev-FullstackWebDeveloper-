/*
2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/

var tamPedro = 1.50; 
var tamLucas = 1.10;
var ano = 0;

while (tamLucas <= tamPedro) {
    tamLucas += 0.03;
    tamPedro += 0.02;
    ano++;

  if (tamLucas === tamPedro) {
        document.write(`Serão necessários ${ano} anos para Lucas e Pedro terem a mesma altura.`);
  } 
  if (tamLucas > tamPedro) {
        document.write(`Serão necessários ${ano} anos para que Lucas seja maior que Pedro.`);
}

  }
