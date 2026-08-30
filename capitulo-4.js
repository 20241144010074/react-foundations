// Capítulo 4 - Introdução ao React

// ========================================
// FUNÇÕES
// ========================================

// Função tradicional
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("React"));

// Função de seta
const despedida = (nome) => {
    return `Até mais, ${nome}!`;
};

console.log(despedida("React"));

// Função de seta simplificada
const dobro = (numero) => numero * 2;

console.log(dobro(5));


// ========================================
// OBJETOS
// ========================================

const usuario = {
    nome: "Maria",
    idade: 20,
    cidade: "São Paulo"
};

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.cidade);