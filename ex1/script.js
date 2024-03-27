function calcularSalario() {
    const hora = 10.00;
    const horaExtra = 15.00;

    const horasNormais = parseFloat(document.getElementById("horasNormais").value);
    const horasExtras = parseFloat(document.getElementById("horasExtras").value);

    const horasNormaisResult = horasNormais * hora;
    const horasExtrasResult = horasExtras * horaExtra;
    const resultadoTotal = horasNormaisResult + horasExtrasResult;
    const poupanca = resultadoTotal * 0.08;

    const resultadoHTML = `
        <p>Valor de horas normais: R$ ${horasNormaisResult.toFixed(2)}</p>
        <p>Valor de horas extras: R$ ${horasExtrasResult.toFixed(2)}</p>
        <p>Total de ganho no ano: R$ ${resultadoTotal.toFixed(2)}</p>
        <p>Valor a guardar na poupança: R$ ${poupanca.toFixed(2)}</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}