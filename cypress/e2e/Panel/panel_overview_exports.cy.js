describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('panel_overview_exports', () => {
    // Navigate to panels
    cy.get('[href="/panels"] > span', { timeout: 10000 }).should('be.visible').click();
    cy.get('.table-body > :nth-child(5) > :nth-child(1)').click();

    //exports
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();

    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(2)').click();

    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();








    });
});