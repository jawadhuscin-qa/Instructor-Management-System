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
    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();

    // Select playlist row
    cy.get('.table-body > :nth-child(4) > :nth-child(1)').click();

    // Open settings menu
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();

    // Configure playlist room scan options
    cy.get('.input-number').type('5');
    cy.get(':nth-child(2) > .radio-btn > :nth-child(3) > .radio-button > input').click();
    cy.get(':nth-child(3) > .radio-btn > :nth-child(1) > .radio-button > input').click();
    cy.get(':nth-child(4) > .small-radio-btns > :nth-child(2) > .radio-button > input').click();
    cy.get(':nth-child(5) > .small-radio-btns > :nth-child(1) > .radio-button > input').click();

    // Save settings
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

    // Reopen settings to verify
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();

    cy.log('Verify updated settings');

    waitForLoaderToDisappear();

    // Close settings modal
    cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
  });
});
