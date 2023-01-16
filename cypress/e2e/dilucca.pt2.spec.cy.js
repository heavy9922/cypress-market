describe('prueba de sitio web de Dilucca', () => {
  beforeEach(() => {
    cy.visit('/')
  })
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
    cy.visit('/')
  })
})
