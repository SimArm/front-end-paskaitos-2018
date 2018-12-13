    function perjungti(){
        var elementas = document.getElementById("paragrafas");

        if(elementas.style.display == "none"){
            elementas.style.display = "block";
        }else{
            elementas.style.display = "none";
        }
    }
    document.getElementById("mygtukas").addEventListener("click", perjungti);

    function keisti(){
        var elementas1 = document.getElementById("paragrafas2");

        if(elementas1.style.color == "red"){
            elementas1.style.color = "black";
        }else{
            elementas1.style.color = "red";
        }
    }
    document.getElementById("mygtukas1").addEventListener("click", keisti);

    function didinti(){
        var elementas2 = document.getElementById("paragrafas2");

        if(elementas2.style.fontSize == "40px"){
            elementas2.style.fontSize = "";
        }else{
            elementas2.style.fontSize = "40px";
        }
    }
    document.getElementById("mygtukas2").addEventListener("click", didinti);