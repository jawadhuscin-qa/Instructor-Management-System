describe ('Login Testcases',() => {
    it('passes', () => {

        cy.visit('https://recruit.mereos-datasafe.com/login', { failOnStatusCode: false });


        cy.get('.login-form > :nth-child(5)').click();
        cy.get('.forgot-password-form-input').type("gitlogix.mereos.eu");
        cy.get('span').click();
        
    //     cy.get('.Toastify__toast-body', { timeout: 8000 }).should('be.visible').and('contain.text', 'User not found');

        // Clear the email field after the error
    cy.get('.forgot-password-form-input').clear();
        






        });

        
})