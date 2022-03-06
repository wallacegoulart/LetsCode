alert("Digite 10 nomes");

const nomes = [] ;
for(let i = 1 ; i <= 10 ; i++){
    var nome = prompt(`Digite o nome ${i}`);
    nomes.push(nome.toLowerCase);
}

const nomeProcurado = prompt("Digite o nome Porcurado");

alert(nomes.includes(nomeProcurado.toLowerCase)? "ACHEI!!" : "NÃO ACHEI!!");