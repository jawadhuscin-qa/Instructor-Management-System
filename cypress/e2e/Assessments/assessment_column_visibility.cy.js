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

  it('assessment_column_visibility', () => {

    cy.get('[href="/assessments"] > span').click();
    waitForLoaderToDisappear();

    cy.get('.column-visibility-container').click();

// Select all columns
    for (let i = 0; i <= 13; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();

    }
    cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();

    cy.get('.column-visibility-container').click();

    // Deselect columns except the first one
    for (let i = 1; i <= 13; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }
    

    });
});