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
  //TODO: parte 2
  //categorias
  // it('categorias PT2', () => {
  //   cy.get(
  //     'div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div > div > div.v-responsive__content > a'
  //   ).should('have.length', 19)
  //   cy.get(
  //     'div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div > div > div.v-responsive__content > a'
  //   ).each(($el, index, $list) => {
  //     let url = $el.attr('href')
  //     if (url) {
  //       cy.visit(`${url}`)
  //       // cy.wait(3000)
  //       cy.url().should('contain', `${url}`)
  //       cy.get('.breadcumb-custom > ul > li').each(($el, index, $list) => {
  //         let migaPan = $el.text()
  //         if (migaPan && migaPan !== '>') {
  //           cy.log(migaPan)
  //           cy.get('.breadcumb-custom > ul > li').should('exist')
  //           cy.get('.pl-2 >').each(($el, index, $list) => {
  //             cy.get(
  //               `:nth-child(${
  //                 index + 1
  //               }) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > a > .name_product`
  //             ).should('exist')
  //             cy.get(
  //               `:nth-child(${
  //                 index + 1
  //               }) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > a > .mb-2`
  //             ).should('exist')
  //           })
  //         }
  //       })
  //     }
  //   })
  //   cy.visit('/')
  // })
  // it.only('modifidores de cantidad', () => {
  //   cy.get(
  //     ':nth-child(1) > :nth-child(1) > :nth-child(2) > .inner > .v-image > .v-responsive__sizer'
  //   ).click()
  //   cy.get('.add-or-next-step > .v-btn__content').click()
  //   cy.wait(4000)
  //   cy.get('.v-snack__content').should('be.visible')
  //   cy.go('back')
  // })
  //TODO: parte 3
  it('menu de hamburguesa PT3', () => {
    let username = Cypress.env('username')
    let password = Cypress.env('password')
    cy.get('.button-user-icon > .v-btn__content > .fas').click()
    // cy.get('#list-item-238 > div > a').click()
    cy.get('#list-item-221').click()
    cy.get('#input-238').type(username)
    cy.get('#input-241').type(password)
    cy.get('.mt-1 > .v-btn__content').click()
    cy.wait(3000)
    cy.get('.fa-ellipsis-v').click()
    // cy.log(cy.get('#input-187').should('exits'))
    // cy.get('#input-221').should('exits')
    cy.get('#input-214').type('pizza{enter}')
    cy.get('.fa-ellipsis-v').click()
    cy.get(':nth-child(1) > .main-subtitle').click()
    cy.get('.fa-ellipsis-v').click()
    cy.get('.logout-label').click()
  })
  //TODO: parte 4
  it('Carrito PT4', () => {
    //login
    let users = Cypress.env('username')
    let passwd = Cypress.env('password')
    cy.get('.button-user-icon > .v-btn__content > .fas').click()
    cy.get('#list-item-221 > .v-list-item__title').click()
    cy.get('#input-238').type(users)
    cy.get('#input-241').type(passwd)
    cy.get('.mt-1 > .v-btn__content').click()
    // //recoger en tienda
    // cy.get('.underline > .v-btn__content').click()
    // cy.get('.col-12 > .btn-bg-combobox-tservice > .v-btn__content').click()
    // cy.get(
    //   '.mt-2 > .no-gutters > .col-sm-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
    // ).click()
    // cy.get('#list-item-450-0 > .v-list-item__content').click()
    // cy.get(
    //   '.mt-2 > .no-gutters > .hidden-sm-and-down > .trigger-search-wrapper > .search-desktop > .v-btn__content'
    // ).click()
    //primer producto
    cy.get(
      ':nth-child(3) > :nth-child(1) > :nth-child(2) > .inner > .v-image > .v-responsive__sizer'
    ).click()

    cy.get(
      ':nth-child(1) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content'
    ).click()
    cy.get(
      ':nth-child(1) > #expansion-custom-header > .v-expansion-panel-header__icon > .v-icon'
    ).click()
    cy.get(
      ':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(':nth-child(2) > #expansion-custom-header').click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(3) > #expansion-custom-header > .title-modifiers'
    ).click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(4) > #expansion-custom-header > .title-modifiers'
    ).click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(5) > #expansion-custom-header > .title-modifiers'
    ).click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(5) > #expansion-custom-header > .title-modifiers'
    ).click()
    // cy.get('#input-833').type('sin queso')
    cy.get('.add-or-next-step > .v-btn__content').click()

    cy.wait(4000)
    cy.visit('/')
    //segundo producto
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(2) > .inner > .v-image > .v-responsive__sizer'
    ).click()
    cy.get('.add-or-next-step').click()
    cy.wait(4000)
    cy.get('.btn-more > .v-btn__content').click()
    cy.get('.btn-more > .v-btn__content').click()
    cy.get('.btn-more > .v-btn__content').click()
    cy.get('.btn-more > .v-btn__content').click()
    cy.wait(1000)
    cy.visit('/')
    cy.get('.relative > .car-container > .fas').click()
    cy.get(
      ':nth-child(2) > .container > .row > .flex-wrap > [sm="2"] > .v-btn__content'
    ).click()
    cy.get(
      ':nth-child(2) > .container > .row > .flex-wrap > [sm="2"] > .v-btn__content'
    ).click()
    cy.get(
      ':nth-child(1) > .container > .row > .flex-wrap > [sm2=""] > .v-btn__content'
    ).click()
    cy.get(
      ':nth-child(1) > .container > .row > .flex-wrap > [sm2=""] > .v-btn__content'
    ).click()
    cy.get(
      ':nth-child(1) > .container > .row > .footer-car.col-7 > [style="background-color: rgb(61, 76, 111); border-color: rgb(61, 76, 111);"] > .v-btn__content > .far'
    ).click()
    cy.get('#input-358').type('sin fresas')
    cy.get('.add-or-next-step > .v-btn__content').click()
    cy.wait(1000)
    cy.get('.relative > .car-container > .fas').click()
    cy.get(':nth-child(1) > .continue').click()
    cy.get(
      ':nth-child(6) > :nth-child(1) > :nth-child(2) > .inner > .v-image > .v-responsive__sizer'
    ).click()
    cy.get(
      ':nth-child(1) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content'
    ).click()
    cy.visit('/')
    cy.get('.relative > .car-container > .fas').click()
    cy.get('.pt-2').click()
    cy.get('.see-products').click()
    cy.get(
      ':nth-child(3) > :nth-child(1) > :nth-child(2) > .inner > .v-image > .v-responsive__sizer'
    ).click()

    cy.get(
      ':nth-child(1) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content'
    ).click()
    cy.get(
      ':nth-child(1) > #expansion-custom-header > .v-expansion-panel-header__icon > .v-icon'
    ).click()
    cy.get(
      ':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(':nth-child(2) > #expansion-custom-header').click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(3) > #expansion-custom-header > .title-modifiers'
    ).click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(4) > #expansion-custom-header > .title-modifiers'
    ).click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(5) > #expansion-custom-header > .title-modifiers'
    ).click()
    cy.get(
      '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      ':nth-child(5) > #expansion-custom-header > .title-modifiers'
    ).click()
    // cy.get('#input-833').type('sin queso')
    cy.get('.add-or-next-step > .v-btn__content').click()

    cy.wait(4000)
    cy.visit('/')
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(2) > .inner > .v-image > .v-responsive__sizer'
    ).click()
    cy.get('.add-or-next-step').click()
    cy.wait(2000)
    cy.visit('/')
    cy.get('.relative > .car-container > .fas').click()
    cy.get(':nth-child(2) > .continue').click()
  })

  // it('login',()=>{
  //   let users = Cypress.env('username')
  //   let passwd = Cypress.env('password')
  //   cy.get('.button-user-icon > .v-btn__content > .fas').click()
  //   cy.get('#list-item-402 > .v-list-item__title > a').click()
  //   cy.get('#input-446').type(users)
  //   cy.get('#input-449').type(passwd)
  //   cy.get('.mt-1 > .v-btn__content').click()
  // })
})
