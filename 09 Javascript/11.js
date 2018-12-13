var zodziai = ["medis", "gele", "dramblys", "masina", "egzaminas"];
var sarasas = document.getElementById("zodziai");

zodziai.forEach(zodis => {
    var punktas = document.createElement("li");
    var tekstas = document.createTextNode(zodis);
    punktas.appendChild(tekstas);
    sarasas.appendChild(punktas);
})

document.getElementById("pirmas").innerHTML = "pirmas zodis:" + zodziai[0];
document.getElementById("antras").innerHTML = "antras zodis:" + zodziai[1];
document.getElementById("paskutinis").innerHTML = "paskutinis:" + zodziai[zodziai.length -1];