function stilius1(elementas, stilius ){
    document.getElementById(elementas).style.fontStyle = stilius; 
}

var pirmas = 8;
var antras = 9;
var trecias = 7;

var suma = pirmas + antras + trecias;
var skirtumas = pirmas - antras - trecias;
var sandauga = pirmas * antras * trecias;
var dalmuo = pirmas / antras / trecias;

document.getElementById("suma").innerHTML= pirmas + "+" + antras + "+" + trecias + "=" + suma;
document.getElementById("skirtumas").innerHTML= pirmas + "-" + antras + "-" + trecias + "=" + skirtumas;
document.getElementById("dalmuo").innerHTML= pirmas + "/" + antras + "/" + trecias + "=" + dalmuo;
document.getElementById("sandauga").innerHTML= pirmas + "*" + antras + "*" + trecias + "=" + sandauga;

function suma1(){
    var pirmassk = parseInt(document.getElementById("pirmassk").value);
    var antrassk = parseInt(document.getElementById("antrassk").value);
    var suma1 = pirmassk + antrassk;
    document.getElementById("suma1").innerHTML="Atsakymas="+suma1;
}
function skirtumas1(){
    var pirmassk = parseInt(document.getElementById("pirmassk").value);
    var antrassk = parseInt(document.getElementById("antrassk").value);
    var skirtumas1 = pirmassk - antrassk;
    document.getElementById("suma1").innerHTML="Atsakymas="+skirtumas1;
}