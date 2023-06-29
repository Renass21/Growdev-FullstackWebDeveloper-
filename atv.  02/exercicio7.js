var caixa = 10;
var valorARetirar = 5;

var multiploDe5 = valorARetirar % 5 === 0;
var temValorDisponivel = caixa >= valorARetirar + 4.50;

if (multiploDe5 && temValorDisponivel) {
    
    caixa = caixa - valorARetirar -4.50;
    console.log("Seu novo saldo é: " + caixa);
} else {
    if (temValorDisponivel === false) {
        console.log('Não há valor disponicel em caixa');
    }else {
        console.log('Não é multiplo de 5');
    }
}