function clicar(){
    var sm1 = document.querySelector(".sm1").value;
    var sm2 = document.querySelector(".sm2").value;
    var sm3 = document.querySelector(".sm3").value;
    var sm4 = document.querySelector(".sm4").value;
    var sm5 = document.querySelector(".sm5").value;
    var sm6 = document.querySelector(".sm6").value;
    var sm7= document.querySelector(".sm7").value;
    var sm8 = document.querySelector(".sm8").value;
    var sm9 = document.querySelector(".sm9").value;
    var sm10 = document.querySelector(".sm10").value;
    

var resultado = parseInt(sm1) + parseInt(sm2) + parseInt(sm3) + parseInt(sm4) + parseInt(sm5) + parseInt(sm6) + parseInt(sm7) + parseInt(sm8) + parseInt(sm9) + parseInt(sm10);
document.querySelector(".resultado").innerHTML = resultado;

}