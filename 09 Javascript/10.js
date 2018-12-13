function perjungti(){
    var elementas = document.getElementById("paragrafas5");

    if (elementas.style.opacity == 0){
        elementas.style.opacity = 1;
    }else{
        elementas.style.opacity = 0;
    }
}
document.getElementById("mygtukas5").addEventListener("click", perjungti);

function didinti(){
    var elementas1 = document.getElementById("paragrafas5");

    if (elementas1.style.fontSize == "35px"){
        elementas1.style.fontSize = "15px";
    }else{
        elementas1.style.fontSize = "35px";
    }
}
document.getElementById("mygtukas51").addEventListener("click", didinti);

function spalva(){
    var elementas2 = document.getElementById("paragrafas5");

    if (elementas2.style.color == "red"){
        elementas2.style.color = "black";
    }else{
        elementas2.style.color = "red";
    }
}
document.getElementById("mygtukas52").addEventListener("click", spalva);