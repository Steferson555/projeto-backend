/*window.onload = function(){
    let response = confirm("Olá é a sua primeira vez por aqui?");

    if(response){
        alert("Seja bem vindo(a) futuro bancário(a)")
    }else{
        alert("Que bom que retornou, não esqueça de responder muitas questões, seja constante")
    }
}
    */

window.onload = function(){
    const resposta = prompt("É a sua primeira vez por aqui? Digite 1 para SIM ou 2 para NÃO");
    if(resposta==='1'){
        alert("Seja bem vindo(a) e bons estudos!")
    }else if(resposta==='2'){
        alert("Que bom que voltou!!! Constância nos estudos é o segredo do sucesso!!!")
    }else{
        alert("Resposta inválida concurseiro, digite 1 para SIM ou 2 para NÃO")
    }
} 



