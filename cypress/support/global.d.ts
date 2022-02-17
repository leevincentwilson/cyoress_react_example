export interface I_signInWithUi {
	email: string,
	password: string
}

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Directly Sign In and Update Redux State
			 *
			 * @param {string} email - User email address.
			 * @param {string} password - User password
			 *
			 * @example
			 *
			 * cy.signInPure('test@trinnylondon.com','test@123');
			 *
			 */
			signInWithUi({email: password}: I_signInWithUi): Chainable<null>
		}
	}
}