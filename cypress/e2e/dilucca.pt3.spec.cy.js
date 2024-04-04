describe('prueba de sitio web de Dilucca', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('menu de hamburguesa PT3', () => {
    let username = Cypress.env('username')
    let password = Cypress.env('password')
    cy.get('.button-user-icon > .v-btn__content > .fas').click()
    cy.get(' :nth-child(1) >.v-list-item__title > a').click()
    cy.get('#login-form > :nth-child(1)').type(username)
    cy.get('#login-form > :nth-child(2)').type(password)
    cy.get('.mt-1 > .v-btn__content').click()
    cy.wait(3000)
    cy.get('.fa-ellipsis-v').click()
    // cy.log(cy.get('#input-187').should('exits'))
    // cy.get('#input-221').should('exits')
    cy.get('.v-text-field__slot').type('pizza{enter}')
    cy.get('.fa-ellipsis-v').click()
    cy.get(':nth-child(1) > .main-subtitle').click()
    cy.get('.fa-ellipsis-v').click()
    cy.get('.logout-label').click()
  })
})
