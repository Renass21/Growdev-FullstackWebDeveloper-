/* 1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit. */

var temperaturaCelsius = Number(prompt('Informe um valor em graus Celsius: '));

var temperaturaFahrenheit = (`temperaturaCelsius * 1.8`) + 32;

console.log(`Temperatura em graus Celsius ${temperaturaCelsius}ºC`)
console.log(`Temperatura em Fahrenheit ${temperaturaFahrenheit}ºF`)