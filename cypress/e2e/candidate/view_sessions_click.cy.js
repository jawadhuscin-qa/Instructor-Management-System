describe('candidate Testcases', () => {

  beforeEach(() => {
    cy.login();
  });

  it('candidate - view session navigation', () => {
    // Navigate to the candidate's row in the table
    cy.get('tbody > :nth-child(3) > :nth-child(2)').click();

    // Click on the button to view session
    cy.get('a > .button').click();
  });
});
