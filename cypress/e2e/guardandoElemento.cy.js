describe('Guardando elementos', () => {
	it('Repeticion', () => {
		cy.visit('/automation-practice-form')
		cy.get('input[placeholder="First Name"]').parents('form').find('label')
		cy.get('input[placeholder="First Name"]').parents('form').find('input')
		cy.get('input[placeholder="First Name"]').parents('form').find('div')
	})

	it.only('como se hace en cypress', () => {
		cy.visit('/ingresar')
		cy.get('input[placeholder=" "]')
			.parents('form')
			.then((form) => {
				const inputs = form.find('input')
				const divs = form.find('div')
				const labels = form.find('label')

				//usando debugger, es necesario abrir las devtools y debe de ir dentro del then sino probablemente no funcione como deberia

				//cypress log
				cy.log(inputs)
				//cypress task
				cy.task('log', inputs.length)

				expect(inputs.length).to.equal(3)
			/*expect(divs.length).to.equal(70)
				expect(labels.length).to.equal(16) */
				// Si queremos que este elemento de Jquery se vuelva un elemento de cypress debemos de usar wrap
				cy.wrap(inputs).should('have.length', 3)
			})
		cy.get('input[placeholder=" "]').then(console.log)
		//cypress pausa
		//cy.pause()
		// Se muestra en la consola el resultado de la tarea
		cy.get('input[placeholder=" "]').debug()

	})

})