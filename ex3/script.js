function calcularSalario() {
    var codigo = parseInt(document.getElementById("codigo").value);
    var horasNormais = parseFloat(document.getElementById("horasNormais").value);
    var horasExtras = parseFloat(document.getElementById("horasExtras").value);

    var salarioBruto = calcularSalarioBruto(horasNormais, horasExtras);
    var salarioLiquido = calcularSalarioLiquido(salarioBruto);

    var resultadoHTML = "<h2>Resultado para o funcionário: " + codigo + "</h2>" +
        "<p>Horas Normais: " + horasNormais.toFixed(2) + " horas</p>" +
        "<p>Horas Extras: " + horasExtras.toFixed(2) + " horas</p>" +
        "<p>Salário Bruto: R$ " + salarioBruto.toFixed(2) + "</p>" +
        "<p>Salário Líquido: R$ " + salarioLiquido.toFixed(2) + "</p>";

    document.getElementById("resultado").innerHTML += resultadoHTML;
}

function calcularSalarioBruto(horasNormais, horasExtras) {
    var salarioNormais = horasNormais * 12;
    var salarioExtras = horasExtras * 15.50;
    return salarioNormais + salarioExtras;
}

function calcularSalarioLiquido(salarioBruto) {
    var desconto = salarioBruto * 0.1;
    return salarioBruto - desconto;
}