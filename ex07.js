const quantidade = Number(prompt("Quantidade de maçãs compradas: ")) ;
const valorMaca = quantidade >= 12 ? 1.00 : 1.30 ;

var dinheiro =(numero) => {return numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) };


alert(`Valor final da compra é : ${ dinheiro( quantidade * valorMaca) }`);