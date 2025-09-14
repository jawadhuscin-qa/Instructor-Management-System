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
    
    cy.login(); // ensure login before every test
  });

  it('panel_columnVisibility', () => {
    cy.log('Test started: playlist_columnVisibility');

    // Navigate to panels
    cy.get('[href="/panels"] > span').click();
    waitForLoaderToDisappear();

    // Open column visibility settings
    cy.get('.column-visibility-container').click();

    // Select all columns
    for (let i = 0; i <= 9; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }

    // Apply column visibility
    cy.get('#column-visibility-dropdown .orange-filled-btn').click();

    // Reopen column visibility settings
    cy.get('.column-visibility-container').click();

    // Deselect columns except the first one
    for (let i = 1; i <= 9; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
      //cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
    }
  });
});
