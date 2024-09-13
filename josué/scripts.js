document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        if (!username || !password) {
            displayMessage('Todos os campos são obrigatórios.', 'error');
            return;
        }
        
        if (username.length < 5) {
            displayMessage('O nome de usuário deve ter pelo menos 5 caracteres.', 'error');
            return;
        }
        
        if (password.length < 8) {
            displayMessage('A senha deve ter pelo menos 8 caracteres.', 'error');
            return;
        }
        
        // Implementar a lógica para autenticar o usuário
        displayMessage('Login realizado com sucesso!', 'success');
    });

    function displayMessage(message, type) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = message;
        messageElement.className = type;
    }
});