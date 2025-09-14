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

  it('playlist_room_scan', function () {
    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();
    waitForLoaderToDisappear();
    cy.get('.table-body > :nth-child(1) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('.playlist-tabs > :nth-child(4)').click();
    cy.log('user is navigated');
   waitForLoaderToDisappear();

    // Identity tab exports
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(1)').click();
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(2)').click();
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(3)').click();
    cy.log('identity tab exports is working fine');
    waitForLoaderToDisappear();

    // Identity action buttons
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();

    // Edit settings
    cy.get(':nth-child(3) > .radio-btn > :nth-child(2) > .radio-button > input').click();
    cy.get(':nth-child(4) > .small-radio-btns > :nth-child(1) > .radio-button > input').click();
    cy.get(':nth-child(5) > .small-radio-btns > :nth-child(2) > .radio-button > input').click();
    cy.get('.btn-container > .orange-filled-btn').click();
    cy.log('settings updated');
    waitForLoaderToDisappear();

    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.log('verify settings');
    waitForLoaderToDisappear();
    cy.get('.btn-container > .orange-hollow-btn').click();

    // Add Sessions
    cy.get('.ai-logs-header > div > p').click();
    waitForLoaderToDisappear();
    cy.get('.candidates-container > :nth-child(1) > input').click();
    cy.get('.btn-container > .orange-filled-btn').click();
    waitForLoaderToDisappear();

    // Verify cancel button functionality
    cy.get('.ai-logs-header > div > p').click();
    waitForLoaderToDisappear();
    cy.get('.btn-container > .orange-hollow-btn').click();
  });
});
