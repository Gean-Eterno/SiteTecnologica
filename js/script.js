// ===== Tema escuro =====

const botaoTema = document.querySelector("#botao-tema");
const corpo = document.body;

function atualizarSimbolo() {
    if (corpo.classList.contains("tema-escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
}

if (localStorage.getItem("tema") === "escuro") {
    corpo.classList.add("tema-escuro");
}
atualizarSimbolo();

botaoTema.addEventListener("click", function () {
    corpo.classList.toggle("tema-escuro");

    if (corpo.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

    atualizarSimbolo();
});