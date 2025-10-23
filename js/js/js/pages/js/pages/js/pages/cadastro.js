/* =================================
   ARQUIVO: js/pages/cadastro.js
   Template e Lógica do Formulário
   ================================= */

// Importa as funções de utilidade
import { isEmpty, validateEmail, passwordsMatch } from '../utils/validation.js';

// 1. Função de TEMPLATING (gera o HTML)
export function renderCadastro() {
    return `
    <section class="container">
        <div class="row">
            <div class="col-md-8">
                <h2>Seja um Voluntário</h2>
                <p>Preencha o formulário abaixo para se cadastrar.</p>
                
                <form id="cadastro-form" novalidate>
                
                    <div id="form-feedback" class="alert" style="display: none;"></div>

                    <div class="form-group">
                        <label for="nome" class="form-label">Nome Completo</label>
                        <input type="text" id="nome" class="form-control" required>
                        <div class="invalid-feedback">Por favor, informe seu nome.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="email" id="email" class="form-control" required>
                        <div class="invalid-feedback">Por favor, informe um e-mail válido.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="senha" class="form-label">Senha</label>
                        <input type="password" id="senha" class="form-control" required minlength="6">
                        <div class="invalid-feedback">A senha deve ter no mínimo 6 caracteres.</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="confirma-senha" class="form-label">Confirmar Senha</label>
                        <input type="password" id="confirma-senha" class="form-control" required>
                        <div class="invalid-feedback">As senhas não conferem.</div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg">Cadastrar</button>
                </form>
            </div>
            
            <div class="col-md-4">
                <h3>Por que ser voluntário?</h3>
                <p>...</p>
            </div>
        </div>
    </section>
    `;
}

// 2. Função de LÓGICA (executada após o HTML ser renderizado)
export function initCadastroLogic() {
    const form = document.getElementById('cadastro-form');
    const feedback = document.getElementById('form-feedback');
    
    // Inputs
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confirmaSenha = document.getElementById('confirma-senha');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Previne o envio padrão do formulário
            event.preventDefault();
            
            // Reseta o feedback
            feedback.style.display = 'none';
            feedback.textContent = '';
            
            // Valida campo por campo
            let isValid = true;
            
            // Validação 1: Nome (usando helper)
            if (isEmpty(nome.value)) {
                isValid = false;
                showError(nome, 'Por favor, informe seu nome.');
            } else {
                clearError(nome);
            }
            
            // Validação 2: Email (usando helper)
            if (!validateEmail(email.value)) {
                isValid = false;
                showError(email, 'Por favor, informe um e-mail válido.');
            } else {
                clearError(email);
            }
            
            // Validação 3: Senha (lógica local)
            if (senha.value.length < 6) {
                isValid = false;
                showError(senha, 'A senha deve ter no mínimo 6 caracteres.');
            } else {
                clearError(senha);
            }
            
            // Validação 4: Confirmação de Senha (usando helper)
            if (!passwordsMatch(senha.value, confirmaSenha.value)) {
                isValid = false;
                showError(confirmaSenha, 'As senhas não conferem.');
            } else {
                clearError(confirmaSenha);
            }
            
            // Verificação Final
            if (isValid) {
                // Sucesso!
                showFeedback('Cadastro realizado com sucesso!', 'success');
                form.reset();
            } else {
                // Erro!
                showFeedback('Por favor, corrija os erros no formulário.', 'danger');
            }
        });
    }
}

// Funções de feedback no formulário
function showFeedback(message, type) {
    const feedback = document.getElementById('form-feedback');
    feedback.textContent = message;
    // Usa as classes de Alerta que criamos na Entrega II
    feedback.className = `alert alert-${type}`; 
    feedback.style.display = 'block';
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.invalid-feedback');
    
    input.classList.add('is-invalid'); // Adiciona classe visual
    if(errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block'; // Mostra mensagem
    }
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.invalid-feedback');
    
    input.classList.remove('is-invalid'); // Remove classe visual
    if(errorDiv) {
        errorDiv.style.display = 'none'; // Esconde mensagem
    }
}

// Adiciona um pouco de CSS para a validação (coloque no style.css)
/* .form-control.is-invalid {
    border-color: var(--color-danger);
}
.invalid-feedback {
    color: var(--color-danger);
    font-size: var(--font-size-sm);
    display: none;
    margin-top: var(--space-xxs);
}
*/
