document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("meuFormulario");
    const mensagem = document.getElementById("mensagem"); 

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const campoA = Number(document.getElementById("campoA").value);
        const campoB = Number(document.getElementById("campoB").value);

        if (campoB > campoA){
            mensagem.textContent = "✅ Válido: B é maior que A.";
            mensagem.style.color = "#4caf50";
        } else {
            mensagem.textContent = "❌ Inválido: B deve ser maior que A.";
            mensagem.style.color = "#ff5252";
        }
    });
});
