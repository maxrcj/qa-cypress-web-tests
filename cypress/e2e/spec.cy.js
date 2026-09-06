describe('Login SauceDemo', () => {
  it('deve logar com sucesso usando credenciais válidas', () => {
    // 1. Visita a página de login
    cy.visit('https://www.saucedemo.com/')

    // 2. Preenche o campo de usuário
    cy.get('#user-name').type('standard_user')

    // 3. Preenche o campo de senha
    cy.get('#password').type('secret_sauce')

    // 4. Clica no botão de login
    cy.get('#login-button').click()

    // 5. Verifica se foi redirecionado pra página de produtos (login deu certo)
    cy.url().should('include', '/inventory.html')
  })
  it('não deve logar com senha inválida', () => {
    // 1. Visita a página de login
    cy.visit('https://www.saucedemo.com/')

    // 2. Preenche o campo de usuário
    cy.get('#user-name').type('standard_user')

    // 3. Preenche o campo de senha com valor ERRADO
    cy.get('#password').type('senha_errada')

    // 4. Clica no botão de login
    cy.get('#login-button').click()

    // 5. Verifica se a mensagem de erro apareceu
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})