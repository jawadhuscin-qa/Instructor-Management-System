describe('Role_module Testcases', () => {
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

  it('role', () => {
     cy.fixture('Data').then((data) => {
    cy.get('.user-profile').click();
   cy.get('body > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)').click();
    cy.get('.drop-down').select(data.role);
    cy.get('.crm-body > .btn-container > .orange-filled-btn').click();


//     //cancel button functionality
//     cy.get('.user-profile').click();
//     waitForLoaderToDisappear();
//    cy.get('body > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)', { timeout: 10000 }).should('be.visible').click();


//     cy.get('.drop-down').select(data.role);
//     cy.get('.crm-body > .btn-container > .orange-hollow-btn').click(); //cancel button
   

});
});
});
