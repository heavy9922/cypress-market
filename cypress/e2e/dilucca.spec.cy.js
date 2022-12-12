/// <references types="Cypress"/>

describe('prueba de sitio web de Dilucca', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  //URL
  it('URL', () => {
    cy.url().should('contain', 'https://www.diluccatogo.com/')
  })
  //URL SEGURIDAD (s)
  it('URL SEGURIDAD (s)', () => {
    cy.url().should('contain', 'https')
  })
  // Caso 1
  it('Existe tilulo', () => {
    cy.title().should('include', 'Di Lucca To Go - Inicio')
  })
  // Caso 2
  it('Funcionalidad Banners ', () => {
    cy.get('.all-content-link').should('exist')
    cy.get('.all-content-link').should('have.length', 5)
  })
  //caso 3
  it('probando url del carrusel', () => {
    cy.get('.v-image > .v-responsive__content > a').each(
      ($el, index, $list) => {
        let url = $el.attr('href')
        if (url) {
          cy.visit(`${url}`)
          cy.wait(3000)
          cy.url().should('contain', `${url}`)
        }
      }
    )
  })
  //TyC footer
  it('TyC footer', () => {
    let year = new Date().getFullYear()
    cy.get('.title-links-footer > h4').should(
      'have.text',
      `© Di Lucca - ${year}`
    )
  })

  //Politicas de privacidad
  it('Politicas de privacidad', () => {
    cy.get('div:nth-child(2) > ul > div > li > a').each(($el, index, $list) => {
      let url = $el.attr('href')
      cy.visit(`${url}`)
      cy.wait(3000)
      cy.url().should('contain', `${url}`)
    })
    cy.visit('/')
  })
  //Registro e ingreso con redes sociales 
  it('Registro e ingreso con redes sociales ', () => {
    cy.get('div:nth-child(2) > ul > div > li > a').each(($el, index, $list) => {
      let url = $el.attr('href')
      cy.visit(`${url}`)
      cy.wait(3000)
      cy.url().should('contain', `${url}`)
    })
    cy.visit('/')
  })



  //caso 4
  it('login dilucca', () => {
    cy.get('.button-user-icon > .v-btn__content > .fas').click()
    cy.get('#list-item-238 > div > a').click()
    cy.get('#input-255').type('prueba2@gmail.com')
    cy.get('#input-258').type('xxxxx1')
    cy.get('.mt-1 > .v-btn__content').click()
    // cy.get('.btn-modal > .v-btn__content').click()
    cy.wait(2000)
    cy.get('.fa-ellipsis-v').click()
    cy.get('.logout-label').click()
  })

  // Iconos de redes sociales 
  it.only('Iconos de redes sociales ',()=>{
    cy.get('[href="https://www.facebook.com/diluccatogo"] > .fab').should('exist')
    cy.get('[href="https://www.instagram.com/di_lucca_togo/"] > .fab').should('exist')
    cy.get('[href="https://www.facebook.com/diluccatogo"] > .fab').click()
    cy.get('[href="https://www.instagram.com/di_lucca_togo/"] > .fab').click()
  })
})
