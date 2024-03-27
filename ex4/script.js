function contar() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = "";

    for (var i = numero; i <= 100; i++) {
        resultado += i + " ";
    }

    if (numero > 100){
        document.getElementById("resultado").innerText = "Insira um numero menor que 100";
    } else {
        document.getElementById("resultado").innerHTML = resultado;
    }

}