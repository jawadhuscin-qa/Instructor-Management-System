describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login();
  });

  it('playlist_room_scan', () => {
    // Go to playlists
    cy.get('[href="/playlists"] > span').click();

    // Select a row from table
    cy.get('.table-body > :nth-child(4) > :nth-child(1)').click();

    // Open column visibility settings
    cy.get('.column-visibility-container').click();

    //  Select all columns (0–41)
    for (let i = 0; i <= 41; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }

    // Deselect all columns except first one
    for (let i = 1; i <= 41; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }

    // Apply & close
    cy.get('.btn-container > .orange-hollow-btn').click();

    // Reopen column visibility to confirm
    cy.get('.column-visibility-container').click();
  });
});
