

function encriptar(){
    var texto =document.getElementById("inputText").value.toLowerCase();
    var textCifrado= texto.replace(/e/igm,"enter");
    var textCifrado= textCifrado.replace(/o/igm,"over");
    var textCifrado= textCifrado.replace(/i/igm,"imes");
    var textCifrado= textCifrado.replace(/a/igm,"ai");
    var textCifrado= textCifrado.replace(/u/igm,"ufat");


    
    document.getElementById("text2").innerHTML = textCifrado;

    
    document.getElementById("copiar").style.display = "inherit";

    


}

function desencriptar(){
    var texto =document.getElementById("inputText").value.toLowerCase();
    var textCifrado= texto.replace(/enter/igm,"e");
    var textCifrado= textCifrado.replace(/over/igm,"o");
    var textCifrado= textCifrado.replace(/imes/igm,"i");
    var textCifrado= textCifrado.replace(/ai/igm,"a");
    var textCifrado= textCifrado.replace(/ufat/igm,"u");

    
    
    document.getElementById("text2").innerHTML = textCifrado;

    
    document.getElementById("copiar").style.display = "inherit";

    


}

function copiar(){
    var contenido = document.querySelector("#text2");
    var inputText = document.getElementById("inputText")
    contenido.select();
    document.execCommand("copy");
    inputText.value = '';

}













