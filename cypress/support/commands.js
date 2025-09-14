Cypress.Commands.add('login', () => {
  cy.visit('/login', { failOnStatusCode: false });

  const username = Cypress.env('username');
  const password = Cypress.env('password');

  if (!username || !password) {
    throw new Error(' Username or password is missing. Check your .env file.');
  }

  cy.get(':nth-child(2) > .input-field > .login-form-input').type(username);
  cy.get(':nth-child(3) > .input-field > .login-form-input').type(password);
  cy.get('.login-form-submit').click();
});
