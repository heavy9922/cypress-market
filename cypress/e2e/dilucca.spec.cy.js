/// <references types="Cypress"/>
const icons = require('@cypress/icons')

describe('prueba de sitio web de Dilucca', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  //URL
  it('URL', () => {
    let urlComfirm = Cypress.env('urlComfirm')
    cy.url().should('contain', `${urlComfirm}`)
  })
  //URL SEGURIDAD (s)
  it('URL SEGURIDAD (s)', () => {
    let ssl = Cypress.env('ssl')
    cy.url().should('contain', `${ssl}`)
  })
  // Caso 1
  it('Existe tilulo', () => {
    let titleSite = Cypress.env('titleSite')
    cy.title().should('include', `${titleSite}`)
  })
  // Caso 2
  it('Funcionalidad Banners ', () => {
    let BannersCount = Cypress.env('BannersCount')
    cy.get('.all-content-link').should('exist')
    cy.get('.all-content-link').should('have.length', BannersCount)
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
    let username = Cypress.env('username')
    let password = Cypress.env('password')
    cy.get('.button-user-icon > .v-btn__content > .fas').click()
    // cy.get('#list-item-238 > div > a').click()
    cy.get('#list-item-226 > .v-list-item__title > a').click()
    cy.get('#input-243').type(username)
    cy.get('#input-246').type(password)
    cy.get('.mt-1 > .v-btn__content').click()
    // cy.get('.btn-modal > .v-btn__content').click()
    cy.wait(2000)
    cy.get('.fa-ellipsis-v').click()
    cy.get('.logout-label').click()
  })

  // Iconos de redes sociales
  it('Iconos de redes sociales ', () => {
    let face = Cypress.env('urlFacebook')
    let insta = Cypress.env('urlInstagram')
    cy.get(`[href="${face}"] > .fab`).should('exist')
    cy.get(`[href="${insta}"] > .fab`).should('exist')
    cy.get(`[href="${face}"] > .fab`).click()
    cy.get(`[href="${insta}"] > .fab`).click()
  })

  //Logo
  it('Logo', () => {
    cy.get('.router-main-logo > .v-image > .v-responsive__content').should(
      'exist'
    )
    cy.get('.router-main-logo > .v-image > .v-responsive__content').click()
  })
  //Favicon
  it('Favicon', () => {
    let favicon = Cypress.env('favicon')
    icons.getPathToFavicon(favicon)
    icons.getPathToIcon(favicon)
    cy.log(icons.getPathToTray(favicon))
  })
  //servicios
  it.only('servicios', () => {
    let adress = Cypress.env('adress')
    let neighborhood = Cypress.env('neighborhood')
    //domicilios
    cy.get('.underline > .v-btn__content').click()
    cy.get(
      '.col > .btn-bg-combobox-tservice > .v-btn__content > .title-type-service'
    ).click()
    cy.get(
      '.col.col-12 > .row > .col-sm-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
    ).click()
    cy.get('.v-list-item__title').click()
    cy.get('#input-247').type(adress)
    cy.get('#input-250').type(neighborhood)
    cy.get(
      '.col.col-12 > .row > .hidden-sm-and-down > .trigger-search-wrapper > .search-desktop > .v-btn__content'
    ).click()
    cy.get('.continue > .v-btn__content').click()
    // cy.wait(2000)
    cy.visit('/')
    //recoger en tienda
    cy.get('.underline > .v-btn__content').click()
    cy.get(
      '.col-12 > .btn-bg-combobox-tservice > .v-btn__content > .title-type-service'
    ).click()
    cy.get(
      '.mt-2 > .no-gutters > .col-sm-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
    ).click()
    cy.get('.v-list-item__title').click()
    cy.get(
      ':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections > .v-select__selection'
    ).click()
    cy.get(
      '#list-item-310-3 > .v-list-item__content > .v-list-item__title'
    ).click()
    cy.get(
      '.mt-2 > .no-gutters > .hidden-sm-and-down > .trigger-search-wrapper > .search-desktop > .v-btn__content'
    ).click()
  })
  // buscador o lupa
  it('buscador o lupa', () => {
    let find = Cypress.env('find')
    cy.get('.fade-search > .v-btn__content > .fas').click()
    cy.get('#input-227').type(`${find}{enter}`)
  })
})
