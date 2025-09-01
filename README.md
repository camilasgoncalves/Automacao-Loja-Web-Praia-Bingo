# 🏝️ Automação E2E – Loja Web do Jogo Praia Bingo

![Cypress](https://img.shields.io/badge/Cypress-8BA8FF?logo=cypress&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![Workflow](https://img.shields.io/badge/CI/CD-AUTO-green) ![Mocha](https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=white) ![Chai](https://img.shields.io/badge/Chai-A30701?logo=chai&logoColor=white) ![Mochawesome](https://img.shields.io/badge/Mochawesome-FF69B4?logo=mochawesome&logoColor=white)

Este projeto tem como objetivo automatizar testes end-to-end (E2E) da loja web do jogo **Praia Bingo**, garantindo que as funcionalidades principais estejam sempre funcionando corretamente e proporcionando uma melhor experiência aos usuários.

## 🔍 Descrição

A automação cobre cenários críticos da loja, como:

- Validação de exibição correta de títulos e seções (ex: *Dindins*, *Pequenos preços!*);
- Verificação da visibilidade de banners e elementos dinâmicos;
- Simulação de interações de usuário, como cliques e navegação entre seções;
- Garantia de estabilidade visual e funcional da interface.

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) – Framework principal para testes E2E;
- JavaScript ou TypeScript;
- Node.js + npm ou yarn.
- Mocha → define a estrutura e organização dos testes (describe, it, before, after, etc.).
- Chai → fornece os métodos de asserção (expect, should, assert).
- Mochawesome → Reports das execuções com vídeos e screenshots

## 🚀 Como executar os testes

1. Instale as dependências:

   npm install

2. Execute os testes com interface:

    npx cypress open

Este projeto roda automaticamente os testes usando Cypress sempre que há push para a branch `main` ou `develop`. 

O workflow verifica:
- Build do projeto
- Execução de testes

[![Loja Web Praia Bingo - Testes de Login](https://github.com/camilasgoncalves/Automacao-Loja-Web-Praia-Bingo/actions/workflows/testes-login.yml/badge.svg)](https://github.com/camilasgoncalves/Automacao-Loja-Web-Praia-Bingo/actions/workflows/testes-login.yml) [![Loja Web Praia Bingo - Testes da Home](https://github.com/camilasgoncalves/Automacao-Loja-Web-Praia-Bingo/actions/workflows/testes-home.yml/badge.svg)](https://github.com/camilasgoncalves/Automacao-Loja-Web-Praia-Bingo/actions/workflows/testes-home.yml) [![Loja Web Praia Bingo - Testes da Xsolla - Banners de Compras](https://github.com/camilasgoncalves/Automacao-Loja-Web-Praia-Bingo/actions/workflows/testes-xsolla.yml/badge.svg)](https://github.com/camilasgoncalves/Automacao-Loja-Web-Praia-Bingo/actions/workflows/testes-xsolla.yml)

Projeto criado e mantido por Camila 🧪
