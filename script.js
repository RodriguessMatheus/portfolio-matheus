// ===== MENU RESPONSIVO =====
// Seleciona os elementos do menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Alterna a classe 'active' no menu quando clica no botão hambúrguer
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fecha o menu ao clicar em um link (dispositivos móveis)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== TEMA CLARO/ESCURO =====
// Verifica se já existe tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
} else {
    document.body.setAttribute('data-theme', 'light');
}

// Função para alternar o tema
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            // Troca o ícone (opcional)
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    // Ajusta o ícone inicial baseado no tema
    if (savedTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// ===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====
const contactForm = document.getElementById('contact-form');

// Função para validar e-mail usando regex
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função para limpar mensagens de erro
function limparErros() {
    document.getElementById('nome-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('mensagem-error').textContent = '';
}

// Evento de envio do formulário
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real (simulação)
        
        limparErros();
        
        // Coleta os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        let isValid = true;
        
        // Validação do campo NOME
        if (nome === '') {
            document.getElementById('nome-error').textContent = 'Por favor, preencha seu nome.';
            isValid = false;
        }
        
        // Validação do campo EMAIL
        if (email === '') {
            document.getElementById('email-error').textContent = 'Por favor, preencha seu e-mail.';
            isValid = false;
        } else if (!validarEmail(email)) {
            document.getElementById('email-error').textContent = 'Digite um e-mail válido (ex: usuario@dominio.com).';
            isValid = false;
        }
        
        // Validação do campo MENSAGEM
        if (mensagem === '') {
            document.getElementById('mensagem-error').textContent = 'Por favor, digite sua mensagem.';
            isValid = false;
        }
        
        // Se o formulário for válido, simula o envio
        if (isValid) {
            // Exibe alerta de sucesso
            alert('✅ Mensagem enviada com sucesso!\n\nEm breve entrarei em contato com você.');
            
            // Limpa os campos do formulário
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('mensagem').value = '';
        } else {
            // Alerta opcional para informar que há erros
            alert('❌ Por favor, corrija os erros no formulário antes de enviar.');
        }
    });
}

// ===== SUAVIZAÇÃO DA ROLAGEM (SCROLL SUAVE) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});