describe ('Forgot Testcases',() => {
    it('passes', () => {

        cy.visit('https://recruit.mereos-datasafe.com/login', { failOnStatusCode: false });
        cy.get('.forgot-password').click();
        cy.get('.forgot-password-form-input').type('gitlogix@mereos.eu');
        cy.get('.forgot-password-form-submit').click();

         cy.get('.Toastify__toast-body', { timeout: 8000 })  // Use the correct toast class
        .should('be.visible')
        .and('contain.text', 'User not found');

    // Clear the email field after the error
    cy.get('.forgot-password-form-input').clear();

        
});

        
})