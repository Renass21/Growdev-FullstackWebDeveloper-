/*9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
    nome), que recebe 4 parâmetros sendo três inteiros e um texto
    (String). Esta função será chamada ao abrir a página e mostrará um
    alerta com a média. Exemplo: “João, sua média é 70.” A função
    também deve mostrar no console.log() as notas recebidas. Exemplo
    “Nota 1: 60,Nota 2: 70,Nota 3: 80”. */ 

    let nota1 = parseInt(prompt('Digite a nota 1'));
    let nota2 = parseInt(prompt('Digite a nota 2'));
    let nota3 = parseInt(prompt('Digite a nota 3'));
    let nome = prompt('Digite o nome do Aluno: ');
    

function calcularMedia(nota1, nota2, nota3, nome){
    let media = (nota1 + nota2 + nota3) / 3;
    let nome ='';
    alert(nome + ', a sua média é ' + media);
    console.log('Nota 1 : '+ nota1 +', Nota 2: '+ nota2 + ', Nota 2:'+ nota3);
}

calcularMedia();