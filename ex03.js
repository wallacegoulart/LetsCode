const percentualDistribuidor = 0.28 ;
const imposto = 0.48 ;
const custoFabrica = Number(prompt("Digite o custo do Carro: "));

const valorFinal = (custo , percentual , imposto) => { return custo + (custo * percentual) + (custo * imposto) };

var dinheiro =(numero) => {return numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) };

alert(`O valor final do carro é ${ dinheiro(valorFinal(custoFabrica, percentualDistribuidor , imposto) ) }`);
