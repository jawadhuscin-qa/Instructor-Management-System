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
    cy.get(':nth-child(15) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.log('user is navigated to inner panel screen');
    cy.get('.table-body > tr > :nth-child(2)').click();
    cy.log('user is navigated to inner panel screen');
    waitForLoaderToDisappear();
    cy.wait(15000);

   cy.get('[data-mg-id="85fb6369-dbdc-42c7-b5cb-f3b4aba2c63b_b45e186c04fe5074292b8802413ea3c8"] > .lrn-mg-score-feedback > .lrn-mg-score-feedback-card > .lds-card-body > form > .lrn-mg-score-input-group > :nth-child(1) > .lrn-mg-score-input').type(data.grading_score);
   cy.get('[data-mg-id="85fb6369-dbdc-42c7-b5cb-f3b4aba2c63b_b45e186c04fe5074292b8802413ea3c8"] > .lrn-mg-score-feedback > .lrn-mg-score-feedback-card > .lds-card-body > form > .lrn-mg-feedback-toggle > .lrn-mg-feedback-content > :nth-child(1) > .lrn-mg-feedback-input').type(data.grading_comment);
    cy.get('.mg-grading-next-btn').click();
    cy.log('Grading Done');
   
 });
  });
});

