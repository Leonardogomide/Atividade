function calcularMedia() {
    var h1 = parseFloat(document.getElementById("h1").value);
    var h2 = parseFloat(document.getElementById("h2").value);
    var h3 = parseFloat(document.getElementById("h3").value);
    var h4 = parseFloat(document.getElementById("h4").value);
    var h5 = parseFloat(document.getElementById("h5").value);

    var media = (h1 + h2 + h3 + h4 + h5) / 5;

    document.getElementById("resultado").innerHTML = "<p>A média de horas trabalhadas é de: " + media.toFixed(1) + " horas por dia.</p>";
}
