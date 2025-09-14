describe('candidate Testcases', () => {

  beforeEach(() => {
    cy.login();
  });

  it('candidate - column visibility', () => {
    // Column Visibility clicks in a loop
    for (let i = 0; i <= 8; i++) {
      cy.get('.column-visibility-container').click();
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
      cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();
    }

    // Discard / reset column selection
    cy.get('.column-visibility-container').click();
    cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn').click();
  });
});
