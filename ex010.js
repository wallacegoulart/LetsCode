var validacao = true;
while(validacao){
   const n = Number(prompt("Digite o valor maior que zero"));
   if(n > 0){
     
      for( let i = 1; i <= n ; i++ ){
         alert(i);
      }
      
      validacao = false;
   } else {
      alert("So é aceito valor maior que zero");
   }
}


