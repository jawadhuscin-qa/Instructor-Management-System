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

  it('assessment_invite_search', () => {
    cy.fixture('Data').then((data) => {

  cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click();
     waitForLoaderToDisappear();
    cy.get('.menu > :nth-child(2)', { timeout: 10000 }).should('be.visible').click();
   //invites
    
    //search by name
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').type(data.name);

    cy.get('.search-icon').click();

    //search by partial name
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').clear();
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').type(data.partial_name);
    cy.get('.search-icon').click();

    //search by group id
     cy.get('.form-control', { timeout: 10000 }).should('be.visible').clear();
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').type(data.group_id);
    cy.get('.search-icon').click();


    //search by external id
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').clear();
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').type(data.external_id);
    cy.get('.search-icon').click();

    
    //search by phone number
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').clear();
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').type(data.phone);
    cy.get('.search-icon').click();

    //search by email
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').clear();
    cy.get('.form-control', { timeout: 10000 }).should('be.visible').type(data.email_id);
    cy.get('.search-icon').click();

    });
  }); 
  }); 