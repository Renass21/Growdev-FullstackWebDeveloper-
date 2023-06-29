/*16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/ 

let anoAtual = 2023;
let anoNascimento = 1991;

const idade = anoAtual - anoNascimento;

if (idade >= 18) {
    console.log('Pode votar');
} else {
    console.log('Você não pode votar');
}