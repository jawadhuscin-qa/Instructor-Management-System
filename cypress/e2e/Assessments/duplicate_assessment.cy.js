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

  it('duplicate_assessment', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('.buttons-block > :nth-child(2)').click();
    cy.get('.field').type(data.duplicate_assessment_name);
    //cy.get('.dependant-field').select('5');
    cy.get('.dam-body > .btn-container > .orange-filled-btn').click();
    cy.log('duplicate assessment is created');
    waitForLoaderToDisappear();
    cy.get('.buttons-block > :nth-child(2)').click();
    cy.get('.dam-body > .btn-container > .orange-hollow-btn').click();

});
  }); 
  }); 