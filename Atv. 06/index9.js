/*9. Informe um valor a uma variável e imprima no console se o número
é primo.*/ 

let numero = 7;
numeroPrimo = true;

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        numeroPrimo = false;
        break;
    } 
    if (numeroPrimo) {
        console.log('Numero é primo');
    } else {
        console.log('Numero não é primo');
    }
}
