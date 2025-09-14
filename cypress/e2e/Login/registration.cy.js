describe ('Login Testcases',() => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 15000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  }
    it('passes', () => {

        cy.visit('https://recruit.mereos-datasafe.com/login', { failOnStatusCode: false });

        // Test Case => Valid email and valid password
        cy.get(':nth-child(2) > .input-field > .login-form-input').type(Cypress.env('username'));
        cy.get(':nth-child(3) > .input-field > .login-form-input').type(Cypress.env('password'));
        cy.get('.login-form-submit').click();
        waitForLoaderToDisappear();
        //Logout button
        cy.get('.footer-item-category > .item-container > span').click();
        waitForLoaderToDisappear();

        //Test Case => Invalid email and valid password 
        cy.get(':nth-child(2) > .input-field > .login-form-input').type('teacher01');
        cy.get(':nth-child(3) > .input-field > .login-form-input').type('Joke123!@#')
        cy.get('.login-form-submit').click();
        cy.log('Incorrect email address. Please correct valid email address');
        cy.wait (2000);
        cy.get(':nth-child(2) > .input-field > .login-form-input').clear();
        cy.get(':nth-child(3) > .input-field > .login-form-input').clear();
        cy.wait (2000);

        //Test Case => Valid email and ivalid password 
        cy.get(':nth-child(2) > .input-field > .login-form-input').type('teacher2');
        cy.get(':nth-child(3) > .input-field > .login-form-input').type('Joke123!@#1');
        cy.get('.login-form-submit').click();
        cy.log ('Please enter valid password');
        cy.get(':nth-child(2) > .input-field > .login-form-input').clear();
        cy.get(':nth-child(3) > .input-field > .login-form-input').clear();
        cy.wait (3000);

        //Test Case => Valid email but empty password 
        cy.get(':nth-child(2) > .input-field > .login-form-input').type('teacher2');
        cy.get('.login-form-submit').click();
        cy.log ('Please enter valid password');
        cy.get(':nth-child(2) > .input-field > .login-form-input').clear();

        //Test Case => Emtpy email but valid password 
        cy.get(':nth-child(3) > .input-field > .login-form-input').type('Joke123!@#1');
        cy.get('.login-form-submit').click();
        cy.log ('Please enter valid email');
    })
    
        describe('Invalid Login 5 Times', () => {
      const invalidLoginDetails = [
    { email: 'invaliduser1', password: 'wrongpassword1' },
    { email: 'invaliduser2', password: 'wrongpassword2' },
    { email: 'invaliduser3', password: 'wrongpassword3' },
    { email: 'invaliduser4', password: 'wrongpassword4' },
    { email: 'invaliduser5', password: 'wrongpassword5' },
  ];

  // Loop through the 5 invalid login attempts
  Cypress._.times(5, (index) => {
    it(`Invalid login attempt #${index + 1}`, () => {
      cy.visit('https://recruit.mereos-datasafe.com/login', { failOnStatusCode: false });

      const { email, password } = invalidLoginDetails[index];

      // Enter invalid email and password
      cy.get(':nth-child(2) > .input-field > .login-form-input').clear().type(email);
      cy.get(':nth-child(3) > .input-field > .login-form-input')    .clear() .type(password);
      
      cy.get('.login-form-submit')  // Login button
        .click();
      
      // Clear the fields for the next iteration
      cy.get(':nth-child(2) > .input-field > .login-form-input').clear();
      cy.get(':nth-child(3) > .input-field > .login-form-input').clear();
      
      
      cy.wait(3000);
    });
  });
});

        
})