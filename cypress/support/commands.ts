// cypress/commands.ts
export interface I_signInWithUi {
	email: string,
	password: string
}

Cypress.Commands.add('signInWithUI', ({email, password}: I_signInWithUi) => {

	cy.get('[data-cy="navigation-sign-in-btn"]')
		.should('be.visible')
		.click()

	cy.get('#data-cy="email-input')
		.should('be.visible')
		.type(email)
		.and('have.value', email)

	cy.get('data-cy="password-input')
		.should('be.visible')
		.type(password)

	// Click on signin button
	cy.get('[data-cy=sign-in-btn]')
		.should('be.visible')
		.click()

	cy.wait('@signinUser').then(xhr => {
		cy.log(`traceId: ${xhr.request.headers["x-trace-id"]}`);
		expect(xhr.response.statusCode).to.eq(200);
	});
});