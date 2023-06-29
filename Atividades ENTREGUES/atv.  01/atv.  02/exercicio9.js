/*
9. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/

var velocidadeVeiculo = Number(prompt('Digite sua velocidade: '));
var velocidadeVeiculo;
var limite = 80;
var multa = 5;
var excesso;
var valorMulta;

if (velocidadeVeiculo > limite)  {
    var excesso = (velocidadeVeiculo - limite);
    var valorMulta = (excesso * multa);
    
    alert(`Você foi multado por excesso de velocidade!`) 
    alert(`O valor da multa é de R$${valorMulta}`) 
} else {
   alert(`Você não faz mais que sua obrigação!!! Continue se cuidando.`)  
}