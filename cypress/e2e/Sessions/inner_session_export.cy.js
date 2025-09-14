describe('playlist_module Testcases', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 30000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  }

  beforeEach(() => {
    cy.login();
  });

  it('playlist_room_scan', () => {
    // Navigate to sessions
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();

    // Wait until first row is visible instead of fixed wait
    cy.get('.table-body > :nth-child(1) > :nth-child(2)', { timeout: 15000 }).should('be.visible').click();

    // Export option 1
    cy.get('.button').click();
    cy.get('.list-unstyled > :nth-child(1)').click();

    // Export option 2
    cy.get('.button').click();
    cy.get('.list-unstyled > :nth-child(2)').click();

    // Export option 3
    cy.get('.button').click();
    cy.get('.list-unstyled > :nth-child(3)').click();
  });

});
