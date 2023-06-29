2. /*Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”.
*/
var idade = parseInt(prompt('Digite sua idade: '));
var habilitado = prompt('Você tem habilitação? S/N? ', " ");
if (idade >= 18 && habilitado === 's') { 
    alert('Você é maior de idade e tem habilitação, então pode dirigir!')
} else {
    alert('Você é menor de idade ou não habilitado, então não pode dirigir!')
}