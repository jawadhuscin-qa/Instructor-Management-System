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

  it('duplicate_assessment', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('.menu > :nth-child(2)', { timeout: 10000 }).should('be.visible').click();
   //invites
   cy.wait(5000);
    
  //  //verify that user is able to select invitations
  //  cy.get(':nth-child(1) > .checkBox-container > .checkmark').click();
  //  cy.log('user is able to select invitations');
  //  cy.get(':nth-child(1) > .checkBox-container > .checkmark').click();

   //verify that user is able to extend invitations with select from list
   cy.get('body').then(($body) => {
  if ($body.find('.checkBox-container .checkmark').length > 0) {
    // Element is found, proceed with the test
    cy.get('.checkBox-container .checkmark').eq(0).click();
  } else {
    // Element not found, log and skip
    cy.log('Invitation not available, skipping test.');
    // Optionally, you can end the test early
    return;
  }
});
 // selects the first one

   cy.get(':nth-child(3) > :nth-child(1) > .checkBox-container').click();
   cy.get(':nth-child(2) > :nth-child(1) > .button').click();
   cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(2)').click();
   cy.get('.invite-modal-schedule-end > input').type(data.actions_invite);
   cy.get('.invite-modal-btn-block > div > .button').click();


   });
  }); 
  }); 