const botao = document.querySelector("#botao-contato");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function() {

    mensagem.textContent =
        "Obrigado pelo interesse! Esperamos receber você na Pousada Encanto Caiçara. 🌴🌊";

});