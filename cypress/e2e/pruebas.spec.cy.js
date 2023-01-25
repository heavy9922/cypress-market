describe('Find length and store in variable for usage in different tests', () => {
  let categorys
  let cat = 6
  let product
  let pro = 6
  let modifier = 2
  beforeEach(() => {
    cy.visit('/')
  })

  it('count categories', () => {
    cy.get('body')
      .find('.row-category-slider > .pt-0 > .row >')
      .then(($value) => {
        categorys = $value.length
      })
    categorys = parseInt(categorys)
  })
  it('choose category', () => {
    let min = 1
    let max = categorys
    cat = Math.floor(Math.random() * (max - min + 1) + min)
    cat = parseInt(cat)
  })
  it('choose product', () => {
    cy.wait(5000)
    cy.get(`.row > :nth-child(${cat})`).click()
    cy.get('body')
      .find('.pl-2>')
      .then(($value) => {
        product = $value.length
      })
    product = parseInt(product)
  })
  it('choose product alt', () => {
    let min = 1
    let max = product
    pro = Math.floor(Math.random() * (max - min + 1) + min)
    pro = parseInt(pro)
  })
  it('choose modifier', () => {
    // cy.wait(5000)
    cy.get(`.row > :nth-child(${cat})`).click()
    cy.log(
      `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    )
    cy.get(
      `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    cy.get('body').then((body) => {
      if (body.find(' #expansion-custom-header ').length > 0) {
        cy.log('1')
        cy.get('body')
          .find(' #expansion-custom-header ')
          .then(($value) => {
            modifier = $value.length
          })
      } else if (
        body.find('.combobox-details > :nth-child(3) > :nth-child(2) >')
          .length > 0
      ) {
        cy.log('2')
        cy.get('body')
          .find('.combobox-details > :nth-child(3) > :nth-child(2) >')
          .then(($value) => {
            modifier = $value.length
          })
      } else {
        cy.log('not found modifier')
      }
    })
  })
  it('log', () => {
    cy.log(categorys, 'categorys')
    cy.log(product, 'product')
    cy.log(pro, 'pro')
    cy.log(cat, 'cat')
    cy.log(modifier, 'modi')
  })
  it.only('page white', () => {
    cy.wait(3000)
    //recoger en tienda
    cy.get('.underline > .v-btn__content').click()
    cy.get(
      '.col-12 > .btn-bg-combobox-tservice > .v-btn__content > .title-type-service'
    ).click()
    cy.get(
      '.mt-2 > .no-gutters > .col-sm-3 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
    ).click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .v-list-item__content').click()
    cy.get(
      '.mt-2 > .no-gutters > .hidden-sm-and-down > .trigger-search-wrapper > .search-desktop > .v-btn__content'
    ).click()
    //primer producto
    cy.wait(3000)
    cy.get(`.row > :nth-child(${cat})`).click()
    cy.get(
      `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    for (let i = 1; i <= modifier; i++) {
      cy.get('body').then((body) => {
        if (body.find(' #expansion-custom-header ').length > 0) {
          cy.log('pan')
          cy.get(`:nth-child(${i})> #expansion-custom-header`).click()
          cy.get(
            '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
          ).click()
          // }
        } else if (
          body.find('.combobox-details > :nth-child(3) > :nth-child(2) >')
            .length > 0
        ) {
          cy.log('2')
          cy.get(
            `.combobox-details > :nth-child(3) > :nth-child(2) > :nth-child(${i})`
          ).click()
          cy.get('body').then((body) => {
            if (
              body.find(
                `#app > div.v-application--wrap > main > div > div > div > div.container.pa-0.container-products-screen.container--fluid > div:nth-child(3) > div > div.row.bg-transparent > div > div > div > div:nth-child(1) > div > div > div > div > div.combobox-details.detail-card.pl-7.pr-7.pt-7.col-sm-6.col-md-6.col-lg-6.col-xl-6.col-12 > div:nth-child(3) > div:nth-child(2) > :nth-child(${i})`
              ).length > 0 &&
              i < modifier
            ) {
              cy.get(`.v-list > :nth-child(1)`).click({ force: true })
            } else if (body.find('#list-707'.length > 0)) {
              cy.get('.v-list > :nth-child(1)').click({
                multiple: true,
                force: true,
              })
            }
          })
        } else {
          cy.log('not found modifier')
        }
      })
      if (modifier == i) {
        cy.get('body').then((body) => {
          if (body.find('.add-or-next-step > .v-btn__content').length > 0) {
            cy.get('.add-or-next-step > .v-btn__content').click({
              multiple: true,
              force: true,
            })
          } else if (
            body.find(
              '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .group-product-card-combo > .container > .bg-transparent > .combobox-details > .buttons-group > .add-or-next-step > .v-btn__content > .title'
            ).length > 0
          ) {
            cy.get(
              '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .group-product-card-combo > .container > .bg-transparent > .combobox-details > .buttons-group > .add-or-next-step > .v-btn__content > .title'
            ).click()
          }
        })
      }
    }
  })
})
