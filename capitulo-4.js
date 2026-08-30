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


// ========================================
// DESESTRUTURAÇÃO
// ========================================

// Desestruturação de objeto
const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Rio de Janeiro"
};

const { nome, idade, cidade } = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);


// Desestruturação de array
const cores = ["vermelho", "azul", "verde"];

const [primeiraCor, segundaCor, terceiraCor] = cores;

console.log(primeiraCor);
console.log(segundaCor);
console.log(terceiraCor);


// ========================================
// TEMPLATE LITERALS
// ========================================

const nomeAluno = "Maria";
const curso = "React";

const mensagem = `Olá, ${nomeAluno}! Você está estudando ${curso}.`;

console.log(mensagem);