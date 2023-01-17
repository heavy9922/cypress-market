describe('prueba de sitio web de Dilucca', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Carrito PT4', () => {
    //login
    let users = Cypress.env('username')
    let passwd = Cypress.env('password')
    cy.get('.button-user-icon > .v-btn__content > .fas').click()
    cy.get(' :nth-child(1) >.v-list-item__title > a').click()
    cy.get('#input-238').type(users)
    cy.get('#input-241').type(passwd)
    cy.get('.mt-1 > .v-btn__content').click()
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

    cy.wait(6000)
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
    // para que funcione la 5ta parte hay que ejecutar la 4ta parte
    // TODO:parte 5
    cy.log('inicio de la parte 5')

    cy.get('.is-active').click()
    cy.get(
      '.mt-2 > .no-gutters > .col-sm-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
    ).click()
    cy.get(
      ':nth-child(1)  > .v-list-item__content > .v-list-item__title '
    ).click()
    cy.get(
      '.mt-2 > .no-gutters > .hidden-sm-and-down > .trigger-search-wrapper > .search-desktop'
    ).click()
    cy.get('.relative > .car-container > .fas').click()
    cy.get(':nth-child(2) > .continue').click()
    cy.get(
      ':nth-child(4) > .v-stepper__wrapper > .card-body-step-content > .v-card__text > .v-form > .mt-4 > .blue-linear-gradient > .v-btn__content'
    ).click()
    cy.get('body').then((body) => {
      if (
        body.find(
          '[aria-labelledby="input-600"] > :nth-child(2) > .py-0 > .v-radio > .v-label'
        ).length > 0
      ) {
        cy.get(
          '[aria-labelledby="input-600"] > :nth-child(2) > .py-0 > .v-radio > .v-label'
        ).click()
      } else {
        cy.get(
          '[aria-labelledby="input-605"] > :nth-child(2) > .py-0 > .v-radio > .v-label'
        ).click()
      }
    })
    cy.get(
      ':nth-child(2) > .v-radio > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      '.sub-radio > :nth-child(1) > [style="height: auto;"] > .v-input--radio-group__input > :nth-child(2) > .py-0 > .v-input > .v-input__control > .v-input__slot'
    ).type('121700')
    cy.get(
      '.electronic-bill > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    cy.get(
      '.electronic-bill > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > :nth-child(1) > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click()
    //factura electronica
    let address = Cypress.env('adress')
    cy.get(':nth-child(3) > :nth-child(1) > .v-input').type('yeferson')
    cy.get(':nth-child(3) > :nth-child(2) > .v-input').type('Bogota')
    cy.get(':nth-child(3) > :nth-child(3) > .v-input').type(address)
    cy.get(':nth-child(3) > :nth-child(4) > .v-input').type('3195393068')
    cy.get(':nth-child(3) > :nth-child(5)').click()
    cy.get(':nth-child(1) >.v-list-item__content').click()
    cy.get(':nth-child(6) > .v-input').type('1033815760')
    cy.get(':nth-child(7) > .v-input').type('yeferson.castiblanco@marketmix.com.co')
    cy.get(
      '.last-step-content > .v-stepper__wrapper > .card-body-step-content > .v-card__text > .v-form > .mt-4 > .blue-linear-gradient > .v-btn__content'
    ).click()
  })
})
