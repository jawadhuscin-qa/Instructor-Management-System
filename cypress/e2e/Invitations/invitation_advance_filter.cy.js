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

  it('invitation_advance_filters', () => {
    cy.fixture('Data').then((data) => {
    cy.get('[href="/invitations"] > span').click();
    waitForLoaderToDisappear();

    //advance filter - candidate
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data.firstName); //first name
    cy.get('.submission-dates > :nth-child(2) > input').type(data.lastName); //last name
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    //advance filter - assessment
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(2) > [type="text"]').type(data.assessment_name);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

    //advance filter - status - attending
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(1) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

     //advance filter - status_completed
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(2) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
    
     //advance filter - status_rejected
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

     //advance filter - status_onHold
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(4) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

    //advance filter - status_selected
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

    //advance filter - status_Invited
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(6) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

    //advance filter - created_at
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data.advance_filter_created_at_start); //start
    cy.get('.submission-dates > :nth-child(2) > input').type(data.advance_filter_created_at_end); //end
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

    //advance filter - Fraud_status_valid
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .evaluation-report > :nth-child(1) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

    //advance filter - Fraud_status_onHold
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .evaluation-report > :nth-child(2) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

     //advance filter - Fraud_status_inValid
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .evaluation-report > :nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //save button
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
     waitForLoaderToDisappear();

    //advance filter - External_id
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(6) > [type="text"]').type(data.external_id);
    cy.log('Result is displaying');
    waitForLoaderToDisappear();

     }); 
  }); 
}); 