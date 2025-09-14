describe('playlist_module Testcases', () => {
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

  it('inner_panel_sessionDelete', () => {
    // Navigate to panels
    cy.get('[href="/panels"] > span', { timeout: 10000 }).should('be.visible').click();
    waitForLoaderToDisappear();
    cy.get('.table-body > :nth-child(5) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('.delete-icons').click();
    cy.get('.modal-btns > .orange-hollow-btn').click();
    cy.log('cancel button is working');


    cy.get('.delete-icons').click();
    cy.get('.modal-btns > .orange-filled-btn').click();
    cy.log('session_deleted')
    });
});