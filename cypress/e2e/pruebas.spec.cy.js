describe('Find length and store in variable for usage in different tests', () => {
  let categorys
  let cat
  let product
  let pro = 1
  let modifier = 0
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
    cy.wait(5000)
    cy.get(`.row > :nth-child(${cat})`).click()
    cy.get(
      `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.get('body')
      .find(' #expansion-custom-header ')
      .then(($value) => {
        modifier = $value.length
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

    for (let i = 1; i <= modifier; i++) {
      cy.log(i, 'i')
      cy.get(`:nth-child(${i})> #expansion-custom-header`).click()
      cy.get(
        '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
      ).click()
    }
  })
})
