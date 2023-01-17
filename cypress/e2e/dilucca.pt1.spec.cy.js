/// <references types="Cypress"/>
const icons = require('@cypress/icons')

describe('prueba de sitio web de Dilucca', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  //TODO:Parte 1
  //URL
  it('URL', () => {
    let urlComfirm = Cypress.env('urlComfirm')
    cy.url().should('contain', `${urlComfirm}`)
  })
  //URL SEGURIDAD (s)
  it('URL SEGURIDAD (s) PT1', () => {
    let ssl = Cypress.env('ssl')
    cy.url().should('contain', `${ssl}`)
  })
  // Caso 1
  it('Existe tilulo PT1', () => {
    let titleSite = Cypress.env('titleSite')
    cy.title().should('include', `${titleSite}`)
  })
  // Caso 2
  it('Funcionalidad Banners PT1 ', () => {
    let BannersCount = Cypress.env('BannersCount')
    cy.get('.all-content-link').should('exist')
    cy.get('.all-content-link').should('have.length', BannersCount)
  })
  //caso 3
  it('probando url del carrusel PT1', () => {
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
  it('TyC footer PT1', () => {
    let year = new Date().getFullYear()
    cy.get('.title-links-footer > h4').should(
      'have.text',
      `© Di Lucca - ${year}`
    )
  })

  //Politicas de privacidad
  it('Politicas de privacidad PT1', () => {
    cy.get('div:nth-child(2) > ul > div > li > a').each(($el, index, $list) => {
      let url = $el.attr('href')
      cy.visit(`${url}`)
      cy.wait(3000)
      cy.url().should('contain', `${url}`)
    })
    cy.visit('/')
  })
  //Registro e ingreso con redes sociales
  // it.only('Registro e ingreso con redes sociales PT1 ', () => {
  //   cy.get('div:nth-child(2) > ul > div > li > a').each(($el, index, $list) => {
  //     let url = $el.attr('href')
  //     cy.visit(`${url}`)
  //     cy.wait(3000)
  //     cy.url().should('contain', `${url}`)
  //   })
  //   cy.visit('/')
  // })

  // Iconos de redes sociales
  it('Iconos de redes sociales PT1 ', () => {
    let face = Cypress.env('urlFacebook')
    let insta = Cypress.env('urlInstagram')
    cy.get(`[href="${face}"] > .fab`).should('exist')
    cy.get(`[href="${insta}"] > .fab`).should('exist')
    // cy.get(`[href="${face}"] > .fab`).click()
    // cy.get(`[href="${insta}"] > .fab`).click()
  })

  //Logo
  it('Logo PT1', () => {
    cy.get('.router-main-logo > .v-image > .v-responsive__content').should(
      'exist'
    )
    cy.get('.router-main-logo > .v-image > .v-responsive__content').click()
  })
  //Favicon
  it('Favicon PT1', () => {
    let favicon = Cypress.env('favicon')
    icons.getPathToFavicon(favicon)
    icons.getPathToIcon(favicon)
    cy.log(icons.getPathToTray(favicon))
  })
  //servicios
  it('servicios PT1', () => {
    let adress = Cypress.env('adress')
    let neighborhood = Cypress.env('neighborhood')
    //domicilios
    cy.get('.underline > .v-btn__content').click()
    cy.get(
      '.col > .btn-bg-combobox-tservice > .v-btn__content > .title-type-service'
    ).click()
    // cy.get(
    //   ':nth-child(2) > .directions-card > .v-card__actions > .selected-button'
    // ).click()
    cy.get(
      '.col.col-12 > .row > .col-sm-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
    ).click()
    cy.get('#list-item-291-0 > .v-list-item__content').click()
    cy.get('#input-242').type(adress)
    cy.get('#input-245').type(neighborhood)
    cy.get(
      '.col.col-12 > .row > .hidden-sm-and-down > .trigger-search-wrapper > .search-desktop > .v-btn__content'
    ).click()
    cy.get('.continue > .v-btn__content').click()
    cy.wait(2000)
    cy.visit('/')
    //recoger en tienda
    cy.get('.underline > .v-btn__content').click()
    cy.get(
      '.col-12 > .btn-bg-combobox-tservice > .v-btn__content > .title-type-service'
    ).click()
    cy.get(
      '.mt-2 > .no-gutters > .col-sm-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
    ).click()
    cy.get('#list-item-291-0 > .v-list-item__content').click()
    cy.get(
      ':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > .v-select__selection'
    ).click()
    cy.get(
      '#list-item-306-0 > .v-list-item__content > .v-list-item__title'
    ).click()
    cy.get(
      '.mt-2 > .no-gutters > .hidden-sm-and-down > .trigger-search-wrapper > .search-desktop > .v-btn__content'
    ).click()
  })
  // buscador o lupa
  it('buscador o lupa PT1', () => {
    let find = Cypress.env('find')
    cy.get('.fade-search > .v-btn__content > .fas').click()
    cy.get('#input-222').type(`${find}{enter}`)
    cy.visit('/')
  })
})
