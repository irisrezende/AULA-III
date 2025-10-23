/* =================================
   ARQUIVO: js/main.js
   Ponto de Entrada Principal
   ================================= */

// Importa o inicializador do router
import { initRouter } from './router.js';

/* 1. Lógica do Menu Hambúrguer (da Entrega II) */
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Opcional: fechar menu ao clicar em um link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

/* 2. Lógica da SPA (da Entrega III) */
function startApp() {
    initMobileMenu(); // Inicializa o menu
    initRouter();     // Inicializa o sistema de "páginas" (SPA)
}

// Inicia a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', startApp);
