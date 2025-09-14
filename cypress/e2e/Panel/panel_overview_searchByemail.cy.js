describe('playlist_module Testcases', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 50000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  }
  beforeEach(() => {
    cy.login(); 
  });

  it('panel_exports', () => {
    cy.fixture('Data').then((data) => {
    // Navigate to panels
    cy.get('[href="/panels"] > span', { timeout: 10000 }).should('be.visible').click();
    waitForLoaderToDisappear();

    // Search by full email
    cy.get('.form-control').type(data.search_by_email);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();

    // Search by partial email
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.partial_keyword_search);
    cy.get('.search-icon').click();

});
  });
});