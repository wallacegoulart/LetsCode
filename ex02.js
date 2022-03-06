var salarioAtual = prompt("Digite o salário: ");
var percentual =  prompt("Digite o percetual: ");

const novoSalario = (num1 , num2 ) => { return num1 + num1 * num2  };


alert(`Salário aumentou de R$${Number(salarioAtual)} para R$${ novoSalario(Number(salarioAtual),Number(percentual))} `);