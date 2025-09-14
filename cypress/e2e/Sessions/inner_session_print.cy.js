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
    // Open Sessions
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();

    // Wait for first row to load and click
    cy.get('.table-body > :nth-child(1) > :nth-child(2)', { timeout: 15000 }).should('be.visible').click();

    // Open print screen
    cy.get(':nth-child(1) > .Tooltip-Wrapper > .icons-box > .header-icons').click();
    cy.log('Print screen is open');
  });

});
