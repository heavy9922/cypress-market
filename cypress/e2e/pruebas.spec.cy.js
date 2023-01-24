describe('Find length and store in variable for usage in different tests', () => {
  let categorys
  let cat 
  let product
  let pro = 1
  let modifier 
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

  it('page white', () => {
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
            if (body.find(' #list-701').length > 0 && i < modifier) {
              cy.get('#list-701 > :nth-child(1)').click()
            } else if (body.find('#list-707'.length > 0)) {
              cy.get('#list-707 > :nth-child(1)').click()
            }
          })
        } else {
          cy.log('not found modifier')
        }
      })
    }
    cy.get(
      '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .group-product-card-combo > .container > .bg-transparent > .combobox-details > .buttons-group > .add-or-next-step > .v-btn__content > .title'
    ).click()
  })
})
