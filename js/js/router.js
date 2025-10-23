/* =================================
   ARQUIVO: js/router.js
   Sistema de SPA (Roteamento)
   ================================= */

// Importa as "páginas" (templates)
import { renderHome } from './pages/home.js';
import { renderProjetos } from './pages/projetos.js';
import { renderCadastro, initCadastroLogic } from './pages/cadastro.js';

// Onde o conteúdo será injetado
const appContainer = document.getElementById('app-container');

// Define as "rotas" (qual hash carrega qual função)
const routes = {
    '': renderHome,        // Hash vazio (padrão)
    '#home': renderHome,
    '#projetos': renderProjetos,
    '#cadastro': renderCadastro,
    // Adicione outras rotas conforme necessário
    '#doar': () => `<h2>Página de Doação</h2><p>Em breve...</p>`,
};

// Objeto para funções de inicialização pós-renderização
const pageInitLogic = {
    '#cadastro': initCadastroLogic,
};

// Função principal de roteamento
function handleRouting() {
    // Pega o hash atual ou define '' se for a raiz
    const hash = window.location.hash || '';

    // Encontra a função de renderização no objeto 'routes'
    // Se não encontrar, usa a 'home' como padrão (ou uma página 404)
    const renderPage = routes[hash] || routes[''];

    // 1. Renderiza o HTML (Sistema de Templating)
    appContainer.innerHTML = renderPage();

    // 2. Ativa o link do menu correspondente (Bônus)
    updateActiveNavLink(hash);

    // 3. Executa lógica JS específica da página (Ex: validação do form)
    const initLogic = pageInitLogic[hash];
    if (initLogic) {
        initLogic();
    }
}

// Função Bônus: Atualiza o link ativo no menu
function updateActiveNavLink(hash) {
    const currentHash = hash || '#home';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Inicializador do Router
export function initRouter() {
    // Ouve o evento 'hashchange' (quando o usuário clica em um link)
    window.addEventListener('hashchange', handleRouting);
    
    // Ouve o carregamento inicial da página
    window.addEventListener('load', handleRouting);
}
