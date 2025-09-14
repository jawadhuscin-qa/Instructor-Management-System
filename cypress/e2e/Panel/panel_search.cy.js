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

  it('panel_search', () => {
    cy.fixture('Data').then((data) => {
    // Navigate to panels
    cy.get('[href="/panels"] > span', { timeout: 10000 }).should('be.visible').click();
    waitForLoaderToDisappear();

    //search by panel name
    cy.get('.form-control').type(data.panel_name);
    cy.get('.search-icon').click();
    cy.log('panel name search result is display');
    waitForLoaderToDisappear();

    //search by partial panel name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.panel_name_search);
    cy.get('.search-icon').click();
    cy.log('partial panel name search result is display');
    waitForLoaderToDisappear();

    // search by evaluator
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.evaluator);
    cy.get('.search-icon').click();
    cy.log('evaluator name search result is display');
    waitForLoaderToDisappear();

    //search by partial evaluator name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.firstName);
    cy.get('.search-icon').click();
    cy.log('partial evaluator name search result is display');
    waitForLoaderToDisappear();

    // search by status -Invited
    cy.get('.form-control').clear();
    cy.get('.form-control').type('invited');
    cy.get('.search-icon').click();
    cy.log('invited status search result is display');
   waitForLoaderToDisappear();

    // search by status -progress
    cy.get('.form-control').clear();
    cy.get('.form-control').type('progress');
    cy.get('.search-icon').click();
    cy.log('progress status search result is display');
    waitForLoaderToDisappear();

    // search by status -completed
    cy.get('.form-control').clear();
    cy.get('.form-control').type('completed');
    cy.get('.search-icon').click();
    cy.log('completed status search result is display');
    waitForLoaderToDisappear();

});
  });
});