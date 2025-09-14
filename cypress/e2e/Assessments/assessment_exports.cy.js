describe('assessments', () => {
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
    cy.login(); 
  });

  it('assessment_exports', () => {

   cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    
    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(2)').click();

    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(3)').click();

    });
});