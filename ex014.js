alert("Digite 20 números");

const numeros = [];
for(let i = 1 ; i <= 20 ; i++){
    var numero = prompt(`Digite o número da posição ${i}`);
    numeros.push(numero);
}

alert(numeros.reverse());

