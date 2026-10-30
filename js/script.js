// ===== Tema escuro =====

// Pega o botão e o body da página
const botaoTema = document.querySelector("#botao-tema");
const corpo = document.body;


const iconeLua = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round"
     stroke-linejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`;

const iconeSol = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round"
     stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`;

// Troca o ícone do botão de acordo com o tema atual
function atualizarSimbolo() {
    if (corpo.classList.contains("tema-escuro")) {
        botaoTema.innerHTML = iconeSol;
    } else {
        botaoTema.innerHTML = iconeLua;
    }
}

// Ao carregar a página, restaura o tema que foi salvo
if (localStorage.getItem("tema") === "escuro") {
    corpo.classList.add("tema-escuro");
}
atualizarSimbolo();

// Ao clicar no botão: alterna o tema, salva a escolha e troca o ícone
botaoTema.addEventListener("click", function () {
    corpo.classList.toggle("tema-escuro");

    if (corpo.classList.contains("tema-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

    atualizarSimbolo();
});