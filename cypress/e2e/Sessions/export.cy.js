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
    // Go to sessions
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();

    // Export options
    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(2)').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
  });

});
