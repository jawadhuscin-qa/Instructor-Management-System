describe('candidate_module Testcases', () => {

  beforeEach(() => {
    cy.login();

    // Intercept filter request
    cy.intercept('GET', '**/candidate/candidate_search/**').as('filterResults');
  });

  it('candidate', () => {
    cy.fixture('Data').then((data) => {

      // advance filter - created at
      cy.get('.advance-filter-container').click();
      cy.get(':nth-child(1) > .checkox-filed > .item-checkbox').click();
      cy.get('.submission-dates > :nth-child(1) > input').type(data.advance_filter_created_at_start);
      cy.get('.submission-dates > :nth-child(2) > input').type(data.advance_filter_created_at_end);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
      cy.wait('@filterResults');
      cy.log('Created date ranges data is displayed. If data is not available "No Data" placeholder is displayed');

      // Discard Result
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

      // advance filter - email
      cy.get('.advance-filter-container').click();
      cy.get(':nth-child(2) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(2) > [type="text"]').type(data.advance_filter_email);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
      cy.wait('@filterResults');
      cy.log('Email filter result is showing');

      // Discard Result
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

      // advance filter - external id
      cy.get('.advance-filter-container').click();
      cy.get(':nth-child(3) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(3) > [type="text"]').type(data.advance_filter_external_id);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
      cy.wait('@filterResults');
      cy.log('External ID filter result is displaying');

      // Discard Result
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

      // advance filter - first name
      cy.get('.advance-filter-container').click();
      cy.get(':nth-child(4) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(4) > [type="text"]').type(data.advance_filter_first_name);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
      cy.wait('@filterResults');
      cy.log('First name filter result is displaying');

      // Discard Result
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

      // advance filter - group_id
      cy.get('.advance-filter-container').click();
      cy.get(':nth-child(5) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(5) > [type="text"]').type(data.advance_filter_group_id);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
      cy.wait('@filterResults');
      cy.log('Group ID filter result is displaying');

      // Discard Result
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

      // advance filter - phone
      cy.get('.advance-filter-container').click();
      cy.get(':nth-child(6) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(6) > [type="text"]').type(data.advance_filter_phone);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
      cy.wait('@filterResults');
      cy.log('Phone filter result is displaying');

      // Discard Result
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

      // advance filter - surname
      cy.get('.advance-filter-container').click();
      cy.get(':nth-child(7) > .checkox-filed > .item-checkbox').click();
      cy.get(':nth-child(7) > [type="text"]').type(data.advance_filter_surname);
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
      cy.wait('@filterResults');
      cy.log('Surname filter result is displaying');

      // Discard Result
      cy.get('.advance-filter-container').click();
      cy.get('#advance-filter-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
    });
  });

});
