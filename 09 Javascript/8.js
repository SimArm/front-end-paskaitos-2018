function lentele(){
    var skaicius = parseInt(document.getElementById("skaicius").value);

    var lentelesKodas = '<table border="1">';

    for (i = parseInt(document.getElementById("pradzia").value); i <= parseInt(document.getElementById("pabaiga").value); i++) {
        lentelesKodas += "<tr>"
                        + "<td>" + skaicius + "</td>"
                        + "<td>*</td>"      
                        + "<td>" + i + "</td>"
                        + "<td>" + (skaicius * i ) + "</td>"
                        + "</tr>";
    }
    lentelesKodas += '</table>';
    document.getElementById("lentelesblokas").innerHTML=lentelesKodas;
}