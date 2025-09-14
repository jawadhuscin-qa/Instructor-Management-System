describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('panel_exports', () => {
    // Navigate to panels
    cy.get('[href="/panels"] > span', { timeout: 10000 }).should('be.visible').click();

    // Loop through export options (1 to 3)
    for (let i = 1; i <= 3; i++) {
      cy.get('#dropdown-basic-button > div > .button').should('be.visible').click();

      cy.get(`#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(${i})`, { timeout: 5000 }).should('exist').click();
    }
  });
});
