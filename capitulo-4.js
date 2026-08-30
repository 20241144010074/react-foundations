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


// ========================================
// ARRAYS
// ========================================

const frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);


// ========================================
// MÉTODO MAP
// ========================================

const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map((numero) => numero * 2);

console.log(dobrados);


// ========================================
// MÉTODO FILTER
// ========================================

const maioresQueDois = numeros.filter((numero) => numero > 2);

console.log(maioresQueDois);