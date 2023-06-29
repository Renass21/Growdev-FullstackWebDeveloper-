/*1. Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.*/

var idade = parseInt(prompt('Digite sua idade: '));

if (idade >= 18) {
    alert('Você é maior de idade, pode dirigir!')
} else {
    alert('Você é menor de idade, não pode dirigir!')
}