
/**
 * Olá Fabio! Este é o "cérebro" do seu site.
 * Aqui controlamos as animações e o funcionamento dos botões.
 * Não se preocupe com a complexidade, tudo funciona automaticamente.
 */

// 1. Controle do Menu Mobile (Abrir e Fechar no Celular)
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fechar o menu automaticamente ao clicar em qualquer link
const links = mobileMenu.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 2. Efeito de Transparência no Menu ao Rolar a Página
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 100) {
        // Quando rolar mais de 100 pixels, o menu fica preto
        nav.classList.add('bg-black');
        nav.classList.remove('h-24');
        nav.classList.add('h-20'); // Menu fica um pouco mais fino
    } else {
        nav.classList.remove('bg-black');
        nav.classList.add('h-24');
        nav.classList.remove('h-20');
    }
});

// 3. Simulação de Envio de Formulário (Apenas Visual por enquanto)
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado Fabio! Esta é uma demonstração visual. No futuro, conectaremos isso ao seu e-mail real via Firebase.');
    });
}

const newsletterForm = document.getElementById('newsletter-form');
if(newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('E-mail cadastrado com sucesso (Modo Demonstração)!');
    });
}

console.log("Sistema HUMANO Studio pronto para o palco.");
