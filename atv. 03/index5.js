/*
5. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
 */

var numeroRecebido = Number(prompt("Digite aqui um número para ver a contagem até ele: ")); 

  if (numeroRecebido < 0) {
    alert(`Insira um número POSITIVO`);
  } 
  document.write(`Contagem:  `);

  for (let contagem = 0; contagem <= numeroRecebido; contagem++) {
    document.write(`${contagem}  `);
  } 

if (numeroRecebido >= 0) {
    document.write("FIM!");
}