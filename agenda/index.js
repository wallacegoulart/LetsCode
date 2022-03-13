const Agenda = require("./Agenda");

// funcão de id 
var i  = 0 
var id = function() {
     i += 1 ;
    return i;
}

// cadastro
lista_agenda =[]
function cadastro(id , nome , telefone){
    lista_agenda.push(new Agenda(id , nome , telefone ));
}

// lista todos os contatos
function listar(){
    console.log("---------------------------------");
    console.log("Listado toda a agenda")
    lista_agenda.forEach(element => {
 
        console.log(element)    
    });
}

//localizar 
function localizar(nome){
    console.log("---------------------------------");
    console.log(`Procura localizada`);
    lista_agenda.forEach( elemet => {
        if (elemet["nome"] == nome) {
            console.log(elemet);

        }
    })
}


//localizar 
function apagar(nome){
    let j = 0
    lista_agenda.forEach( elemet => {
        if (elemet["nome"] == nome) {
            console.log("---------------------------------");
            console.log("Contato apagado.....");
            console.log(elemet);
            console.log("---------------------------------");
            lista_agenda.splice(j,1);
           
        }
        j +=1
    })
}

cadastro(id(), "Wallace" , "111111111");
cadastro(id(), "Sergio","2222222");
cadastro(id(), "Henrique","333333");


localizar("Wallace");
apagar("Wallace");

listar();

cadastro(id(), "Wallace", '1111111');

listar();