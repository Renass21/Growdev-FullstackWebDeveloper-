/* 4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos. 
Ex:
Entrada: 3672
Saída: 1:1:12
*/ 

function tempoFabrica(segundos) {
    let minutos = segundos / 60
    let horas = segundos / 3600;

    document.write("A quantidade de segundos é " + segundos, '<br/>');
    document.write("A quantidade de minutos é " + minutos, '<br/>');
    document.write("A quantidade de horas é " + horas, '<br/>');
}


tempoFabrica(Number(prompt("Digite a quantidade de segundos que deseja converter: ")))