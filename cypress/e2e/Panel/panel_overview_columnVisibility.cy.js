describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('panel_exports', () => {
    // Navigate to panels
    cy.get('[href="/panels"] > span', { timeout: 10000 }).should('be.visible').click();
    cy.wait(5000);
    cy.get('.table-body > :nth-child(6) > :nth-child(1)').click();
    cy.get('.column-visibility-container').click();


    // Select all columns
    for (let i = 0; i <= 34; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();

    }
    cy.get('.btn-container > .orange-filled-btn').click();

    cy.get('.column-visibility-container').click();

    // Deselect columns except the first one
    for (let i = 1; i <= 34; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }







    
  });
});
