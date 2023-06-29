/* 1. Criar um array e percorrê-lo utilizando o loop for
a. Crie um array com o nome "nomes" e adicione 4 nomes de
pessoas que você conhece
b. Utilize o loop for para percorrer o array e exibir os nomes na
tela */

let nomes = ['Juliete','Renato', 'Vinicus','Jessica']

for (let i = 0; i < nomes.length; i++){
    const element = nomes[i]
    console.log(element);
}

/* 2. Criar um array e percorrê-lo utilizando o loop for of
a. Crie um array com o nome "numeros" e adicione 5 números de
sua escolha
b. Utilize o loop for of para percorrer o array e exibir a soma dos
números na tela
*/   
const numeros = [10, 22, 43, 4];
let soma = 0;

for (let numero of numeros) {
  soma += numero;
}

console.log(soma);


/* 3. Utilizar os métodos push, pop, unshift e shift para manipular um
array
a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
b. Utilize o método push para adicionar uma fruta no final do
array
c. Utilize o método pop para remover a última fruta do array
d. Utilize o método unshift para adicionar uma fruta no início do
array
e. Utilize o método shift para remover a primeira fruta do array
f. Exiba o array resultante na tela */

const frutas = ["morango", "maça", "pera"];
frutas.push("laranja");
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.unshift("banana");
console.log(frutas);
frutas.shift();
console.log(frutas);




