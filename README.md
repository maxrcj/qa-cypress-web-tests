# 🛒 Testes Automatizados Web (E2E) com Cypress

Projeto de automação de testes End-to-End (E2E) cobrindo fluxos críticos de autenticação e compra na plataforma de e-commerce [SauceDemo](https://www.saucedemo.com/).

## 🎯 Objetivo
Garantir a qualidade e o funcionamento dos fluxos de login e jornada de compra, cobrindo cenários positivos (Happy Path), cenários negativos e validação de estado de carrinho.

## 🛠️ Tecnologias e Ferramentas
- **Cypress** (Framework moderno de automação Web)
- **JavaScript** (Linguagem de automação)
- **Node.js** (Ambiente de execução)
- **Git & GitHub** (Versionamento e documentação)

---

## 🧪 Cenários de Teste Automatizados

| ID | Cenário | Tipo | Ações Realizadas | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **CT-01** | Login com credenciais válidas | Positivo (Happy Path) | Preenche `standard_user` e senha válida, clica em Login | Redirecionamento para `/inventory.html` e exibição do título "Products" | `PASS` |
| **CT-02** | Login com senha incorreta | Negativo (Unhappy Path) | Preenche usuário válido e senha incorreta | Exibição da mensagem de erro *"Username and password do not match"* | `PASS` |
| **CT-03** | Adicionar produto ao carrinho | E2E (Fluxo de Compra) | Realiza login, adiciona a mochila e abre o carrinho | Badge do carrinho atualizado para "1" e produto visível na sacola | `PASS` |

---

## ▶️ Como Executar os Testes

1. Clone o repositório:
   ```bash
   git clone https://github.com/maxrcj/qa-cypress-web-tests.git