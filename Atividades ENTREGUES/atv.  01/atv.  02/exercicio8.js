var idade = prompt('Qual é a sua idade? ');
var peso = prompt('Qual é a seu peso? ');
var idade;
var peso;
var categoria;

if (idade < 12 ) {
    categoria = 'Infantil';
    alert(`Sua categoria é ${categoria}`)
} else if (idade <=16 && peso <= 39) {
    categoria = 'Juvenil Leve'
   alert(`Sua categoria é ${categoria}`)
}else if (idade <=16 && peso > 40) {
    categoria = 'Juvenil Pesado'
    alert(`Sua categoria é ${categoria}`)
} else if (idade < 24 && peso <=44 ){
    categoria = 'Senior Leve'
    alert(`Sua categoria é ${categoria}`)
} else if (idade < 24 && peso <=59 ){
    categoria = 'Senior Médio'
    alert(`Sua categoria é ${categoria}`)
} else if (idade < 24 && peso > 60 ){
    categoria = 'Senior Pesado'
    alert(`Sua categoria é ${categoria}`)
} else {
    categoria = 'Veterano'
    alert(`Sua categoria é ${categoria}`)
}