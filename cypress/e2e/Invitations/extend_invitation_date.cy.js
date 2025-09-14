describe('invitations_module Testcases', () => {
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

  it('invitations_column_visibility', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/invitations"] > span').click();
    waitForLoaderToDisappear();
    cy.get(':nth-child(2) > :nth-child(1) > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(2) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();
    cy.get('.notify-btn > .checkBox-container > .checkmark').click();
    cy.get('.invite-modal-btn-block > .orange-hollow-btn').click(); //cancel button

    cy.get(':nth-child(2) > :nth-child(1) > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(2) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();
    
    cy.get('.notify-btn > .checkBox-container > .checkmark').click();
    cy.get('.invite-modal-schedule-end > input').type(data.invitation_dates);
    cy.get('.invite-modal-btn-block > div > .button').click();
    waitForLoaderToDisappear();

    //verify that user is able to extend invitation when invitation is selected from list
    cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(2) > :nth-child(1) > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get('.invite-modal-schedule-end > input').type(data.invitation_dates)
    cy.get('.invite-modal-btn-block > div > .button').click();

     }); 
  }); 
}); 