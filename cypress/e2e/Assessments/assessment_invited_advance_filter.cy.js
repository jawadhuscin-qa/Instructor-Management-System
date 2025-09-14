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
    
     cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
     waitForLoaderToDisappear();
    cy.get('.menu > :nth-child(2)').click(); //invites
    cy.get('.advance-filter-container').click(); //advance filter button click

    //candidate filter
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click(); 
    cy.get('.submission-dates > :nth-child(1) > input').type(data.advance_filter_first_name); //first name
    cy.get('.submission-dates > :nth-child(2) > input').type(data.advance_filter_last_name) ;//lastname
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //Partial candidate filter
     cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click(); 
    cy.get('.submission-dates > :nth-child(1) > input').type(data.partial_name); //first name
    //cy.get('.submission-dates > :nth-child(2) > input').type('waheed') ;//lastname
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //Assessment filter
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
    cy.get('.advanced-dropdown-items > :nth-child(2) > [type="text"]').type(data.assessment_name);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //Partial Assessment filter
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
    cy.get('.advanced-dropdown-items > :nth-child(2) > [type="text"]').type(data.partial_assessment_name);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //status - Attending
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(1) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //status - completed
     cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(2) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //status rejected
     cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //status onHold
     cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(4) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //status selected
     cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //status -invited
     cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(6) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    // created at
     cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(4) > .submission-dates > :nth-child(1) > input').type('2025-08-30T15:27'); //start
    cy.get(':nth-child(4) > .submission-dates > :nth-child(2) > input').type('2025-08-30T15:50');  //end
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //Fraud status - valid
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .evaluation-report > :nth-child(1) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //Fraud status - on Hold
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .evaluation-report > :nth-child(2) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //Fraud status - Invalid
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > .evaluation-report > :nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click(); //search button
    waitForLoaderToDisappear();
    cy.log('result is display');

    //discard button
    cy.get('.advance-filter-container').click(); //advance filter button click
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    });
  }); 
  }); 