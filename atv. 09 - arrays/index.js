
//
// atv 01 
let produto = {
	descricao: "mouse",
  preco: 90
};

console.log(`produto é um ${produto.descricao} e o preço é ${produto.preco}`);

// atv 02

let notebook = {
    processador: "i7",
    memoria: "16GB",
    preco: 5000,
    hd: "1TB",
    ssd: "256GB"
  };
  
  console.log(`Processador = ${notebook.processador}`);
  console.log(`Memória = ${notebook.memoria}`);
  console.log(`Preço = ${notebook.preco}`);
  console.log(`HD = ${notebook.hd}`);
  console.log(`SSD = ${notebook.ssd}`);
// atv 03
  let aluno1 = {
    nome: 'João',
    notas: [9,10],
    media: 0
  }
  aluno1.media = (aluno1.notas[0] + aluno1.notas[1]) / 2;
  
  let aluno2 = {
    nome: 'Maria',
    notas: [10,10],
    media: 0 
  }
  aluno2.media = (aluno2.notas[0] + aluno2.notas[1]) / 2;

  console.log('Aluno 1: ');
  console.log(`Nome: ${aluno1.nome}`);
  console.log(`Nota 1: ${aluno1.notas[0]}`);
  console.log(`Nota 2: ${aluno1.notas[1]}`);
  console.log(`  Média ${aluno1.media}`);

  console.log('Aluno 2: ');
  console.log(`Nome: ${aluno2.nome}`);
  console.log(`Nota 1: ${aluno2.notas[0]}`);
  console.log(`Nota 2: ${aluno2.notas[1]}`);
  console.log(`  Média ${aluno2.media}`);

let mediaGeral = (aluno1.media + aluno2.media) / 2;

console.log(`Média geral = ${mediaGeral}`);
