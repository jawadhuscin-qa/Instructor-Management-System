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

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('.menu > :nth-child(2)').click();
    cy.get('.column-visibility-container').click();  //column visibility
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
    cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();

    });
});