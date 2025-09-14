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
    // navigate to sessions
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();

    // open first session
    cy.get('.table-body > :nth-child(1) > :nth-child(2)').click();
    waitForLoaderToDisappear();

    // navigate to candidate profile
    cy.get(':nth-child(2) > .Tooltip-Wrapper > .icons-box > .header-icons').click();
    cy.log('user is navigated to view candidate profile screen');
  });

});
