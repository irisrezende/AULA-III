/* =================================
   ARQUIVO: js/pages/projetos.js
   Template da Página de Projetos
   ================================= */

export function renderProjetos() {
    return `
    <section class="projetos-recentes">
        <div class="container">
            <h2>Nossos Projetos</h2>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                        <img src="httpsa://via.placeholder.com/400x250" class="card-img-top" alt="Projeto 1">
                        <div class="card-body">
                            <span class="badge badge-success">Adoção</span>
                            <h3 class="card-title">Projeto Adoção Feliz</h3>
                            <p class="card-text">Encontrando lares amorosos para nossos amigos.</p>
                            <a href="#" class="btn btn-outline-primary">Ver Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card">
                        <img src="httpsa://via.placeholder.com/400x250" class="card-img-top" alt="Projeto 2">
                        <div class="card-body">
                            <span class="badge badge-warning">Resgate</span>
                            <h3 class="card-title">Equipe de Resgate</h3>
                            <p class="card-text">Atuando 24h por dia para salvar animais em risco.</p>
                            <a href="#" class="btn btn-outline-primary">Ver Detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-4">
                    <div class="card">
                        <img src="httpsa://via.placeholder.com/400x250" class="card-img-top" alt="Projeto 3">
                        <div class="card-body">
                            <span class="badge badge-info">Veterinária</span>
                            <h3 class="card-title">Clínica Comunitária</h3>
                            <p class="card-text">Oferecendo cuidados veterinários acessíveis.</p>
                            <a href="#" class="btn btn-outline-primary">Ver Detalhes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
