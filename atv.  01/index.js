console.log('exercicio 1'); 
var idade = 31; 
console.log( `Minha idade é ${idade} anos`); 
//
console.log('exercicio 2'); 
var num1 = 51;
var num2 = 45;
var resultado;
var resultado = (num1+num2);
console.log(`O reultado da soma é ${resultado}`);
//
console.log('exercicio 3');
var totalCompra = 149.90;
var parcelamento = 3;
var valorParcela = (149.90/3);
console.log(`O valor total da compra foi R$ ${totalCompra}`);
console.log(`Forma de pagamento: ${parcelamento}x de R$${valorParcela}`);
//
console.log('exercicio 4');
var minutos = 120;
var segundos = 7200;
console.log(`${minutos} minutos equivale à ${segundos} segundos!`);
//
console.log('exercicio 5');
var nomeDoAluno = "Renato";
var nota1 = 8;
var nota2 = 7;
var nota3 = 9;
var media = (nota1+nota2+nota3) / 3;
console.log('O aluno '+ nomeDoAluno + ' ficou com media de ' + media);
//
console.log('exercicio 6'); 
var a = 10;
var b = 20;
var a = b;
var b = a;
console.log(`${a=b}`);
console.log(`${b=a}`);
//
console.log('exercicio 7');
var totalDeEleitores = 16000;
var votosBrancos = 1200;
var votosNulos = 1000;
var porcentagemVotosBrancos = (votosBrancos/totalDeEleitores)  *100;
var porcentagemVotosNulos = (votosNulos/totalDeEleitores)*100;
console.log(`A porcentagem de votos nulos é de ${porcentagemVotosNulos}% e a porcentagem de votos brancos é de ${porcentagemVotosBrancos}%`);
//
console.log('exercicio 8');
var num1 = 35;
var num2 = 37;
if (num1===num2) {
    console.log(`Numeros iguais`);
} else if(num1> num2) {
    console.log(`Primeiro é maior`);
}else {
    console.log(`Segundo é maior`);
}
//
console.log('exercicio 9');
var quantidadeDeMacas = 35;
if (12>quantidadeDeMacas) {
    var res = quantidadeDeMacas*0.25; 
    console.log(`O total da compra é R$ ${res}`);
} else {
    var res = quantidadeDeMacas*0.30;
    console.log(`O total da compra é R$ ${res}`);
}
//
console.log('exercicio 10');
var nome = 'João';
var idade = 31;
var anoNascimento = 2023 -31;
console.log(`Nome: ${nome}, Idade: ${idade} anos, nasceu em ${anoNascimento}.`);
//
console.log('exercicio 11'); 
var numero = 37;
if (numero%2===1) {
    console.log(`Número é impar`);
} else {
    console.log(`Numero é par`);
}
//
console.log('exercicio 12');
var anoAtual = 2023;
var anoNascimento = 1990;
var idade = anoAtual-anoNascimento;
if ( idade=>18) {
    console.log(`Você é maior de idade, poderá votar este ano!`);
} else {
    console.log(`Você é menor de idade, não poderá votar este ano!`);
}