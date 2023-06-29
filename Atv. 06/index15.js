/*15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);*/ 


let A = 34
let B = 34
let C = 3

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log('Triângulo equilátero');
    } else if (A === B || A === C || B === C){
        console.log('Triângulo isóceles');
    }else {
        console.log('Triângulo escaleno');
    }
} else {
    console.log('Todos os dados fornecidos não formam um triângulo.');
}