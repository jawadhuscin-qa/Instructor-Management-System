describe('invitations_module Testcases', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 15000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  };
  beforeEach(() => {
    cy.login(); 
  });

  it('invitation_search', () => {
    cy.fixture('Data').then((data) => {    
    cy.get('[href="/invitations"] > span').click();
    waitForLoaderToDisappear();


      //search by name
    cy.get('.form-control').type(data.name);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();


    //search by partial name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.firstName);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();


    //search by assessment name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.assessment_name);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();


    //search by partial assessment name 
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.partial_assessment_name);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();


    //search by Group Id
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.group_id);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();


    //search by phone number
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.phone);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();



    }); 
  }); 
}); 