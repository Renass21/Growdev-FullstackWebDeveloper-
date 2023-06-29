/*18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:
av - 2.5% desc
2x a 5x - s/ desc
6x a 10x - 6% juros 
11x a 15x 13% juros
Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console.*/ 


let numeroParcelas = 6;
let precoTabela = 1000;
var valorParcela;
var precoTotal;

if (numeroParcelas === 1) {
    valorParcela = precoTabela * 0.975;
    precoTotal = valorParcela;
} else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
    valorParcela = precoTabela;
    precoTotal = valorParcela * numeroParcelas;  
} else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
    valorParcela = precoTabela * 1.06;
    precoTotal = valorParcela * numeroParcelas;
} else if (numeroParcelas >= 11 && numeroParcelas <= 15) {
    valorParcela = precoTabela * 1.13;
    precoTotal = valorParcela * numeroParcelas;
} else {
    console.log('Número de parcelas inválido.');
    return;
}   

console.log('Valor de cada parcela: ', valorParcela.toFixed(2));
console.log('Preço total da compra: ', precoTotal.toFixed(2));