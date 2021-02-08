function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://youtube.com");
    //window.location.href = "https://youtube.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1 + n2;
}
var validar; // var global
function validaIdade(idade){
    var validar; // var local
    if (idade >= 18){
        return true
    }else{
        return false
    }
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));
alert(soma(5, 10));*/

//var d = new Date();
//while e for normal; if/else normal
//var idade = prompt("Qual sua idade?") - exibe perguntas

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(fruta.cor);*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Arthur Vilaça"
//alert("Bem vindo" + nome);
//var nome = "Arthur Vilaça";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));