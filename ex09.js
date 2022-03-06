var dinheiro =(numero) => {return numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) };

const horasTrabalhadas = Number(prompt("Digite a hora quantidade de horas trabalhadas"));
const salarioHora  = Number(prompt("O valor do salario por hora")) ;

const horaExtra = function(hora){
    if (hora<= 160){
        return 0; 
    } else { 
        return hora - 160;

    }
}


const salarioFinal =  horasTrabalhadas * salarioHora +   ( (salarioHora + ( salarioHora * 0.50) ) * horaExtra(horasTrabalhadas) );

alert(`Salário é ${ dinheiro(salarioFinal)}`);