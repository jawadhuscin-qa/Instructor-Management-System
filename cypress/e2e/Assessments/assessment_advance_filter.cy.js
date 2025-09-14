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

  it('assessment_advance_filter', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span').click();
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();


    // Assessment_link filter
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').type(data.assessment_link);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('assessment link result is displaying');
    waitForLoaderToDisappear();
   

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //Partial Assessment_link filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').type(data.partial_assessment_link);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
     cy.log('partial assessment link result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //Assessment co-owner
    // Co-owner filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data["co-owner_firstname"]); // first name
    cy.get('.submission-dates > :nth-child(2) > input').type(data["co-owner_lastname"]);  // last name
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('Co-owner result is displaying');
    waitForLoaderToDisappear();

    // Discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    // Filter with partial co-owner
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data["partial_co-owner"]);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('Partial co-owner is displaying');
    waitForLoaderToDisappear();


    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //created_at filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > .submission-dates > :nth-child(1) > input').type(data.advance_filter_created_at_start) //start
    cy.get(':nth-child(3) > .submission-dates > :nth-child(2) > input').type(data.advance_filter_created_at_end) //end
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
     cy.log('created_at result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    //created_ filter with only start time
     cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > .submission-dates > :nth-child(1) > input').type(data.advance_filter_startAt) //start
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('created_at result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //Description
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(4) > [type="text"]').type(data.description);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('description is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //filter with partial description
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(4) > [type="text"]').type(data.description);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('partial description is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //end at filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > :nth-child(2) > input').type(data.end_at_filter);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('end_at is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //external_id filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(6) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(6) > [type="text"]').type(data.external_id);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('external id is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //modify_at
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(7) > :nth-child(2) > input').type(data.modify_at);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('modify_at is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //name
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(8) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(8) > [type="text"]').type(data.name);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('name result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //partial name
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(8) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(8) > [type="text"]').type(data.name);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('partial name is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //owner filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(9) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data.owner_firstname);
    cy.get('.submission-dates > :nth-child(2) > input').type(data.owner_lastname);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    cy.log('owner filter is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //partial owner name 
     cy.get('.advance-filter-container').click();
    cy.get(':nth-child(9) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(2) > input').type(data.owner_firstname);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
     cy.log('partial owner filter is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //start at
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(10) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(10) > :nth-child(2) > input').type(data.advance_filter_startAt);
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
     cy.log('start at result is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();


    //status filter -draft
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(11) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(1) > .radio-button > input').click();
     cy.log('Draft status is displaying');
    waitForLoaderToDisappear();
    
    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click({ force: true });

    //status filter - opened
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(11) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(2) > .radio-button > input').click();
     cy.log('opened status is displaying');
    waitForLoaderToDisappear();

    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click({ force: true });


    //status filter - closed
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(11) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > .radio-button > input').click();
     cy.log('status status is displaying');
    waitForLoaderToDisappear();
    
    //discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click({ force: true });
    
    });
  }); 
  }); 

