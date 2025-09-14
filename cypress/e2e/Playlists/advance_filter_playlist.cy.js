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

  it('playlist_ - advanced filters', () => {
    cy.log('Test started: playlist_room_scan - advanced filters');
    cy.fixture('Data').then((data) => {

    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();

    //  filter function
    const applyFilter = (setupFn) => {
      cy.get('.advance-filter-container').click();
      setupFn(); // run filter-specific actions
      cy.get('#advance-filter-dropdown .orange-filled-btn').click();
      waitForLoaderToDisappear();
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown .orange-hollow-btn').click();
      waitForLoaderToDisappear();
    };

    // Created At filter
    cy.log('Applying Created At filter');
    applyFilter(() => {
      cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click();
      cy.get('.submission-dates > :nth-child(1) > input').type(data.advance_filter_created_at_start);
      cy.get('.submission-dates > :nth-child(2) > input').type(data.advance_filter_created_at_end);
    });

    // End At filter
    cy.log('Applying End At filter');
    applyFilter(() => {
      cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
      cy.get('.advanced-dropdown-items > :nth-child(2) > :nth-child(2) > input').type('2025-02-25T14:50');
    });

    // Name filter
    cy.log('Applying Name filter');
    applyFilter(() => {
      cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(3) > [type="text"]').type(data.playlist_name_search);
    });

    // Proctor filter
    cy.log('Applying Proctor filter');
    applyFilter(() => {
      cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
      cy.get('.submission-dates > :nth-child(1) > input').type(data.proctor_firstName);
      cy.get('.submission-dates > :nth-child(2) > input').type(data.proctor_lastname);
    });

    // Start At filter
    cy.log('Applying Start At filter');
    applyFilter(() => {
      cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(5) > :nth-child(2) > input').type(data.advance_filter_startAt);
    });

    // Start Date filter
    cy.log('Applying Start Date filter');
    applyFilter(() => {
      cy.get(':nth-child(6) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(6) > :nth-child(2) > input').type(data.advance_filter_startAt);
    });

    // Status filter - Complete / In Progress / Invited
    cy.log('Applying Status filter - complete/in progress/invited');
    const selectStatus = (nth) => {
      applyFilter(() => {
        cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
        cy.get(`:nth-child(${nth}) > .radio-button > input`).click();
      });
    };
    selectStatus(1); // complete
    selectStatus(2); // in progress
    selectStatus(3); // invited
  });

  });

});