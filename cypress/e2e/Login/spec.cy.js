describe ('empty spec',() => {
    it('passes', () => {

        cy.visit('https://recruit.mereos-datasafe.com/login', { failOnStatusCode: false });

        cy.get(':nth-child(2) > .input-field > .login-form-input').type('teacher2');
        cy.get(':nth-child(3) > .input-field > .login-form-input').type('Joke123!@#');
        cy.get('.login-form-submit').click();


        cy.get('[href="/playlists"] > span').click();
        cy.get('.header-icons > :nth-child(4)').click();
        

        cy.wait(8000); 


        cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
        cy.get('.header-icons > :nth-child(4)').click();


        cy.wait(5000); 
        cy.get('.input-field').type('Cypress Scripting');
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
        cy.get('.entities-dropdown > :nth-child(2) > :nth-child(1)').click();
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

        //candidate selection
        cy.get('.add-candidates-conatiner > :nth-child(2) > :nth-child(1) > input').check();
        cy.get('.add-candidates-conatiner > :nth-child(2) > :nth-child(1) > input').check();
        cy.wait(5000); 
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

        //caldenar time-date
        cy.get('.schedule-end > .input-field').click();
        cy.wait(5000); 
       
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

        cy.get(':nth-child(2) > .radio-btn > :nth-child(2) > .radio-button > input').check();
        cy.get(':nth-child(2) > .radio-btn > :nth-child(2) > .radio-button > input').check();
        cy.get(':nth-child(2) > .radio-btn > :nth-child(2) > .radio-button > input').check();
        cy.get(':nth-child(2) > .radio-btn > :nth-child(2) > .radio-button > input').check();

        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
        cy.wait(8000); 

        //Duplicate Playlists
    
        cy.get('.header-icons > :nth-child(2)').click();
        cy.wait(8000); 
        cy.get('.close-modal').click();
        cy.wait(5000); 
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
        cy.get('.duplicate-body > .btn-container > .orange-hollow-btn').click();
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click()
        cy.get('.field').type('Duplicate Cypress Recorder')
        cy.get('.duplicate-body > .btn-container > .orange-filled-btn').click();
        cy.wait(5000); 

        cy.get('.list-body').scrollIntoView();


    })






})