describe('Aserciones', () => {
	// beforeEach(() => {
	// 	cy.visit('/automation-practice-form')
	// })
	before(() => { //solo si se quiere correr antes de los dos bloques, ES DECIR ANTES DE QUE CORRA LOS TEST (IT)
		cy.visit('/ingresar')
	})
	/* afterEach(() => { //para que despues de cada test, regrese a la página principal
		cy.reload()
	})
	after(() => { // si quiero continuar con otro bloque en otra url
		cy.visit('/')
	})
 */
	it('Asercion', () => {
		//cy.visit('/ingresar')
		cy.url().should('include', 'diluccatogo.com') //valida que la url de visit se encuentre de diluccatogo.com
		cy.get('[name="username"]').should('be.visible').and('have.attr', 'placeholder', ' ') //valida que este campo sea visible y se se espera que tenga el atributo 'placeholder' con el valor 'First Name'
	})

	it('Aserciones 2', () => {
		//cy.visit('/ingresar')
		cy.url().should('include', 'diluccatogo.com') //valida que la url de visit se encuentre de diluccatogo.com
		cy.get('[name="username"]').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', ' ')
		})
	})

	it('Aserciones 3', () => {
		//cy.visit('/ingresar')
		cy.get('[name="username"]').then((element) => {
			assert.equal(element.attr('placeholder'), ' ')
		})
	})
})

describe('Segundo Bloque', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Aserciones', () => {
		cy.url().should('include', 'diluccatogo.com')

		cy.get('#firstName')
			.should('be.visible')
			.should('have.attr', 'placeholder', 'First Name')

		cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
	})
})