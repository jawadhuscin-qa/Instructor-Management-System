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

  it('playlist_room_scan', () => {
    cy.fixture('Data').then((data) => {
    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();
    waitForLoaderToDisappear();

    // Created at filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data.advance_filter_created_at_start); //start         
    cy.get('.submission-dates > :nth-child(2) > input').type(data.advance_filter_created_at_end); //end
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // End at filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
    cy.get('.advanced-dropdown-items > :nth-child(2) > :nth-child(2) > input').type(data.end_at_filter);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // Name filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > [type="text"]').type(data.name);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // Proctor filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
    cy.get('.submission-dates > :nth-child(1) > input').type(data.proctor_firstName); //first
    cy.get('.submission-dates > :nth-child(2) > input').type(data.proctor_lastname); //name
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // Start at filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(5) > :nth-child(2) > input').type(data.advance_filter_startAt);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // Start date filter
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(6) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(6) > :nth-child(2) > input').type(data.advance_filter_start_date);
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // Status filter - complete
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(1) > .radio-button > input').click();
    cy.get(':nth-child(2) > .radio-button > input').click();
    cy.get(':nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // Status filter - in progress
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(2) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();

    // Status filter - invited
    cy.get('.advance-filter-container').click();
    cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
    cy.get(':nth-child(3) > .radio-button > input').click();
    cy.get('#advance-filter-dropdown .orange-filled-btn').click();
    waitForLoaderToDisappear();
    cy.get('.advance-filter-container').click();
    cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
    waitForLoaderToDisappear();
  });
  });
});
