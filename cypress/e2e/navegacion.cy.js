describe('Navegacion', () => {

  it('navegar a nuestro primer sitio', () => {
    cy.visit('https://www.diluccatogo.com//')
  })

  it('recargar la pagina', () => {
    cy.reload()
  })

  it('recarga sin caché', () => {
    cy.reload(true) //se coloca true para que elimine el caché, y recargue sin este)
  })

  it.only('back', () => { //only solo para ejecutar este test y no los tres anteriores
    cy.visit('https://www.diluccatogo.com/')
    cy.visit('https://www.diluccatogo.com/categorias/sangria')
    cy.go('back')
    cy.go('forward')
  })
})
