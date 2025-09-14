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
    cy.log('Test started: playlist_room_scan');

    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();
    waitForLoaderToDisappear();


    // Open playlist details and add sessions
    cy.get('.table-body > :nth-child(4) > :nth-child(1)').click();
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
    

  waitForLoaderToDisappear();

    // Select candidates
    cy.get('.candidates-container > :nth-child(1) > input').click();
    cy.get('.candidates-container > :nth-child(2) > input').click();
    cy.get('.add-candidate-modal > .btn-container > .orange-filled-btn').click();
    cy.log('Sessions added');
    


    // Try to add sessions without selecting candidates
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
    

    cy.get('.btn-container > .orange-filled-btn').click({ force: true });
  });
});
