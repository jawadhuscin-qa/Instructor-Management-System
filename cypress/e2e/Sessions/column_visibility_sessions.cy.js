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
  };

  beforeEach(() => {
    cy.login();
  });

  it('playlist_room_scan', () => {
    // Go to sessions page
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();

    // Open column visibility dropdown
    cy.get('.column-visibility-container').click();

    // Select all columns (loop instead of repeating clicks)
    for (let i = 0; i <= 40; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }

    // Reset button
    cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn')
      .click();

    // Cancel button
    cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn')
      .click();

    cy.log('Column visibility test completed');
  });
});
