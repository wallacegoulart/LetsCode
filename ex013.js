alert("Digite 20 números positivos");

var i = 1 ;
const numeros = [];
var maior = 0;
var posicao = 0;

while(i <= 5 ){
    var numero = Number(prompt(`Digite o número da posição ${i}`));
    if (numero <= 0 ){
        alert("So é permitido número maior que 0");
    } else{
        numeros.push(numero);
        if(maior < numero){
            maior = numero ; 
            posicao = i;
        }
        i++;
    }
}

alert(`O maior número é ${maior} da posição ${posicao}`);

