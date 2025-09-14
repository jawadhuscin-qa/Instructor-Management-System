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
    cy.fixture('Data').then((data) => {
      // Navigate to playlists
      cy.get('[href="/playlists"] > span').click();
      waitForLoaderToDisappear();

      // Open duplicate playlist modal
      cy.get('.header-icons > :nth-child(2)').click();

      // Type playlist name
      const duplicate_playlist_name = data.playlist_name; // Assuming it's coming from fixture
      cy.get('.field').type(duplicate_playlist_name);

      // Click duplicate button to create playlist
      cy.get('.duplicate-body > .btn-container > .orange-filled-btn').click();

      // Open duplicate playlist modal again without entering a name
      cy.get('.header-icons > :nth-child(2)').click();

      // Check if duplicate button is disabled when no name is entered
      cy.get('.duplicate-body > .btn-container > .orange-filled-btn')
        .should(($btn) => {
          expect($btn).to.be.disabled
            .or.have.css('pointer-events', 'none');
        });

      // Click it only if enabled
      cy.get('.duplicate-body > .btn-container > .orange-filled-btn').then(($btn) => {
        if (!$btn.is(':disabled') && $btn.css('pointer-events') !== 'none') {
          cy.wrap($btn).click();
        }
      });
    });
  });
});
