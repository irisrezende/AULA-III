/* =================================
   ARQUIVO: js/utils/validation.js
   Módulo de Utilidade - Validação
   ================================= */

export function isEmpty(value) {
    return value.trim() === '';
}

export function validateEmail(email) {
    // Regex simples para validação de email
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

export function passwordsMatch(pass1, pass2) {
    // Verifica se não estão vazias E se são iguais
    return !isEmpty(pass1) && pass1 === pass2;
}
