describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login();
  });

  it('playlist_room_scan', () => {
    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();

    // Select the 4th row from the table
    cy.get('.table-body > :nth-child(4) > :nth-child(1)').click();

    // Open action dropdown
    cy.get(':nth-child(4) > div > .button').click();

    // Select options from dropdown
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(2)').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(3)').click();
  });
});
