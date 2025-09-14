describe('invitations_module Testcases', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('invitations_column_visibility', () => {

    cy.get('[href="/invitations"] > span').click();
    cy.wait(6000);

    cy.get('.column-visibility-container').click();

    // Select all columns
    for (let i = 0; i <= 12; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }

      cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-filled-btn').click();

        cy.get('.column-visibility-container').click();

      // Deselect columns except the first one
    for (let i = 1; i <= 12; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }
    });
});