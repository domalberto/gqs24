let currentFontSize = 16;

// Função para alternar entre o modo claro e o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Função para ajustar o tamanho da fonte
function adjustFontSize(change) {
    currentFontSize += change;
    document.body.style.fontSize = currentFontSize + "px";
}

// Função de envio do formulário com validação
function handleSubmit(event) {
    event.preventDefault(); // Evita que a página seja recarregada.

    // Validação do telefone
    const phoneInput = document.getElementById("phone").value;
    const phonePattern = /^\d{11}$/;

    if (!phonePattern.test(phoneInput)) {
        alert("Por favor, insira um número de celular válido com 11 dígitos (DDD + número).");
        return false;
    }

    // Exibe a mensagem de sucesso
    document.getElementById("successMessage").style.display = "block";

    // Limpa o formulário
    document.getElementById("applyForm").reset();
    return false; // Retorna falso para evitar o envio real do formulário.
}
