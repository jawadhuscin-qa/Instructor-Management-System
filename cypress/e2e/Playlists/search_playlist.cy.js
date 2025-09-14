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

    // search playlist by name        
    cy.get('.form-control').type(data.playlist_name);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by name is successful');

    // search by partial name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.partial_keyword_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by partial name is successful'); 

    // search by proctor name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.proctor_firstName);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by proctor name is successful'); 

    // search by partial proctor name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.partial_keyword_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by partial proctor name is successful');
    
    // search by status
    cy.get('.form-control').clear();
    cy.get('.form-control').type('completed');
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by status is successful');

    // search by sessions count
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.session_count);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by sessions count is successful');
  });

  });

});