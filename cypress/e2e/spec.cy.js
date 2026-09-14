describe('Testes de Automação Web - SauceDemo E-Commerce', () => {

  it('Cenário 1: Realizar login com sucesso (Happy Path)', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('be.visible').and('have.text', 'Products');
  });

  it('Cenário 2: Tentar login com senha incorreta (Cenário Negativo)', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada_123');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('Cenário 3: Adicionar produto ao carrinho com sucesso', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // 1. Clica no botão "Add to cart" da mochila
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // 2. Asserção: Valida se o ícone do carrinho subiu para "1"
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1');

    // 3. Entra no carrinho e valida se a mochila está lá dentro
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  });

});