/*17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.*/ 


let totalEleitores = 1350;
let votosBrancos = 200;
let votosNulos = 50;
let votosValidos = 750;

const somaVotos  = votosBrancos + votosNulos + votosValidos;

if (somaVotos <= totalEleitores) {
    const percentualBrancos = (votosBrancos/totalEleitores) * 100;
    const percentualNulos = (votosNulos/totalEleitores) * 100;
    const percentualValidos = (votosValidos/totalEleitores) * 100;

    console.log('Percentual de votos em relação ao total de eleitores: ');
    console.log('Votos brancos:', percentualBrancos.toFixed(2) + '%');
    console.log('Votos nulos:', percentualNulos.toFixed(2) + '%');
    console.log('Votos Válidos:', percentualValidos.toFixed(2) + '%');
} else {
    console.log('A soma dos votos é maior do que o  total de eleitores.');
}
