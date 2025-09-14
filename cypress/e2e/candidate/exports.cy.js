describe('candidate Testcases', () => {

  beforeEach(() => {
    cy.login(); 
  });

  it('candidate export', () => {
    // Exports
    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(1)').click(); // xlsx

    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(2)').click(); // csv

    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(3)').click(); // pdf
  });
});
