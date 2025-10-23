/* =================================
   ARQUIVO: js/pages/home.js
   Template da Página Inicial
   ================================= */

// Usamos Template Literals (crases ``) para criar o HTML
export function renderHome() {
    return `
    <section class="hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1>Ajude a Salvar Vidas</h1>
                    <p>Sua contribuição faz a diferença na vida de centenas de animais.</p>
                    <a href="#cadastro" class="btn btn-primary btn-lg">Seja um Voluntário</a>
                    <a href="#projetos" class="btn btn-secondary btn-lg">Saiba Mais</a>
                </div>
                <div class="col-lg-6">
                    <img src="httpsa://via.placeholder.com/500x300" alt="Animal resgatado" style="width:100%; border-radius: var(--radius-md);">
                </div>
            </div>
        </div>
    </section>
    
    <section class="container">
        <h2>Bem-vindo à nossa ONG</h2>
        <p>Conteúdo da página inicial...</p>
    </section>
    `;
}
