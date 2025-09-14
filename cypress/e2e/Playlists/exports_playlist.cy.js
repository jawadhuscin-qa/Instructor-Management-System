describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login();
  });

  it('playlist_room_scan', () => {
    //  Test logic
    cy.get('#dropdown-basic-button > div > .button').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(2)').click();
    cy.get('#dropdown-basic-button > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
  });
});
