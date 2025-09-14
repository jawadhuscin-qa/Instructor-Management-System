describe('assessments', () => {
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
  beforeEach(() => {
    cy.login(); 
  });

  it('assessment_overview', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    //Verify that user is able to copy/share assessment link
    cy.get('.share_button').click();
    waitForLoaderToDisappear();
    cy.get('#ip-text').click(); //link copy
    cy.get('.orange-filled-btn').click(); //confirm button
    cy.get('.share_button').click();
    cy.get('.box-data > .buttons > .orange-hollow-btn').click(); //cancel button

    //Add Description
    cy.get('.eye_button').click();
    cy.get('.ql-editor').type(data.description);
    cy.get('.orange-filled-btn').click(); //confirm button
    cy.log('description added');
    cy.get('.eye_button').click();
    cy.get('.btn-container > .orange-hollow-btn').click();

    //view QR
    // cy.get('.upload-logo').click();

    //co-owner
    cy.get('.profile').click();
    cy.get(':nth-child(3) > .field-block > .undefined > :nth-child(3) > .input-with-search-container > .dependant-field').click();
    cy.get('.entities-dropdown > :nth-child(6)').click();
    cy.get(':nth-child(3) > .field-block > .undefined > .input-label').click();
    cy.get('.orange-filled-btn').click();
    cy.log('co-owner updated');

    //update owner
    cy.get('.profile').click();
    cy.get(':nth-child(2) > .undefined > :nth-child(3) > .input-with-search-container > .dependant-field').click();
    cy.get('.entities-dropdown > :nth-child(3)').click();
    cy.get('.orange-filled-btn').click();
    cy.log('owner changed successfully');

    //cancel button
    cy.get('.profile').click();
    cy.wait(2000);
    cy.get('.btn-container > .orange-hollow-btn').click();

});
  }); 
  
  }); 