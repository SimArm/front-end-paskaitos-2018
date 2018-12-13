$(document).ready(function(){
    $("#aaa button").on("click", function(){
        $(this).parent().hide();
        console.log(this);
    })
    $("#button6").on("click", function(){
        alert("Pranesimo tekstas");
    })
    $("#laukelis").on("keyup", function(){
        var tekstas = $(this).val();
        $("#laukelisp").text(tekstas);
    })
    $("#laukelis1").mouseover(function(){
        var tekstas = $("#laukelis1").val();
        $("#laukelis12").text(tekstas);
    })
    $("#prideti").on("click", function(){
        var tekstas = $("#prideti1").val();
        $("#prideti1").val("");
        $("#ul").append("<li>" + tekstas + "</li>");
    })
})
