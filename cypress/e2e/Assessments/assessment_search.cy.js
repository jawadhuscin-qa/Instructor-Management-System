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

  it('assessment_search', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();


    //search by assessment name
    cy.get('.form-control').type(data.assessment_name);
    cy.get('.search-icon').click();
    cy.log('assessment name search result is display');
    waitForLoaderToDisappear();

    //search by partial assessment name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.assessment_name);
    cy.get('.search-icon').click();
    cy.log('partial assessment name search result is display')

    //search by owner name
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.owner_name);
    cy.get('.search-icon').click();
    cy.log('owner name search result is display')

    //search by partial owner name
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.owner_firstname);
    cy.get('.search-icon').click();
    cy.log('partial owner name search result is display')


    //search by co-owner
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.owner_name);
    cy.get('.search-icon').click();

    //search by partial co-owner
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.owner_name);
    cy.get('.search-icon').click();
    

    //search by assessment link
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.assessment_link);
    cy.get('.search-icon').click();

    //search by partial assessment link
    
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.partial_assessment_link);
    cy.get('.search-icon').click();
    

    //search by description
    
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.description);
    cy.get('.search-icon').click();

    //search by partial description
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.partial_description);
    cy.get('.search-icon').click();

    //search by external id
     cy.get('.form-control').clear();
    cy.get('.form-control').type(data.external_id);
    cy.get('.search-icon').click();

   });
  }); 
  }); 