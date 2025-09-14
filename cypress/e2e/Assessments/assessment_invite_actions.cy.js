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

  it('assessment_invite_actions', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
    cy.get('#dropdown-basic-button > div > .button', { timeout: 10000 }).should('be.visible').click();
    cy.get('.list-unstyled > :nth-child(2)').click(); //change last date
    cy.get('input').type(data.actions_invite);
    cy.get('.orange-filled-btn').click();
    waitForLoaderToDisappear();

    // import and invite
    cy.get('#dropdown-basic-button > div > .button', { timeout: 10000 }).click({ force: true });

    cy.get('.list-unstyled > :nth-child(1)').click();
    cy.get('.dropzone')
  .should('exist')
  .selectFile('uploads/Dummy file for upload.pdf', { force: true });


    });
  }); 
  }); 