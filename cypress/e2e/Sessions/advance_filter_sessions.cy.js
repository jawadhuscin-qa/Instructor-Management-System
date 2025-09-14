describe('playlist_module Testcases', () => {
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

  it('sessions - advanced filters', () => {
    
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();
    cy.fixture('Data').then((data) => {

    // advance_filter - start_at
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click();
    cy.get('.advanced-dropdown-items > :nth-child(1) > :nth-child(2) > input').type(data.advance_filter_startAt);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
     
    waitForLoaderToDisappear();


    // Discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - created_at
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data.advance_filter_created_at_start); //start
    cy.get('.submission-dates > :nth-child(2) > input').type(data.advance_filter_created_at_end); //end
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

      //Discard button
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - playlist_name
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > [type="text"]').type(data.playlist_name);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - panel_name
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(4) > [type="text"]').type(data.panel_name);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - section name
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > [type="text"]').type(data.section_name);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - assessment_name
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(6) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(6) > [type="text"]').type(data.assessment_name);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - incident_level_low
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(1) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - incident_level_medium
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(2) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - incident_level_high
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - session duration
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(8) > .checkox-filed > .item-checkbox').click();
   cy.get('.submission-dates > :nth-child(1) > input').type(data.sesion_duration_start); //start
   cy.get('.submission-dates > :nth-child(1) > input').type(data.session_duration_end); //end
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - session_status_attending
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(9) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(9) > .evaluation-report > :nth-child(1) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - session_status_finished
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(9) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(9) > .evaluation-report > :nth-child(2) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - session_status_terminated
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(9) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(9) > .evaluation-report > :nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // advance_filter - session_status_initiated
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(9) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(9) > .evaluation-report > :nth-child(4) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    cy.log('Result is display');
    waitForLoaderToDisappear();

    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();
   });

  });

});
