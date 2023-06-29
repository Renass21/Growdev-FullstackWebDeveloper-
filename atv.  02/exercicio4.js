/* O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor. */

var custoDeFabrica = 30000;
var impostoDistribuidor = custoDeFabrica*28/100;
var impostos = custoDeFabrica*45/100;
var acrescimos = impostoDistribuidor + impostos;

var valorConsumidor = custoDeFabrica + acrescimos;
console.log(`O valor de impostos para o fabricante é `+ impostoDistribuidor);
console.log (`O custo final de um carro novo para o consumidor final é `+ valorConsumidor);