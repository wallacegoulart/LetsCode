const  valor1 = Number(prompt("Digite o valor"));
const  valor2 = Number(prompt("Digite o valor")); 
const operador = prompt("Digite o operador");

switch(true){
case (operador === "+"):  alert(`Soma = ${valor1 + valor2}`) ; break  
case (operador === "-"):  alert(`Subtração = ${valor1 + valor2}`) ; break 
case (operador === "*"):  alert(`Multiplicação = ${valor1 * valor2}`) ; break 
case (operador === "/"):  alert(`Divisão = ${valor1 / valor2}`) ; break 
}
