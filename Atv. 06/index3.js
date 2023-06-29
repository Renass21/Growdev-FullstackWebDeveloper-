/*3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.*/


var numero = parseInt(prompt('Digite um número de 1 a 7: '))

if (numero === 1 ) {
    alert('Domingo')
} else if (numero === 2) {
    alert('Segunda-feira')
} else if (numero === 3) {
    alert('Terça-feira')
} else if (numero === 4) {
    alert('Quarta-feira')
} else if (numero === 5) {
    alert('Quinta-feira')
} else if (numero === 6) {
    alert('Sexta-feira')
} else if (numero === 7) {
    alert('Sabado')
}else {
    alert('Numero invalido!!! Digite um numero de 1 a 7.')
}