describe('invitations_module Testcases', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('invitations_column_visibility', () => {

    cy.get('[href="/invitations"] > span').click();
    cy.wait(6000);

    cy.get(':nth-child(2) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(2) > :nth-child(2) > .flex').click();
    cy.log('user is navigated');



    });
});