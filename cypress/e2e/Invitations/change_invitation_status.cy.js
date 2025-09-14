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

  it('change_invitation_status', () => {

    cy.get('[href="/invitations"] > span').click();
     waitForLoaderToDisappear();

    cy.get(':nth-child(2) > div > .button').click();
    waitForLoaderToDisappear();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
    
    //change status - Attending
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();//select candidate
    cy.get('.invite-modal-btn-block > div > .button').click();
    cy.log('invitation status changed with attending status');
    cy.wait(2000);

    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
  
    //change status - completed
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();//select candidate
    cy.get('select').select('1');
    cy.get('.invite-modal-btn-block > div > .button').click();
    cy.log('invitation status changed with completed status');
    cy.wait(2000);


    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
    
    //change status - rejected
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();//select candidate
    cy.get('select').select('3');
    cy.get('.invite-modal-btn-block > div > .button').click();
    cy.log('invitation status changed with rejected status');
    cy.wait(2000);
    

    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
    cy.wait(3000);

    //change status - on hold
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();//select candidate
    cy.get('select').select('4');
    cy.get('.invite-modal-btn-block > div > .button').click();
    cy.log('invitation status changed with onhold status');
    cy.wait(2000);
    

    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
    cy.wait(3000);

    //change status - selected
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();//select candidate
    cy.get('select').select('5');
    cy.get('.invite-modal-btn-block > div > .button').click();
    cy.log('invitation status changed with selected status');
    cy.wait(2000);
    
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
    cy.wait(3000);

    //change status - invited
    cy.get(':nth-child(1) > .checkbox-with-assessment > .checkBox-container > .checkmark').click();//select candidate
    cy.get('select').select('6');
    cy.get('.invite-modal-btn-block > div > .button').click();
    cy.log('invitation status changed with invited status');
    cy.wait(2000);
    });
});