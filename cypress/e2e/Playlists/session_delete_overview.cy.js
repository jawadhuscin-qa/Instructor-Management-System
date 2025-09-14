describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login(); // ✅ login before each test
  });

  it('playlist_room_scan', () => {
    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();

    // Open first playlist
    cy.get('.table-body > :nth-child(1) > :nth-child(1)').click();

    // Try deleting session → cancel
    cy.get('[data-rbd-draggable-id="2030"] > .delete-icons > img').click();
    cy.get('.modal-btns > .orange-hollow-btn').click();

    // Try deleting session → confirm
    cy.get('[data-rbd-draggable-id="2030"] > .delete-icons > img').click();
    cy.get('.modal-btns > .orange-filled-btn').click();
    cy.log('session deleted');
  });
});
