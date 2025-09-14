describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login();
  });

  it('playlist_room_scan', () => {
    // navigation on playlist module
    cy.get('[href="/playlists"] > span').click();

    cy.get('.column-visibility-container').click();

    // Click checkboxes with tabindex 0 to 10
    for (let i = 0; i <= 10; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }

    // Click some checkboxes again (1 to 10)
    for (let i = 1; i <= 10; i++) {
      cy.get(`[tabindex="${i}"] > .item-checkbox`).click();
    }

    cy.get('#column-visibility-dropdown > .dropdown-menu > .list-unstyled > .btn-container > .orange-hollow-btn')
      .click();

    cy.wait(2000);

    cy.get('[href="/playlists"] > span').click();

    cy.get('button.orange-filled-btn', { timeout: 10000 })
      .should('be.visible')
      .click();
  });
});
