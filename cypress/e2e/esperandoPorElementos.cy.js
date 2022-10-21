describe('Esperando por elementos', {browser:'chrome'},() => {
	beforeEach(() => {
		cy.visit('https://www-takifua1.vercel.app/')
	})
	it('Espera por un tiempo definido', () => {
		//Mala practica casi nunca debera de usarse
		cy.wait(5000)
	})

	it('Espera por un elemento', () => {
		//el tiempo por default es de 4 segundos
		cy.get('.v-btn__content')
	})

	it('Espera por un elemento', () => {
		//a pesar de que el tiempo es el mismo , es un timeout silo encuentra antes seguirá avanzando no esperara los 6 segundos siempre
		cy.get('.v-btn__content', { timeout: 6000 })
	})

	it('Espera por un elemento y hacer una asersion', () => {
		//a pesar de que el tiempo es el mismo , es un timeout silo encuentra antes seguirá avanzando no esperara lso 5 segundos siempre
		// esto  modifica el timeout the todas los comandos  incluyendo el should
		cy.get('.v-btn__content', { timeout: 5000 }).should('be.visible')
		// esto  no sirve  ,recuerda que hay que reintentar el comando con las sersiones no solo las aserciones
		cy.get('.v-btn__content').should('be.visible', { timeout: 5000 })
		// https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Applying-Timeouts
	})
})

describe('Esperando por elementos', () => {
	beforeEach(() => {
		cy.visit('https://www-takifua1.vercel.app/')
	})

	it('Deshabilitando el retry', () => {
		// lo deshabilitamos
		cy.get('.menu-inline', { timeout: 5000 })
		cy.get('.menu-inline', { timeout: 0 })
	})
})