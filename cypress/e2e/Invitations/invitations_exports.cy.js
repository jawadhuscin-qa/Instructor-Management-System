describe('invitations_module Testcases', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('invitations_column_visibility', () => {

    cy.get('[href="/invitations"] > span').click();
    cy.wait(6000);

    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)')

    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(2)')

    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)')

    });
});