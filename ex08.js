while(true){
    const v1 = Number(prompt("Digite o primeiro valor")) ;
    const v2 = Number(prompt("Digite o primeiro valor")) ;

    if (v1 != v2){
        alert(v1 > v2 ? "O primeiro valor é maior" : "O segundo valor é maior");
        break;
    }

    alert("Valores iguais não são permitidos");
}
 



