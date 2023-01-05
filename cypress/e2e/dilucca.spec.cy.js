/// <references types="Cypress"/>
const icons = require('@cypress/icons')

describe('prueba de sitio web de Dilucca', () => {
  beforeEach(() => {
    cy.visit('/')
    let username = Cypress.env('username')
    let password = Cypress.env('password')
    cy.get('.button-user-icon > .v-btn__content > .fas').click()
    // cy.get('#list-item-238 > div > a').click()
    cy.get('#list-item-228 > .v-list-item__title > a').click()
    cy.get('#input-245').type(username)
    cy.get('#input-248').type(password)
    cy.get('.mt-1 > .v-btn__content').click()
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
  it('Registro e ingreso con redes sociales PT1 ', () => {
    cy.get('div:nth-child(2) > ul > div > li > a').each(($el, index, $list) => {
      let url = $el.attr('href')
      cy.visit(`${url}`)
      cy.wait(3000)
      cy.url().should('contain', `${url}`)
    })
    cy.visit('/')
  })

  //caso 4
  it('login dilucca PT1', () => {
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
  it('Iconos de redes sociales PT1 ', () => {
    let face = Cypress.env('urlFacebook')
    let insta = Cypress.env('urlInstagram')
    cy.get(`[href="${face}"] > .fab`).should('exist')
    cy.get(`[href="${insta}"] > .fab`).should('exist')
    cy.get(`[href="${face}"] > .fab`).click()
    cy.get(`[href="${insta}"] > .fab`).click()
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
  it('buscador o lupa PT1', () => {
    let find = Cypress.env('find')
    cy.get('.fade-search > .v-btn__content > .fas').click()
    cy.get('#input-227').type(`${find}{enter}`)
  })
  //TODO: parte 2
  //categorias
  it('categorias PT2', () => {
    cy.get(
      'div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div > div > div.v-responsive__content > a'
    ).should('have.length', 19)
    cy.get(
      'div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div > div > div.v-responsive__content > a'
    ).each(($el, index, $list) => {
      let url = $el.attr('href')
      if (url) {
        cy.visit(`${url}`)
        // cy.wait(3000)
        cy.url().should('contain', `${url}`)
        cy.get('.breadcumb-custom > ul > li').each(($el, index, $list) => {
          let migaPan = $el.text()
          if (migaPan && migaPan !== '>') {
            cy.log(migaPan)
            cy.get('.breadcumb-custom > ul > li').should('exist')
            cy.get('.pl-2 >').each(($el, index, $list) => {
              cy.get(
                `:nth-child(${
                  index + 1
                }) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > a > .name_product`
              ).should('exist')
              cy.get(
                `:nth-child(${
                  index + 1
                }) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > a > .mb-2`
              ).should('exist')
            })
          }
        })
      }
    })
    // cy.visit('/')
  })
  it('modifidores de cantidad', () => {
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(2) > .inner > .v-image > .v-responsive__sizer'
    ).click()
    cy.get('.add-or-next-step > .v-btn__content').click()
    cy.wait(4000)
    cy.get('.v-snack__content').should('be.visible')
    cy.go('back')
  })
  //TODO: parte 3
  it.only('menu de hamburguesa PT3', () => {
    cy.wait(3000)
    cy.get('.fa-ellipsis-v').click()
    // cy.log(cy.get('#input-187').should('exits'))
    // cy.get('#input-221').should('exits')
    cy.get('#input-221').type('pizza{enter}')
    cy.get('.fa-ellipsis-v').click()
    cy.get(':nth-child(1) > .main-subtitle').click()
    cy.get('.fa-ellipsis-v').click()
    cy.get('.logout-label').click()
  })
  //TODO: parte 4 
  
})
