var candidatos = [];

function adicionarCandidato() {
    var codigo = parseInt(document.getElementById("codigo").value);
    var salario = parseFloat(document.getElementById("salario").value);
    var email = document.getElementById("email").value;

    var candidato = {
        codigo: codigo,
        salario: salario,
        email: email
    };

    candidatos.push(candidato);

    exibirCandidatos();
}

function exibirCandidatos() {
    var container = document.getElementById("candidatos");
    container.innerHTML = "";

    candidatos.forEach(function (candidato, index) {
        var div = document.createElement("div");
        div.innerHTML = "<h2>Candidato " + (index + 1) + "</h2>" +
            "<p><strong>Código:</strong> " + candidato.codigo + "</p>" +
            "<p><strong>Salário:</strong> R$ " + candidato.salario.toFixed(2) + "</p>" +
            "<p><strong>E-mail:</strong> " + candidato.email + "</p>";

        container.appendChild(div);
    });
}