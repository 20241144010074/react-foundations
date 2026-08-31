# Capítulo 5 — Construindo interfaces de usuário com componentes

## Conceitos básicos do React

Os três conceitos fundamentais do React são:

- Componentes
- Adereços (Props)
- Estado (State)

## Componentes

Componentes são blocos de construção menores que podem ser combinados para formar interfaces de usuário.

Eles permitem criar trechos de código independentes e reutilizáveis.

Uma comparação usada no tutorial é com peças de LEGO: podemos combinar diferentes componentes para formar estruturas maiores.

## Criação de componentes

No React, os componentes são funções JavaScript.

Um componente retorna elementos da interface de usuário.

Exemplo:

```jsx
function Header() {
    return <h1>Develop. Preview. Ship.</h1>;
}