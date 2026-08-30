# Capítulo 4 - Introdução ao React

## Introdução ao React

Para usar o React no projeto, são utilizados os pacotes React e react-dom.

O React é a biblioteca principal usada para criar interfaces de usuário.

O react-dom fornece métodos para utilizar o React com o DOM.

## Import Map

O import map informa ao navegador onde encontrar os módulos do React.

Neste projeto, os módulos são carregados através da CDN esm.sh.

## createRoot()

O createRoot() cria uma raiz do React associada a um elemento específico do DOM.

## root.render()

O método root.render() é utilizado para renderizar um componente React dentro da raiz criada.

## JSX

JSX é uma extensão de sintaxe do JavaScript que permite escrever uma estrutura semelhante ao HTML dentro do JavaScript.

Os navegadores não entendem JSX diretamente.

## Babel

Babel é um compilador JavaScript que transforma JSX em JavaScript que o navegador consegue executar.

Neste projeto, o Babel foi carregado através de uma CDN.

## React e DOM

Com JavaScript tradicional, é necessário criar e modificar elementos do DOM manualmente.

Com React, podemos descrever a interface de forma mais simples usando JSX.

## Exemplo utilizado

O React foi utilizado para renderizar:

Develop. Preview. Ship.

O resultado foi exibido corretamente no navegador.

## JavaScript essencial para React

Alguns conceitos importantes de JavaScript ajudam a entender e utilizar o React.

Entre eles estão:

- Funções e funções de seta
- Objetos
- Arrays e métodos de arrays
- Desestruturação
- Template literals
- Operador ternário
- Módulos ES e sintaxe de importação e exportação

## Funções

Funções são blocos de código que podem ser reutilizados para realizar uma tarefa.

### Função tradicional

```javascript
function saudacao(nome) {
    return `Olá, ${nome}!`;
}