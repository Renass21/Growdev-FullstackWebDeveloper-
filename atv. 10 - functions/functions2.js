/*2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.*/ 

function numeroInteiro(inteiro) {
    if (inteiro % 2 === 0 ) {
        alert('O numero é par');
        return inteiro
    } else if (inteiro % 2 === 1 ) {
        alert('O numero é ímpar ');
        return inteiro
} 
}
 numeroInteiro(parseInt(prompt ('Digite um numero: ')));
