describe('Tipos de localizadores', () => {

  it('obtener localizador por medio de un tag', () => {
    cy.visit('/ingresar')
    cy.get('input') //va a traer todos los elementos, todas las etiquetas que sean inputs del cy.visit
  })

  it('obtener localizador por medio de un atributo', () => {
    //cy.visit('/ingresar') //ya no es necesario volver a hacer cy.visit ya que arriba se está haciendo
    cy.get('[id="input-75"]')
  })

  it('obtener localizador por medio de un id', () => {
    //cy.visit('/ingresar') //ya no es necesario volver a hacer cy.visit ya que arriba se está haciendo
    cy.get('#input-72')
  })
  it('usando cointains', () => {
    //cy.visit('/ingresar') //ya no es necesario volver a hacer cy.visit ya que arriba se está haciendo
    cy.contains('Inicio')
  })
  it('usando cointains buscando headers', () => {
    //cy.visit('/ingresar') //ya no es necesario volver a hacer cy.visit ya que arriba se está haciendo
    cy.contains('.mm-brand')
  })
  it('obtener localizador por medio de un label - form', () => {
    //cy.visit('/ingresar') //ya no es necesario volver a hacer cy.visit ya que arriba se está haciendo
    cy.get('form').find('label')
  })
})