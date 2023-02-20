describe('prueba de sitio web de Dilucca', () => {
  let cat,
    pro,
    modifier,
    pan = [],
    pros = []
  beforeEach(() => {
    cy.visit('/')
  })
  it('count category', () => {
    // cy.get('body').then((body) => {
    // if (
    //   body.find('.v-responsive > .v-responsive__content > .inner').length > 0
    // ) {
    cy.get('.v-responsive > .v-responsive__content > .inner').each(
      ($el, list, $index) => {
        let URL = $el.attr('href')
        pan.push(URL)
      }
    )
    // }
    // })
  })
  it('choose category', () => {
    let min = 0
    let max = pan.length
    cat = Math.floor(Math.random() * (max - min + 1) + min)
    cat = parseInt(cat)
  })
  it('count product', () => {
    cy.log(pan[cat])
    cy.visit(`${pan[cat]}`)
    cy.wait(2000)
    cy.get('body').then((body) => {
      if (
        body.find(
          '.v-responsive > .v-responsive__content > .group-product-card > .row > .combobox-details > a'
        ).length > 0
      ) {
        cy.log('entre')
        cy.get(
          '.v-responsive > .v-responsive__content > .group-product-card > .row > .combobox-details > a'
        ).each(($el, index, $list) => {
          let URL = $el.attr('href')
          let xd = URL.slice(URL, URL.length - 1)
          if (xd === pan[cat]) {
            cy.get('body').then((body) => {
              cy.log(index, 'num')
              let listPro = body
                .find(
                  `:nth-child(${
                    index + 1
                  }) > .v-responsive > .v-responsive__content > .group-product-card > .row > .pt-2 > a > .name_product`
                )
                .text()

              cy.log(listPro, 'dentro del if')
              listPro = listPro.toLowerCase()
              listPro = listPro.trim()
              let hola = listPro.split(' ').join('-')
              let newUrl = xd.replace('categorias', 'productos')
              URL = `${newUrl}/${hola}`
              pros.push(URL)
            })
          } else {
            pros.push(URL)
          }
        })
      } else {
        cy.log('product not found')
      }
    })
  })
  it('choose product', () => {
    let min = 0
    cy.log(pros.length, 'data')
    let max = pros.length === 1 ? 0 : pros.length
    pro = Math.floor(Math.random() * (max - min + 1) + min)
    pro = pros.length === 0 ? 'not found product' : pro
  })

  it('choose modifier', () => {
    // cy.wait(5000)
    cy.visit(`${pan[cat]}`)
    cy.wait(2000)
    if (pro !== 'not found product') {
      cy.log(pros[pro])
      cy.visit(`${pros[pro]}`)
      cy.wait(2000)
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
    }
  })
  it('log', () => {
    cy.log(pan.length, 'categorys')
    cy.log(pros.length, 'product')
    cy.log(cat, 'cat')
    cy.log(pro, 'pro')
    cy.log(modifier, 'modi')
  })
  it('test 3', () => {
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
    cy.log(1000)
    // seleccion de categorias
    cy.get('.v-responsive > .v-responsive__content > .inner').should(
      'have.length',
      pan.length
    )
    //ir a categoria
    cy.visit(pan[cat])
    //miga de pan
    cy.get('.v-breadcrumbs').should('exist').should('be.visible')
    //nombre del producto
    if (pro !== 'not found product') {
      cy.get(
        `:nth-child(${pro}) > .v-responsive > .v-responsive__content > .group-product-card > .row > .combobox-details > a`
      )
        .should('exist')
        .should('be.visible')
      // boton de agregar
      cy.get(
        `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1 > .add-or-next-step`
      )
        .should('exist')
        .should('be.visible')
      cy.wait(1000)
      cy.log('hola')
      cy.get('body').then((body) => {
        if (
          body
            .find(
              `:nth-child(${pro}) > .product-category > :nth-child(2) > .group-product-card > .row > .pt-2 > .pt-1`
            )
            .text() != 'Agotado'
        ) {
          cy.log('entre')
          cy.visit(`${pros[pro]}`)
          cy.wait(2000)
          cy.get('body').then((body) => {
            if (body.find('.add-or-next-step > .v-btn__content').length > 0) {
              cy.log('pan')
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
              ).click({ multiple: true, force: true })
            }
          })
          cy.wait(2000)
          for (let i = 1; i <= modifier; i++) {
            cy.get('body').then((body) => {
              if (body.find(' #expansion-custom-header ').length > 0) {
                if (
                  body.find(
                    `:nth-child(${i})> [aria-expanded="true"] #expansion-custom-header `
                  ).length > 0
                ) {
                  cy.get(
                    '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
                  ).click({ multiple: true })
                } else {
                  cy.log('pan')
                  cy.get(`:nth-child(${i})> #expansion-custom-header`).click({
                    multiple: true,
                  })
                  cy.get(
                    '.v-expansion-panel--active > .v-expansion-panel-content > .v-expansion-panel-content__wrap > :nth-child(1) > .pl-4 > .row > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
                  ).click({ multiple: true })
                }
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
                if (
                  body.find('.add-or-next-step > .v-btn__content').length > 0
                ) {
                  cy.wait(1000)
                  cy.get('.add-or-next-step > .v-btn__content').click({
                    multiple: true,
                    force: true,
                  })
                } else if (
                  body.find(
                    '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .group-product-card-combo > .container > .bg-transparent > .combobox-details > .buttons-group > .add-or-next-step > .v-btn__content > .title'
                  ).length > 0
                ) {
                  cy.wait(1000)
                  cy.get(
                    '[style="transform-origin: center top 0px;"] > .v-stepper__wrapper > .group-product-card-combo > .container > .bg-transparent > .combobox-details > .buttons-group > .add-or-next-step > .v-btn__content > .title'
                  ).click()
                }
              })
            }
          }
        }
      })
      // cy.wait(3000)
      // cy.visit('/')
    }
  })
})
