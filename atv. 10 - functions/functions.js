/* 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2). */ 


function mediaAluno(notas,letra) {
    let mediaFinal;
    if (letra === 'p') {
       mediaFinal = (notas[0] * 5 + notas[1] * 3 + notas[2] * 2) / 10;  
    } else if(letra === 'a') {
        mediaFinal = (notas[0] + notas[1]  + notas[2]) / 3;   
    } else {
        return 'Valores não definidos';
    }
    return mediaFinal;
}


let notas = [0,1,2];
 
notas[0] = Number(prompt('Digite a nota 1:'))
notas[1] = Number(prompt('Digite a nota 2:'))                                            
notas[2] = Number(prompt('Digite a nota 3:'))
let letra = prompt('Digite a letra A, para media aritmetica, ou P para media ponderada: ');

const mediaDoAlunoX = mediaAluno(notas,letra);
alert('A média final do aluno é: ' + mediaDoAlunoX);