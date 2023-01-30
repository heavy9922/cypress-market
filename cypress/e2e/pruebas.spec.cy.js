describe('Find length and store in variable for usage in different tests', () => {
  let categorys
  let cat = 0
  let cat2 = 0
  let cat3 = 0
  let product
  let product2
  let product3
  let pro = 0
  let pro2 = 0
  let pro3 = 0
  let modifier = 1
  let modifier2 = 0
  let modifier3 = 0
  beforeEach(() => {
    cy.visit('/')
  })

  it('count categories', () => {
    cy.get('body')
      .find(
        `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div`
      )
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
  it('choose category 2', () => {
    let min = 1
    let max = categorys
    cat2 = Math.floor(Math.random() * (max - min + 1) + min)
    cat2 = parseInt(cat2)
  })
  it('choose category 3', () => {
    let min = 1
    let max = categorys
    cat3 = Math.floor(Math.random() * (max - min + 1) + min)
    cat3 = parseInt(cat3)
  })
  it('choose product', () => {
    cy.wait(1000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat})`
    ).click()
    cy.get('body')
      .find('.pl-2>')
      .then(($value) => {
        product = $value.length
      })
    product = parseInt(product)
  })
  it('choose product 2', () => {
    cy.wait(1000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat2})`
    ).click()
    cy.get('body')
      .find('.pl-2>')
      .then(($value) => {
        product2 = $value.length
      })
    product2 = parseInt(product2)
  })
  it('choose product 3', () => {
    cy.wait(1000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat3})`
    ).click()
    cy.get('body')
      .find('.pl-2>')
      .then(($value) => {
        product3 = $value.length
      })
    product3 = parseInt(product3)
  })
  it('choose product alt', () => {
    let min = 1
    let max = product
    pro = Math.floor(Math.random() * (max - min + 1) + min)
    pro = parseInt(pro)
  })
  it('choose product alt 2', () => {
    let min = 1
    let max = product2
    pro2 = Math.floor(Math.random() * (max - min + 1) + min)
    pro2 = parseInt(pro2)
  })
  it('choose product alt 3', () => {
    let min = 1
    let max = product3
    pro3 = Math.floor(Math.random() * (max - min + 1) + min)
    pro3 = parseInt(pro3)
  })
  it('choose modifier', () => {
    // cy.wait(5000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat})`
    ).click()
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
  it('choose modifier 2', () => {
    // cy.wait(5000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat2})`
    ).click()
    cy.log(
      `:nth-child(${pro2}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    )
    cy.get(
      `:nth-child(${pro2}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    cy.get('body').then((body) => {
      if (body.find(' #expansion-custom-header ').length > 0) {
        cy.log('1')
        cy.get('body')
          .find(' #expansion-custom-header ')
          .then(($value) => {
            modifier2 = $value.length
          })
      } else if (
        body.find('.combobox-details > :nth-child(3) > :nth-child(2) >')
          .length > 0
      ) {
        cy.log('2')
        cy.get('body')
          .find('.combobox-details > :nth-child(3) > :nth-child(2) >')
          .then(($value) => {
            modifier2 = $value.length
          })
      } else {
        cy.log('not found modifier')
      }
    })
  })
  it('choose modifier 3', () => {
    // cy.wait(5000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat3})`
    ).click()
    cy.get(
      `:nth-child(${pro3}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    cy.get('body').then((body) => {
      if (body.find(' #expansion-custom-header ').length > 0) {
        cy.log('1')
        cy.get('body')
          .find(' #expansion-custom-header ')
          .then(($value) => {
            modifier3 = $value.length
          })
      } else if (
        body.find('.combobox-details > :nth-child(3) > :nth-child(2) >')
          .length > 0
      ) {
        cy.log('2')
        cy.get('body')
          .find('.combobox-details > :nth-child(3) > :nth-child(2) >')
          .then(($value) => {
            modifier3 = $value.length
          })
      } else {
        cy.log('not found modifier')
      }
    })
  })
  it('log', () => {
    cy.log(categorys, 'categorys')
    cy.log(product, 'product')
    cy.log(product2, 'product2')
    cy.log(product3, 'product3')
    cy.log(cat, 'cat')
    cy.log(cat2, 'cat2')
    cy.log(cat3, 'cat3')
    cy.log(pro, 'pro')
    cy.log(pro2, 'pro2')
    cy.log(pro3, 'pro3')
    cy.log(modifier, 'modi')
    cy.log(modifier2, 'modi2')
    cy.log(modifier3, 'modi3')
  })
  it('page white', () => {
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
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat})`
    ).click()
    cy.get(
      `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    for (let i = 1; i <= modifier; i++) {
      cy.get('body').then((body) => {
        if (body.find(' #expansion-custom-header ').length > 0) {
          cy.log('pan')
          cy.get(`:nth-child(${i})> #expansion-custom-header`).click({
            multiple: true,
          })
          cy.get(
            '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
          ).click({ multiple: true })
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
    cy.wait(2000)
    cy.visit('/')
    //segundo producto
    cy.wait(3000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat2})`
    ).click()
    cy.get(
      `:nth-child(${pro2}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    for (let i = 1; i <= modifier2; i++) {
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
              i < modifier2
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
      if (modifier2 == i) {
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
    cy.wait(2000)
    cy.visit('/')
    //menu hamburguesa
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
    // cy.get(
    //   '.combobox-details > .v-input > .v-input__control > .v-input__slot'
    // ).type('sin fresas')
    cy.wait(2000)
    cy.get('.add-or-next-step > .v-btn__content').click()
    cy.wait(1000)
    cy.get('.relative > .car-container > .fas').click()
    cy.get(':nth-child(1) > .continue').click()
    //tercer producto
    cy.wait(3000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat3})`
    ).click()
    cy.get(
      `:nth-child(${pro3}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    for (let i = 1; i <= modifier3; i++) {
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
              i < modifier3
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
      if (modifier3 == i) {
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
    //borrado de productos en el carrito
    cy.wait(2000)
    cy.visit('/')
    cy.get('.relative > .car-container > .fas').click()
    cy.get('.pt-2').click()
    cy.get('.see-products').click()
    // agregar productos al carrito
    //primer producto
    cy.wait(3000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat})`
    ).click()
    cy.get(
      `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    for (let i = 1; i <= modifier; i++) {
      cy.get('body').then((body) => {
        if (body.find(' #expansion-custom-header ').length > 0) {
          cy.log('pan')
          cy.get(`:nth-child(${i})> #expansion-custom-header`).click({
            multiple: true,
          })
          cy.get(
            '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
          ).click({ multiple: true })
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
    cy.wait(2000)
    cy.visit('/')
    //segundo producto
    cy.wait(3000)
    cy.get(
      `#app > div > main > div > div > div.container.pa-0.container-category-component.container--fluid.with-banners > div > div > div > div:nth-child(${cat2})`
    ).click()
    cy.get(
      `:nth-child(${pro2}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step > .v-btn__content`
    ).click()
    cy.wait(3000)
    for (let i = 1; i <= modifier2; i++) {
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
              i < modifier2
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
      if (modifier2 == i) {
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
    cy.wait(2000)
    cy.visit('/')
  })
})
