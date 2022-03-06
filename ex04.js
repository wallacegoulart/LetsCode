
const mediaFinal = function(notas,peso){
    media = 0 ;
    for(let i = 0 ; i < notas.length ; i++){
        media += notas[i] * peso[i];
    }

    return media/10;
}


//lendo as notas 
let i = 1 ;
const notas = []
while(i <= 3){
    let nota = Number(prompt(`Digite a nota ${i}: ` ));
    notas.push(nota);
    i++;
}


const pesoNotas = [2,3,5];

alert(`Média final é : ${mediaFinal(notas,pesoNotas)}`);


